// News Tracker - View More Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all view more buttons
    const viewMoreButtons = document.querySelectorAll('.view-more-button');
    
    // Add click event listener to each button
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target section ID from data attribute
            const targetId = this.getAttribute('data-target');
            
            // Find the target section and its hidden items
            const targetSection = document.getElementById(targetId);
            if (!targetSection) return;
            
            const hiddenItems = targetSection.querySelector('.hidden-items');
            if (!hiddenItems) return;
            
            // Toggle visibility of hidden items
            if (hiddenItems.style.display === 'none' || getComputedStyle(hiddenItems).display === 'none') {
                hiddenItems.style.display = 'grid';
                this.textContent = 'View Less';
            } else {
                hiddenItems.style.display = 'none';
                this.textContent = 'View More';
            }
        });
    });
    
    // Smooth scroll for sidebar navigation links
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only process internal links
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Offset to account for fixed headers
                        behavior: 'smooth'
                    });
                    
                    // Update active state in sidebar
                    document.querySelectorAll('.sidebar-link').forEach(l => {
                        l.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Initial active state based on scroll position
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150; // Offset for fixed header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.sidebar-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Set initial active link
    updateActiveLink();
});
