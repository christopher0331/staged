/**
 * Contact Form Handler for WordPress Integration
 * This script handles the client-side form submission that connects to the WordPress REST API.
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitButton = document.getElementById('submitButton');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Change button state to loading
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      formStatus.innerHTML = '';
      
      // Collect form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone')?.value || '',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter')?.checked || false
      };
      
      // Send data to WordPress REST API
      fetch('/wp-json/nlmsf/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': wpApiSettings.nonce // WordPress provides this nonce automatically
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        if (data.success) {
          // Show success message
          formStatus.innerHTML = `
            <div class="alert alert-success">
              <i class="fas fa-check-circle"></i> 
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          `;
          
          // Reset form
          contactForm.reset();
        } else {
          // Show error message
          formStatus.innerHTML = `
            <div class="alert alert-error">
              <i class="fas fa-exclamation-circle"></i> 
              ${data.message || 'Something went wrong. Please try again.'}
            </div>
          `;
        }
      })
      .catch(error => {
        // Reset button state and show error
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        formStatus.innerHTML = `
          <div class="alert alert-error">
            <i class="fas fa-exclamation-circle"></i> 
            An error occurred. Please try again later.
          </div>
        `;
        console.error('Form submission error:', error);
      });
    });
  }
  
  // Handle FAQ toggles
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all items first
        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('open');
        });
        
        // If the clicked item wasn't already open, open it
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }
});
