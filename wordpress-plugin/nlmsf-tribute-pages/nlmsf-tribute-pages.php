<?php
/**
 * Plugin Name: NLMSF Tribute Pages Manager
 * Description: Custom tribute pages management system for NLMSF with Elementor integration
 * Version: 1.0.0
 * Author: NLMSF
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('NLMSF_TRIBUTE_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NLMSF_TRIBUTE_PLUGIN_PATH', plugin_dir_path(__FILE__));

class NLMSF_Tribute_Pages_Manager {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        register_activation_hook(__FILE__, array($this, 'create_tribute_tables'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_ajax_nlmsf_tribute_action', array($this, 'handle_ajax_request'));
        add_action('wp_ajax_nopriv_nlmsf_tribute_action', array($this, 'handle_ajax_request'));
        add_action('wp_ajax_nlmsf_upload_image', array($this, 'handle_image_upload'));
        
        // Debug: Log that our AJAX handlers are registered
        add_action('admin_init', array($this, 'debug_ajax_handlers'));
    }
    
    public function debug_ajax_handlers() {
        if (current_user_can('manage_options')) {
            error_log('NLMSF Tribute Plugin: AJAX handlers registered - nlmsf_tribute_action, nlmsf_upload_image');
        }
    }
    
    public function init() {
        // Ensure schema is up to date
        $this->maybe_alter_schema();
        
        // Register shortcodes
        add_shortcode('nlmsf_tribute_directory', array($this, 'tribute_directory_shortcode'));
        add_shortcode('nlmsf_tribute_page', array($this, 'tribute_page_shortcode'));
    }
    
    public function create_tribute_tables() {
        global $wpdb;
        
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        $comments_table = $wpdb->prefix . 'nlmsf_tribute_comments';
        
        $charset_collate = $wpdb->get_charset_collate();
        
        // Create tributes table
        $sql_tributes = "CREATE TABLE $tribute_table (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            slug varchar(255) NOT NULL UNIQUE,
            biography text NOT NULL,
            image_url varchar(500),
            display_order int DEFAULT 0,
            is_published tinyint(1) DEFAULT 1,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY slug_index (slug)
        ) $charset_collate;";
        
        // Create donors table
        $sql_donors = "CREATE TABLE $donors_table (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            tribute_id mediumint(9) NOT NULL,
            donor_name varchar(255) NOT NULL,
            donation_amount decimal(10,2),
            donation_date date,
            is_anonymous tinyint(1) DEFAULT 0,
            message text,
            display_order int DEFAULT 0,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY tribute_id_index (tribute_id)
        ) $charset_collate;";
        
        // Create comments table
        $sql_comments = "CREATE TABLE $comments_table (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            tribute_id mediumint(9) NOT NULL,
            commenter_name varchar(255) NOT NULL,
            commenter_email varchar(255),
            comment_text text NOT NULL,
            is_approved tinyint(1) DEFAULT 1,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY tribute_id_index (tribute_id),
            KEY created_at_index (created_at)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql_tributes);
        dbDelta($sql_donors);
        dbDelta($sql_comments);
    }

    private function maybe_alter_schema() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        // Check if table exists
        if ($wpdb->get_var("SHOW TABLES LIKE '$tribute_table'") != $tribute_table) {
            return;
        }
        
        $columns = $wpdb->get_col("SHOW COLUMNS FROM $tribute_table", 0);
        if (!$columns) { return; }

        // Add any new columns if needed for future updates
        $alterations = array();
        
        if (!empty($alterations)) {
            $sql = "ALTER TABLE $tribute_table " . implode(', ', $alterations);
            $wpdb->query($sql);
        }
    }
    
    public function enqueue_scripts() {
        $js_path = NLMSF_TRIBUTE_PLUGIN_PATH . 'assets/nlmsf-tribute-pages.js';
        $css_path = NLMSF_TRIBUTE_PLUGIN_PATH . 'assets/nlmsf-tribute-pages.css';
        $js_ver = file_exists($js_path) ? filemtime($js_path) : '1.0.0';
        $css_ver = file_exists($css_path) ? filemtime($css_path) : '1.0.0';

        wp_enqueue_script('nlmsf-tribute-js', NLMSF_TRIBUTE_PLUGIN_URL . 'assets/nlmsf-tribute-pages.js', array('jquery'), $js_ver, true);
        wp_enqueue_style('nlmsf-tribute-css', NLMSF_TRIBUTE_PLUGIN_URL . 'assets/nlmsf-tribute-pages.css', array(), $css_ver);
        
        // Localize script for AJAX
        wp_localize_script('nlmsf-tribute-js', 'nlmsf_tribute_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nlmsf_tribute_nonce'),
            'upload_url' => admin_url('async-upload.php')
        ));
    }
    
    public function handle_ajax_request() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'nlmsf_tribute_nonce')) {
            wp_die('Security check failed');
        }
        
        $action = sanitize_text_field($_POST['tribute_action']);
        
        switch ($action) {
            case 'get_tributes':
                $this->get_tributes();
                break;
            case 'get_tribute':
                $this->get_tribute();
                break;
            case 'add_tribute':
                $this->add_tribute();
                break;
            case 'update_tribute':
                $this->update_tribute();
                break;
            case 'delete_tribute':
                $this->delete_tribute();
                break;
            case 'toggle_published':
                $this->toggle_published();
                break;
            case 'get_donors':
                $this->get_donors();
                break;
            case 'add_donor':
                $this->add_donor();
                break;
            case 'update_donor':
                $this->update_donor();
                break;
            case 'delete_donor':
                $this->delete_donor();
                break;
            case 'get_shortcode':
                $this->get_shortcode();
                break;
            case 'get_comments':
                $this->get_comments();
                break;
            case 'add_comment':
                $this->add_comment();
                break;
            default:
                wp_die('Invalid action');
        }
    }
    
    private function get_tributes() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        $published_only = (isset($_POST['published_only']) && $_POST['published_only'] === '1');
        
        $where_clause = $published_only ? "WHERE is_published = 1" : "";
        $order_clause = "ORDER BY display_order ASC, name ASC";
        
        $tributes = $wpdb->get_results("SELECT * FROM $tribute_table $where_clause $order_clause");
        
        wp_send_json_success($tributes);
    }
    
    private function get_tribute() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        $id = intval($_POST['id']);
        
        $tribute = $wpdb->get_row($wpdb->prepare("SELECT * FROM $tribute_table WHERE id = %d", $id));
        
        if ($tribute) {
            wp_send_json_success($tribute);
        } else {
            wp_send_json_error('Tribute not found');
        }
    }
    
    private function add_tribute() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        $name = sanitize_text_field($_POST['name']);
        $slug = sanitize_title($_POST['slug'] ?: $name);
        $biography = wp_kses_post($_POST['biography']);
        $image_url = esc_url_raw($_POST['image_url']);
        $is_published = isset($_POST['is_published']) ? 1 : 0;
        
        // Ensure slug is unique
        $original_slug = $slug;
        $counter = 1;
        while ($wpdb->get_var($wpdb->prepare("SELECT id FROM $tribute_table WHERE slug = %s", $slug))) {
            $slug = $original_slug . '-' . $counter;
            $counter++;
        }
        
        $result = $wpdb->insert(
            $tribute_table,
            array(
                'name' => $name,
                'slug' => $slug,
                'biography' => $biography,
                'image_url' => $image_url,
                'is_published' => $is_published
            ),
            array('%s', '%s', '%s', '%s', '%d')
        );
        
        if ($result !== false) {
            wp_send_json_success(array('message' => 'Tribute page created successfully', 'id' => $wpdb->insert_id, 'slug' => $slug));
        } else {
            wp_send_json_error('Failed to create tribute page');
        }
    }
    
    private function update_tribute() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        $id = intval($_POST['id']);
        $name = sanitize_text_field($_POST['name']);
        $slug = sanitize_title($_POST['slug']);
        $biography = wp_kses_post($_POST['biography']);
        $image_url = esc_url_raw($_POST['image_url']);
        $is_published = isset($_POST['is_published']) ? 1 : 0;
        
        // Ensure slug is unique (excluding current tribute)
        $existing = $wpdb->get_var($wpdb->prepare("SELECT id FROM $tribute_table WHERE slug = %s AND id != %d", $slug, $id));
        if ($existing) {
            wp_send_json_error('Slug already exists');
            return;
        }
        
        $result = $wpdb->update(
            $tribute_table,
            array(
                'name' => $name,
                'slug' => $slug,
                'biography' => $biography,
                'image_url' => $image_url,
                'is_published' => $is_published
            ),
            array('id' => $id),
            array('%s', '%s', '%s', '%s', '%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Tribute page updated successfully');
        } else {
            wp_send_json_error('Failed to update tribute page');
        }
    }
    
    private function delete_tribute() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        
        $id = intval($_POST['id']);
        
        // Delete all donors for this tribute first
        $wpdb->delete($donors_table, array('tribute_id' => $id), array('%d'));
        
        // Delete the tribute
        $result = $wpdb->delete($tribute_table, array('id' => $id), array('%d'));
        
        if ($result !== false) {
            wp_send_json_success('Tribute page deleted successfully');
        } else {
            wp_send_json_error('Failed to delete tribute page');
        }
    }
    
    private function toggle_published() {
        global $wpdb;
        $tribute_table = $wpdb->prefix . 'nlmsf_tributes';
        
        $id = intval($_POST['id']);
        $is_published = intval($_POST['is_published']);
        
        $result = $wpdb->update(
            $tribute_table,
            array('is_published' => $is_published),
            array('id' => $id),
            array('%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Publication status updated');
        } else {
            wp_send_json_error('Failed to update publication status');
        }
    }
    
    private function get_donors() {
        global $wpdb;
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        
        $tribute_id = intval($_POST['tribute_id']);
        
        $donors = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $donors_table WHERE tribute_id = %d ORDER BY display_order ASC, donation_date DESC",
            $tribute_id
        ));
        
        // Debug: Log retrieved donors
        error_log('NLMSF Get Donors - tribute_id: ' . $tribute_id);
        error_log('NLMSF Get Donors - raw data: ' . print_r($donors, true));
        
        wp_send_json_success($donors);
    }
    
    private function add_donor() {
        global $wpdb;
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        
        // Debug: Log received POST data
        error_log('NLMSF Add Donor - POST data: ' . print_r($_POST, true));
        
        $tribute_id = intval($_POST['tribute_id']);
        $donor_name = sanitize_text_field($_POST['donor_name']);
        $donation_amount = isset($_POST['donation_amount']) ? floatval($_POST['donation_amount']) : null;
        $donation_date = sanitize_text_field($_POST['donation_date']);
        
        // Validate and ensure date format is YYYY-MM-DD
        if ($donation_date && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $donation_date)) {
            error_log('NLMSF Add Donor - Invalid date format: ' . $donation_date);
            $donation_date = null; // Set to null if invalid format
        }
        
        // Debug: Check is_anonymous value specifically
        $is_anonymous_raw = isset($_POST['is_anonymous']) ? $_POST['is_anonymous'] : 'not set';
        error_log('NLMSF Add Donor - is_anonymous raw value: ' . $is_anonymous_raw);
        
        $is_anonymous = isset($_POST['is_anonymous']) ? intval($_POST['is_anonymous']) : 0;
        $message = sanitize_textarea_field($_POST['message']);
        
        error_log('NLMSF Add Donor - Processed values: tribute_id=' . $tribute_id . ', donor_name=' . $donor_name . ', is_anonymous=' . $is_anonymous);
        
        $result = $wpdb->insert(
            $donors_table,
            array(
                'tribute_id' => $tribute_id,
                'donor_name' => $donor_name,
                'donation_amount' => $donation_amount,
                'donation_date' => $donation_date,
                'is_anonymous' => $is_anonymous,
                'message' => $message
            ),
            array('%d', '%s', '%f', '%s', '%d', '%s')
        );
        
        if ($result !== false) {
            error_log('NLMSF Add Donor - Success: ID ' . $wpdb->insert_id);
            wp_send_json_success(array('message' => 'Donor added successfully', 'id' => $wpdb->insert_id));
        } else {
            error_log('NLMSF Add Donor - Failed: ' . $wpdb->last_error);
            wp_send_json_error('Failed to add donor: ' . $wpdb->last_error);
        }
    }
    
    private function update_donor() {
        global $wpdb;
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        
        $id = intval($_POST['id']);
        $donor_name = sanitize_text_field($_POST['donor_name']);
        $donation_amount = isset($_POST['donation_amount']) ? floatval($_POST['donation_amount']) : null;
        $donation_date = sanitize_text_field($_POST['donation_date']);
        
        // Validate and ensure date format is YYYY-MM-DD
        if ($donation_date && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $donation_date)) {
            $donation_date = null; // Set to null if invalid format
        }
        
        $is_anonymous = isset($_POST['is_anonymous']) ? 1 : 0;
        $message = sanitize_textarea_field($_POST['message']);
        
        $result = $wpdb->update(
            $donors_table,
            array(
                'donor_name' => $donor_name,
                'donation_amount' => $donation_amount,
                'donation_date' => $donation_date,
                'is_anonymous' => $is_anonymous,
                'message' => $message
            ),
            array('id' => $id),
            array('%s', '%f', '%s', '%d', '%s'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Donor updated successfully');
        } else {
            wp_send_json_error('Failed to update donor');
        }
    }
    
    private function delete_donor() {
        global $wpdb;
        $donors_table = $wpdb->prefix . 'nlmsf_tribute_donors';
        
        $id = intval($_POST['id']);
        
        $result = $wpdb->delete($donors_table, array('id' => $id), array('%d'));
        
        if ($result !== false) {
            wp_send_json_success('Donor deleted successfully');
        } else {
            wp_send_json_error('Failed to delete donor');
        }
    }
    
    // Custom image upload handler
    public function handle_image_upload() {
        // Set proper headers for JSON response
        header('Content-Type: application/json');
        
        try {
            // Log the request for debugging
            error_log('NLMSF Upload: Request received with POST data: ' . print_r($_POST, true));
            error_log('NLMSF Upload: Files data: ' . print_r($_FILES, true));
            
            // Verify nonce
            if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'nlmsf_tribute_nonce')) {
                error_log('NLMSF Upload: Nonce verification failed');
                wp_send_json_error('Security check failed');
                return;
            }
            
            // Check if user can upload files
            if (!current_user_can('upload_files')) {
                error_log('NLMSF Upload: User does not have upload_files capability');
                wp_send_json_error('You do not have permission to upload files');
                return;
            }
            
            // Check if file was uploaded
            if (!isset($_FILES['file']) || $_FILES['file']['error'] === UPLOAD_ERR_NO_FILE) {
                error_log('NLMSF Upload: No file uploaded');
                wp_send_json_error('No file uploaded');
                return;
            }
            
            // Include WordPress file upload handler
            if (!function_exists('wp_handle_upload')) {
                require_once(ABSPATH . 'wp-admin/includes/file.php');
            }
            
            if (!function_exists('wp_generate_attachment_metadata')) {
                require_once(ABSPATH . 'wp-admin/includes/image.php');
            }
            
            // Handle the upload
            $uploadedfile = $_FILES['file'];
            
            // Check for upload errors
            if ($uploadedfile['error'] !== UPLOAD_ERR_OK) {
                $error_messages = array(
                    UPLOAD_ERR_INI_SIZE => 'File is too large (server limit)',
                    UPLOAD_ERR_FORM_SIZE => 'File is too large (form limit)',
                    UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
                    UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
                    UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
                    UPLOAD_ERR_EXTENSION => 'File upload stopped by extension'
                );
                
                $error_msg = isset($error_messages[$uploadedfile['error']]) ? 
                           $error_messages[$uploadedfile['error']] : 
                           'Unknown upload error: ' . $uploadedfile['error'];
                
                error_log('NLMSF Upload: Upload error: ' . $error_msg);
                wp_send_json_error($error_msg);
                return;
            }
            
            // Validate file type
            $allowed_types = array('jpg', 'jpeg', 'png', 'gif', 'webp');
            $file_type = wp_check_filetype($uploadedfile['name']);
            
            if (!in_array(strtolower($file_type['ext']), $allowed_types)) {
                error_log('NLMSF Upload: Invalid file type: ' . $file_type['ext']);
                wp_send_json_error('Invalid file type. Only JPG, PNG, GIF, and WebP are allowed.');
                return;
            }
            
            // Handle the upload
            $upload_overrides = array(
                'test_form' => false,
                'mimes' => array(
                    'jpg|jpeg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                    'webp' => 'image/webp'
                )
            );
            
            $movefile = wp_handle_upload($uploadedfile, $upload_overrides);
            
            if ($movefile && !isset($movefile['error'])) {
                // Create attachment post
                $attachment = array(
                    'post_mime_type' => $movefile['type'],
                    'post_title' => sanitize_file_name(basename($movefile['file'])),
                    'post_content' => '',
                    'post_status' => 'inherit'
                );
                
                $attach_id = wp_insert_attachment($attachment, $movefile['file']);
                
                if ($attach_id) {
                    // Generate attachment metadata
                    $attach_data = wp_generate_attachment_metadata($attach_id, $movefile['file']);
                    wp_update_attachment_metadata($attach_id, $attach_data);
                    
                    error_log('NLMSF Upload: Success - ID: ' . $attach_id . ', URL: ' . $movefile['url']);
                    
                    wp_send_json_success(array(
                        'url' => $movefile['url'],
                        'id' => $attach_id,
                        'file' => $movefile['file']
                    ));
                } else {
                    error_log('NLMSF Upload: Failed to create attachment');
                    wp_send_json_error('Failed to create attachment');
                }
            } else {
                $error = isset($movefile['error']) ? $movefile['error'] : 'Unknown upload error';
                error_log('NLMSF Upload: wp_handle_upload failed: ' . $error);
                wp_send_json_error($error);
            }
            
        } catch (Exception $e) {
            error_log('NLMSF Upload: Exception: ' . $e->getMessage());
            wp_send_json_error('Upload failed: ' . $e->getMessage());
        }
    }
    
    // Handle shortcode processing
    private function get_shortcode() {
        $shortcode = sanitize_text_field($_POST['shortcode']);
        $shortcode_id = sanitize_text_field($_POST['id']);
        
        if (!$shortcode || !$shortcode_id) {
            wp_send_json_error('Missing shortcode parameters');
            return;
        }
        
        // Build the shortcode string
        $shortcode_string = "[{$shortcode} id={$shortcode_id}]";
        
        // Process the shortcode
        $output = do_shortcode($shortcode_string);
        
        // Check if the shortcode was processed (output should be different from input)
        if ($output === $shortcode_string) {
            // Shortcode wasn't processed, likely because the plugin isn't active
            error_log('NLMSF Shortcode: Shortcode not processed - ' . $shortcode_string);
            wp_send_json_error('Shortcode could not be processed. Please ensure the Give plugin is active.');
            return;
        }
        
        wp_send_json_success($output);
    }
    
    // Handle comments
    private function get_comments() {
        global $wpdb;
        $comments_table = $wpdb->prefix . 'nlmsf_tribute_comments';
        
        $tribute_id = intval($_POST['tribute_id']);
        
        if (!$tribute_id) {
            wp_send_json_error('Invalid tribute ID');
            return;
        }
        
        $comments = $wpdb->get_results($wpdb->prepare(
            "SELECT * FROM $comments_table 
             WHERE tribute_id = %d AND is_approved = 1 
             ORDER BY created_at DESC",
            $tribute_id
        ));
        
        wp_send_json_success($comments);
    }
    
    private function add_comment() {
        global $wpdb;
        $comments_table = $wpdb->prefix . 'nlmsf_tribute_comments';
        
        $tribute_id = intval($_POST['tribute_id']);
        $commenter_name = sanitize_text_field($_POST['commenter_name']);
        $commenter_email = sanitize_email($_POST['commenter_email']);
        $comment_text = sanitize_textarea_field($_POST['comment_text']);
        
        // Validate required fields
        if (!$tribute_id || !$commenter_name || !$comment_text) {
            wp_send_json_error('Please fill in all required fields');
            return;
        }
        
        // Validate comment length
        if (strlen($comment_text) > 1000) {
            wp_send_json_error('Comment is too long. Please keep it under 1000 characters.');
            return;
        }
        
        $result = $wpdb->insert(
            $comments_table,
            array(
                'tribute_id' => $tribute_id,
                'commenter_name' => $commenter_name,
                'commenter_email' => $commenter_email,
                'comment_text' => $comment_text,
                'is_approved' => 1
            ),
            array(
                '%d',
                '%s',
                '%s',
                '%s',
                '%d'
            )
        );
        
        if ($result === false) {
            error_log('NLMSF Comments: Failed to insert comment - ' . $wpdb->last_error);
            wp_send_json_error('Failed to save your comment. Please try again.');
            return;
        }
        
        wp_send_json_success('Comment saved successfully');
    }
    
    // Shortcode Functions
    public function tribute_directory_shortcode($atts) {
        $atts = shortcode_atts(array(
            'title' => 'Tribute Pages',
            'subtitle' => 'Honor and remember loved ones through our community tribute pages'
        ), $atts);
        
        // Enqueue scripts and styles
        wp_enqueue_script('nlmsf-tribute-pages');
        wp_enqueue_style('nlmsf-tribute-pages');
        
        // Get the directory HTML
        $directory_html = file_get_contents(NLMSF_TRIBUTE_PLUGIN_PATH . 'tribute-directory.html');
        
        // Replace placeholders if needed
        $directory_html = str_replace('{{title}}', $atts['title'], $directory_html);
        $directory_html = str_replace('{{subtitle}}', $atts['subtitle'], $directory_html);
        
        return $directory_html;
    }
    
    public function tribute_page_shortcode($atts) {
        $atts = shortcode_atts(array(
            'slug' => '',
            'id' => ''
        ), $atts);
        
        // Enqueue scripts and styles
        wp_enqueue_script('nlmsf-tribute-pages');
        wp_enqueue_style('nlmsf-tribute-pages');
        
        // Get the tribute page HTML
        $tribute_html = file_get_contents(NLMSF_TRIBUTE_PLUGIN_PATH . 'tribute-page-template.html');
        
        // Add data attributes for JavaScript
        $data_attrs = '';
        
        // Check for slug from URL parameter if not provided in shortcode
        $slug = $atts['slug'];
        if (empty($slug) && isset($_GET['slug'])) {
            $slug = sanitize_text_field($_GET['slug']);
        }
        
        if (!empty($slug)) {
            $data_attrs = 'data-tribute-slug="' . esc_attr($slug) . '"';
        } elseif (!empty($atts['id'])) {
            $data_attrs = 'data-tribute-id="' . esc_attr($atts['id']) . '"';
        }
        
        $tribute_html = str_replace('<div class="nlmsf-tribute-display">', 
            '<div class="nlmsf-tribute-display" ' . $data_attrs . '>', $tribute_html);
        
        return $tribute_html;
    }
}

// Initialize the plugin
new NLMSF_Tribute_Pages_Manager();

