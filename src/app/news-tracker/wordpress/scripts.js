/**
 * NLMSF News Tracker Dropdown Functionality
 * 
 * This script handles the dropdown functionality for the NLMSF News Tracker page,
 * allowing users to expand and collapse sections of newsletters by year.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Find all view more buttons
    const viewMoreButtons = document.querySelectorAll('.nlmsf-view-more-button');
    
    // Add click event to each button
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the year from the button's data attribute
            const year = this.getAttribute('data-year');
            
            // Find the corresponding additional newsletters section
            const additionalSection = document.getElementById('additional-' + year);
            
            // Toggle visibility
            if (additionalSection.classList.contains('nlmsf-hidden')) {
                // Expand section
                additionalSection.classList.remove('nlmsf-hidden');
                this.setAttribute('aria-expanded', 'true');
                this.innerHTML = 'View Less ' + year + ' News Trackers <svg xmlns="http://www.w3.org/2000/svg" class="nlmsf-chevron-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
            } else {
                // Collapse section
                additionalSection.classList.add('nlmsf-hidden');
                this.setAttribute('aria-expanded', 'false');
                this.innerHTML = 'View More ' + year + ' News Trackers <svg xmlns="http://www.w3.org/2000/svg" class="nlmsf-chevron-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
            }
        });
    });
});
