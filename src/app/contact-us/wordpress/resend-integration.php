<?php
/**
 * Plugin Name: NLMSF Resend Email Integration
 * Description: Secure integration with Resend email API for contact forms
 * Version: 1.0.0
 * Author: NLMSF
 * Text Domain: nlmsf-resend
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Set error reporting for debugging
if (WP_DEBUG) {
    error_log('NLMSF Resend: Plugin loading');
}

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin activation hook
 */
function nlmsf_resend_activation() {
    // Add default settings if they don't exist
    if (!get_option('nlmsf_resend_settings')) {
        add_option('nlmsf_resend_settings', array(
            'api_key' => '',
            'from_email' => 'noreply@nlmsf.org',
            'from_name' => 'NLMSF Contact',
            'to_email' => 'info@nlmsf.org',
        ));
    }
    
    // Create the assets directory and files
    nlmsf_resend_create_assets();
}
register_activation_hook(__FILE__, 'nlmsf_resend_activation');

/**
 * Create necessary assets files on activation
 */
function nlmsf_resend_create_assets() {
    // Create directories if they don't exist
    $plugin_dir = plugin_dir_path(__FILE__);
    $js_dir = $plugin_dir . 'assets/js/';
    $css_dir = $plugin_dir . 'assets/css/';
    
    if (!file_exists($js_dir)) {
        wp_mkdir_p($js_dir);
    }
    
    if (!file_exists($css_dir)) {
        wp_mkdir_p($css_dir);
    }
    
    // Create the JS file with vanilla JavaScript (no jQuery dependencies)
    $js_content = "/**
 * NLMSF Contact Form Handler
 * No dependencies, vanilla JavaScript implementation to avoid conflicts
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only run if our form exists on the page
    var contactForm = document.getElementById('nlmsf-contact-form');
    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var submitBtn = contactForm.querySelector('button[type="submit"]');
        var statusDiv = document.getElementById('nlmsf-form-status');
        
        // Change button state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        statusDiv.innerHTML = '';
        
        // Collect form data safely
        var formData = {
            name: document.getElementById('nlmsf-name') ? document.getElementById('nlmsf-name').value : '',
            email: document.getElementById('nlmsf-email') ? document.getElementById('nlmsf-email').value : '',
            phone: document.getElementById('nlmsf-phone') ? document.getElementById('nlmsf-phone').value : '',
            subject: document.getElementById('nlmsf-subject') ? document.getElementById('nlmsf-subject').value : '',
            message: document.getElementById('nlmsf-message') ? document.getElementById('nlmsf-message').value : '',
            newsletter: document.getElementById('nlmsf-newsletter') ? document.getElementById('nlmsf-newsletter').checked : false
        };
        
        // Use vanilla AJAX to avoid conflicts
        var xhr = new XMLHttpRequest();
        xhr.open('POST', nlmsfResend.restUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('X-WP-Nonce', nlmsfResend.nonce);
        
        xhr.onload = function() {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class=\"fas fa-paper-plane\"></i> Send Message';
            
            if (xhr.status >= 200 && xhr.status < 300) {
                // Success
                var response = JSON.parse(xhr.responseText);
                statusDiv.innerHTML = '<div class=\"nlmsf-alert nlmsf-alert-success\"><i class=\"fas fa-check-circle\"></i> Your message has been sent successfully! We\'ll get back to you soon.</div>';
                contactForm.reset();
                return false; // Prevent default navigation after success
            } else {
                // Error
                var errorMsg = 'An error occurred. Please try again later.';
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (response && response.message) {
                        errorMsg = response.message;
                    }
                } catch (e) {}
                
                statusDiv.innerHTML = '<div class=\"nlmsf-alert nlmsf-alert-error\"><i class=\"fas fa-exclamation-circle\"></i> ' + errorMsg + '</div>';
            }
        };
        
        xhr.onerror = function() {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class=\"fas fa-paper-plane\"></i> Send Message';
            statusDiv.innerHTML = '<div class=\"nlmsf-alert nlmsf-alert-error\"><i class=\"fas fa-exclamation-circle\"></i> A network error occurred. Please check your connection and try again.</div>';
        };
        
        xhr.send(JSON.stringify(formData));
        
        // Prevent default form submission navigation
        return false;
    });
    
    // FAQ toggles
    $('.nlmsf-faq-question').on('click', function() {
        var item = $(this).closest('.nlmsf-faq-item');
        
        if (item.hasClass('open')) {
            item.removeClass('open');
        } else {
            $('.nlmsf-faq-item').removeClass('open');
            item.addClass('open');
        }
    });
});
";
    
    // Create the CSS file
    $css_content = "/**
 * NLMSF Contact Form Styles
 */
