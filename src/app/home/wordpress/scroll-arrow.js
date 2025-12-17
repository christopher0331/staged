/**
 * Scroll Arrow Animation
 * 
 * This script handles the scroll-down arrow animation and visibility
 * based on the user's scroll position.
 */

document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.getElementById('scroll-down-arrow');
    
    // Handle arrow visibility based on scroll position
    function handleScrollArrowVisibility() {
        if (window.scrollY > 100) {
            scrollArrow.classList.add('hidden');
        } else {
            scrollArrow.classList.remove('hidden');
        }
    }
    
    // Scroll to content when arrow is clicked
    function scrollToContent() {
        const emergencySupportBar = document.querySelector('.emergency-support-bar');
        if (emergencySupportBar) {
            emergencySupportBar.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Check initial scroll position
    handleScrollArrowVisibility();
    
    // Add event listeners
    window.addEventListener('scroll', handleScrollArrowVisibility);
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', scrollToContent);
    }
});
