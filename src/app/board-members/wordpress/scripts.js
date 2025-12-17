// NLMSF Board Members - Modal Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modal = document.getElementById('board-member-modal');
  const modalClose = document.querySelector('.nlmsf-modal-close');
  const modalName = document.getElementById('modal-member-name');
  const modalTitle = document.getElementById('modal-member-title');
  const modalContent = document.getElementById('modal-member-content');
  
  // Get all Read More buttons
  const readMoreButtons = document.querySelectorAll('.nlmsf-read-more');
  
  // Add click event to all Read More buttons
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const memberId = this.getAttribute('data-member');
      const memberCard = document.getElementById(memberId);
      
      if (memberCard) {
        // Get member data
        const memberName = memberCard.querySelector('.nlmsf-member-name').textContent;
        const memberRole = memberCard.querySelector('.nlmsf-member-role').textContent;
        const fullContent = memberCard.querySelector('.nlmsf-member-full-content').innerHTML;
        
        // Populate modal
        modalName.textContent = memberName;
        modalTitle.textContent = memberRole;
        modalContent.innerHTML = fullContent;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
      }
    });
  });
  
  // Close modal when clicking the close button
  modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the modal content
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Function to close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Clear modal content
    setTimeout(() => {
      modalContent.innerHTML = '';
    }, 300); // Wait for transition to complete
  }
});
