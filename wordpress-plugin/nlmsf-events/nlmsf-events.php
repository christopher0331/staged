<?php
/**
 * Plugin Name: NLMSF Events Manager
 * Description: Custom events management system for NLMSF with Elementor integration
 * Version: 1.0.0
 * Author: NLMSF
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('NLMSF_EVENTS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NLMSF_EVENTS_PLUGIN_PATH', plugin_dir_path(__FILE__));

class NLMSF_Events_Manager {
    
    public function __construct() {
        add_action('init', array($this, 'register_shortcodes'));
        register_activation_hook(__FILE__, array($this, 'create_events_table'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
        add_action('admin_menu', array($this, 'register_admin_page'));
        add_action('wp_ajax_nlmsf_events_action', array($this, 'handle_ajax_request'));
        add_action('wp_ajax_nopriv_nlmsf_events_action', array($this, 'handle_ajax_request'));
    }

    public function register_shortcodes() {
        add_shortcode('nlmsf_events', array($this, 'events_shortcode'));
    }
    
    public function create_events_table() {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            title varchar(255) NOT NULL,
            event_date date NOT NULL,
            event_time time NOT NULL,
            description text NOT NULL,
            zoom_link varchar(500) NOT NULL,
            display_on_homepage tinyint(1) DEFAULT 1,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
    
    public function enqueue_scripts() {
        wp_enqueue_script('nlmsf-events-js', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.js', array('jquery'), '1.0.0', true);
        wp_enqueue_style('nlmsf-events-css', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.css', array(), '1.0.0');
        
        // Localize script for AJAX
        wp_localize_script('nlmsf-events-js', 'nlmsf_events_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nlmsf_events_nonce')
        ));
    }

    public function enqueue_admin_assets($hook) {
        if ($hook !== 'toplevel_page_nlmsf-events') {
            return;
        }

        wp_enqueue_style('nlmsf-events-css', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.css', array(), '1.0.0');
        wp_enqueue_script('nlmsf-events-js', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.js', array('jquery'), '1.0.0', true);

        wp_localize_script('nlmsf-events-js', 'nlmsf_events_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nlmsf_events_nonce')
        ));

        // Font Awesome for icons used in the UI
        wp_enqueue_style('nlmsf-events-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', array(), '5.15.4');
    }
    
    public function handle_ajax_request() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'nlmsf_events_nonce')) {
            wp_die('Security check failed');
        }
        
        $action = sanitize_text_field($_POST['event_action']);
        
        switch ($action) {
            case 'get_events':
                $this->get_events();
                break;
            case 'add_event':
                $this->add_event();
                break;
            case 'update_event':
                $this->update_event();
                break;
            case 'delete_event':
                $this->delete_event();
                break;
            case 'toggle_homepage_display':
                $this->toggle_homepage_display();
                break;
            default:
                wp_die('Invalid action');
        }
    }

    public function register_admin_page() {
        add_menu_page(
            'NLMSF Events',
            'NLMSF Events',
            'edit_posts',
            'nlmsf-events',
            array($this, 'render_admin_page'),
            'dashicons-calendar-alt',
            27
        );
    }

    public function render_admin_page() {
        if (!current_user_can('edit_posts')) {
            return;
        }
        ?>
        <div class="wrap">
            <div class="nlmsf-events-admin">
                <div class="nlmsf-admin-header">
                    <h1 class="nlmsf-admin-title">NLMSF Events Manager</h1>
                    <p class="nlmsf-admin-subtitle">Add, edit, and manage events that appear on the homepage events section.</p>
                </div>

                <div class="nlmsf-add-event-section">
                    <h2 class="nlmsf-section-title"><i class="fas fa-calendar-plus"></i> Add New Event</h2>
                    <form id="nlmsf-add-event-form">
                        <div class="nlmsf-form-grid">
                            <div class="nlmsf-form-group">
                                <label class="nlmsf-form-label" for="nlmsf-event-title">Event Title</label>
                                <input type="text" id="nlmsf-event-title" name="title" class="nlmsf-form-input" required />
                            </div>
                            <div class="nlmsf-form-group">
                                <label class="nlmsf-form-label" for="nlmsf-event-date">Event Date</label>
                                <input type="date" id="nlmsf-event-date" name="event_date" class="nlmsf-form-input" required />
                            </div>
                            <div class="nlmsf-form-group">
                                <label class="nlmsf-form-label" for="nlmsf-event-time">Event Time (ET)</label>
                                <input type="time" id="nlmsf-event-time" name="event_time" class="nlmsf-form-input" required />
                            </div>
                            <div class="nlmsf-form-group full-width">
                                <label class="nlmsf-form-label" for="nlmsf-event-description">Description</label>
                                <textarea id="nlmsf-event-description" name="description" class="nlmsf-form-textarea" rows="4" required></textarea>
                            </div>
                            <div class="nlmsf-form-group full-width">
                                <label class="nlmsf-form-label" for="nlmsf-event-zoom">Registration / Zoom Link</label>
                                <input type="url" id="nlmsf-event-zoom" name="zoom_link" class="nlmsf-form-input" placeholder="https://" required />
                            </div>
                        </div>

                        <div class="nlmsf-checkbox-group">
                            <input type="checkbox" id="nlmsf-event-homepage" name="display_on_homepage" class="nlmsf-checkbox" checked />
                            <label for="nlmsf-event-homepage">Show this event on the homepage events section</label>
                        </div>

                        <p class="description" style="margin-top:1rem;">Events are ordered by date and time. You can toggle homepage visibility later from the events list.</p>

                        <button type="submit" class="nlmsf-btn nlmsf-btn-primary" style="margin-top:1.5rem;">
                            <i class="fas fa-plus-circle"></i>
                            Publish Event
                        </button>
                    </form>
                </div>

                <div class="nlmsf-events-list-section">
                    <h2 class="nlmsf-section-title"><i class="fas fa-list"></i> Existing Events</h2>
                    <div class="nlmsf-events-list"><!-- Populated via JS --></div>
                </div>
            </div>
        </div>

        <div id="nlmsf-edit-modal" class="nlmsf-modal-overlay" style="display:none;">
            <div class="nlmsf-modal-content">
                <div class="nlmsf-modal-header">
                    <h2 class="nlmsf-modal-title">Edit Event</h2>
                    <button type="button" class="nlmsf-close-modal" aria-label="Close edit modal">&times;</button>
                </div>
                <form id="nlmsf-edit-event-form">
                    <input type="hidden" name="id" />
                    <div class="nlmsf-form-grid">
                        <div class="nlmsf-form-group">
                            <label class="nlmsf-form-label" for="nlmsf-edit-event-title">Event Title</label>
                            <input type="text" id="nlmsf-edit-event-title" name="title" class="nlmsf-form-input" required />
                        </div>
                        <div class="nlmsf-form-group">
                            <label class="nlmsf-form-label" for="nlmsf-edit-event-date">Event Date</label>
                            <input type="date" id="nlmsf-edit-event-date" name="event_date" class="nlmsf-form-input" required />
                        </div>
                        <div class="nlmsf-form-group">
                            <label class="nlmsf-form-label" for="nlmsf-edit-event-time">Event Time (ET)</label>
                            <input type="time" id="nlmsf-edit-event-time" name="event_time" class="nlmsf-form-input" required />
                        </div>
                        <div class="nlmsf-form-group full-width">
                            <label class="nlmsf-form-label" for="nlmsf-edit-event-description">Description</label>
                            <textarea id="nlmsf-edit-event-description" name="description" class="nlmsf-form-textarea" rows="4" required></textarea>
                        </div>
                        <div class="nlmsf-form-group full-width">
                            <label class="nlmsf-form-label" for="nlmsf-edit-event-zoom">Registration / Zoom Link</label>
                            <input type="url" id="nlmsf-edit-event-zoom" name="zoom_link" class="nlmsf-form-input" placeholder="https://" required />
                        </div>
                    </div>

                    <div class="nlmsf-checkbox-group">
                        <input type="checkbox" id="nlmsf-edit-event-homepage" name="display_on_homepage" class="nlmsf-checkbox" />
                        <label for="nlmsf-edit-event-homepage">Show this event on the homepage events section</label>
                    </div>

                    <div style="margin-top:1.5rem; display:flex; justify-content:flex-end; gap:0.75rem;">
                        <button type="button" class="nlmsf-btn" onclick="nlmsfEvents.closeModal();">Cancel</button>
                        <button type="submit" class="nlmsf-btn nlmsf-btn-primary">
                            <i class="fas fa-save"></i>
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <?php
    }
    
    private function get_events() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $homepage_only = isset($_POST['homepage_only']) ? (bool)$_POST['homepage_only'] : false;
        
        $where_clause = $homepage_only ? "WHERE display_on_homepage = 1" : "";
        $order_clause = "ORDER BY event_date ASC, event_time ASC";
        
        $events = $wpdb->get_results("SELECT * FROM $table_name $where_clause $order_clause");
        
        wp_send_json_success($events);
    }
    
    private function add_event() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $title = sanitize_text_field($_POST['title']);
        $event_date = sanitize_text_field($_POST['event_date']);
        $event_time = sanitize_text_field($_POST['event_time']);
        $description = sanitize_textarea_field($_POST['description']);
        $zoom_link = esc_url_raw($_POST['zoom_link']);
        $display_on_homepage = isset($_POST['display_on_homepage']) ? 1 : 0;
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'title' => $title,
                'event_date' => $event_date,
                'event_time' => $event_time,
                'description' => $description,
                'zoom_link' => $zoom_link,
                'display_on_homepage' => $display_on_homepage
            ),
            array('%s', '%s', '%s', '%s', '%s', '%d')
        );
        
        if ($result !== false) {
            wp_send_json_success(array('message' => 'Event added successfully', 'id' => $wpdb->insert_id));
        } else {
            wp_send_json_error('Failed to add event');
        }
    }
    
    private function update_event() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $id = intval($_POST['id']);
        $title = sanitize_text_field($_POST['title']);
        $event_date = sanitize_text_field($_POST['event_date']);
        $event_time = sanitize_text_field($_POST['event_time']);
        $description = sanitize_textarea_field($_POST['description']);
        $zoom_link = esc_url_raw($_POST['zoom_link']);
        $display_on_homepage = isset($_POST['display_on_homepage']) ? 1 : 0;
        
        $result = $wpdb->update(
            $table_name,
            array(
                'title' => $title,
                'event_date' => $event_date,
                'event_time' => $event_time,
                'description' => $description,
                'zoom_link' => $zoom_link,
                'display_on_homepage' => $display_on_homepage
            ),
            array('id' => $id),
            array('%s', '%s', '%s', '%s', '%s', '%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Event updated successfully');
        } else {
            wp_send_json_error('Failed to update event');
        }
    }
    
    private function delete_event() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $id = intval($_POST['id']);
        
        $result = $wpdb->delete($table_name, array('id' => $id), array('%d'));
        
        if ($result !== false) {
            wp_send_json_success('Event deleted successfully');
        } else {
            wp_send_json_error('Failed to delete event');
        }
    }
    
    private function toggle_homepage_display() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        $id = intval($_POST['id']);
        $display = intval($_POST['display']);
        
        $result = $wpdb->update(
            $table_name,
            array('display_on_homepage' => $display),
            array('id' => $id),
            array('%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Homepage display updated successfully');
        } else {
            wp_send_json_error('Failed to update homepage display');
        }
    }

    public function events_shortcode($atts) {
        // Ensure assets are loaded on the frontend where shortcode is used
        wp_enqueue_style('nlmsf-events-css', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.css', array(), '1.0.0');
        wp_enqueue_script('nlmsf-events-js', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.js', array('jquery'), '1.0.0', true);

        wp_localize_script('nlmsf-events-js', 'nlmsf_events_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nlmsf_events_nonce')
        ));

        $atts = shortcode_atts(array(
            'title' => 'Upcoming Events',
            'show_view_all' => 'false',
            'view_all_url' => '',
        ), $atts);

        ob_start();
        ?>
        <div class="nlmsf-events-display">
            <div class="nlmsf-events-header">
                <h2 class="nlmsf-events-title">
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                    <?php echo esc_html($atts['title']); ?>
                </h2>
                <?php if ($atts['show_view_all'] === 'true' && !empty($atts['view_all_url'])) : ?>
                    <a href="<?php echo esc_url($atts['view_all_url']); ?>" class="nlmsf-view-all-link">
                        View all events
                        <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </a>
                <?php endif; ?>
            </div>
            <div class="nlmsf-events-grid"><!-- Events inserted via JS --></div>
        </div>
        <?php
        return ob_get_clean();
    }
}

// Initialize the plugin
new NLMSF_Events_Manager();
