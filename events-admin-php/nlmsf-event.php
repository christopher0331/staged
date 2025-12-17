<?php
/**
 * Plugin Name: NLMSF Events Manager
 * Description: Custom events and education videos management system for NLMSF with Elementor integration
 * Version: 2.0.0
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
        add_action('init', array($this, 'init'));
        register_activation_hook(__FILE__, array($this, 'create_tables'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_ajax_nlmsf_events_action', array($this, 'handle_ajax_request'));
        add_action('wp_ajax_nopriv_nlmsf_events_action', array($this, 'handle_ajax_request'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
    }
    
    public function init() {
        // Ensure schema is up to date
        $this->maybe_alter_schema();
    }
    
    public function create_tables() {
        global $wpdb;
        
        $charset_collate = $wpdb->get_charset_collate();
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        
        // Create events table
        $events_table = $wpdb->prefix . 'nlmsf_events';
        $events_sql = "CREATE TABLE $events_table (
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
        
        dbDelta($events_sql);
        
        // Create education videos table
        $videos_table = $wpdb->prefix . 'nlmsf_education_videos';
        $videos_sql = "CREATE TABLE $videos_table (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            title varchar(255) NOT NULL,
            category varchar(50) NOT NULL,
            youtube_url varchar(500) NOT NULL,
            duration varchar(10) DEFAULT NULL,
            description text NOT NULL,
            featured tinyint(1) DEFAULT 0,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY category (category),
            KEY featured (featured)
        ) $charset_collate;";
        
        dbDelta($videos_sql);
        
        // Create categories table
        $categories_table = $wpdb->prefix . 'nlmsf_video_categories';
        $categories_sql = "CREATE TABLE $categories_table (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            slug varchar(100) NOT NULL UNIQUE,
            icon varchar(50) DEFAULT 'fas fa-play-circle',
            color varchar(7) DEFAULT '#4a90e2',
            display_order int(11) DEFAULT 0,
            active tinyint(1) DEFAULT 1,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY slug (slug),
            KEY active (active)
        ) $charset_collate;";
        
        dbDelta($categories_sql);
        
        // Insert default categories if table is empty
        $this->insert_default_categories();
    }
    
    private function insert_default_categories() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        // Check if categories already exist
        $count = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
        if ($count > 0) {
            return; // Categories already exist
        }
        
        // Insert default categories
        $default_categories = array(
            array(
                'name' => 'All Videos',
                'slug' => 'all',
                'icon' => 'fas fa-play-circle',
                'color' => '#4a90e2',
                'display_order' => 0,
                'active' => 1
            ),
            array(
                'name' => 'Patient Education',
                'slug' => 'patient-education',
                'icon' => 'fas fa-user-md',
                'color' => '#e74c3c',
                'display_order' => 1,
                'active' => 1
            ),
            array(
                'name' => 'Medical Research',
                'slug' => 'medical-research',
                'icon' => 'fas fa-microscope',
                'color' => '#27ae60',
                'display_order' => 2,
                'active' => 1
            ),
            array(
                'name' => 'Caregiver Support',
                'slug' => 'caregiver-support',
                'icon' => 'fas fa-heart',
                'color' => '#f39c12',
                'display_order' => 3,
                'active' => 1
            ),
            array(
                'name' => 'Webinars',
                'slug' => 'webinars',
                'icon' => 'fas fa-video',
                'color' => '#9b59b6',
                'display_order' => 4,
                'active' => 1
            )
        );
        
        foreach ($default_categories as $category) {
            $wpdb->insert($table_name, $category);
        }
    }

    private function maybe_alter_schema() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        $columns = $wpdb->get_col("SHOW COLUMNS FROM $table_name", 0);
        if (!$columns) { return; }

        $alterations = array();
        if (!in_array('base_timezone', $columns)) {
            $alterations[] = "ADD COLUMN base_timezone varchar(64) DEFAULT 'America/New_York' AFTER event_time";
        }
        if (!in_array('show_et', $columns)) { $alterations[] = "ADD COLUMN show_et TINYINT(1) DEFAULT 1 AFTER base_timezone"; }
        if (!in_array('show_ct', $columns)) { $alterations[] = "ADD COLUMN show_ct TINYINT(1) DEFAULT 0 AFTER show_et"; }
        if (!in_array('show_mt', $columns)) { $alterations[] = "ADD COLUMN show_mt TINYINT(1) DEFAULT 0 AFTER show_ct"; }
        if (!in_array('show_pt', $columns)) { $alterations[] = "ADD COLUMN show_pt TINYINT(1) DEFAULT 0 AFTER show_mt"; }

        if (!empty($alterations)) {
            $sql = "ALTER TABLE $table_name " . implode(', ', $alterations);
            $wpdb->query($sql);
        }
    }
    
    public function enqueue_scripts() {
        $js_path = NLMSF_EVENTS_PLUGIN_PATH . 'assets/nlmsf-events.js';
        $css_path = NLMSF_EVENTS_PLUGIN_PATH . 'assets/nlmsf-events.css';
        $js_ver = file_exists($js_path) ? filemtime($js_path) : '2.0.0';
        $css_ver = file_exists($css_path) ? filemtime($css_path) : '2.0.0';

        wp_enqueue_script('nlmsf-events-js', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.js', array('jquery'), $js_ver, true);
        wp_enqueue_style('nlmsf-events-css', NLMSF_EVENTS_PLUGIN_URL . 'assets/nlmsf-events.css', array(), $css_ver);
        
        // Localize script for AJAX
        wp_localize_script('nlmsf-events-js', 'nlmsf_events_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('nlmsf_events_nonce')
        ));
    }
    
    public function register_rest_routes() {
        register_rest_route('nlmsf/v1', '/education-videos', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_education_videos_rest'),
            'permission_callback' => '__return_true'
        ));
        
        register_rest_route('nlmsf/v1', '/video-categories', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_video_categories_rest'),
            'permission_callback' => '__return_true'
        ));
    }
    
    public function handle_ajax_request() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'nlmsf_events_nonce')) {
            wp_die('Security check failed');
        }
        
        $action = sanitize_text_field($_POST['event_action']);
        
        switch ($action) {
            // Events
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
            // Videos
            case 'get_videos':
                $this->get_videos();
                break;
            case 'add_video':
                $this->add_video();
                break;
            case 'update_video':
                $this->update_video();
                break;
            case 'delete_video':
                $this->delete_video();
                break;
            // Categories
            case 'get_categories':
                $this->get_categories();
                break;
            case 'add_category':
                $this->add_category();
                break;
            case 'update_category':
                $this->update_category();
                break;
            case 'delete_category':
                $this->delete_category();
                break;
            case 'toggle_category_status':
                $this->toggle_category_status();
                break;
            default:
                wp_die('Invalid action: ' . $action);
        }
    }
    
    public function get_education_videos_rest($request) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_education_videos';
        
        $videos = $wpdb->get_results("SELECT * FROM $table_name ORDER BY featured DESC, created_at DESC");
        
        return rest_ensure_response($videos);
    }
    
    public function get_video_categories_rest($request) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        $categories = $wpdb->get_results(
            "SELECT * FROM $table_name WHERE active = 1 ORDER BY display_order ASC, name ASC"
        );
        
        return rest_ensure_response($categories);
    }
    
    private function get_events() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_events';
        
        // Only treat homepage_only as true when explicitly sent as string '1'
        $homepage_only = (isset($_POST['homepage_only']) && $_POST['homepage_only'] === '1');
        
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
        $base_timezone = sanitize_text_field($_POST['base_timezone'] ?? 'America/New_York');
        $show_et = isset($_POST['show_et']) ? 1 : 0;
        $show_ct = isset($_POST['show_ct']) ? 1 : 0;
        $show_mt = isset($_POST['show_mt']) ? 1 : 0;
        $show_pt = isset($_POST['show_pt']) ? 1 : 0;
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'title' => $title,
                'event_date' => $event_date,
                'event_time' => $event_time,
                'base_timezone' => $base_timezone,
                'show_et' => $show_et,
                'show_ct' => $show_ct,
                'show_mt' => $show_mt,
                'show_pt' => $show_pt,
                'description' => $description,
                'zoom_link' => $zoom_link,
                'display_on_homepage' => $display_on_homepage
            ),
            array('%s', '%s', '%s', '%s', '%d', '%d', '%d', '%d', '%s', '%s', '%d')
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
        $base_timezone = sanitize_text_field($_POST['base_timezone'] ?? 'America/New_York');
        $show_et = isset($_POST['show_et']) ? 1 : 0;
        $show_ct = isset($_POST['show_ct']) ? 1 : 0;
        $show_mt = isset($_POST['show_mt']) ? 1 : 0;
        $show_pt = isset($_POST['show_pt']) ? 1 : 0;
        
        $result = $wpdb->update(
            $table_name,
            array(
                'title' => $title,
                'event_date' => $event_date,
                'event_time' => $event_time,
                'base_timezone' => $base_timezone,
                'show_et' => $show_et,
                'show_ct' => $show_ct,
                'show_mt' => $show_mt,
                'show_pt' => $show_pt,
                'description' => $description,
                'zoom_link' => $zoom_link,
                'display_on_homepage' => $display_on_homepage
            ),
            array('id' => $id),
            array('%s', '%s', '%s', '%s', '%d', '%d', '%d', '%d', '%s', '%s', '%d'),
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
            // Return the updated row so the UI can update without losing the item
            $updated = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $id));
            wp_send_json_success(array('message' => 'Homepage display updated successfully', 'event' => $updated));
        } else {
            wp_send_json_error('Failed to update homepage display');
        }
    }
    
    // Video Management Methods
    private function get_videos() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_education_videos';
        
        $videos = $wpdb->get_results("SELECT * FROM $table_name ORDER BY featured DESC, created_at DESC");
        
        wp_send_json_success($videos);
    }
    
    private function add_video() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_education_videos';
        
        $title = sanitize_text_field($_POST['title']);
        $category = sanitize_text_field($_POST['category']);
        $youtube_url = esc_url_raw($_POST['youtube_url']);
        $duration = sanitize_text_field($_POST['duration'] ?? '');
        $description = sanitize_textarea_field($_POST['description']);
        $featured = isset($_POST['featured']) ? 1 : 0;
        
        // Validate category
        $valid_categories = array('patient-education', 'medical-research', 'caregiver-support', 'webinars');
        if (!in_array($category, $valid_categories)) {
            wp_send_json_error('Invalid category');
        }
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'title' => $title,
                'category' => $category,
                'youtube_url' => $youtube_url,
                'duration' => $duration,
                'description' => $description,
                'featured' => $featured
            ),
            array('%s', '%s', '%s', '%s', '%s', '%d')
        );
        
        if ($result !== false) {
            wp_send_json_success(array('message' => 'Video added successfully', 'id' => $wpdb->insert_id));
        } else {
            wp_send_json_error('Failed to add video');
        }
    }
    
    private function update_video() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_education_videos';
        
        $id = intval($_POST['id']);
        $title = sanitize_text_field($_POST['title']);
        $category = sanitize_text_field($_POST['category']);
        $youtube_url = esc_url_raw($_POST['youtube_url']);
        $duration = sanitize_text_field($_POST['duration'] ?? '');
        $description = sanitize_textarea_field($_POST['description']);
        $featured = isset($_POST['featured']) ? 1 : 0;
        
        // Validate category
        $valid_categories = array('patient-education', 'medical-research', 'caregiver-support', 'webinars');
        if (!in_array($category, $valid_categories)) {
            wp_send_json_error('Invalid category');
        }
        
        $result = $wpdb->update(
            $table_name,
            array(
                'title' => $title,
                'category' => $category,
                'youtube_url' => $youtube_url,
                'duration' => $duration,
                'description' => $description,
                'featured' => $featured
            ),
            array('id' => $id),
            array('%s', '%s', '%s', '%s', '%s', '%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success('Video updated successfully');
        } else {
            wp_send_json_error('Failed to update video');
        }
    }
    
    private function delete_video() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_education_videos';
        
        $id = intval($_POST['id']);
        
        $result = $wpdb->delete($table_name, array('id' => $id), array('%d'));
        
        if ($result !== false) {
            wp_send_json_success('Video deleted successfully');
        } else {
            wp_send_json_error('Failed to delete video');
        }
    }
    
    // Category Management Methods
    private function get_categories() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        $categories = $wpdb->get_results(
            "SELECT * FROM $table_name ORDER BY display_order ASC, name ASC"
        );
        
        wp_send_json_success($categories);
    }
    
    private function add_category() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        $name = sanitize_text_field($_POST['name']);
        $slug = sanitize_title($_POST['slug']);
        $icon = sanitize_text_field($_POST['icon']);
        $color = sanitize_hex_color($_POST['color']);
        $display_order = intval($_POST['display_order']);
        
        if (empty($name) || empty($slug)) {
            wp_send_json_error('Name and slug are required');
        }
        
        // Check if slug already exists
        $existing = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $table_name WHERE slug = %s",
            $slug
        ));
        
        if ($existing) {
            wp_send_json_error('A category with this slug already exists');
        }
        
        $result = $wpdb->insert(
            $table_name,
            array(
                'name' => $name,
                'slug' => $slug,
                'icon' => $icon ?: 'fas fa-play-circle',
                'color' => $color ?: '#4a90e2',
                'display_order' => $display_order,
                'active' => 1
            ),
            array('%s', '%s', '%s', '%s', '%d', '%d')
        );
        
        if ($result) {
            wp_send_json_success(array('id' => $wpdb->insert_id));
        } else {
            wp_send_json_error('Failed to add category');
        }
    }
    
    private function update_category() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        $id = intval($_POST['id']);
        $name = sanitize_text_field($_POST['name']);
        $slug = sanitize_title($_POST['slug']);
        $icon = sanitize_text_field($_POST['icon']);
        $color = sanitize_hex_color($_POST['color']);
        $display_order = intval($_POST['display_order']);
        $active = intval($_POST['active']);
        
        if (empty($name) || empty($slug)) {
            wp_send_json_error('Name and slug are required');
        }
        
        // Check if slug already exists (excluding current category)
        $existing = $wpdb->get_var($wpdb->prepare(
            "SELECT id FROM $table_name WHERE slug = %s AND id != %d",
            $slug, $id
        ));
        
        if ($existing) {
            wp_send_json_error('A category with this slug already exists');
        }
        
        $result = $wpdb->update(
            $table_name,
            array(
                'name' => $name,
                'slug' => $slug,
                'icon' => $icon,
                'color' => $color,
                'display_order' => $display_order,
                'active' => $active
            ),
            array('id' => $id),
            array('%s', '%s', '%s', '%s', '%d', '%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success();
        } else {
            wp_send_json_error('Failed to update category');
        }
    }
    
    private function delete_category() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        $videos_table = $wpdb->prefix . 'nlmsf_education_videos';
        
        $id = intval($_POST['id']);
        
        // Check if category is being used by any videos
        $video_count = $wpdb->get_var($wpdb->prepare(
            "SELECT COUNT(*) FROM $videos_table WHERE category = (SELECT slug FROM $table_name WHERE id = %d)",
            $id
        ));
        
        if ($video_count > 0) {
            wp_send_json_error('Cannot delete category that is being used by videos');
        }
        
        $result = $wpdb->delete(
            $table_name,
            array('id' => $id),
            array('%d')
        );
        
        if ($result) {
            wp_send_json_success();
        } else {
            wp_send_json_error('Failed to delete category');
        }
    }
    
    private function toggle_category_status() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'nlmsf_video_categories';
        
        $id = intval($_POST['id']);
        $active = intval($_POST['active']);
        
        $result = $wpdb->update(
            $table_name,
            array('active' => $active),
            array('id' => $id),
            array('%d'),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success();
        } else {
            wp_send_json_error('Failed to update category status');
        }
    }
}

// Initialize the plugin
new NLMSF_Events_Manager();
