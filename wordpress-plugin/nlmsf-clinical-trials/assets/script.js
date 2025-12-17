jQuery(document).ready(function($) {
    // Initialize clinical trials loading
    loadClinicalTrials();
    
    function loadClinicalTrials() {
        const loadingState = $('#nlmsf-loading-state');
        const trialsContainer = $('#nlmsf-trials-container');
        const count = trialsContainer.data('count') || 3;
        
        // Show loading state
        loadingState.show();
        trialsContainer.hide();
        
        // Make AJAX request to fetch trials
        $.ajax({
            url: nlmsf_ct_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'fetch_clinical_trials',
                nonce: nlmsf_ct_ajax.nonce,
                count: count
            },
            success: function(response) {
                if (response.success && response.data) {
                    const payload = response.data;
                    const trials = Array.isArray(payload) ? payload : payload.trials;
                    const source = payload && payload.source ? payload.source : (Array.isArray(payload) ? 'legacy' : 'unknown');
                    const apiUrl = payload && payload.apiUrl ? payload.apiUrl : '';

                    // Mark container with source for quick QA
                    $('#nlmsf-trials-container').attr('data-source', source);

                    // Log for debugging to ensure live vs fallback
                    console.log('[NLMSF CT] Trials loaded', { source, apiUrl, count: trials ? trials.length : 0, payload });

                    if (trials && trials.length > 0) {
                        displayTrials(trials);
                    } else {
                        showError('No clinical trials found.');
                    }
                } else {
                    const msg = response && response.data && response.data.error
                        ? `Failed to load: ${response.data.error}`
                        : 'Failed to load clinical trials data.';
                    console.warn('[NLMSF CT] Load error', response);
                    showError(msg);
                }
            },
            error: function() {
                showError('Unable to connect to clinical trials database.');
            },
            complete: function() {
                loadingState.hide();
                trialsContainer.show();
            }
        });
    }
    
    function displayTrials(trials) {
        const container = $('#nlmsf-trials-container');
        container.empty();
        
        if (!trials || trials.length === 0) {
            showError('No clinical trials found.');
            return;
        }
        
        trials.forEach(function(trial) {
            const trialCard = createTrialCard(trial);
            container.append(trialCard);
        });
    }
    
    function createTrialCard(trial) {
        const statusClass = trial.status.toLowerCase().replace(/\s+/g, '-');
        
        const locationText = trial.siteCitiesPreview && trial.siteCitiesPreview.length
            ? trial.siteCitiesPreview
            : trial.location;
        // If no location info, show a clickable span that opens contacts-and-locations
        const locationHtml = (locationText && locationText !== 'Location not specified')
            ? $('<div/>').text(locationText).html() // escape text
            : `<span class="nlmsf-location-link" data-url="${trial.detailsUrl}#contacts-and-locations" role="link" aria-label="Open locations">Locations</span>`;
        const fullCityList = Array.isArray(trial.siteCities) && trial.siteCities.length
            ? trial.siteCities.join(', ')
            : '';

        // Only show phase if it's meaningful
        const hasPhase = trial.phase && typeof trial.phase === 'string' && trial.phase.trim() && trial.phase !== 'Not Specified';
        const phaseBlock = hasPhase ? `
                    <div class="nlmsf-detail-item">
                        <svg class="nlmsf-phase-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <span>${trial.phase}</span>
                    </div>` : '';

        const cardHtml = `
            <a href="${trial.detailsUrl}" target="_blank" rel="noopener noreferrer" class="nlmsf-trial-card">
                <div class="nlmsf-trial-header">
                    <span class="nlmsf-status-badge ${statusClass}">${trial.status}</span>
                    <span class="nlmsf-trial-id">${trial.id}</span>
                </div>
                
                <h3 class="nlmsf-trial-title">${trial.title}</h3>
                
                <div class="nlmsf-trial-details">
                    <div class="nlmsf-detail-item">
                        <svg class="nlmsf-location-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                        <span class="nlmsf-location-text" ${fullCityList ? `title="${fullCityList}"` : ''}>${locationHtml}</span>
                    </div>
                    ${phaseBlock}
                </div>
                
                <p class="nlmsf-trial-description">${trial.briefDescription}</p>
                
                <div class="nlmsf-trial-footer">
                    <button class="nlmsf-learn-more-btn">Learn More →</button>
                </div>
            </a>
        `;
        
        return $(cardHtml);
    }
    
    function showError(message) {
        const container = $('#nlmsf-trials-container');
        const errorHtml = `
            <div class="nlmsf-error-state">
                <h4>Unable to Load Clinical Trials</h4>
                <p>${message}</p>
                <p><small>Please try refreshing the page or contact support if the problem persists.</small></p>
            </div>
        `;
        container.html(errorHtml);
    }
    
    // Add click tracking for analytics (optional)
    $(document).on('click', '.nlmsf-trial-card', function() {
        const trialId = $(this).find('.nlmsf-trial-id').text();
        const trialTitle = $(this).find('.nlmsf-trial-title').text();
        
        // Track click event if analytics is available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'clinical_trial_click', {
                'trial_id': trialId,
                'trial_title': trialTitle
            });
        }
        
        // Track with other analytics platforms if needed
        if (typeof _paq !== 'undefined') {
            _paq.push(['trackEvent', 'Clinical Trials', 'Click', trialId]);
        }
    });

    // Open contacts-and-locations in a new tab without triggering the card link
    $(document).on('click', '.nlmsf-location-link', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const url = $(this).data('url');
        if (url) window.open(url, '_blank', 'noopener');
    });
});
