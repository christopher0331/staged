/**
 * NLMSF Resend Contact Form
 * Handles form submission and interaction with REST API
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize form handling
    var contactForm = document.getElementById('nlmsf-contact-form');
    var statusDiv = document.getElementById('nlmsf-form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Always prevent default form submission
            e.preventDefault();
            
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Get form data
            var formData = {
                name: document.getElementById('nlmsf-name') ? document.getElementById('nlmsf-name').value : '',
                email: document.getElementById('nlmsf-email') ? document.getElementById('nlmsf-email').value : '',
                phone: document.getElementById('nlmsf-phone') ? document.getElementById('nlmsf-phone').value : '',
                subject: document.getElementById('nlmsf-subject') ? document.getElementById('nlmsf-subject').value : '',
                message: document.getElementById('nlmsf-message') ? document.getElementById('nlmsf-message').value : '',
                newsletter: document.getElementById('nlmsf-newsletter') ? document.getElementById('nlmsf-newsletter').checked : false
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                statusDiv.innerHTML = '<div class="nlmsf-alert nlmsf-alert-error"><i class="fas fa-exclamation-circle"></i> Please fill in all required fields.</div>';
                return false;
            }
            
            // Update button state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Clear previous status
            statusDiv.innerHTML = '<div class="nlmsf-alert nlmsf-alert-info"><i class="fas fa-spinner fa-spin"></i> Sending your message...</div>';
            
            // Send to REST API
            var xhr = new XMLHttpRequest();
            xhr.open('POST', nlmsfResend.restUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('X-WP-Nonce', nlmsfResend.nonce);
            
            xhr.onload = function() {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Success
                    var response = JSON.parse(xhr.responseText);
                    statusDiv.innerHTML = '<div class="nlmsf-alert nlmsf-alert-success"><i class="fas fa-check-circle"></i> Your message has been sent successfully! We\'ll get back to you soon.</div>';
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
                    
                    statusDiv.innerHTML = '<div class="nlmsf-alert nlmsf-alert-error"><i class="fas fa-exclamation-circle"></i> ' + errorMsg + '</div>';
                }
            };
            
            xhr.onerror = function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                statusDiv.innerHTML = '<div class="nlmsf-alert nlmsf-alert-error"><i class="fas fa-exclamation-circle"></i> A network error occurred. Please check your connection and try again.</div>';
            };
            
            xhr.send(JSON.stringify(formData));
            
            // Prevent default form submission navigation
            return false;
        });
    }
    
    // FAQ toggles
    var faqToggles = document.querySelectorAll('.faq-toggle');
    if (faqToggles.length > 0) {
        faqToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                var faqItem = this.closest('.faq-item');
                faqItem.classList.toggle('active');
                
                var icon = this.querySelector('i');
                if (icon) {
                    if (faqItem.classList.contains('active')) {
                        icon.className = 'fas fa-chevron-up';
                    } else {
                        icon.className = 'fas fa-chevron-down';
                    }
                }
            });
        });
    }
});
