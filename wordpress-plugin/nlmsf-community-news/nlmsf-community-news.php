<?php
/**
 * Plugin Name: NLMSF Community News
 * Description: Manage Community Snapshot News and News Tracker entries with a quick-add workflow and Elementor-friendly shortcodes.
 * Version: 1.0.0
 * Author: NLMSF
 */

if (!defined('ABSPATH')) {
    exit;
}

define('NLMSF_CN_PLUGIN_URL', plugin_dir_url(__FILE__));
define('NLMSF_CN_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('NLMSF_CN_VERSION', '1.0.0');

class NLMSF_Community_News {

    public function __construct() {
        add_action('init', array($this, 'register_content_types'));
        add_action('init', array($this, 'register_meta_fields'));
        add_action('init', array($this, 'register_shortcodes'));
        add_action('wp_enqueue_scripts', array($this, 'register_frontend_assets'));
        add_action('admin_menu', array($this, 'register_admin_page'));
        add_action('admin_post_nlmsf_add_snapshot', array($this, 'handle_add_snapshot'));
        add_action('admin_post_nlmsf_add_newsletter', array($this, 'handle_add_newsletter'));
    }

    public function register_content_types() {
        $common_args = array(
            'public' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'excerpt', 'author'),
            'has_archive' => false,
            'rewrite' => false,
        );

        register_post_type('nlmsf_snapshot', array_merge($common_args, array(
            'labels' => array(
                'name' => 'Community Snapshots',
                'singular_name' => 'Community Snapshot',
                'add_new_item' => 'Add Community Snapshot',
                'edit_item' => 'Edit Community Snapshot',
            ),
            'menu_icon' => 'dashicons-megaphone',
        )));

        register_post_type('nlmsf_news_tracker', array_merge($common_args, array(
            'labels' => array(
                'name' => 'News Tracker Issues',
                'singular_name' => 'News Tracker Issue',
                'add_new_item' => 'Add News Tracker Issue',
                'edit_item' => 'Edit News Tracker Issue',
            ),
            'menu_icon' => 'dashicons-media-document',
        )));
    }

    public function register_meta_fields() {
        $meta_keys = array(
            'nlmsf_external_url' => array('type' => 'string'),
            'nlmsf_summary' => array('type' => 'string'),
            'nlmsf_manual_date' => array('type' => 'string'),
            'nlmsf_featured' => array('type' => 'boolean'),
        );

        foreach (array('nlmsf_snapshot', 'nlmsf_news_tracker') as $post_type) {
            foreach ($meta_keys as $key => $args) {
                register_post_meta($post_type, $key, array(
                    'show_in_rest' => true,
                    'single' => true,
                    'type' => $args['type'],
                    'sanitize_callback' => $this->meta_sanitizer($args['type'])
                ));
            }
        }
    }

    public function recent_updates_shortcode($atts) {
        // Ensure styles are available even if not pre-registered on this page
        wp_enqueue_style(
            'nlmsf-community-news-style',
            NLMSF_CN_PLUGIN_URL . 'assets/community-news.css',
            array(),
            file_exists(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.css') ? filemtime(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.css') : NLMSF_CN_VERSION
        );

        $atts = shortcode_atts(array(
            'title' => 'Recent Update',
        ), $atts);

        $latest_snapshot = null;
        $latest_news = null;

        $snapshots = $this->fetch_entries('nlmsf_snapshot');
        if (!empty($snapshots)) {
            $latest_snapshot = $snapshots[0];
        }

        $news = $this->fetch_entries('nlmsf_news_tracker');
        if (!empty($news)) {
            $latest_news = $news[0];
        }

        if (!$latest_snapshot && !$latest_news) {
            return '<p class="nlmsf-empty-state">Recent updates will appear here once published.</p>';
        }

        ob_start();
        ?>
        <div class="nlmsf-recent-updates">
            <h3 class="nlmsf-recent-title"><?php echo esc_html($atts['title']); ?></h3>
            <div class="nlmsf-recent-items">
                <?php if ($latest_news) : ?>
                    <div class="nlmsf-recent-item">
                        <div class="nlmsf-recent-label">Newsletter</div>
                        <div class="nlmsf-recent-body">
                            <a href="<?php echo esc_url($latest_news['url']); ?>" class="nlmsf-recent-link" target="_blank" rel="noopener">
                                <span class="nlmsf-recent-item-title"><?php echo esc_html($latest_news['title']); ?></span>
                            </a>
                            <span class="nlmsf-recent-date"><?php echo esc_html($latest_news['display_date']); ?></span>
                            <p class="nlmsf-recent-excerpt"><?php echo esc_html($latest_news['summary']); ?></p>
                            <a href="<?php echo esc_url($latest_news['url']); ?>" class="nlmsf-recent-cta" target="_blank" rel="noopener">
                                View full newsletter &rarr;
                            </a>
                        </div>
                    </div>
                <?php endif; ?>

                <?php if ($latest_snapshot) : ?>
                    <div class="nlmsf-recent-item">
                        <div class="nlmsf-recent-label">Snapshot</div>
                        <div class="nlmsf-recent-body">
                            <a href="<?php echo esc_url($latest_snapshot['url']); ?>" class="nlmsf-recent-link" target="_blank" rel="noopener">
                                <span class="nlmsf-recent-item-title"><?php echo esc_html($latest_snapshot['title']); ?></span>
                            </a>
                            <span class="nlmsf-recent-date"><?php echo esc_html($latest_snapshot['display_date']); ?></span>
                            <p class="nlmsf-recent-excerpt"><?php echo esc_html($latest_snapshot['summary']); ?></p>
                            <a href="<?php echo esc_url($latest_snapshot['url']); ?>" class="nlmsf-recent-cta" target="_blank" rel="noopener">
                                View full snapshot &rarr;
                            </a>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

    private function meta_sanitizer($type) {
        switch ($type) {
            case 'boolean':
                return function($value) {
                    return (bool)$value;
                };
            case 'string':
            default:
                return function($value) {
                    return is_string($value) ? wp_kses_post($value) : '';
                };
        }
    }

    public function register_shortcodes() {
        add_shortcode('nlmsf_snapshot_feed', array($this, 'snapshot_feed_shortcode'));
        add_shortcode('nlmsf_news_tracker', array($this, 'news_tracker_shortcode'));
        add_shortcode('nlmsf_recent_updates', array($this, 'recent_updates_shortcode'));
    }

    public function register_frontend_assets() {
        wp_register_style(
            'nlmsf-community-news-style',
            NLMSF_CN_PLUGIN_URL . 'assets/community-news.css',
            array(),
            file_exists(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.css') ? filemtime(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.css') : NLMSF_CN_VERSION
        );

        wp_register_script(
            'nlmsf-community-news-script',
            NLMSF_CN_PLUGIN_URL . 'assets/community-news.js',
            array('jquery'),
            file_exists(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.js') ? filemtime(NLMSF_CN_PLUGIN_PATH . 'assets/community-news.js') : NLMSF_CN_VERSION,
            true
        );
    }

    public function snapshot_feed_shortcode($atts) {
        wp_enqueue_style('nlmsf-community-news-style');
        wp_enqueue_script('nlmsf-community-news-script');

        $atts = shortcode_atts(array(
            'show_filters' => 'true',
        ), $atts);

        $posts = $this->fetch_entries('nlmsf_snapshot');
        if (empty($posts)) {
            return '<p class="nlmsf-empty-state">Community Snapshots will appear here once published.</p>';
        }

        $grouped = $this->group_by_year($posts);
        ob_start();
        ?>
        <div class="nlmsf-snapshot-feed" data-has-filters="<?php echo esc_attr($atts['show_filters']); ?>">
            <?php if ($atts['show_filters'] === 'true') : ?>
                <div class="snapshot-filter" data-filter-root>
                    <span class="snapshot-filter-label">Filter by Year:</span>
                    <button class="snapshot-filter-btn active" data-year="all">All</button>
                    <?php foreach (array_keys($grouped) as $year) : ?>
                        <button class="snapshot-filter-btn" data-year="<?php echo esc_attr($year); ?>"><?php echo esc_html($year); ?></button>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <?php foreach ($grouped as $year => $items) : ?>
                <div class="snapshot-year" data-year-section="<?php echo esc_attr($year); ?>">
                    <h3 class="snapshot-year-title"><?php echo esc_html($year); ?></h3>
                    <div class="snapshots-grid">
                        <?php foreach ($items as $item) : ?>
                            <article class="snapshot-card" data-year="<?php echo esc_attr($year); ?>">
                                <span class="snapshot-date"><?php echo esc_html($item['display_date']); ?></span>
                                <h3 class="snapshot-title"><?php echo esc_html($item['title']); ?></h3>
                                <div class="snapshot-preview">
                                    <p><?php echo esc_html($item['summary']); ?></p>
                                </div>
                                <a href="<?php echo esc_url($item['url']); ?>" class="snapshot-link" target="_blank" rel="noopener">
                                    Read Full Update <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </article>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    public function news_tracker_shortcode($atts) {
        wp_enqueue_style('nlmsf-community-news-style');
        wp_enqueue_script('nlmsf-community-news-script');

        $atts = shortcode_atts(array(
            'initial_per_year' => 8,
        ), $atts);

        $posts = $this->fetch_entries('nlmsf_news_tracker');
        if (empty($posts)) {
            return '<p class="nlmsf-empty-state">News Tracker issues will appear here once published.</p>';
        }

        $grouped = $this->group_by_year($posts);
        ob_start();
        ?>
        <div class="nlmsf-news-tracker" data-initial-count="<?php echo esc_attr($atts['initial_per_year']); ?>">
            <?php foreach ($grouped as $year => $items) :
                $initial = array_slice($items, 0, $atts['initial_per_year']);
                $hidden = array_slice($items, $atts['initial_per_year']);
            ?>
                <section class="year-section" id="year-<?php echo esc_attr($year); ?>">
                    <h3><?php echo esc_html($year); ?> NLMSF Newsletters</h3>
                    <div class="newsletter-grid initial-items">
                        <?php foreach ($initial as $item) : ?>
                            <?php echo $this->render_news_card($item, $year); ?>
                        <?php endforeach; ?>
                    </div>

                    <?php if (!empty($hidden)) : ?>
                        <div class="newsletter-grid hidden-items" style="display:none;">
                            <?php foreach ($hidden as $item) : ?>
                                <?php echo $this->render_news_card($item, $year); ?>
                            <?php endforeach; ?>
                        </div>
                        <div class="view-more-container">
                            <button class="view-more-button" data-target="year-<?php echo esc_attr($year); ?>">View More</button>
                        </div>
                    <?php endif; ?>
                </section>
            <?php endforeach; ?>
        </div>
        <?php
        return ob_get_clean();
    }

    private function render_news_card($item, $year) {
        $color_class = $this->year_color_class($year);
        ob_start();
        ?>
        <a href="<?php echo esc_url($item['url']); ?>" target="_blank" rel="noopener noreferrer" class="newsletter-card <?php echo esc_attr($color_class); ?>">
            <div class="newsletter-header">
                <h4 class="newsletter-title"><?php echo esc_html($item['title']); ?></h4>
                <span class="newsletter-date"><?php echo esc_html($item['display_date']); ?></span>
            </div>
            <p class="newsletter-description"><?php echo esc_html($item['summary']); ?></p>
        </a>
        <?php
        return ob_get_clean();
    }

    private function fetch_entries($post_type) {
        $query = new WP_Query(array(
            'post_type' => $post_type,
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'meta_value',
            'meta_key' => 'nlmsf_manual_date',
            'order' => 'DESC',
        ));

        $entries = array();
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $entries[] = $this->format_entry(get_post());
            }
        }
        wp_reset_postdata();
        return $entries;
    }

    private function format_entry($post) {
        $raw_date = get_post_meta($post->ID, 'nlmsf_manual_date', true);
        $timestamp = $raw_date ? strtotime($raw_date) : get_post_timestamp($post);
        $display_date = $timestamp ? date_i18n('F j, Y', $timestamp) : '';
        $year = $timestamp ? date_i18n('Y', $timestamp) : date_i18n('Y');

        $summary = get_post_meta($post->ID, 'nlmsf_summary', true);
        if (!$summary) {
            $summary = has_excerpt($post) ? get_the_excerpt($post) : wp_trim_words(wp_strip_all_tags($post->post_content), 40);
        }

        $url = get_post_meta($post->ID, 'nlmsf_external_url', true);
        if (!$url) {
            $url = get_permalink($post);
        }

        return array(
            'id' => $post->ID,
            'title' => get_the_title($post),
            'summary' => $summary,
            'display_date' => $display_date,
            'year' => $year,
            'url' => $url,
        );
    }

    private function group_by_year($items) {
        $grouped = array();
        foreach ($items as $item) {
            $year = $item['year'];
            if (!isset($grouped[$year])) {
                $grouped[$year] = array();
            }
            $grouped[$year][] = $item;
        }
        krsort($grouped, SORT_NUMERIC);
        return $grouped;
    }

    private function year_color_class($year) {
        if ($year >= date('Y')) {
            return 'purple-card';
        }
        if ($year == date('Y', strtotime('-1 year'))) {
            return 'teal-card';
        }
        return 'pink-card';
    }

    public function register_admin_page() {
        add_menu_page(
            'Community News',
            'Community News',
            'edit_posts',
            'nlmsf-community-news',
            array($this, 'render_admin_page'),
            'dashicons-rss',
            26
        );
    }

    public function render_admin_page() {
        if (!current_user_can('edit_posts')) {
            return;
        }

        $notice = isset($_GET['nlmsf_notice']) ? sanitize_text_field($_GET['nlmsf_notice']) : '';
        ?>
        <div class="wrap nlmsf-community-admin">
            <h1>NLMSF Community News</h1>
            <?php $this->render_notice($notice); ?>
            <div class="nlmsf-admin-panels">
                <div class="nlmsf-admin-panel">
                    <h2>Quick Add Snapshot</h2>
                    <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                        <?php wp_nonce_field('nlmsf_add_snapshot'); ?>
                        <input type="hidden" name="action" value="nlmsf_add_snapshot">
                        <table class="form-table">
                            <tr>
                                <th scope="row"><label for="snapshot_title">Title</label></th>
                                <td><input type="text" name="snapshot_title" id="snapshot_title" class="regular-text" required></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="snapshot_summary">Overview</label></th>
                                <td><textarea name="snapshot_summary" id="snapshot_summary" class="large-text" rows="4" required></textarea></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="snapshot_url">Link URL</label></th>
                                <td><input type="url" name="snapshot_url" id="snapshot_url" class="regular-text" placeholder="https://" required></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="snapshot_date">Date</label></th>
                                <td><input type="date" name="snapshot_date" id="snapshot_date" value="<?php echo esc_attr(date('Y-m-d')); ?>" required></td>
                            </tr>
                        </table>
                        <?php submit_button('Publish Snapshot'); ?>
                    </form>
                </div>

                <div class="nlmsf-admin-panel">
                    <h2>Quick Add News Tracker Issue</h2>
                    <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                        <?php wp_nonce_field('nlmsf_add_newsletter'); ?>
                        <input type="hidden" name="action" value="nlmsf_add_newsletter">
                        <table class="form-table">
                            <tr>
                                <th scope="row"><label for="newsletter_title">Title</label></th>
                                <td><input type="text" name="newsletter_title" id="newsletter_title" class="regular-text" required></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="newsletter_summary">Overview</label></th>
                                <td><textarea name="newsletter_summary" id="newsletter_summary" class="large-text" rows="4" required></textarea></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="newsletter_url">Link URL</label></th>
                                <td><input type="url" name="newsletter_url" id="newsletter_url" class="regular-text" placeholder="https://" required></td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="newsletter_date">Date</label></th>
                                <td><input type="date" name="newsletter_date" id="newsletter_date" value="<?php echo esc_attr(date('Y-m-d')); ?>" required></td>
                            </tr>
                        </table>
                        <?php submit_button('Publish News Tracker Issue'); ?>
                    </form>
                </div>
            </div>

            <div class="nlmsf-shortcode-help">
                <h2>Embedding</h2>
                <p>Use <code>[nlmsf_snapshot_feed]</code> for the Community Snapshot section and <code>[nlmsf_news_tracker]</code> for the monthly News Tracker grid.</p>
            </div>
        </div>
        <?php
    }

    private function render_notice($code) {
        if (!$code) {
            return;
        }

        $messages = array(
            'snapshot_added' => 'Snapshot published successfully.',
            'newsletter_added' => 'News Tracker issue published successfully.',
            'missing_fields' => 'Please complete all required fields.',
            'error' => 'Something went wrong. Please try again.',
        );

        if (isset($messages[$code])) {
            printf('<div class="notice notice-success"><p>%s</p></div>', esc_html($messages[$code]));
        }
    }

    public function handle_add_snapshot() {
        if (!current_user_can('edit_posts') || !check_admin_referer('nlmsf_add_snapshot')) {
            wp_die('Unauthorized request');
        }

        $title = isset($_POST['snapshot_title']) ? sanitize_text_field(wp_unslash($_POST['snapshot_title'])) : '';
        $summary = isset($_POST['snapshot_summary']) ? wp_kses_post(wp_unslash($_POST['snapshot_summary'])) : '';
        $url = isset($_POST['snapshot_url']) ? esc_url_raw(wp_unslash($_POST['snapshot_url'])) : '';
        $date = isset($_POST['snapshot_date']) ? sanitize_text_field(wp_unslash($_POST['snapshot_date'])) : '';

        if (!$title || !$summary || !$url || !$date) {
            $this->redirect_with_notice('missing_fields');
        }

        $post_id = wp_insert_post(array(
            'post_title' => $title,
            'post_type' => 'nlmsf_snapshot',
            'post_status' => 'publish',
            'post_content' => $summary,
            'meta_input' => array(
                'nlmsf_summary' => $summary,
                'nlmsf_external_url' => $url,
                'nlmsf_manual_date' => $date,
            ),
        ));

        if (is_wp_error($post_id)) {
            $this->redirect_with_notice('error');
        }

        $this->redirect_with_notice('snapshot_added');
    }

    public function handle_add_newsletter() {
        if (!current_user_can('edit_posts') || !check_admin_referer('nlmsf_add_newsletter')) {
            wp_die('Unauthorized request');
        }

        $title = isset($_POST['newsletter_title']) ? sanitize_text_field(wp_unslash($_POST['newsletter_title'])) : '';
        $summary = isset($_POST['newsletter_summary']) ? wp_kses_post(wp_unslash($_POST['newsletter_summary'])) : '';
        $url = isset($_POST['newsletter_url']) ? esc_url_raw(wp_unslash($_POST['newsletter_url'])) : '';
        $date = isset($_POST['newsletter_date']) ? sanitize_text_field(wp_unslash($_POST['newsletter_date'])) : '';

        if (!$title || !$summary || !$url || !$date) {
            $this->redirect_with_notice('missing_fields');
        }

        $post_id = wp_insert_post(array(
            'post_title' => $title,
            'post_type' => 'nlmsf_news_tracker',
            'post_status' => 'publish',
            'post_content' => $summary,
            'meta_input' => array(
                'nlmsf_summary' => $summary,
                'nlmsf_external_url' => $url,
                'nlmsf_manual_date' => $date,
            ),
        ));

        if (is_wp_error($post_id)) {
            $this->redirect_with_notice('error');
        }

        $this->redirect_with_notice('newsletter_added');
    }

    private function redirect_with_notice($code) {
        wp_safe_redirect(add_query_arg('nlmsf_notice', $code, admin_url('admin.php?page=nlmsf-community-news')));
        exit;
    }
}

new NLMSF_Community_News();
