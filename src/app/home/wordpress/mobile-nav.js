// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.nlmsf-mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileCloseBtn = document.querySelector('.nlmsf-mobile-close');
  const body = document.body;
  
  // Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    mobileNav.classList.add('active');
    body.classList.add('menu-open');
  });
  
  // Close mobile menu
  mobileCloseBtn.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    body.classList.remove('menu-open');
  });
  
  // Handle mobile accordion dropdowns
  const mobileAccordions = document.querySelectorAll('.nlmsf-mobile-accordion');
  
  mobileAccordions.forEach(accordion => {
    const toggle = accordion.querySelector('.nlmsf-mobile-accordion-toggle');
    const content = accordion.querySelector('.nlmsf-mobile-accordion-content');
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle active class
      accordion.classList.toggle('active');
      
      // Toggle content visibility
      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});
