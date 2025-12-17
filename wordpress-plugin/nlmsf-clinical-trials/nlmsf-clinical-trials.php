<?php
/**
 * Plugin Name: NLMSF Clinical Trials
 * Plugin URI: https://nlmsf.org
 * Description: Display current leiomyosarcoma clinical trials from ClinicalTrials.gov with NLMSF styling
 * Version: 1.0.0
 * Author: NLMSF
 * License: GPL v2 or later
 * Text Domain: nlmsf-clinical-trials
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('NLMSF_CT_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NLMSF_CT_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('NLMSF_CT_VERSION', '1.0.0');

class NLMSF_Clinical_Trials {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }
    
    public function init() {
        // Register shortcode
        add_shortcode('nlmsf_clinical_trials', array($this, 'clinical_trials_shortcode'));
        
        // Add AJAX handlers for API calls
        add_action('wp_ajax_fetch_clinical_trials', array($this, 'fetch_clinical_trials_ajax'));
        add_action('wp_ajax_nopriv_fetch_clinical_trials', array($this, 'fetch_clinical_trials_ajax'));
    }
    
    public function enqueue_scripts() {
        // Only enqueue on pages that use the shortcode
        global $post;
        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'nlmsf_clinical_trials')) {
            wp_enqueue_style(
                'nlmsf-clinical-trials-style',
                NLMSF_CT_PLUGIN_URL . 'assets/style.css',
                array(),
                NLMSF_CT_VERSION
            );
            
            wp_enqueue_script(
                'nlmsf-clinical-trials-script',
                NLMSF_CT_PLUGIN_URL . 'assets/script.js',
                array('jquery'),
                NLMSF_CT_VERSION,
                true
            );
            
            // Localize script for AJAX
            wp_localize_script('nlmsf-clinical-trials-script', 'nlmsf_ct_ajax', array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('nlmsf_ct_nonce')
            ));
        }
    }
    
    public function clinical_trials_shortcode($atts) {
        $atts = shortcode_atts(array(
            'count' => 3,
            'show_help' => 'true'
        ), $atts);
        
        ob_start();
        ?>
        <div class="nlmsf-clinical-trials-section">
            <div class="nlmsf-section-header">
                <h2 class="nlmsf-section-title">Clinical Trials</h2>
                <a href="https://clinicaltrials.gov/search?cond=leiomyosarcoma" target="_blank" rel="noopener noreferrer" class="nlmsf-view-all-link">View All →</a>
            </div>
            
            <!-- Loading state -->
            <div class="nlmsf-loading-state" id="nlmsf-loading-state">
                <div class="nlmsf-loading-spinner"></div>
                <p>Loading current clinical trials...</p>
            </div>
            
            <!-- Trials will be populated by JavaScript -->
            <div class="nlmsf-trials-container" id="nlmsf-trials-container" data-count="<?php echo esc_attr($atts['count']); ?>">
                <!-- Dynamic content will be inserted here -->
            </div>
            
           
        </div>
        <?php
        return ob_get_clean();
    }
    
    public function fetch_clinical_trials_ajax() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'nlmsf_ct_nonce')) {
            wp_die('Security check failed');
        }
        
        $count = isset($_POST['count']) ? intval($_POST['count']) : 3;
        $result = $this->fetch_trials_from_api($count);
        
        if (isset($result['error'])) {
            wp_send_json_error($result);
        }
        
        // Only live data reaches here
        wp_send_json_success(array(
            'trials' => $result['trials'],
            'source' => 'live',
            'apiUrl' => $result['apiUrl']
        ));
    }
    
    private function fetch_trials_from_api($count = 3) {
        // Build API URL (v2) minimal parameters to avoid 400s
        $api_url = 'https://clinicaltrials.gov/api/v2/studies?' . http_build_query(array(
            'query.term' => 'leiomyosarcoma',
            'filter.overallStatus' => 'RECRUITING', // enum values are typically uppercase in v2
            'pageSize' => 10
        ));
        
        // Make API request
        $response = wp_remote_get($api_url, array(
            'timeout' => 30,
            'headers' => array(
                'User-Agent' => 'NLMSF Clinical Trials Plugin v' . NLMSF_CT_VERSION,
                'Accept' => 'application/json'
            )
        ));
        
        if (is_wp_error($response)) {
            error_log('[NLMSF CT] API request error: ' . $response->get_error_message());
            return array(
                'error' => $response->get_error_message(),
                'apiUrl' => $api_url
            );
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        if (!$data || !isset($data['studies'])) {
            error_log('[NLMSF CT] Malformed API response or missing studies key. Body snippet: ' . substr($body, 0, 300));
            return array(
                'error' => 'Malformed API response',
                'apiUrl' => $api_url
            );
        }
        
        $trials = $this->process_trials_data($data['studies'], $count);
        return array(
            'trials' => $trials,
            'apiUrl' => $api_url
        );
    }
    
    private function process_trials_data($studies, $count) {
        $trials = array();
        $processed = 0;
        
        foreach ($studies as $study) {
            if ($processed >= $count) break;
            
            $protocol = isset($study['protocolSection']) ? $study['protocolSection'] : array();
            $identification = isset($protocol['identificationModule']) ? $protocol['identificationModule'] : array();
            $status = isset($protocol['statusModule']) ? $protocol['statusModule'] : array();
            $design = isset($protocol['designModule']) ? $protocol['designModule'] : array();
            $contacts = isset($protocol['contactsLocationsModule']) ? $protocol['contactsLocationsModule'] : array();
            $description = isset($protocol['descriptionModule']) ? $protocol['descriptionModule'] : array();
            
            // Extract location information
            $locations = isset($contacts['locations']) ? $contacts['locations'] : array();
            $location_str = $this->format_location($locations);
            $site_cities = $this->extract_cities($locations);
            $site_preview = $this->format_cities_preview($site_cities, 3);

            // Optional: If no location resolved, try GPT fallback using the public study URL
            $nctId = isset($identification['nctId']) ? $identification['nctId'] : '';
            $detailsUrl = $nctId ? ('https://clinicaltrials.gov/study/' . $nctId) : '';
            if (($site_preview['total'] === 0 || $location_str === 'Location not specified') && $nctId && $detailsUrl) {
                $gptLoc = $this->gpt_location_from_url($nctId, $detailsUrl);
                if (is_array($gptLoc) && (!empty($gptLoc['city']) || !empty($gptLoc['country']))) {
                    $city = isset($gptLoc['city']) ? $gptLoc['city'] : '';
                    $state = isset($gptLoc['state']) ? $gptLoc['state'] : '';
                    $country = isset($gptLoc['country']) ? $gptLoc['country'] : '';
                    // Compose human-readable location string
                    if ($country && $country !== 'United States') {
                        $location_str = $state ? ($city . ', ' . $state . ', ' . $country) : (($city ? ($city . ', ') : '') . $country);
                    } else {
                        $location_str = $state ? ($city . ', ' . $state) : ($city ?: 'Location not specified');
                    }
                    // Derive siteCities from GPT result (single entry)
                    $label = $country && $country !== 'United States'
                        ? ($state ? ($city . ', ' . $state . ', ' . $country) : ($city . ', ' . $country))
                        : ($state ? ($city . ', ' . $state) : $city);
                    $site_cities = $label ? array($label) : array();
                    $site_preview = $this->format_cities_preview($site_cities, 3);
                }
            }
            
            // Extract phase information
            $phases = isset($design['phases']) ? $design['phases'] : array();
            $phase_str = !empty($phases) ? implode('/', $phases) : 'Not Specified';
            
            // Extract brief description
            $brief_summary = isset($description['briefSummary']) ? $description['briefSummary'] : '';
            $short_description = $this->truncate_text($brief_summary, 100);
            
            $trials[] = array(
                'id' => isset($identification['nctId']) ? $identification['nctId'] : 'Unknown',
                'title' => isset($identification['briefTitle']) ? $identification['briefTitle'] : 'Untitled Study',
                'location' => $location_str,
                'siteCities' => $site_cities,
                'siteCitiesPreview' => $site_preview['preview'],
                'siteCount' => $site_preview['total'],
                'phase' => $phase_str,
                'status' => isset($status['overallStatus']) ? $status['overallStatus'] : 'Unknown',
                'sponsor' => isset($identification['organization']['fullName']) ? $identification['organization']['fullName'] : 'Unknown Sponsor',
                'briefDescription' => $short_description,
                'detailsUrl' => isset($identification['nctId']) ? 'https://clinicaltrials.gov/study/' . $identification['nctId'] : '#'
            );
            
            $processed++;
        }
        
        return $trials;
    }

    /**
     * Retrieve OpenAI API key from constant, env var, or option
     */
    private function get_openai_api_key() {
        if (defined('NLMSF_OPENAI_API_KEY') && NLMSF_OPENAI_API_KEY) return NLMSF_OPENAI_API_KEY;
        $env = getenv('NLMSF_OPENAI_API_KEY');
        if ($env) return $env;
        $opt = get_option('nlmsf_openai_api_key');
        return $opt ? $opt : '';
    }

    /**
     * Use OpenAI to extract {city, state, country} from the study details page when API data is missing.
     * Caches results per NCT ID for 7 days.
     */
    private function gpt_location_from_url($nctId, $url) {
        try {
            $cache_key = 'nlmsf_ct_loc_' . $nctId;
            $cached = get_transient($cache_key);
            if ($cached !== false) return $cached;

            $api_key = $this->get_openai_api_key();
            if (!$api_key) return null; // no key configured

            // Fetch page content
            $resp = wp_remote_get($url, array(
                'timeout' => 30,
                'headers' => array('User-Agent' => 'NLMSF Clinical Trials Plugin v' . NLMSF_CT_VERSION)
            ));
            if (is_wp_error($resp)) return null;
            $html = wp_remote_retrieve_body($resp);
            if (!$html) return null;

            // Reduce content: strip tags to text and truncate to a safe length
            $text = wp_strip_all_tags($html);
            $text = preg_replace('/\s+/', ' ', $text);
            $text = trim($text);
            if (strlen($text) > 12000) {
                // Try to focus on sections likely containing locations
                if (preg_match('/Locations?(.{0,6000})/i', $text, $m)) {
                    $text = $m[0];
                } else {
                    $text = substr($text, 0, 12000);
                }
            }

            // Build prompt and call OpenAI
            $payload = array(
                'model' => 'gpt-4o-mini',
                'response_format' => array('type' => 'json_object'),
                'messages' => array(
                    array('role' => 'system', 'content' => 'You extract site location information from clinical trial pages. Return strict JSON with keys: city (string or empty), state (string or empty), country (string or empty).'),
                    array('role' => 'user', 'content' => 'Study: ' . $nctId . "\nURL: " . $url . "\n\nFrom the page content below, extract the primary recruiting site city and state for US studies, or the country if outside the United States. If multiple sites, choose the first listed recruiting location. Return only JSON.\n\nCONTENT:\n" . $text)
                )
            );

            $ai_resp = wp_remote_post('https://api.openai.com/v1/chat/completions', array(
                'timeout' => 45,
                'headers' => array(
                    'Authorization' => 'Bearer ' . $api_key,
                    'Content-Type' => 'application/json'
                ),
                'body' => wp_json_encode($payload),
            ));

            if (is_wp_error($ai_resp)) return null;
            $ai_body = wp_remote_retrieve_body($ai_resp);
            $ai_data = json_decode($ai_body, true);
            if (!isset($ai_data['choices'][0]['message']['content'])) return null;

            $json = $ai_data['choices'][0]['message']['content'];
            $parsed = json_decode($json, true);
            if (!is_array($parsed)) return null;

            // Basic normalization
            $result = array(
                'city' => isset($parsed['city']) ? trim((string)$parsed['city']) : '',
                'state' => isset($parsed['state']) ? trim((string)$parsed['state']) : '',
                'country' => isset($parsed['country']) ? trim((string)$parsed['country']) : ''
            );

            // Cache for 7 days
            set_transient($cache_key, $result, 7 * DAY_IN_SECONDS);
            return $result;
        } catch (Exception $e) {
            error_log('[NLMSF CT] GPT location fallback error for ' . $nctId . ': ' . $e->getMessage());
            return null;
        }
    }
    
    private function format_location($locations) {
        if (empty($locations)) return 'Location not specified';
        
        $location = $locations[0];
        $facility = isset($location['facility']) ? $location['facility'] : array();
        
        $name = isset($facility['name']) ? $facility['name'] : 'Unknown Facility';
        $city = isset($facility['city']) ? $facility['city'] : '';
        $state = isset($facility['state']) ? $facility['state'] : '';
        $country = isset($facility['country']) ? $facility['country'] : '';
        
        $location_parts = array($name);
        
        if ($city && $state) {
            $location_parts[] = $city . ', ' . $state;
        } elseif ($city) {
            $location_parts[] = $city;
        }
        
        if ($country && $country !== 'United States') {
            $location_parts[] = $country;
        }
        
        return implode(', ', $location_parts);
    }

    /**
     * Extract a de-duplicated list of site cities from locations
     * Returns items like "Houston, TX" (US) or "Toronto, Canada" (non-US)
     */
    private function extract_cities($locations) {
        if (empty($locations)) return array();
        $cities = array();
        foreach ($locations as $loc) {
            $facility = isset($loc['facility']) ? $loc['facility'] : array();
            $city = isset($facility['city']) ? trim($facility['city']) : '';
            $state = isset($facility['state']) ? trim($facility['state']) : '';
            $country = isset($facility['country']) ? trim($facility['country']) : '';

            if (!$city) continue;

            if ($country && $country !== 'United States') {
                $label = $state ? ($city . ', ' . $state . ', ' . $country) : ($city . ', ' . $country);
            } else {
                $label = $state ? ($city . ', ' . $state) : $city;
            }

            $cities[$label] = true; // use associative keys for dedupe
        }
        return array_keys($cities);
    }

    /**
     * Format a preview string for site cities, e.g., "Houston, TX • New York, NY (+2 more)"
     */
    private function format_cities_preview($cities, $max = 3) {
        $total = is_array($cities) ? count($cities) : 0;
        if ($total === 0) {
            return array('preview' => 'Location not specified', 'total' => 0);
        }
        $shown = array_slice($cities, 0, $max);
        $remaining = max(0, $total - count($shown));
        $preview = implode(' • ', $shown);
        if ($remaining > 0) {
            $preview .= ' (+' . $remaining . ' more)';
        }
        return array('preview' => $preview, 'total' => $total);
    }
    
    private function truncate_text($text, $max_length) {
        if (empty($text)) return 'No description available';
        
        // Remove HTML tags and extra whitespace
        $clean_text = wp_strip_all_tags($text);
        $clean_text = preg_replace('/\s+/', ' ', $clean_text);
        $clean_text = trim($clean_text);
        
        if (strlen($clean_text) <= $max_length) return $clean_text;
        
        return substr($clean_text, 0, $max_length) . '...';
    }
    
    private function get_fallback_data($count) {
        $fallback = array(
            array(
                'id' => 'NCT05123456',
                'title' => 'Phase II Study of Trabectedin in Advanced Leiomyosarcoma',
                'location' => 'MD Anderson Cancer Center, Houston, TX',
                'phase' => 'Phase II',
                'status' => 'Recruiting',
                'sponsor' => 'MD Anderson Cancer Center',
                'briefDescription' => 'Testing effectiveness of trabectedin in patients with advanced leiomyosarcoma',
                'detailsUrl' => 'https://clinicaltrials.gov/study/NCT05123456'
            ),
            array(
                'id' => 'NCT05234567',
                'title' => 'Immunotherapy Combination for Soft Tissue Sarcomas',
                'location' => 'Memorial Sloan Kettering, New York, NY',
                'phase' => 'Phase I/II',
                'status' => 'Recruiting',
                'sponsor' => 'Memorial Sloan Kettering Cancer Center',
                'briefDescription' => 'Evaluating combination immunotherapy approach for LMS patients',
                'detailsUrl' => 'https://clinicaltrials.gov/study/NCT05234567'
            ),
            array(
                'id' => 'NCT05345678',
                'title' => 'Targeted Therapy for LMS with Specific Mutations',
                'location' => 'Dana-Farber Cancer Institute, Boston, MA',
                'phase' => 'Phase II',
                'status' => 'Recruiting',
                'sponsor' => 'Dana-Farber Cancer Institute',
                'briefDescription' => 'Precision medicine approach for LMS patients with specific genetic markers',
                'detailsUrl' => 'https://clinicaltrials.gov/study/NCT05345678'
            )
        );
        
        return array_slice($fallback, 0, $count);
    }
    
    public function activate() {
        // Plugin activation code
        flush_rewrite_rules();
    }
    
    public function deactivate() {
        // Plugin deactivation code
        flush_rewrite_rules();
    }
}

// Initialize the plugin
new NLMSF_Clinical_Trials();
?>
