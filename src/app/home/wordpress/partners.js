// Partners Carousel and Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const carousel = document.querySelector('.partners-carousel');
    const slides = document.querySelectorAll('.partners-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicators = document.querySelector('.carousel-indicators');
    const viewAllButton = document.querySelector('.view-all-button');
    const partnersModal = document.querySelector('.partners-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const closeButton = document.querySelector('.close-button');
    
    // Variables
    let currentSlide = 0;
    let slideCount = slides.length;
    let autoSlideInterval;
    
    // Create indicators
    if (indicators && slideCount > 0) {
        for (let i = 0; i < slideCount; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            indicator.setAttribute('aria-label', `Go to slide ${i+1}`);
            indicator.dataset.slideIndex = i;
            
            if (i === 0) {
                indicator.classList.add('active');
            }
            
            indicator.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.slideIndex));
            });
            
            indicators.appendChild(indicator);
        }
    }
    
    // Initialize auto-sliding
    startAutoSlide();
    
    // Event Listeners
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (viewAllButton) {
        viewAllButton.addEventListener('click', openModal);
    }
    
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside content
    if (partnersModal) {
        partnersModal.addEventListener('click', function(e) {
            if (e.target === partnersModal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && partnersModal.classList.contains('open')) {
            closeModal();
        }
    });
    
    // Pause auto-sliding when hovering over carousel
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            stopAutoSlide();
        });
        
        carousel.addEventListener('mouseleave', function() {
            startAutoSlide();
        });
    }
    
    // Functions
    function goToSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        
        const allIndicators = document.querySelectorAll('.indicator');
        allIndicators.forEach(ind => ind.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        
        if (allIndicators[index]) {
            allIndicators[index].classList.add('active');
        }
        
        // Update current slide index
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        goToSlide(prevIndex);
    }
    
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    function openModal() {
        if (partnersModal) {
            partnersModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModal() {
        if (partnersModal) {
            partnersModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
});