.nlmsf-form {
    margin: 2rem 0;
}

.nlmsf-form-row {
    margin-bottom: 1.5rem;
}

.nlmsf-form-group {
    margin-bottom: 1.5rem;
}

.nlmsf-form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.nlmsf-form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 1rem;
}

.nlmsf-form-control:focus {
    border-color: #6a3ea1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 62, 161, 0.1);
}

.nlmsf-form-check {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.nlmsf-form-check input[type=\"checkbox\"] {
    margin-right: 0.5rem;
}

.nlmsf-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.nlmsf-btn-primary {
    background-color: #6a3ea1;
    color: white;
}

.nlmsf-btn-primary:hover {
    background-color: #5a2e91;
    transform: translateY(-2px);
}

.nlmsf-alert {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 6px;
    display: flex;
    align-items: center;
}

.nlmsf-alert i {
    margin-right: 0.5rem;
}

.nlmsf-alert-success {
    background-color: #ecfdf5;
    color: #047857;
    border-left: 4px solid #047857;
}

.nlmsf-alert-error {
    background-color: #fef2f2;
    color: #b91c1c;
    border-left: 4px solid #b91c1c;
}

/* FAQ styles */
.nlmsf-faq-item {
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 1rem;
}

.nlmsf-faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    cursor: pointer;
}

.nlmsf-faq-question h4 {
    margin: 0;
    font-size: 1.1rem;
}

.nlmsf-faq-toggle {
    transition: transform 0.3s;
}

.nlmsf-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
    opacity: 0;
}

.nlmsf-faq-item.open .nlmsf-faq-answer {
    max-height: 1000px;
    opacity: 1;
    padding-bottom: 1rem;
}

.nlmsf-faq-item.open .nlmsf-faq-toggle {
    transform: rotate(180deg);
}
";
    
    // Write the files
    file_put_contents($js_dir . 'contact-form.js', $js_content);
    file_put_contents($css_dir . 'contact-form.css', $css_content);
}

/**
 * Add admin menu for configuration
 */
function nlmsf_resend_admin_menu() {
    add_options_page(
        'Resend Email Settings',
        'Resend Email',
        'manage_options',
        'nlmsf-resend-settings',
        'nlmsf_resend_settings_page'
    );
}
add_action('admin_menu', 'nlmsf_resend_admin_menu');

/**
 * Register plugin settings
 */
function nlmsf_resend_register_settings() {
    register_setting('nlmsf_resend_settings_group', 'nlmsf_resend_settings');
}
add_action('admin_init', 'nlmsf_resend_register_settings');

/**
 * Admin settings page
 */
