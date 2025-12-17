// NLMSF Testimonials Page - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Testimonials data - this would normally be loaded from a database
  const testimonials = [
    {
      "Name": "Dr. M. Druta",
      "TestimonialText": "\"You are doing so much for so many\" You should be proud of all you have accomplished within the Foundation.\"",
      "Type": "Research Clinician",
      "ImageURL": "https://nlmsf.org/wp-content/uploads/2021/02/DR-Durta-150x150.jpg"
    },
    {
      "Name": "Dr. Sant Chawla",
      "TestimonialText": "\"NLMSF is recommended for patients and care givers looking for information on Leiomyosarcoma.\"",
      "Type": "Research Clinician",
      "ImageURL": "https://nlmsf.org/wp-content/uploads/2021/02/sant_chawla-150x150.jpg"
    },
    {
      "Name": "Dr. Raphael Pollock",
      "TestimonialText": "The NLSMF provides a vital link between the community, including LMS patients, and the oncology researchers who work tirelessly to help develop a better understanding of this rare disease, with the direct intent to provide sorely needed new therapeutic approaches. The LMS Research Roundtable process provides this unique and heretofore mission function, and for this reason we are so very grateful to Annie and Mitch Achee for providing the inspiration and resources needed to forge this connection.",
      "Type": "Research Clinician",
      "ImageURL": "https://nlmsf.org/wp-content/uploads/2021/02/Dr-pollack.jpg"
    },
    // Additional testimonials will be added through the WordPress admin interface
  ];
  
  // More testimonials would be added here

  // Function to initialize the page
  function initTestimonials() {
    displayTestimonials();
    setupModal();
  }

  // Function to display testimonials
  function displayTestimonials() {
    // Filter testimonials by type
    const clinicianTestimonials = testimonials.filter(t => t.Type === "Research Clinician");
    const patientTestimonials = testimonials.filter(t => t.Type === "Patient");
    
    // Get container elements
    const clinicianGrid = document.querySelector('.nlmsf-section-clinicians .nlmsf-testimonials-grid');
    const patientGrid = document.querySelector('.nlmsf-section-patients .nlmsf-testimonials-grid');
    
    // Display testimonials by type
    clinicianTestimonials.forEach(testimonial => {
      if (clinicianGrid) {
        clinicianGrid.appendChild(createTestimonialCard(testimonial));
      }
    });
    
    patientTestimonials.forEach(testimonial => {
      if (patientGrid) {
        patientGrid.appendChild(createTestimonialCard(testimonial));
      }
    });
  }

  // Function to create testimonial card
  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'nlmsf-testimonial-card';
    
    // Determine if testimonial text needs truncation (more than ~240 characters)
    const needsTruncation = testimonial.TestimonialText.length > 240;
    
    // Create card HTML
    const imageHTML = testimonial.ImageURL ? 
      `<img src="${testimonial.ImageURL}" alt="${testimonial.Name}">` : 
      `<span class="nlmsf-testimonial-image-placeholder">❤️</span>`;
    
    card.innerHTML = `
      <div class="nlmsf-testimonial-header">
        <div class="nlmsf-testimonial-image ${!testimonial.ImageURL ? 'purple-heart' : ''}">
          ${imageHTML}
        </div>
        <div class="nlmsf-testimonial-info">
          <h3 class="nlmsf-testimonial-name">${testimonial.Name}</h3>
          <p class="nlmsf-testimonial-type">${testimonial.Type}</p>
        </div>
      </div>
      <div class="nlmsf-testimonial-content">
        <p class="nlmsf-testimonial-text">${testimonial.TestimonialText}</p>
        ${needsTruncation ? '<button class="nlmsf-read-more">Read More</button>' : ''}
      </div>
    `;
    
    // Add click event for "Read More" button
    if (needsTruncation) {
      const readMoreBtn = card.querySelector('.nlmsf-read-more');
      readMoreBtn.addEventListener('click', function() {
        showModal(testimonial);
      });
    }
    
    return card;
  }

  // Modal functionality
  function setupModal() {
    const modal = document.getElementById('testimonial-modal');
    const closeBtn = modal.querySelector('.nlmsf-modal-close');
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
      closeModal();
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }

  // Function to show modal with full testimonial
  function showModal(testimonial) {
    const modal = document.getElementById('testimonial-modal');
    const modalName = document.getElementById('modal-testimonial-name');
    const modalType = document.getElementById('modal-testimonial-type');
    const modalContent = document.getElementById('modal-testimonial-content');
    
    // Set modal content
    modalName.textContent = testimonial.Name;
    modalType.textContent = testimonial.Type;
    modalContent.innerHTML = `<p>${testimonial.TestimonialText}</p>`;
    
    // Show modal
    modal.style.display = 'flex';
    setTimeout(function() {
      modal.classList.add('show');
    }, 10);
    
    // Disable page scrolling
    document.body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeModal() {
    const modal = document.getElementById('testimonial-modal');
    
    // Hide modal with animation
    modal.classList.remove('show');
    setTimeout(function() {
      modal.style.display = 'none';
    }, 300);
    
    // Re-enable page scrolling
    document.body.style.overflow = '';
  }

  // Initialize the page
  initTestimonials();
});
