/**
 * NLMSF Menu Dropdown Click Functionality
 * 
 * This script converts hover-based dropdown menus to click-based ones.
 * This prevents the issue where the dropdown disappears when trying to click on items.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all dropdown menu items
  const dropdownItems = document.querySelectorAll('.nlmsf-has-dropdown');
  
  // Add click event listeners to each dropdown menu item
  dropdownItems.forEach(item => {
    const menuLink = item.querySelector('.nlmsf-menu-link');
    
    if (menuLink) {
      // Completely cancel navigation on dropdown items
      menuLink.setAttribute('data-href', menuLink.getAttribute('href'));
      menuLink.setAttribute('href', 'javascript:void(0);');
      
      // Toggle active class on menu item click
      menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling up
        
        // Close all other open dropdowns
        dropdownItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle the clicked dropdown
        item.classList.toggle('active');
      });
    }
    
    // Prevent clicks within the dropdown from closing it
    const dropdown = item.querySelector('.nlmsf-dropdown');
    if (dropdown) {
      dropdown.addEventListener('click', function(e) {
        // Stop event propagation for all clicks inside dropdown except links
        const target = e.target;
        if (!target.classList.contains('nlmsf-dropdown-link')) {
          e.stopPropagation();
        }
      });
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    // Make sure we're not clicking on a dropdown menu item
    if (!e.target.closest('.nlmsf-has-dropdown')) {
      dropdownItems.forEach(item => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
    }
  });
});