function nlmsf_resend_settings_page() {
    $settings = get_option('nlmsf_resend_settings');
    ?>
    <div class="wrap">
        <h1>Resend Email Integration Settings</h1>
        <form method="post" action="options.php">
            <?php settings_fields('nlmsf_resend_settings_group'); ?>
            <table class="form-table">
                <tr>
                    <th scope="row">Resend API Key</th>
                    <td>
                        <input type="password" name="nlmsf_resend_settings[api_key]" 
                               value="<?php echo esc_attr($settings['api_key'] ?? ''); ?>" 
                               class="regular-text" />
                        <p class="description">Get your API key from <a href="https://resend.com/api-keys" target="_blank">Resend dashboard</a></p>
                    </td>
                </tr>
                <tr>
                    <th scope="row">From Email</th>
                    <td>
                        <input type="email" name="nlmsf_resend_settings[from_email]" 
                               value="<?php echo esc_attr($settings['from_email'] ?? 'noreply@nlmsf.org'); ?>" 
                               class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">From Name</th>
                    <td>
                        <input type="text" name="nlmsf_resend_settings[from_name]" 
                               value="<?php echo esc_attr($settings['from_name'] ?? 'NLMSF Contact'); ?>" 
                               class="regular-text" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">To Email</th>
                    <td>
                        <input type="email" name="nlmsf_resend_settings[to_email]" 
                               value="<?php echo esc_attr($settings['to_email'] ?? get_option('admin_email')); ?>" 
                               class="regular-text" />
                        <p class="description">Where contact form submissions will be sent</p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

/**
 * Enqueue frontend scripts and styles
 */
function nlmsf_resend_enqueue_scripts() {
    // Enqueue on all pages since shortcodes might be dynamically added
    wp_enqueue_script(
        'nlmsf-resend-form',
        plugin_dir_url(__FILE__) . 'assets/js/contact-form.js',
        array('jquery'),
        '1.0.0',
        true
    );
    
    wp_localize_script('nlmsf-resend-form', 'nlmsfResend', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'restUrl' => rest_url('nlmsf/v1/contact-form'),
        'nonce' => wp_create_nonce('wp_rest')
    ));
    
    wp_enqueue_style(
        'nlmsf-resend-form',
        plugin_dir_url(__FILE__) . 'assets/css/contact-form.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'nlmsf_resend_enqueue_scripts');

/**
 * Register the contact form shortcode
 */
function nlmsf_contact_form_shortcode($atts) {
    $atts = shortcode_atts(array(
        'title' => 'Contact Us',
        'description' => 'Fill out the form below and we\'ll get back to you as soon as possible.',
        'show_phone' => 'yes',
        'show_newsletter' => 'yes',
    ), $atts);
    
    ob_start();
    ?>
    <div class="nlmsf-contact-container">
        <?php if ($atts['title'] || $atts['description']) : ?>
        <div class="nlmsf-contact-header">
            <?php if ($atts['title']) : ?>
                <h2><?php echo esc_html($atts['title']); ?></h2>
            <?php endif; ?>
            
            <?php if ($atts['description']) : ?>
                <p><?php echo esc_html($atts['description']); ?></p>
            <?php endif; ?>
        </div>
        <?php endif; ?>
        
        <div id="nlmsf-form-status"></div>
        
        <form id="nlmsf-contact-form" class="nlmsf-form">
            <div class="nlmsf-form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="nlmsf-form-group">
                    <label for="nlmsf-name">Name <span style="color: #e53e3e;">*</span></label>
                    <input type="text" id="nlmsf-name" name="name" class="nlmsf-form-control" required>
                </div>
                
                <div class="nlmsf-form-group">
                    <label for="nlmsf-email">Email <span style="color: #e53e3e;">*</span></label>
                    <input type="email" id="nlmsf-email" name="email" class="nlmsf-form-control" required>
                </div>
            </div>
            
            <?php if ($atts['show_phone'] === 'yes') : ?>
            <div class="nlmsf-form-group">
                <label for="nlmsf-phone">Phone</label>
                <input type="tel" id="nlmsf-phone" name="phone" class="nlmsf-form-control">
            </div>
            <?php endif; ?>
            
            <div class="nlmsf-form-group">
                <label for="nlmsf-subject">Subject <span style="color: #e53e3e;">*</span></label>
                <select id="nlmsf-subject" name="subject" class="nlmsf-form-control" required>
                    <option value="general">General Inquiry</option>
                    <option value="support">Patient Support</option>
                    <option value="research">Research Information</option>
                    <option value="donation">Donation Question</option>
                    <option value="volunteer">Volunteer Interest</option>
                </select>
            </div>
            
            <div class="nlmsf-form-group">
                <label for="nlmsf-message">Message <span style="color: #e53e3e;">*</span></label>
                <textarea id="nlmsf-message" name="message" class="nlmsf-form-control" rows="5" required></textarea>
            </div>
            
            <?php if ($atts['show_newsletter'] === 'yes') : ?>
            <div class="nlmsf-form-check">
                <input type="checkbox" id="nlmsf-newsletter" name="newsletter">
                <label for="nlmsf-newsletter">Yes, I'd like to receive the newsletter and updates</label>
            </div>
            <?php endif; ?>
            
            <div class="nlmsf-form-check">
                <input type="checkbox" id="nlmsf-privacy" name="privacy" required>
                <label for="nlmsf-privacy">I agree to the privacy policy <span style="color: #e53e3e;">*</span></label>
            </div>
            
            <div class="nlmsf-form-group">
                <button type="submit" class="nlmsf-btn nlmsf-btn-primary">
                    <i class="fas fa-paper-plane"></i> Send Message
                </button>
            </div>
        </form>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('nlmsf_contact_form', 'nlmsf_contact_form_shortcode');

/**
 * Register the REST API endpoint for contact form submissions
 */
function nlmsf_register_contact_form_endpoint() {
    register_rest_route('nlmsf/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'nlmsf_handle_contact_form_submission',
        'permission_callback' => '__return_true' // Always allow access to endpoint, validation happens inside
    ));
}
add_action('rest_api_init', 'nlmsf_register_contact_form_endpoint');

/**
 * Handle the contact form submission and send via Resend API
 *
 * @param WP_REST_Request $request The request object
 * @return WP_REST_Response The response
 */
function nlmsf_handle_contact_form_submission($request) {
    // Verify nonce if needed for extra security
    // $nonce = $request->get_header('X-WP-Nonce');
    // if (!wp_verify_nonce($nonce, 'wp_rest')) {
    //     return new WP_REST_Response([
    //         'success' => false,
    //         'message' => 'Invalid security token'
    //     ], 403);
    // }
    
    // Get form data
    $params = $request->get_params();
    
    // Validate required fields
    if (empty($params['name']) || empty($params['email']) || empty($params['message'])) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Please fill all required fields'
        ), 400);
    }
    
    // Extract form fields
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone = !empty($params['phone']) ? sanitize_text_field($params['phone']) : '';
    $subject_type = !empty($params['subject']) ? sanitize_text_field($params['subject']) : 'general';
    $message = sanitize_textarea_field($params['message']);
    $newsletter = isset($params['newsletter']) && $params['newsletter'] === true;
    
    // Build subject line based on form selection
    $subject_line = 'NLMSF Contact Form: ';
    switch ($subject_type) {
        case 'general':
            $subject_line .= 'General Inquiry';
            break;
        case 'support':
            $subject_line .= 'Patient Support Request';
            break;
        case 'research':
            $subject_line .= 'Research Information Request';
            break;
        case 'donation':
            $subject_line .= 'Donation Question';
            break;
        case 'volunteer':
            $subject_line .= 'Volunteer Interest';
            break;
        default:
            $subject_line .= 'Website Contact';
    }
    
    // Set up newsletter text if checked
    $newsletter_text = $newsletter 
        ? '<p><strong>Newsletter Signup:</strong> Yes, please add this contact to the newsletter list.</p>' 
        : '';
    
    // Get Resend API key from wp-config.php (never exposed to frontend)
    $resend_api_key = defined('RESEND_API_KEY') ? RESEND_API_KEY : '';
    
    if (empty($resend_api_key)) {
        error_log('Resend API key not configured');
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Email service not configured'
        ), 500);
    }
    
    // Set up email content
    $email_content = '
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6a3ea1;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ' . esc_html($name) . '</p>
          <p><strong>Email:</strong> ' . esc_html($email) . '</p>
          ' . ($phone ? '<p><strong>Phone:</strong> ' . esc_html($phone) . '</p>' : '') . '
          <p><strong>Subject:</strong> ' . esc_html($subject_line) . '</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8fafc; border-left: 4px solid #6a3ea1;">
            <h3 style="margin-top: 0; color: #1e293b;">Message:</h3>
            <p style="white-space: pre-wrap;">' . esc_html($message) . '</p>
          </div>
          
          ' . $newsletter_text . '
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
            This message was sent from the NLMSF website contact form on ' . current_time('F j, Y g:i a') . '
          </p>
        </div>
    ';
    
    // Auto-reply email content
    $auto_reply_content = '
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6a3ea1;">Thank You for Contacting Us</h2>
          
          <p>Dear ' . esc_html($name) . ',</p>
          
          <p>Thank you for reaching out to the National Leiomyosarcoma Foundation. We\'ve received your message and will respond as soon as possible.</p>
          
          <p>If you have an urgent need, please call our support line at (800) 555-1234.</p>
          
          <div style="margin: 30px 0 20px; padding: 15px; background-color: #f0f4ff; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e293b;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ' . esc_html($subject_line) . '</p>
          </div>
          
          ' . ($newsletter ? '<p>We\'ve also added you to our newsletter list. You\'ll receive updates about our latest research, events, and resources.</p>' : '') . '
          
          <p>Warm regards,<br>The NLMSF Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 12px; color: #64748b;">
              National Leiomyosarcoma Foundation<br>
              123 Foundation Way, Suite 400<br>
              (800) 555-1234<br>
              info@nlmsf.org
            </p>
          </div>
        </div>
    ';
    
    // Setup the API request
    $site_name = get_bloginfo('name');
    
    try {
        // Send notification email to admin
        $notification_result = nlmsf_send_resend_email([
            'from' => 'NLMSF Contact <noreply@nlmsf.org>',
            'to' => ['info@nlmsf.org'],
            'subject' => $subject_line,
            'reply_to' => $email,
            'html' => $email_content
        ], $resend_api_key);
        
        // Send auto-reply to user
        $autoreply_result = nlmsf_send_resend_email([
            'from' => 'National Leiomyosarcoma Foundation <noreply@nlmsf.org>',
            'to' => [$email],
            'subject' => 'Thank you for contacting NLMSF',
            'html' => $auto_reply_content
        ], $resend_api_key);
        
        if ($newsletter) {
            // Here you could also add the user to your newsletter system
            // This is where you'd integrate with your mailing list provider
        }
        
        if (!$notification_result || !$autoreply_result) {
            return new WP_REST_Response([
                'success' => false,
                'message' => 'Failed to send email'
            ], 500);
        }
        
        return new WP_REST_Response([
            'success' => true,
            'message' => 'Email sent successfully'
        ], 200);
        
    } catch (Exception $e) {
        error_log('Resend API error: ' . $e->getMessage());
        return new WP_REST_Response([
            'success' => false,
            'message' => 'Failed to send email'
        ], 500);
    }
}

/**
 * Send email via Resend API
 *
 * @param array $email_data Email data (from, to, subject, html)
 * @param string $api_key Resend API key
 * @return bool Success status
 */
function nlmsf_send_resend_email($email_data, $api_key) {
    $response = wp_remote_post('https://api.resend.com/emails', [
        'headers' => [
            'Authorization' => 'Bearer ' . $api_key,
            'Content-Type' => 'application/json'
        ],
        'body' => json_encode($email_data)
    ]);
    
    if (is_wp_error($response)) {
        error_log('Resend API error: ' . $response->get_error_message());
        return false;
    }
    
    $response_code = wp_remote_retrieve_response_code($response);
    if ($response_code < 200 || $response_code >= 300) {
        error_log('Resend API error: HTTP ' . $response_code);
        return false;
    }
    
    return true;
}

/**
 * Add the Resend API key constant definition to wp-config.php
 * This code won't actually execute - it's guidance for adding to wp-config.php
 */
/* 
// Add this to wp-config.php
define('RESEND_API_KEY', 'your_resend_api_key_here'); 
*/
