// Education Videos JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-button');
  const videoGrid = document.getElementById('videoGrid');
  let allVideos = [];
  let currentCategory = 'all';

  // Load videos from backend
  loadVideos();

  // Category filtering
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      currentCategory = category;
      
      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter and display videos
      filterAndDisplayVideos();
    });
  });

  // Load videos from backend
  async function loadVideos() {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/wp-json/nlmsf/v1/education-videos');
      if (response.ok) {
        allVideos = await response.json();
      } else {
        // Fallback to sample data if API is not available
        allVideos = getSampleVideos();
      }
    } catch (error) {
      console.error('Error loading videos:', error);
      // Fallback to sample data
      allVideos = getSampleVideos();
    }
    
    filterAndDisplayVideos();
    updateCategoryCounts();
  }

  // Sample data fallback
  function getSampleVideos() {
    return [
      {
        id: 1,
        title: "ABC's of a New Diagnosis",
        category: "patient-education",
        youtube_url: "https://youtu.be/9pnKTkzqOw0",
        duration: "19:32",
        description: "A practical walk-through of what a new LMS diagnosis means, key questions to ask, and how to prepare for next steps.",
        featured: true,
        created_at: "2025-11-01"
      },
      {
        id: 2,
        title: "Clinical Trials Perspectives: Panel Discussion",
        category: "medical-research",
        youtube_url: "https://youtu.be/ioL0850rt7A",
        duration: "28:10",
        description: "Sarcoma medical oncologists discuss how clinical trials work, who they are for, and what patients should consider.",
        featured: false,
        created_at: "2025-10-15"
      },
      {
        id: 3,
        title: "Specializing in Leiomyosarcoma – Dr. Elise Nassif-Haddad",
        category: "patient-education",
        youtube_url: "https://www.youtube.com/watch?v=XjP7FQ6bdNg",
        duration: "16:04",
        description: "Dr. Elise Nassif-Haddad, Sarcoma Medical Oncologist at MD Anderson Cancer Center, shares her focus on leiomyosarcoma care and expertise.",
        featured: false,
        created_at: "2025-11-06"
      },
      {
        id: 4,
        title: "Caregiving Counts – Guidance and Support",
        category: "caregiver-support",
        youtube_url: "https://youtu.be/EhYR2LHtSdU",
        duration: "21:05",
        description: "Caregiving Counts offers practical guidance, encouragement, and perspectives for new and experienced caregivers supporting someone with LMS.",
        featured: false,
        created_at: "2025-11-18"
      }
    ];
  }

  // Filter and display videos based on current category
  function filterAndDisplayVideos() {
    const filteredVideos = currentCategory === 'all' 
      ? allVideos 
      : allVideos.filter(video => video.category === currentCategory);
    
    if (filteredVideos.length === 0) {
      videoGrid.innerHTML = `
        <div class="no-videos-message">
          <div class="no-videos-icon">
            <i class="fas fa-video"></i>
          </div>
          <h3>No videos in this category</h3>
          <p>Videos will appear here once they are added to this category.</p>
        </div>
      `;
      return;
    }

    // Sort videos: featured first, then by creation date
    const sortedVideos = filteredVideos.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.created_at) - new Date(a.created_at);
    });

    const videosHTML = sortedVideos.map(video => createVideoCard(video)).join('');
    videoGrid.innerHTML = videosHTML;

    // Re-bind click events for the new video cards
    bindVideoCardEvents();
  }

  // Create video card HTML
  function createVideoCard(video) {
    const videoId = extractVideoId(video.youtube_url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const categoryName = getCategoryName(video.category);
    const featuredBadge = video.featured ? '<span class="featured-badge">Featured</span>' : '';
    
    return `
      <div class="video-card" data-category="${video.category}" data-video-id="${videoId}">
        <div class="video-thumbnail">
          <img src="${thumbnailUrl}" alt="${video.title}" onerror="this.src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg'">
          <div class="play-button">
            <i class="fas fa-play"></i>
          </div>
          <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-info">
          <h4 class="video-title">
            ${video.title}
            ${featuredBadge}
          </h4>
          <p class="video-description">${video.description}</p>
          <div class="video-meta">
            <span class="video-category">${categoryName}</span>
            <span class="video-date">
              <i class="fas fa-calendar"></i>
              ${new Date(video.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  // Bind click events to video cards
  function bindVideoCardEvents() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
      card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const title = this.querySelector('.video-title').textContent.replace('Featured', '').trim();
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        
        openVideoModal(title, embedUrl, youtubeUrl);
      });
    });
  }

  // Update category counts
  function updateCategoryCounts() {
    const counts = {
      'all': allVideos.length,
      'patient-education': allVideos.filter(v => v.category === 'patient-education').length,
      'medical-research': allVideos.filter(v => v.category === 'medical-research').length,
      'caregiver-support': allVideos.filter(v => v.category === 'caregiver-support').length,
      'webinars': allVideos.filter(v => v.category === 'webinars').length
    };

    categoryButtons.forEach(button => {
      const category = button.getAttribute('data-category');
      const countElement = button.querySelector('.category-count');
      if (countElement) {
        countElement.textContent = counts[category] || 0;
      }
    });
  }

  // Utility functions
  function extractVideoId(url) {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  }

  function getCategoryName(category) {
    const categories = {
      'patient-education': 'Patient Education',
      'medical-research': 'Medical Research',
      'caregiver-support': 'Caregiver Support',
      'webinars': 'Webinars'
    };
    return categories[category] || category;
  }

  function openVideoModal(title, embedUrl, youtubeUrl) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoIframe = document.getElementById('videoIframe');
    const youtubeLink = document.getElementById('youtubeLink');
    const shareLink = document.getElementById('shareLink');
    
    modalTitle.textContent = title;
    videoIframe.src = embedUrl;
    youtubeLink.href = youtubeUrl;
    shareLink.href = youtubeUrl;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  window.closeVideoModal = function() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    videoModal.classList.remove('open');
    videoIframe.src = '';
    document.body.style.overflow = '';
  };

  // Close modal on backdrop click
  const videoModal = document.getElementById('videoModal');
  if (videoModal) {
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('open')) {
      closeVideoModal();
    }
  });
});
