// NLMSF Tribute Pages Manager JavaScript

class NLMSFTributeManager {
    constructor() {
        this.currentTributeId = null;
        this.isAdminLoggedIn = false;
        this.adminCredentials = {
            username: 'nlmsf',
            password: 'nlmsf2025!!'
        };
        this.init();
    }

    init() {
        console.log('NLMSF Tribute Manager: Initializing...');
        console.log('NLMSF Tribute Manager: nlmsf_tribute_ajax available:', typeof nlmsf_tribute_ajax !== 'undefined');
        
        if (typeof nlmsf_tribute_ajax !== 'undefined') {
            console.log('NLMSF Tribute Manager: AJAX config:', {
                ajax_url: nlmsf_tribute_ajax.ajax_url,
                nonce: nlmsf_tribute_ajax.nonce,
                upload_url: nlmsf_tribute_ajax.upload_url
            });
        }
        
        // Check if admin is already logged in
        this.checkAdminLogin();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents());
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.bindDisplayEvents();
        this.bindAdminEvents();
    }

    // Frontend Display Events
    bindDisplayEvents() {
        const tributeDisplay = document.querySelector('.nlmsf-tribute-display');
        if (tributeDisplay) {
            const tributeSlug = tributeDisplay.dataset.tributeSlug;
            if (tributeSlug) {
                this.loadTributeBySlug(tributeSlug);
            }
        }

        const tributesListing = document.querySelector('.nlmsf-tributes-listing');
        if (tributesListing) {
            this.loadTributesListing();
        }
    }

    // Admin Events
    bindAdminEvents() {
        const adminContainer = document.querySelector('.nlmsf-tribute-admin');
        if (!adminContainer) return;

        // Check if admin is logged in
        if (!this.isAdminLoggedIn) {
            this.showAdminLogin();
            return;
        }

        // If already loaded, don't reload
        if (document.getElementById('nlmsf-logout-btn')) {
            return;
        }

        // Load the admin interface
        this.loadAdminInterface();
        
        // Bind modal events
        this.bindModalEvents();
    }

    bindModalEvents() {
        // Edit tribute modal
        const editForm = document.getElementById('nlmsf-edit-tribute-form');
        if (editForm) {
            editForm.addEventListener('submit', (e) => this.handleEditTribute(e));
            
            const editUploadBtn = document.getElementById('nlmsf-edit-upload-image-btn');
            if (editUploadBtn) {
                editUploadBtn.addEventListener('click', (e) => this.handleImageUpload(e, 'edit'));
            }
        }

        // Manage donors modal
        const donorForm = document.getElementById('nlmsf-add-donor-form');
        if (donorForm) {
            donorForm.addEventListener('submit', (e) => this.handleAddDonor(e));
        }

        // Bulk add donors form
        const bulkDonorForm = document.getElementById('nlmsf-bulk-add-donors-form');
        if (bulkDonorForm) {
            bulkDonorForm.addEventListener('submit', (e) => this.handleBulkAddDonors(e));
        }

        // Close modal events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nlmsf-modal-overlay') || 
                e.target.classList.contains('nlmsf-close-modal')) {
                this.closeAllModals();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Load tribute by slug for frontend display
    async loadTributeBySlug(slug) {
        try {
            const response = await this.makeAjaxRequest('get_tributes', { published_only: '1' });
            if (response.success) {
                const tribute = response.data.find(t => t.slug === slug);
                if (tribute) {
                    await this.renderTributePage(tribute);
                }
            }
        } catch (error) {
            console.error('Error loading tribute:', error);
        }
    }

    async renderTributePage(tribute) {
        const container = document.querySelector('.nlmsf-tribute-display');
        if (!container) return;

        // Load donors for this tribute
        const donorsResponse = await this.makeAjaxRequest('get_donors', { tribute_id: tribute.id });
        const donors = donorsResponse.success ? donorsResponse.data.sort((a, b) => {
            const orderA = a.display_order || 0;
            const orderB = b.display_order || 0;
            if (orderA !== orderB) {
                return orderA - orderB;
            }
            return a.id - b.id;
        }) : [];

        const bannerImage = 'https://nlmsf.org/wp-content/uploads/2025/10/people-scaled.jpg';

        container.innerHTML = `
            <!-- Header Section with Photo Collage and Memorial -->
            <div class="nlmsf-tribute-header">
                <div class="nlmsf-photo-collage">
                    <img src="${bannerImage}" alt="Memorial Photos" class="nlmsf-collage-image">
                </div>
                <div class="nlmsf-memorial-section">
                    ${tribute.image_url ? `
                        <div class="nlmsf-profile-image-container">
                            <img src="${tribute.image_url}" alt="${tribute.name}" class="nlmsf-profile-image">
                        </div>
                    ` : ''}
                    <div class="nlmsf-memorial-content">
                        <p class="nlmsf-memorial-label">In memory of</p>
                        <h1 class="nlmsf-memorial-name">${tribute.name}</h1>
                        <p class="nlmsf-memorial-subtitle">A personal page by the NLMSF Community</p>
                    </div>
                </div>
            </div>

            <!-- Main Content Layout -->
            <div class="nlmsf-main-content">
                <!-- Left Side - About Content -->
                <div class="nlmsf-content-left">
                    <div class="nlmsf-about-section">
                        <div class="nlmsf-about-header">
                            <h1 class="nlmsf-about-title">CELEBRATING THE LIFE OF ${tribute.name.toUpperCase()}</h1>
                            ${tribute.image_url ? `
                                <div class="nlmsf-about-image-container">
                                    <img src="${tribute.image_url}" alt="${tribute.name}" class="nlmsf-about-image">
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="nlmsf-story-section">
                            <h3 class="nlmsf-story-title">${tribute.name}'s Story</h3>
                            <div class="nlmsf-story-content">${this.formatBiography(tribute.biography)}</div>
                        </div>

                        <div class="nlmsf-donation-section" id="donation-form-section">
                            <h3 class="nlmsf-donation-title">Make a Donation in Honor of ${tribute.name}</h3>
                            <div class="nlmsf-donation-form" data-shortcode="give_form" data-id="4740">
                                <div class="nlmsf-loading">
                                    <div class="nlmsf-loading-spinner"></div>
                                    <p>Loading donation form...</p>
                                </div>
                            </div>
                        </div>

                        <div class="nlmsf-comments-section">
                            <h3 class="nlmsf-comments-title">Comments & Memories</h3>
                            
                            <!-- Comment Form -->
                            <div class="nlmsf-comment-form">
                                <div class="nlmsf-comment-form-header">
                                    <h4>Share a Memory</h4>
                                    <p>Leave a comment or share a special memory about ${tribute.name}</p>
                                </div>
                                <form class="nlmsf-comment-form-content" id="nlmsf-comment-form">
                                    <div class="nlmsf-form-group">
                                        <label for="commenter-name">Your Name *</label>
                                        <input type="text" id="commenter-name" name="commenter_name" required>
                                    </div>
                                    <div class="nlmsf-form-group">
                                        <label for="commenter-email">Your Email</label>
                                        <input type="email" id="commenter-email" name="commenter_email">
                                        <small>Your email will not be displayed publicly</small>
                                    </div>
                                    <div class="nlmsf-form-group">
                                        <label for="comment-text">Your Memory or Comment *</label>
                                        <textarea id="comment-text" name="comment_text" rows="4" required placeholder="Share a special memory, story, or thought about ${tribute.name}..."></textarea>
                                    </div>
                                    <div class="nlmsf-form-group">
                                        <button type="submit" class="nlmsf-submit-comment-btn">
                                            <i class="fas fa-heart"></i>
                                            Share Memory
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <!-- Comments Display -->
                            <div class="nlmsf-comments-display">
                                <h4>Memories Shared</h4>
                                <div class="nlmsf-comments-list" id="nlmsf-comments-list">
                                    <div class="nlmsf-comments-loading">
                                        <div class="nlmsf-loading-spinner"></div>
                                        <p>Loading memories...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Donors Section -->
                <div class="nlmsf-content-right">
                    <div class="nlmsf-donations-section">
                        <h2 class="nlmsf-donations-title">
                            <i class="fas fa-heart"></i>
                            Donations in Honor of ${tribute.name}
                        </h2>
                        ${donors.length > 0 ? `
                            <div class="nlmsf-donors-grid">
                                ${donors.map(donor => this.renderDonorCard(donor)).join('')}
                            </div>
                        ` : `
                            <div class="nlmsf-no-donors">
                                <p>No donations yet. Be the first to make a donation in honor of ${tribute.name}.</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;

        // Load the donation form shortcode
        this.loadDonationForm(container);

        // Bind scroll function for donate button
        this.bindDonateButton();

        // Load comments and bind comment form
        this.loadComments(tribute.id);
        this.bindCommentForm(tribute.id);
    }

    bindTabNavigation() {
        const tabButtons = document.querySelectorAll('.nlmsf-tab-button');
        const tabPanels = document.querySelectorAll('.nlmsf-tab-panel');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;

                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));

                // Add active class to clicked button and corresponding panel
                button.classList.add('active');
                document.getElementById(`${targetTab}-tab`).classList.add('active');
            });
        });
    }

    bindDonateButton() {
        const donateButton = document.querySelector('.nlmsf-donate-button');
        if (donateButton) {
            donateButton.addEventListener('click', () => {
                // Switch to about tab if not already active
                const aboutButton = document.querySelector('[data-tab="about"]');
                const aboutTab = document.getElementById('about-tab');
                const tabButtons = document.querySelectorAll('.nlmsf-tab-button');
                const tabPanels = document.querySelectorAll('.nlmsf-tab-panel');

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                aboutButton.classList.add('active');
                aboutTab.classList.add('active');

                // Scroll to donation form
                setTimeout(() => {
                    const donationSection = document.getElementById('donation-form-section');
                    if (donationSection) {
                        donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            });
        }
    }

    async loadComments(tributeId) {
        const commentsList = document.getElementById('nlmsf-comments-list');
        if (!commentsList) return;

        try {
            const response = await this.makeAjaxRequest('get_comments', { tribute_id: tributeId });
            if (response.success) {
                const comments = response.data || [];
                this.renderComments(comments, commentsList);
            } else {
                commentsList.innerHTML = `
                    <div class="nlmsf-no-comments">
                        <p>No memories shared yet. Be the first to share a memory about this person.</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error loading comments:', error);
            commentsList.innerHTML = `
                <div class="nlmsf-comments-error">
                    <p>Unable to load memories at this time. Please try again later.</p>
                </div>
            `;
        }
    }

    renderComments(comments, container) {
        if (comments.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-comments">
                    <p>No memories shared yet. Be the first to share a memory about this person.</p>
                </div>
            `;
            return;
        }

        const commentsHTML = comments.map(comment => `
            <div class="nlmsf-comment-item">
                <div class="nlmsf-comment-header">
                    <div class="nlmsf-comment-author">
                        <i class="fas fa-user-circle"></i>
                        <span class="nlmsf-comment-name">${comment.commenter_name}</span>
                    </div>
                    <div class="nlmsf-comment-date">${this.formatDate(comment.created_at)}</div>
                </div>
                <div class="nlmsf-comment-content">
                    ${comment.comment_text.replace(/\n/g, '<br>')}
                </div>
            </div>
        `).join('');

        container.innerHTML = commentsHTML;
    }

    bindCommentForm(tributeId) {
        const commentForm = document.getElementById('nlmsf-comment-form');
        if (!commentForm) return;

        commentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(commentForm);
            const commentData = {
                tribute_id: tributeId,
                commenter_name: formData.get('commenter_name'),
                commenter_email: formData.get('commenter_email'),
                comment_text: formData.get('comment_text')
            };

            try {
                const submitBtn = commentForm.querySelector('.nlmsf-submit-comment-btn');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sharing...';
                submitBtn.disabled = true;

                const response = await this.makeAjaxRequest('add_comment', commentData);
                
                if (response.success) {
                    this.showMessage('Thank you for sharing your memory!', 'success');
                    commentForm.reset();
                    
                    // Reload comments to show the new one
                    await this.loadComments(tributeId);
                } else {
                    this.showMessage(response.data || 'Failed to share your memory. Please try again.', 'error');
                }
            } catch (error) {
                console.error('Error submitting comment:', error);
                this.showMessage('Error sharing your memory. Please try again.', 'error');
            } finally {
                const submitBtn = commentForm.querySelector('.nlmsf-submit-comment-btn');
                submitBtn.innerHTML = '<i class="fas fa-heart"></i> Share Memory';
                submitBtn.disabled = false;
            }
        });
    }

    async loadDonationForm(container) {
        const formContainer = container.querySelector('.nlmsf-donation-form');
        if (!formContainer) return;

        const shortcode = formContainer.dataset.shortcode;
        const shortcodeId = formContainer.dataset.id;

        if (!shortcode || !shortcodeId) return;

        try {
            console.log('Loading donation form shortcode:', shortcode, shortcodeId);
            
            const response = await this.makeAjaxRequest('get_shortcode', {
                shortcode: shortcode,
                id: shortcodeId
            });

            if (response.success && response.data) {
                formContainer.innerHTML = response.data;
                console.log('Donation form loaded successfully');
            } else {
                console.error('Failed to load donation form:', response);
                formContainer.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #6b7280;">
                        <p>Donation form temporarily unavailable.</p>
                        <p>Please try again later or contact us directly.</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error loading donation form:', error);
            formContainer.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #6b7280;">
                    <p>Donation form temporarily unavailable.</p>
                    <p>Please try again later or contact us directly.</p>
                </div>
            `;
        }
    }

    renderDonorCard(donor) {
        // Debug: Log donor data
        console.log('Render Donor Card - donor data:', donor);
        console.log('Render Donor Card - is_anonymous value:', donor.is_anonymous, 'type:', typeof donor.is_anonymous);
        
        const displayName = donor.is_anonymous == 1 ? 'Anonymous' : donor.donor_name;
        console.log('Render Donor Card - displayName:', displayName);
        
        const amount = donor.donation_amount && donor.donation_amount !== '0.00' && donor.donation_amount !== '0' && donor.donation_amount !== null && donor.donation_amount !== 'null' ? `
            <div class="nlmsf-donor-amount">$${parseFloat(donor.donation_amount).toFixed(2)}</div>
        ` : '';
        const message = donor.message && donor.message !== null && donor.message !== 'null' && donor.message.trim() !== '' ? `
            <div class="nlmsf-donor-message">"${donor.message}"</div>
        ` : '';

        return `
            <div class="nlmsf-donor-card">
                <div class="nlmsf-donor-info">
                    <div class="nlmsf-donor-name">${displayName}</div>
                    ${amount}
                    ${message}
                </div>
            </div>
        `;
    }

    // Load tributes listing for frontend
    async loadTributesListing() {
        try {
            const response = await this.makeAjaxRequest('get_tributes', { published_only: '1' });
            if (response.success) {
                this.renderTributesListing(response.data);
            }
        } catch (error) {
            console.error('Error loading tributes:', error);
        }
    }

    renderTributesListing(tributes) {
        const container = document.querySelector('.nlmsf-tributes-grid');
        if (!container) return;

        if (tributes.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-tributes">
                    <i class="fas fa-heart"></i>
                    <p>No tribute pages available at this time.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = tributes.map(tribute => `
            <a href="/tribute/${tribute.slug}" class="nlmsf-tribute-card">
                ${tribute.image_url ? `
                    <div class="nlmsf-tribute-card-image">
                        <img src="${tribute.image_url}" alt="${tribute.name}">
                    </div>
                ` : `
                    <div class="nlmsf-tribute-card-placeholder">
                        <i class="fas fa-user"></i>
                    </div>
                `}
                <div class="nlmsf-tribute-card-content">
                    <h3 class="nlmsf-tribute-card-name">${tribute.name}</h3>
                    <div class="nlmsf-tribute-card-excerpt">${this.truncate(this.stripHtml(tribute.biography), 150)}</div>
                    <span class="nlmsf-tribute-card-link">View Tribute Page <i class="fas fa-arrow-right"></i></span>
                </div>
                <div class="nlmsf-tribute-card-overlay">
                    <span class="nlmsf-tribute-card-link" aria-hidden="true">View Tribute Page <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
        `).join('');
    }

    // Admin Functions
    async loadTributesForAdmin() {
        try {
            const response = await this.makeAjaxRequest('get_tributes', {});
            if (response.success) {
                this.renderTributesAdmin(response.data);
            }
        } catch (error) {
            console.error('Error loading tributes for admin:', error);
            this.showMessage('Error loading tribute pages', 'error');
        }
    }

    renderTributesAdmin(tributes) {
        const container = document.querySelector('.nlmsf-tributes-list');
        if (!container) return;

        if (tributes.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-tributes-admin">
                    <p>No tribute pages created yet. Add your first tribute page above!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = tributes.map(tribute => `
            <div class="nlmsf-tribute-item" data-id="${tribute.id}">
                ${tribute.image_url ? `
                    <div class="nlmsf-tribute-item-image">
                        <img src="${tribute.image_url}" alt="${tribute.name}">
                    </div>
                ` : ''}
                <div class="nlmsf-tribute-item-info">
                    <h4>${tribute.name}</h4>
                    <p class="nlmsf-tribute-slug">Slug: ${tribute.slug}</p>
                    <p class="nlmsf-tribute-bio-preview">${this.truncate(this.stripHtml(tribute.biography), 200)}</p>
                </div>
                <div class="nlmsf-tribute-item-controls">
                    <div class="nlmsf-published-toggle">
                        <label class="nlmsf-toggle-switch">
                            <input type="checkbox" ${tribute.is_published == 1 ? 'checked' : ''} 
                                   onchange="nlmsfTribute.togglePublished(${tribute.id}, this.checked)">
                            <span class="nlmsf-toggle-slider"></span>
                        </label>
                        <span class="nlmsf-toggle-label">Published</span>
                    </div>
                    <div class="nlmsf-tribute-item-actions">
                        <button class="nlmsf-btn nlmsf-btn-donors" onclick="nlmsfTribute.openDonorsModal(${tribute.id})">
                            <i class="fas fa-users"></i> Manage Donors
                        </button>
                        <button class="nlmsf-btn nlmsf-btn-edit" onclick="nlmsfTribute.openEditModal(${tribute.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="nlmsf-btn nlmsf-btn-delete" onclick="nlmsfTribute.deleteTribute(${tribute.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    async handleAddTribute(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const tributeData = {
            name: formData.get('name'),
            slug: formData.get('slug'),
            biography: formData.get('biography'),
            image_url: formData.get('image_url'),
            is_published: formData.get('is_published') ? 1 : 0
        };

        try {
            const response = await this.makeAjaxRequest('add_tribute', tributeData);
            if (response.success) {
                this.showMessage('Tribute page created successfully!', 'success');
                e.target.reset();
                this.clearImagePreview('add');
                this.loadTributesForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to create tribute page', 'error');
            }
        } catch (error) {
            this.showMessage('Error creating tribute page', 'error');
        }
    }

    async handleEditTribute(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const tributeData = {
            id: formData.get('id'),
            name: formData.get('name'),
            slug: formData.get('slug'),
            biography: formData.get('biography'),
            image_url: formData.get('image_url'),
            is_published: formData.get('is_published') ? 1 : 0
        };

        try {
            const response = await this.makeAjaxRequest('update_tribute', tributeData);
            if (response.success) {
                this.showMessage('Tribute page updated successfully!', 'success');
                this.closeModal('nlmsf-edit-modal');
                this.loadTributesForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to update tribute page', 'error');
            }
        } catch (error) {
            this.showMessage('Error updating tribute page', 'error');
        }
    }

    async handleBulkAddDonors(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const donorNames = formData.get('donor_names').trim();
        const defaultAmount = formData.get('donation_amount') || null;
        const defaultDate = formData.get('donation_date') || new Date().toISOString().split('T')[0];
        const isAnonymous = formData.get('is_anonymous') ? 1 : 0;

        if (!donorNames) {
            this.showMessage('Please enter donor names', 'error');
            return;
        }

        // Parse donor names from textarea (split by newlines)
        const names = donorNames
            .split('\n')
            .map(name => name.trim())
            .filter(name => name.length > 0);

        if (names.length === 0) {
            this.showMessage('No valid donor names found', 'error');
            return;
        }

        const statusElement = document.getElementById('bulk-add-status');
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        try {
            // Update UI to show progress
            statusElement.textContent = `Adding ${names.length} donors...`;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
            submitBtn.disabled = true;

            let successCount = 0;
            let errorCount = 0;

            // Add each donor individually
            for (let i = 0; i < names.length; i++) {
                const donorData = {
                    tribute_id: this.currentTributeId,
                    donor_name: names[i],
                    donation_amount: defaultAmount,
                    donation_date: defaultDate,
                    message: null,
                    is_anonymous: isAnonymous
                };

                try {
                    const response = await this.makeAjaxRequest('add_donor', donorData);
                    if (response.success) {
                        successCount++;
                    } else {
                        errorCount++;
                        console.error(`Failed to add donor "${names[i]}":`, response.data);
                    }
                } catch (error) {
                    errorCount++;
                    console.error(`Error adding donor "${names[i]}":`, error);
                }

                // Update progress
                statusElement.textContent = `Adding ${i + 1}/${names.length} donors...`;
            }

            // Show results
            if (successCount > 0) {
                this.showMessage(`Successfully added ${successCount} donor${successCount !== 1 ? 's' : ''}!`, 'success');
                this.loadDonors(this.currentTributeId);
            }
            
            if (errorCount > 0) {
                this.showMessage(`${errorCount} donor${errorCount !== 1 ? 's' : ''} failed to add. Check console for details.`, 'error');
            }

            // Clear form if all successful
            if (errorCount === 0) {
                e.target.reset();
                statusElement.textContent = '';
            } else {
                statusElement.textContent = `Added ${successCount}/${names.length} donors`;
            }

        } catch (error) {
            console.error('Bulk add error:', error);
            this.showMessage('Error during bulk add operation', 'error');
            statusElement.textContent = '';
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    }

    async deleteTribute(id) {
        if (!confirm('Are you sure you want to delete this tribute page? This will also delete all associated donors.')) {
            return;
        }

        try {
            const response = await this.makeAjaxRequest('delete_tribute', { id });
            if (response.success) {
                this.showMessage('Tribute page deleted successfully!', 'success');
                this.loadTributesForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to delete tribute page', 'error');
            }
        } catch (error) {
            this.showMessage('Error deleting tribute page', 'error');
        }
    }

    async togglePublished(id, isPublished) {
        try {
            const response = await this.makeAjaxRequest('toggle_published', { 
                id, 
                is_published: isPublished ? 1 : 0 
            });
            if (response.success) {
                this.showMessage(`Tribute page ${isPublished ? 'published' : 'unpublished'}!`, 'success');
            } else {
                this.showMessage(response.data || 'Failed to update publication status', 'error');
            }
        } catch (error) {
            this.showMessage('Error updating publication status', 'error');
        }
    }

    async openEditModal(id) {
        try {
            const response = await this.makeAjaxRequest('get_tribute', { id });
            if (response.success) {
                const tribute = response.data;
                this.populateEditModal(tribute);
                this.showModal('nlmsf-edit-modal');
            }
        } catch (error) {
            this.showMessage('Error loading tribute for edit', 'error');
        }
    }

    populateEditModal(tribute) {
        const form = document.getElementById('nlmsf-edit-tribute-form');
        if (!form) return;

        form.querySelector('[name="id"]').value = tribute.id;
        form.querySelector('[name="name"]').value = tribute.name;
        form.querySelector('[name="slug"]').value = tribute.slug;
        form.querySelector('[name="biography"]').value = tribute.biography;
        form.querySelector('[name="image_url"]').value = tribute.image_url || '';
        form.querySelector('[name="is_published"]').checked = tribute.is_published == 1;

        // Show image preview if exists
        if (tribute.image_url) {
            this.updateImagePreview('edit', tribute.image_url);
        }
    }

    // Donors Management
    async openDonorsModal(tributeId) {
        this.currentTributeId = tributeId;
        await this.loadDonors(tributeId);
        this.showModal('nlmsf-donors-modal');
    }

    async loadDonors(tributeId) {
        try {
            const response = await this.makeAjaxRequest('get_donors', { tribute_id: tributeId });
            if (response.success) {
                // Sort donors by display_order, then by id as fallback
                const sortedDonors = response.data.sort((a, b) => {
                    const orderA = a.display_order || 0;
                    const orderB = b.display_order || 0;
                    if (orderA !== orderB) {
                        return orderA - orderB;
                    }
                    return a.id - b.id;
                });
                this.renderDonorsAdmin(sortedDonors);
            }
        } catch (error) {
            console.error('Error loading donors:', error);
        }
    }

    renderDonorsAdmin(donors) {
        const container = document.querySelector('.nlmsf-donors-list');
        if (!container) return;

        if (donors.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-donors-admin">
                    <p>No donors added yet. Add the first donor above!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = donors.map((donor, index) => {
            const amount = donor.donation_amount && donor.donation_amount !== '0.00' && donor.donation_amount !== '0' && donor.donation_amount !== null && donor.donation_amount !== 'null' ? 
                `<p class="nlmsf-donor-amount">$${parseFloat(donor.donation_amount).toFixed(2)}</p>` : '';
            const message = donor.message && donor.message !== null && donor.message !== 'null' && donor.message.trim() !== '' ? 
                `<p class="nlmsf-donor-msg">"${donor.message}"</p>` : '';
            
            return `
                <div class="nlmsf-donor-item" data-id="${donor.id}" data-order="${donor.display_order || index}">
                    <div class="nlmsf-donor-order-controls">
                        <button class="nlmsf-btn nlmsf-btn-sm nlmsf-btn-move-up" onclick="nlmsfTribute.moveDonorUp(${donor.id})" ${index === 0 ? 'disabled' : ''}>
                            <i class="fas fa-arrow-up"></i>
                        </button>
                        <button class="nlmsf-btn nlmsf-btn-sm nlmsf-btn-move-down" onclick="nlmsfTribute.moveDonorDown(${donor.id})" ${index === donors.length - 1 ? 'disabled' : ''}>
                            <i class="fas fa-arrow-down"></i>
                        </button>
                    </div>
                    <div class="nlmsf-donor-item-info">
                        <h5>${donor.is_anonymous == 1 ? 'Anonymous' : donor.donor_name}</h5>
                        ${amount}
                        ${message}
                    </div>
                    <div class="nlmsf-donor-item-actions">
                        <button class="nlmsf-btn nlmsf-btn-delete nlmsf-btn-sm" onclick="nlmsfTribute.deleteDonor(${donor.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    async handleAddDonor(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        // Debug: Log form data
        console.log('Add Donor - Form Data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        
        const donorData = {
            tribute_id: this.currentTributeId,
            donor_name: formData.get('donor_name'),
            donation_amount: formData.get('donation_amount'),
            donation_date: formData.get('donation_date'),
            is_anonymous: formData.get('is_anonymous') ? 1 : 0,
            message: formData.get('message')
        };

        console.log('Add Donor - Processed Data:', donorData);

        try {
            const response = await this.makeAjaxRequest('add_donor', donorData);
            console.log('Add Donor - Response:', response);
            
            if (response.success) {
                this.showMessage('Donor added successfully!', 'success');
                e.target.reset();
                this.loadDonors(this.currentTributeId);
            } else {
                this.showMessage(response.data || 'Failed to add donor', 'error');
            }
        } catch (error) {
            console.error('Add Donor - Error:', error);
            this.showMessage('Error adding donor', 'error');
        }
    }

    async deleteDonor(id) {
        if (!confirm('Are you sure you want to remove this donor?')) {
            return;
        }

        try {
            const response = await this.makeAjaxRequest('delete_donor', { id });
            if (response.success) {
                this.showMessage('Donor removed successfully!', 'success');
                this.loadDonors(this.currentTributeId);
            } else {
                this.showMessage(response.data || 'Failed to remove donor', 'error');
            }
        } catch (error) {
            this.showMessage('Error removing donor', 'error');
        }
    }

    async moveDonorUp(donorId) {
        try {
            const response = await this.makeAjaxRequest('move_donor', { 
                donor_id: donorId, 
                direction: 'up',
                tribute_id: this.currentTributeId
            });
            if (response.success) {
                this.loadDonors(this.currentTributeId);
            } else {
                this.showMessage(response.data || 'Failed to move donor', 'error');
            }
        } catch (error) {
            this.showMessage('Error moving donor', 'error');
        }
    }

    async moveDonorDown(donorId) {
        try {
            const response = await this.makeAjaxRequest('move_donor', { 
                donor_id: donorId, 
                direction: 'down',
                tribute_id: this.currentTributeId
            });
            if (response.success) {
                this.loadDonors(this.currentTributeId);
            } else {
                this.showMessage(response.data || 'Failed to move donor', 'error');
            }
        } catch (error) {
            this.showMessage('Error moving donor', 'error');
        }
    }

    // Image Upload Handler
    handleImageUpload(e, context) {
        e.preventDefault();
        
        // Create a hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.onchange = async (event) => {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                this.showMessage('File size too large. Please choose an image under 5MB.', 'error');
                return;
            }

            // Show loading state
            this.showMessage('Uploading image...', 'info');

            try {
                console.log('Starting image upload...', {
                    fileName: file.name,
                    fileSize: file.size,
                    fileType: file.type,
                    context: context
                });

                // Use only our custom upload handler to avoid 403 errors
                const formData = new FormData();
                formData.append('file', file);
                formData.append('action', 'nlmsf_upload_image');
                formData.append('nonce', nlmsf_tribute_ajax.nonce);

                console.log('Upload request details:', {
                    action: 'nlmsf_upload_image',
                    nonce: nlmsf_tribute_ajax.nonce,
                    ajaxUrl: nlmsf_tribute_ajax.ajax_url
                });

                const response = await fetch(nlmsf_tribute_ajax.ajax_url, {
                    method: 'POST',
                    body: formData,
                    credentials: 'same-origin',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });

                console.log('Upload response received:', {
                    status: response.status,
                    statusText: response.statusText,
                    ok: response.ok,
                    headers: Object.fromEntries(response.headers.entries())
                });

                if (!response.ok) {
                    console.error('Response not OK:', response.status, response.statusText);
                    throw new Error(`Upload failed with status: ${response.status}`);
                }

                // Check if response is actually JSON
                const contentType = response.headers.get('content-type');
                console.log('Response content type:', contentType);

                if (!contentType || !contentType.includes('application/json')) {
                    console.warn('Response is not JSON, getting text instead');
                    const responseText = await response.text();
                    console.log('Response text (first 500 chars):', responseText.substring(0, 500));
                    
                    // Try to extract error message from HTML response
                    const errorMatch = responseText.match(/<title>([^<]+)<\/title>/);
                    const errorMessage = errorMatch ? errorMatch[1] : 'Server returned HTML instead of JSON';
                    
                    throw new Error(`Server error: ${errorMessage}`);
                }

                const result = await response.json();
                console.log('Parsed JSON response:', result);

                if (result.success && result.data && result.data.url) {
                    const imageUrl = result.data.url;
                    console.log('Upload successful, image URL:', imageUrl);
                    this.updateImagePreview(context, imageUrl);
                    this.showMessage('Image uploaded successfully!', 'success');
                } else {
                    console.error('Upload failed - response:', result);
                    this.showMessage(result.data?.message || 'Failed to upload image. Please try a smaller image or check file permissions.', 'error');
                }
            } catch (error) {
                console.error('Upload error details:', {
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
                
                // Provide alternative manual upload option
                this.showMessage('Upload failed. You can manually upload the image to WordPress Media Library and paste the URL below.', 'error');
                
                // Show manual URL input option
                setTimeout(() => {
                    const manualUrl = prompt('Enter the image URL manually (upload to WordPress Media Library first):');
                    if (manualUrl && manualUrl.trim()) {
                        this.updateImagePreview(context, manualUrl.trim());
                        this.showMessage('Image URL set successfully!', 'success');
                    }
                }, 1000);
            }
        };

        fileInput.click();
    }

    // Handle manual URL input for images
    bindImageUrlInputs() {
        // Add event listeners for manual URL inputs
        const urlInputs = document.querySelectorAll('input[name="image_url"]');
        urlInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const url = e.target.value.trim();
                if (url && this.isValidImageUrl(url)) {
                    const context = e.target.id.startsWith('edit-') ? 'edit' : 'add';
                    this.updateImagePreview(context, url);
                }
            });
        });
    }

    isValidImageUrl(url) {
        try {
            const parsedUrl = new URL(url);
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
            const pathname = parsedUrl.pathname.toLowerCase();
            return imageExtensions.some(ext => pathname.endsWith(ext)) || 
                   parsedUrl.hostname.includes('wordpress') ||
                   parsedUrl.hostname.includes('wp-content');
        } catch {
            return false;
        }
    }

    updateImagePreview(context, imageUrl) {
        const prefix = context === 'edit' ? 'edit-' : '';
        const urlInput = document.getElementById(`${prefix}image-url`);
        const preview = document.getElementById(`nlmsf-${prefix}image-preview`);
        
        if (urlInput) urlInput.value = imageUrl;
        if (preview) {
            preview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
            preview.style.display = 'block';
        }
    }

    clearImagePreview(context) {
        const prefix = context === 'edit' ? 'edit-' : '';
        const urlInput = document.getElementById(`${prefix}image-url`);
        const preview = document.getElementById(`nlmsf-${prefix}image-preview`);
        
        if (urlInput) urlInput.value = '';
        if (preview) {
            preview.innerHTML = '';
            preview.style.display = 'none';
        }
    }

    // Modal Management
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.nlmsf-modal-overlay');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = '';
    }

    // AJAX Helper
    async makeAjaxRequest(action, data = {}) {
        const formData = new FormData();
        formData.append('action', 'nlmsf_tribute_action');
        formData.append('tribute_action', action);
        formData.append('nonce', nlmsf_tribute_ajax.nonce);
        
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        const response = await fetch(nlmsf_tribute_ajax.ajax_url, {
            method: 'POST',
            body: formData
        });

        return await response.json();
    }

    // UI Helpers
    showMessage(message, type = 'info') {
        let messageContainer = document.querySelector('.nlmsf-message');
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'nlmsf-message';
            document.body.appendChild(messageContainer);
        }

        messageContainer.className = `nlmsf-message nlmsf-message-${type}`;
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';

        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000);
    }

    formatDate(dateString) {
        if (!dateString) return 'Invalid Date';
        
        console.log('Formatting date:', dateString);
        
        // Handle both YYYY-MM-DD and YYYY-MM-DD HH:MM:SS formats
        let datePart;
        if (dateString.includes(' ')) {
            // DateTime format: YYYY-MM-DD HH:MM:SS
            datePart = dateString.split(' ')[0];
        } else {
            // Date format: YYYY-MM-DD
            datePart = dateString;
        }
        
        const [year, month, day] = datePart.split('-').map(Number);
        
        // Validate date components
        if (!year || !month || !day || isNaN(year) || isNaN(month) || isNaN(day)) {
            console.error('Invalid date components:', { year, month, day });
            return 'Invalid Date';
        }
        
        const date = new Date(year, month - 1, day); // month is 0-indexed
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
            console.error('Invalid date object created');
            return 'Invalid Date';
        }
        
        console.log('Parsed date components:', { year, month: month - 1, day });
        console.log('Created date object:', date);
        
        const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        console.log('Formatted date:', formatted);
        
        return formatted;
    }

    formatBiography(biography) {
        if (!biography) return '';
        
        // If the biography already contains HTML tags, return as-is
        if (biography.includes('<') && biography.includes('>')) {
            return biography;
        }
        
        // Otherwise, convert line breaks to HTML and preserve basic formatting
        return biography
            .replace(/\n\n/g, '</p><p>')  // Double line breaks become paragraph breaks
            .replace(/\n/g, '<br>')       // Single line breaks become <br>
            .replace(/^/, '<p>')          // Start with opening paragraph tag
            .replace(/$/, '</p>');        // End with closing paragraph tag
    }

    stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    truncate(text, length) {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }

    // Get a sortable last name key from a full name
    getLastNameKey(fullName) {
        if (!fullName) return '';
        const parts = fullName.trim().split(/\s+/);
        // Use the last token as last name, fallback to full name
        const last = parts[parts.length - 1] || fullName;
        return last.toLowerCase();
    }

    // Tribute Directory Functionality
    initTributeDirectory() {
        const directoryContainer = document.querySelector('.nlmsf-tribute-directory');
        if (!directoryContainer) return;

        this.loadTributeDirectory();
        this.bindDirectoryEvents();
    }

    bindDirectoryEvents() {
        // Search functionality
        const searchInput = document.getElementById('nlmsf-tribute-search');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.filterTributes(e.target.value);
                }, 300);
            });
        }

        // Sort functionality
        const sortSelect = document.getElementById('nlmsf-sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortTributes(e.target.value);
            });
        }

        // Pagination
        const prevBtn = document.getElementById('nlmsf-prev-page');
        const nextBtn = document.getElementById('nlmsf-next-page');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.changePage(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => this.changePage(1));
    }

    async loadTributeDirectory() {
        const loadingEl = document.getElementById('nlmsf-directory-loading');
        const gridEl = document.getElementById('nlmsf-tributes-grid');
        const noResultsEl = document.getElementById('nlmsf-no-results');

        if (loadingEl) loadingEl.style.display = 'block';
        if (gridEl) gridEl.innerHTML = '';
        if (noResultsEl) noResultsEl.style.display = 'none';

        try {
            const response = await this.makeAjaxRequest('get_tributes', { published_only: '1' });
            if (response.success) {
                this.allTributes = response.data || [];
                this.filteredTributes = [...this.allTributes];
                this.currentPage = 1;
                this.itemsPerPage = 12;
                
                this.renderTributeDirectory();
            } else {
                this.showDirectoryError('Failed to load tribute pages');
            }
        } catch (error) {
            console.error('Error loading tribute directory:', error);
            this.showDirectoryError('Error loading tribute pages');
        } finally {
            if (loadingEl) loadingEl.style.display = 'none';
        }
    }

    renderTributeDirectory() {
        const gridEl = document.getElementById('nlmsf-tributes-grid');
        const noResultsEl = document.getElementById('nlmsf-no-results');
        const paginationEl = document.getElementById('nlmsf-pagination');

        if (!gridEl) return;

        if (this.filteredTributes.length === 0) {
            if (noResultsEl) noResultsEl.style.display = 'block';
            if (paginationEl) paginationEl.style.display = 'none';
            gridEl.innerHTML = '';
            return;
        }

        if (noResultsEl) noResultsEl.style.display = 'none';

        // Calculate pagination
        const totalPages = Math.ceil(this.filteredTributes.length / this.itemsPerPage);
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageTributes = this.filteredTributes.slice(startIndex, endIndex);

        // Render tribute cards
        console.log('🎨 Rendering tribute cards for:', pageTributes.length, 'tributes');
        gridEl.innerHTML = pageTributes.map(tribute => this.renderTributeDirectoryCard(tribute)).join('');
        console.log('✅ Tribute cards HTML rendered');

        // Bind click events for tribute cards
        this.bindTributeCardClicks();

        // Update pagination
        this.updatePagination(totalPages);
    }

    renderTributeDirectoryCard(tribute) {
        console.log('🎨 Rendering card for tribute:', tribute.name, 'slug:', tribute.slug);
        
        const biography = this.stripHtml(tribute.biography);
        const shortBio = this.truncate(biography, 120);
        
        const cardHTML = `
            <div class="nlmsf-tribute-card" data-name="${tribute.name.toLowerCase()}">
                <div class="nlmsf-tribute-card-image">
                    ${tribute.image_url ? 
                        `<img src="${tribute.image_url}" alt="${tribute.name}" loading="lazy">` :
                        `<div class="nlmsf-tribute-card-placeholder">
                            <i class="fas fa-user-circle"></i>
                        </div>`
                    }
                </div>
                <div class="nlmsf-tribute-card-content">
                    <h3 class="nlmsf-tribute-card-name">${tribute.name}</h3>
                    <p class="nlmsf-tribute-card-bio">${shortBio}</p>
                    <div class="nlmsf-tribute-card-meta">
                        <span class="nlmsf-tribute-card-date">
                            <i class="fas fa-calendar"></i>
                            ${this.formatDate(tribute.created_at)}
                        </span>
                    </div>
                </div>
                <div class="nlmsf-tribute-card-overlay">
                    <button class="nlmsf-tribute-card-link" data-tribute-slug="${tribute.slug}">
                        <i class="fas fa-heart"></i>
                        View Tribute
                    </button>
                </div>
            </div>
        `;
        
        console.log('🎨 Generated card HTML for', tribute.name, ':', cardHTML);
        return cardHTML;
    }

    bindTributeCardClicks() {
        console.log('🔧 Binding tribute card clicks...');
        const tributeButtons = document.querySelectorAll('.nlmsf-tribute-card-link[data-tribute-slug]');
        const tributeCards = document.querySelectorAll('.nlmsf-tribute-card');
        console.log('🔍 Found tribute buttons:', tributeButtons.length);
        console.log('🔍 Found tribute cards:', tributeCards.length);
        
        // Bind button clicks
        tributeButtons.forEach((button, index) => {
            console.log(`🔧 Binding button ${index + 1}:`, button);
            button.addEventListener('click', (e) => {
                console.log('🎯 Tribute button clicked!', e);
                e.preventDefault();
                e.stopPropagation();
                const slug = button.getAttribute('data-tribute-slug');
                console.log('📝 Tribute slug from button:', slug);
                console.log('🚀 Calling loadTributeFromDirectory with slug:', slug);
                this.loadTributeFromDirectory(slug);
            });
        });

        // Also bind card clicks as backup
        tributeCards.forEach((card, index) => {
            const slug = card.querySelector('.nlmsf-tribute-card-link')?.getAttribute('data-tribute-slug');
            if (slug) {
                console.log(`🔧 Binding card ${index + 1} click for slug:`, slug);
                card.addEventListener('click', (e) => {
                    // Only trigger if not clicking on the button itself
                    if (!e.target.closest('.nlmsf-tribute-card-link')) {
                        console.log('🎯 Tribute card clicked!', e);
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('📝 Tribute slug from card:', slug);
                        console.log('🚀 Calling loadTributeFromDirectory with slug:', slug);
                        this.loadTributeFromDirectory(slug);
                    }
                });
            }
        });
    }

    filterTributes(searchTerm) {
        if (!searchTerm.trim()) {
            this.filteredTributes = [...this.allTributes];
        } else {
            const term = searchTerm.toLowerCase();
            this.filteredTributes = this.allTributes.filter(tribute => 
                tribute.name.toLowerCase().includes(term) ||
                this.stripHtml(tribute.biography).toLowerCase().includes(term)
            );
        }
        
        this.currentPage = 1;
        this.renderTributeDirectory();
    }

    sortTributes(sortBy) {
        switch (sortBy) {
            case 'name-asc':
                this.filteredTributes.sort((a, b) => {
                    const aLast = this.getLastNameKey(a.name);
                    const bLast = this.getLastNameKey(b.name);
                    const cmp = aLast.localeCompare(bLast);
                    // If last names are the same, fall back to full name
                    return cmp !== 0 ? cmp : (a.name || '').localeCompare(b.name || '');
                });
                break;
            case 'name-desc':
                this.filteredTributes.sort((a, b) => {
                    const aLast = this.getLastNameKey(a.name);
                    const bLast = this.getLastNameKey(b.name);
                    const cmp = bLast.localeCompare(aLast);
                    return cmp !== 0 ? cmp : (b.name || '').localeCompare(a.name || '');
                });
                break;
            case 'date-desc':
                this.filteredTributes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            case 'date-asc':
                this.filteredTributes.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                break;
        }
        
        this.currentPage = 1;
        this.renderTributeDirectory();
    }

    changePage(direction) {
        const totalPages = Math.ceil(this.filteredTributes.length / this.itemsPerPage);
        const newPage = this.currentPage + direction;
        
        if (newPage >= 1 && newPage <= totalPages) {
            this.currentPage = newPage;
            this.renderTributeDirectory();
            
            // Scroll to top of grid
            const gridEl = document.getElementById('nlmsf-tributes-grid');
            if (gridEl) {
                gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    updatePagination(totalPages) {
        const paginationEl = document.getElementById('nlmsf-pagination');
        const prevBtn = document.getElementById('nlmsf-prev-page');
        const nextBtn = document.getElementById('nlmsf-next-page');
        const infoEl = document.getElementById('nlmsf-pagination-info');

        if (totalPages <= 1) {
            if (paginationEl) paginationEl.style.display = 'none';
            return;
        }

        if (paginationEl) paginationEl.style.display = 'flex';
        if (prevBtn) prevBtn.disabled = this.currentPage === 1;
        if (nextBtn) nextBtn.disabled = this.currentPage === totalPages;
        
        if (infoEl) {
            const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
            const endItem = Math.min(this.currentPage * this.itemsPerPage, this.filteredTributes.length);
            infoEl.textContent = `Page ${this.currentPage} of ${totalPages} (${startItem}-${endItem} of ${this.filteredTributes.length})`;
        }
    }

    showDirectoryError(message) {
        const gridEl = document.getElementById('nlmsf-tributes-grid');
        const noResultsEl = document.getElementById('nlmsf-no-results');
        
        if (gridEl) {
            gridEl.innerHTML = `
                <div class="nlmsf-directory-error">
                    <div class="nlmsf-error-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>Unable to load tribute pages</h3>
                    <p>${message}</p>
                    <button class="nlmsf-btn nlmsf-btn-primary" onclick="nlmsfTribute.loadTributeDirectory()">
                        <i class="fas fa-refresh"></i>
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    // Load tribute page by slug from directory
    loadTributeFromDirectory(slug) {
        console.log('🎯 loadTributeFromDirectory called with slug:', slug);
        
        // Navigate to the tribute page using clean URL structure
        const tributeUrl = `${window.location.origin}/${slug}/`;
        console.log('🌐 Navigating to tribute URL:', tributeUrl);
        
        // Navigate to the tribute page
        window.location.href = tributeUrl;
    }

    // Create a tribute page view within the current page
    createTributePageView(slug) {
        console.log('🏗️ createTributePageView called with slug:', slug);
        
        // Hide the directory
        const directory = document.querySelector('.nlmsf-tribute-directory');
        console.log('🔍 Looking for .nlmsf-tribute-directory:', directory);
        if (directory) {
            console.log('📁 Hiding directory');
            directory.style.display = 'none';
        } else {
            console.log('❌ Directory not found!');
        }

        // Create tribute page container
        let tributeContainer = document.querySelector('.nlmsf-tribute-page-container');
        console.log('🔍 Looking for existing tribute container:', tributeContainer);
        
        if (!tributeContainer) {
            console.log('🏗️ Creating new tribute container');
            tributeContainer = document.createElement('div');
            tributeContainer.className = 'nlmsf-tribute-page-container';
            tributeContainer.innerHTML = `
                <div class="nlmsf-tribute-page-header">
                    <button onclick="nlmsfTribute.showDirectory()" class="nlmsf-back-button">
                        <i class="fas fa-arrow-left"></i>
                        Back to Directory
                    </button>
                </div>
                <div class="nlmsf-tribute-display"></div>
            `;
            document.body.appendChild(tributeContainer);
            console.log('✅ Tribute container created and added to body');
        } else {
            console.log('📦 Showing existing tribute container');
            tributeContainer.style.display = 'block';
        }

        // Load the tribute content
        console.log('🚀 Calling loadTributeContent with slug:', slug);
        this.loadTributeContent(slug);
    }

    // Load tribute content into the container
    async loadTributeContent(slug) {
        console.log('📥 loadTributeContent called with slug:', slug);
        
        const tributeDisplay = document.querySelector('.nlmsf-tribute-page-container .nlmsf-tribute-display');
        console.log('🔍 Looking for tribute display container:', tributeDisplay);
        
        if (!tributeDisplay) {
            console.log('❌ Tribute display container not found!');
            return;
        }

        console.log('⏳ Showing loading state');
        // Show loading state
        tributeDisplay.innerHTML = `
            <div class="nlmsf-loading">
                <div class="nlmsf-loading-spinner"></div>
                <p>Loading tribute page...</p>
            </div>
        `;

        try {
            console.log('🌐 Making AJAX request to get tributes...');
            // Get tribute data
            const response = await this.makeAjaxRequest('get_tributes', { published_only: '1' });
            console.log('📡 AJAX response:', response);
            
            if (response.success) {
                console.log('✅ AJAX request successful, looking for tribute with slug:', slug);
                const tribute = response.data.find(t => t.slug === slug);
                console.log('🔍 Found tribute:', tribute);
                
                if (tribute) {
                    console.log('🎉 Tribute found, rendering tribute page...');
                    await this.renderTributePage(tribute);
                } else {
                    console.log('❌ Tribute not found in response data');
                    tributeDisplay.innerHTML = `
                        <div class="nlmsf-error">
                            <h3>Tribute not found</h3>
                            <p>The requested tribute page could not be found.</p>
                            <button onclick="nlmsfTribute.showDirectory()" class="nlmsf-btn nlmsf-btn-primary">
                                Back to Directory
                            </button>
                        </div>
                    `;
                }
            } else {
                console.log('❌ AJAX request failed:', response);
                tributeDisplay.innerHTML = `
                    <div class="nlmsf-error">
                        <h3>Error loading tribute</h3>
                        <p>There was an error loading the tribute page.</p>
                        <button onclick="nlmsfTribute.showDirectory()" class="nlmsf-btn nlmsf-btn-primary">
                            Back to Directory
                        </button>
                    </div>
                `;
            }
        } catch (error) {
            console.error('💥 Error loading tribute content:', error);
            tributeDisplay.innerHTML = `
                <div class="nlmsf-error">
                    <h3>Error loading tribute</h3>
                    <p>There was an error loading the tribute page.</p>
                    <button onclick="nlmsfTribute.showDirectory()" class="nlmsf-btn nlmsf-btn-primary">
                        Back to Directory
                    </button>
                </div>
            `;
        }
    }

    // Show directory again
    showDirectory() {
        const directory = document.querySelector('.nlmsf-tribute-directory');
        const tributeContainer = document.querySelector('.nlmsf-tribute-page-container');
        
        if (directory) directory.style.display = 'block';
        if (tributeContainer) tributeContainer.style.display = 'none';
    }

    // Admin Login Functions
    checkAdminLogin() {
        const isLoggedIn = sessionStorage.getItem('nlmsf_admin_logged_in');
        if (isLoggedIn === 'true') {
            this.isAdminLoggedIn = true;
        }
    }

    showAdminLogin() {
        const adminContainer = document.querySelector('.nlmsf-tribute-admin');
        if (!adminContainer) return;

        adminContainer.innerHTML = `
            <div class="nlmsf-admin-login">
                <div class="nlmsf-login-container">
                    <div class="nlmsf-login-header">
                        <h2><i class="fas fa-lock"></i> Admin Access</h2>
                        <p>Please enter your credentials to access the tribute management system</p>
                    </div>
                    <form id="nlmsf-admin-login-form" class="nlmsf-login-form">
                        <div class="nlmsf-form-group">
                            <label for="admin-username">Username</label>
                            <input type="text" id="admin-username" name="username" required autocomplete="username">
                        </div>
                        <div class="nlmsf-form-group">
                            <label for="admin-password">Password</label>
                            <input type="password" id="admin-password" name="password" required autocomplete="current-password">
                        </div>
                        <div class="nlmsf-form-group">
                            <button type="submit" class="nlmsf-btn nlmsf-btn-primary nlmsf-btn-full">
                                <i class="fas fa-sign-in-alt"></i>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Bind login form
        const loginForm = document.getElementById('nlmsf-admin-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleAdminLogin(e));
        }
    }

    handleAdminLogin(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
            this.isAdminLoggedIn = true;
            sessionStorage.setItem('nlmsf_admin_logged_in', 'true');
            this.showMessage('Login successful!', 'success');
            
            // Clear the login form and reload admin interface
            setTimeout(() => {
                this.loadAdminInterface();
            }, 1000);
        } else {
            this.showMessage('Invalid username or password', 'error');
        }
    }

    loadAdminInterface() {
        const adminContainer = document.querySelector('.nlmsf-tribute-admin');
        if (!adminContainer) return;

        // Clear the container and reload the admin interface
        adminContainer.innerHTML = '';
        
        // Add logout button
        this.addLogoutButton();

        // Load admin content without rebinding events
        this.loadAdminContent();
    }

    loadAdminContent() {
        const adminContainer = document.querySelector('.nlmsf-tribute-admin');
        if (!adminContainer) return;

        // Add the admin forms and content
        adminContainer.innerHTML += `
            <!-- Add Tribute Form -->
            <div class="nlmsf-add-tribute-section">
                <h3><i class="fas fa-plus"></i> Add New Tribute Page</h3>
                <form id="nlmsf-add-tribute-form" class="nlmsf-form">
                    <div class="nlmsf-form-row">
                        <div class="nlmsf-form-group">
                            <label for="name">Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="nlmsf-form-group">
                            <label for="slug">Slug *</label>
                            <input type="text" id="slug" name="slug" required>
                        </div>
                    </div>
                    <div class="nlmsf-form-group">
                        <label for="biography">Biography *</label>
                        <textarea id="biography" name="biography" rows="6" required></textarea>
                    </div>
                    <div class="nlmsf-form-group">
                        <label for="image_url">Image URL</label>
                        <div class="nlmsf-image-upload">
                            <input type="url" id="image-url" name="image_url" placeholder="Enter image URL or upload">
                            <button type="button" id="nlmsf-upload-image-btn" class="nlmsf-btn nlmsf-btn-secondary">
                                <i class="fas fa-upload"></i> Upload Image
                            </button>
                        </div>
                        <div id="nlmsf-image-preview" class="nlmsf-image-preview"></div>
                    </div>
                    <div class="nlmsf-form-group">
                        <label class="nlmsf-checkbox-label">
                            <input type="checkbox" name="is_published" checked>
                            <span class="nlmsf-checkbox-text">Published</span>
                        </label>
                    </div>
                    <div class="nlmsf-form-group">
                        <button type="submit" class="nlmsf-btn nlmsf-btn-primary">
                            <i class="fas fa-plus"></i> Create Tribute Page
                        </button>
                    </div>
                </form>
            </div>

            <!-- Tributes List -->
            <div class="nlmsf-tributes-section">
                <h3><i class="fas fa-list"></i> Manage Tribute Pages</h3>
                <div class="nlmsf-tributes-list"></div>
            </div>
        `;

        // Now bind the events
        this.bindAdminFormEvents();
        this.loadTributesForAdmin();
    }

    bindAdminFormEvents() {
        // Add tribute form
        const addForm = document.getElementById('nlmsf-add-tribute-form');
        if (addForm) {
            addForm.addEventListener('submit', (e) => this.handleAddTribute(e));
            
            // Image upload button
            const uploadBtn = document.getElementById('nlmsf-upload-image-btn');
            if (uploadBtn) {
                uploadBtn.addEventListener('click', (e) => this.handleImageUpload(e, 'add'));
            }
        }

        // Bind image URL inputs for manual entry
        this.bindImageUrlInputs();
    }

    addLogoutButton() {
        // Check if logout button already exists
        if (document.getElementById('nlmsf-logout-btn')) return;

        const adminContainer = document.querySelector('.nlmsf-tribute-admin');
        if (!adminContainer) return;

        // Add logout button to the top of admin container
        const logoutButton = document.createElement('div');
        logoutButton.className = 'nlmsf-admin-header';
        logoutButton.innerHTML = `
            <div class="nlmsf-admin-title">
                <h2><i class="fas fa-cog"></i> Tribute Pages Admin</h2>
            </div>
            <div class="nlmsf-admin-actions">
                <button id="nlmsf-logout-btn" class="nlmsf-btn nlmsf-btn-secondary">
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>
        `;

        // Insert at the beginning of admin container
        adminContainer.insertBefore(logoutButton, adminContainer.firstChild);

        // Bind logout button
        const logoutBtn = document.getElementById('nlmsf-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logoutAdmin());
        }
    }

    logoutAdmin() {
        this.isAdminLoggedIn = false;
        sessionStorage.removeItem('nlmsf_admin_logged_in');
        this.showMessage('Logged out successfully', 'info');
        this.showAdminLogin();
    }
}

// Initialize the tribute manager
const nlmsfTribute = new NLMSFTributeManager();

