document.addEventListener('DOMContentLoaded', function() {
    // Get all scroll containers and buttons
    const containers = document.querySelectorAll('.product-row-container');
    
    containers.forEach(container => {
        const scrollRow = container.querySelector('.product-row.five-items');
        const leftBtn = container.querySelector('.scroll-left');
        const rightBtn = container.querySelector('.scroll-right');
        
        // Skip if any element is missing
        if (!scrollRow || !leftBtn || !rightBtn) return;
        
        // Calculate the width of one item (including margins)
        const scrollAmount = scrollRow.querySelector('.product-card').offsetWidth + 16; // 16px is our margin
        
        // Initially check if we're at the start or end
        checkScrollPosition();
        
        // Add click event listeners for the buttons
        leftBtn.addEventListener('click', () => {
            scrollRow.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScrollPosition, 350); // Check after scroll animation completes
        });
        
        rightBtn.addEventListener('click', () => {
            scrollRow.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScrollPosition, 350); // Check after scroll animation completes
        });
        
        // Check scroll position to show/hide buttons
        scrollRow.addEventListener('scroll', checkScrollPosition);
        window.addEventListener('resize', checkScrollPosition);
        
        function checkScrollPosition() {
            // Check if at start
            if (scrollRow.scrollLeft <= 0) {
                leftBtn.classList.add('disabled');
            } else {
                leftBtn.classList.remove('disabled');
            }
            
            // Check if at end
            const maxScrollLeft = scrollRow.scrollWidth - scrollRow.clientWidth;
            if (scrollRow.scrollLeft >= maxScrollLeft - 5) { // 5px buffer for precision
                rightBtn.classList.add('disabled');
            } else {
                rightBtn.classList.remove('disabled');
            }
        }
    });
});
