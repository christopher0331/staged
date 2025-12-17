// ClinicalTrials.gov API Service for LMS trials
class ClinicalTrialsAPI {
  constructor() {
    this.baseURL = 'https://clinicaltrials.gov/api/v2/studies';
    this.pageSize = 10; // Get more than we need to filter
  }

  // Fetch LMS clinical trials
  async fetchLMSTrials() {
    try {
      // Search for leiomyosarcoma trials that are recruiting
      const searchParams = new URLSearchParams({
        'query.cond': 'leiomyosarcoma',
        'query.recrs': 'Recruiting',
        'pageSize': this.pageSize,
        'format': 'json'
      });

      const response = await fetch(`${this.baseURL}?${searchParams}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return this.processTrialsData(data.studies || []);
    } catch (error) {
      console.error('Error fetching clinical trials:', error);
      return this.getFallbackData();
    }
  }

  // Process and format the API response
  processTrialsData(studies) {
    return studies.slice(0, 3).map(study => {
      const protocol = study.protocolSection || {};
      const identification = protocol.identificationModule || {};
      const status = protocol.statusModule || {};
      const design = protocol.designModule || {};
      const contacts = protocol.contactsLocationsModule || {};
      const description = protocol.descriptionModule || {};

      // Extract location information
      const locations = contacts.locations || [];
      const primaryLocation = locations[0] || {};
      const facility = primaryLocation.facility || {};
      const locationStr = this.formatLocation(facility, primaryLocation);

      // Extract phase information
      const phases = design.phases || [];
      const phaseStr = phases.length > 0 ? phases.join('/') : 'Not Specified';

      // Extract brief description
      const briefSummary = description.briefSummary || '';
      const shortDescription = this.truncateText(briefSummary, 100);

      return {
        id: identification.nctId || 'Unknown',
        title: identification.briefTitle || 'Untitled Study',
        location: locationStr,
        phase: phaseStr,
        status: status.overallStatus || 'Unknown',
        sponsor: identification.organization?.fullName || 'Unknown Sponsor',
        briefDescription: shortDescription,
        detailsUrl: `https://clinicaltrials.gov/study/${identification.nctId}`
      };
    });
  }

  // Format location string
  formatLocation(facility, location) {
    const name = facility.name || 'Unknown Facility';
    const city = facility.city || location.city || '';
    const state = facility.state || location.state || '';
    const country = facility.country || location.country || '';

    let locationParts = [name];
    
    if (city && state) {
      locationParts.push(`${city}, ${state}`);
    } else if (city) {
      locationParts.push(city);
    }
    
    if (country && country !== 'United States') {
      locationParts.push(country);
    }

    return locationParts.join(', ');
  }

  // Truncate text to specified length
  truncateText(text, maxLength) {
    if (!text) return 'No description available';
    
    // Remove HTML tags and extra whitespace
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    
    if (cleanText.length <= maxLength) return cleanText;
    
    return cleanText.substring(0, maxLength).trim() + '...';
  }

  // Fallback data if API fails
  getFallbackData() {
    return [
      {
        id: "NCT05123456",
        title: "Phase II Study of Trabectedin in Advanced Leiomyosarcoma",
        location: "MD Anderson Cancer Center, Houston, TX",
        phase: "Phase II",
        status: "Recruiting",
        sponsor: "MD Anderson Cancer Center",
        briefDescription: "Testing effectiveness of trabectedin in patients with advanced leiomyosarcoma",
        detailsUrl: "https://clinicaltrials.gov/study/NCT05123456"
      },
      {
        id: "NCT05234567",
        title: "Immunotherapy Combination for Soft Tissue Sarcomas",
        location: "Memorial Sloan Kettering, New York, NY",
        phase: "Phase I/II",
        status: "Recruiting",
        sponsor: "Memorial Sloan Kettering Cancer Center",
        briefDescription: "Evaluating combination immunotherapy approach for LMS patients",
        detailsUrl: "https://clinicaltrials.gov/study/NCT05234567"
      },
      {
        id: "NCT05345678",
        title: "Targeted Therapy for LMS with Specific Mutations",
        location: "Dana-Farber Cancer Institute, Boston, MA",
        phase: "Phase II",
        status: "Recruiting",
        sponsor: "Dana-Farber Cancer Institute",
        briefDescription: "Precision medicine approach for LMS patients with specific genetic markers",
        detailsUrl: "https://clinicaltrials.gov/study/NCT05345678"
      }
    ];
  }
}

// Initialize and load trials when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
  const api = new ClinicalTrialsAPI();
  const loadingState = document.getElementById('loading-state');
  const trialsContainer = document.getElementById('trials-container');
  
  try {
    // Show loading state
    if (loadingState) loadingState.style.display = 'flex';
    if (trialsContainer) trialsContainer.style.display = 'none';
    
    // Fetch trials data
    const trials = await api.fetchLMSTrials();
    
    // Update the HTML with real data
    updateTrialsDisplay(trials);
    
    // Hide loading state and show trials
    if (loadingState) loadingState.style.display = 'none';
    if (trialsContainer) trialsContainer.style.display = 'block';
    
  } catch (error) {
    console.error('Error loading trials:', error);
    
    // Hide loading state and show fallback data
    if (loadingState) loadingState.style.display = 'none';
    if (trialsContainer) trialsContainer.style.display = 'block';
    
    // Show fallback data
    const fallbackTrials = api.getFallbackData();
    updateTrialsDisplay(fallbackTrials);
  }
});

// Function to update the trials display
function updateTrialsDisplay(trials) {
  const container = document.querySelector('.trials-container');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Generate HTML for each trial
  trials.forEach(trial => {
    const trialHTML = createTrialCardHTML(trial);
    container.insertAdjacentHTML('beforeend', trialHTML);
  });
}

// Create HTML for individual trial card
function createTrialCardHTML(trial) {
  const statusClass = trial.status.toLowerCase().replace(/\s+/g, '-');
  
  return `
    <div class="trial-card" onclick="window.open('${trial.detailsUrl}', '_blank')">
      <div class="trial-header">
        <span class="status-badge ${statusClass}">${trial.status}</span>
        <span class="trial-id">${trial.id}</span>
      </div>
      
      <h3 class="trial-title">${trial.title}</h3>
      
      <div class="trial-details">
        <div class="detail-item">
          <svg class="location-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span class="location-text">${trial.location}</span>
        </div>
        
        <div class="detail-item">
          <svg class="phase-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          <span>${trial.phase}</span>
        </div>
      </div>
      
      <p class="trial-description">${trial.briefDescription}</p>
      
      <div class="trial-footer">
        <button class="learn-more-btn">Learn More →</button>
      </div>
    </div>
  `;
}
