/**
 * NLMSF Menu Dropdown Click Functionality
 * 
 * This script implements click-based dropdown menus instead of hover-based.
 * This enables better mobile support and accessibility.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all dropdown menu items
  const dropdownItems = document.querySelectorAll('.nlmsf-has-dropdown');
  
  // Add click event listeners to each dropdown menu item
  dropdownItems.forEach(item => {
    const menuLink = item.querySelector('.nlmsf-menu-link');
    
    if (menuLink) {
      // Toggle active class on menu item click
      menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling up
        
        // Check if this item is already active
        const isActive = item.classList.contains('active');
        
        // Close all other open dropdowns
        dropdownItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle the clicked dropdown - if it was active, it's now closed
        // if it wasn't active, it's now open
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
    
    // Allow normal navigation for links within the dropdown
    const dropdownLinks = item.querySelectorAll('.nlmsf-dropdown-link');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Allow the navigation to proceed naturally
        e.stopPropagation();
      });
    });
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
  
  // Mobile menu functionality
  const mobileToggle = document.querySelector('.nlmsf-mobile-toggle');
  const mobileClose = document.querySelector('.nlmsf-mobile-close');
  const mobileNav = document.querySelector('.nlmsf-mobile-nav');
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function() {
      mobileNav.classList.add('active');
      document.body.classList.add('menu-open');
    });
  }
  
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  }
  
  // Mobile dropdown toggles
  const mobileDropdowns = document.querySelectorAll('.nlmsf-mobile-dropdown');
  mobileDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nlmsf-dropdown-toggle');
    const submenu = dropdown.querySelector('.nlmsf-mobile-submenu-wrapper');
    
    if (toggle && submenu) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle the open class
        dropdown.classList.toggle('open');
        
        // Toggle the display of the submenu
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'block';
        }
      });
    }
  });
});
