// NLMSF Events Manager JavaScript

class NLMSFEventsManager {
    constructor() {
        this.init();
    }

    init() {
        // Initialize event listeners when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bindEvents());
        } else {
            this.bindEvents();
        }
    }

    bindEvents() {
        // Bind events for both display and admin components
        this.bindDisplayEvents();
        this.bindAdminEvents();
    }

    bindDisplayEvents() {
        // Load events for display component
        const eventsDisplay = document.querySelector('.nlmsf-events-display');
        if (eventsDisplay) {
            this.loadEventsForDisplay();
        }
    }

    bindAdminEvents() {
        const adminContainer = document.querySelector('.nlmsf-events-admin');
        if (!adminContainer) return;

        // Add event form submission
        const addForm = document.getElementById('nlmsf-add-event-form');
        if (addForm) {
            addForm.addEventListener('submit', (e) => this.handleAddEvent(e));
        }

        // Load events for admin
        this.loadEventsForAdmin();

        // Bind modal events
        this.bindModalEvents();
    }

    bindModalEvents() {
        // Edit modal
        const editModal = document.getElementById('nlmsf-edit-modal');
        const editForm = document.getElementById('nlmsf-edit-event-form');
        
        if (editForm) {
            editForm.addEventListener('submit', (e) => this.handleEditEvent(e));
        }

        // Close modal events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nlmsf-modal-overlay') || 
                e.target.classList.contains('nlmsf-close-modal')) {
                this.closeModal();
            }
        });

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    async loadEventsForDisplay() {
        try {
            const response = await this.makeAjaxRequest('get_events', { homepage_only: true });
            if (response.success) {
                this.renderEventsDisplay(response.data);
            }
        } catch (error) {
            console.error('Error loading events for display:', error);
        }
    }

    async loadEventsForAdmin() {
        try {
            const response = await this.makeAjaxRequest('get_events', { homepage_only: false });
            if (response.success) {
                this.renderEventsAdmin(response.data);
            }
        } catch (error) {
            console.error('Error loading events for admin:', error);
            this.showMessage('Error loading events', 'error');
        }
    }

    renderEventsDisplay(events) {
        const container = document.querySelector('.nlmsf-events-grid');
        if (!container) return;

        if (events.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-events">
                    <i class="fas fa-calendar-times"></i>
                    <p>No upcoming events at this time.</p>
                    <p class="text-sm">Check back soon for new events and opportunities!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = events.map(event => `
            <div class="nlmsf-event-card">
                <div class="nlmsf-event-date-badge">
                    <div class="nlmsf-event-month">${this.formatMonth(event.event_date)}</div>
                    <div class="nlmsf-event-day">${this.formatDay(event.event_date)}</div>
                </div>
                <div class="nlmsf-event-content">
                    <h3 class="nlmsf-event-title">${event.title}</h3>
                    <div class="nlmsf-event-details">
                        <div class="nlmsf-event-datetime">
                            <i class="fas fa-clock"></i>
                            <span>${this.formatDateTime(event.event_date, event.event_time)}</span>
                        </div>
                    </div>
                    <p class="nlmsf-event-description">${event.description}</p>
                    <div class="nlmsf-event-actions">
                        <a href="${event.zoom_link}" target="_blank" rel="noopener noreferrer" class="nlmsf-register-button">
                            <i class="fas fa-video"></i>
                            Register
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderEventsAdmin(events) {
        const container = document.querySelector('.nlmsf-events-list');
        if (!container) return;

        if (events.length === 0) {
            container.innerHTML = `
                <div class="nlmsf-no-events-admin">
                    <p>No events created yet. Add your first event above!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = events.map(event => `
            <div class="nlmsf-event-item" data-id="${event.id}">
                <div class="nlmsf-event-info">
                    <h4>${event.title}</h4>
                    <p class="nlmsf-event-meta">
                        ${this.formatDateTime(event.event_date, event.event_time)}
                    </p>
                    <p class="nlmsf-event-desc">${event.description}</p>
                </div>
                <div class="nlmsf-event-controls">
                    <div class="nlmsf-homepage-toggle">
                        <label class="nlmsf-toggle-switch">
                            <input type="checkbox" ${event.display_on_homepage == 1 ? 'checked' : ''} 
                                   onchange="nlmsfEvents.toggleHomepageDisplay(${event.id}, this.checked)">
                            <span class="nlmsf-toggle-slider"></span>
                        </label>
                        <span class="nlmsf-toggle-label">Show on Homepage</span>
                    </div>
                    <div class="nlmsf-event-actions">
                        <button class="nlmsf-btn nlmsf-btn-edit" onclick="nlmsfEvents.openEditModal(${event.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="nlmsf-btn nlmsf-btn-delete" onclick="nlmsfEvents.deleteEvent(${event.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    async handleAddEvent(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const eventData = {
            title: formData.get('title'),
            event_date: formData.get('event_date'),
            event_time: formData.get('event_time'),
            description: formData.get('description'),
            zoom_link: formData.get('zoom_link'),
            display_on_homepage: formData.get('display_on_homepage') ? 1 : 0
        };

        try {
            const response = await this.makeAjaxRequest('add_event', eventData);
            if (response.success) {
                this.showMessage('Event added successfully!', 'success');
                e.target.reset();
                this.loadEventsForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to add event', 'error');
            }
        } catch (error) {
            this.showMessage('Error adding event', 'error');
        }
    }

    async handleEditEvent(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const eventData = {
            id: formData.get('id'),
            title: formData.get('title'),
            event_date: formData.get('event_date'),
            event_time: formData.get('event_time'),
            description: formData.get('description'),
            zoom_link: formData.get('zoom_link'),
            display_on_homepage: formData.get('display_on_homepage') ? 1 : 0
        };

        try {
            const response = await this.makeAjaxRequest('update_event', eventData);
            if (response.success) {
                this.showMessage('Event updated successfully!', 'success');
                this.closeModal();
                this.loadEventsForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to update event', 'error');
            }
        } catch (error) {
            this.showMessage('Error updating event', 'error');
        }
    }

    async deleteEvent(id) {
        if (!confirm('Are you sure you want to delete this event?')) {
            return;
        }

        try {
            const response = await this.makeAjaxRequest('delete_event', { id });
            if (response.success) {
                this.showMessage('Event deleted successfully!', 'success');
                this.loadEventsForAdmin();
            } else {
                this.showMessage(response.data || 'Failed to delete event', 'error');
            }
        } catch (error) {
            this.showMessage('Error deleting event', 'error');
        }
    }

    async toggleHomepageDisplay(id, display) {
        try {
            const response = await this.makeAjaxRequest('toggle_homepage_display', { 
                id, 
                display: display ? 1 : 0 
            });
            if (response.success) {
                this.showMessage(`Event ${display ? 'added to' : 'removed from'} homepage!`, 'success');
            } else {
                this.showMessage(response.data || 'Failed to update display setting', 'error');
            }
        } catch (error) {
            this.showMessage('Error updating display setting', 'error');
        }
    }

    openEditModal(id) {
        const eventItem = document.querySelector(`[data-id="${id}"]`);
        if (!eventItem) return;

        // Get current event data from the DOM or make another request
        // For simplicity, we'll make a request to get the specific event
        this.loadEventForEdit(id);
    }

    async loadEventForEdit(id) {
        try {
            const response = await this.makeAjaxRequest('get_events', {});
            if (response.success) {
                const event = response.data.find(e => e.id == id);
                if (event) {
                    this.populateEditModal(event);
                    this.showModal();
                }
            }
        } catch (error) {
            this.showMessage('Error loading event for edit', 'error');
        }
    }

    populateEditModal(event) {
        const form = document.getElementById('nlmsf-edit-event-form');
        if (!form) return;

        form.querySelector('[name="id"]').value = event.id;
        form.querySelector('[name="title"]').value = event.title;
        form.querySelector('[name="event_date"]').value = event.event_date;
        form.querySelector('[name="event_time"]').value = event.event_time;
        form.querySelector('[name="description"]').value = event.description;
        form.querySelector('[name="zoom_link"]').value = event.zoom_link;
        form.querySelector('[name="display_on_homepage"]').checked = event.display_on_homepage == 1;
    }

    showModal() {
        const modal = document.getElementById('nlmsf-edit-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const modal = document.getElementById('nlmsf-edit-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    async makeAjaxRequest(action, data = {}) {
        const formData = new FormData();
        formData.append('action', 'nlmsf_events_action');
        formData.append('event_action', action);
        formData.append('nonce', nlmsf_events_ajax.nonce);
        
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        const response = await fetch(nlmsf_events_ajax.ajax_url, {
            method: 'POST',
            body: formData
        });

        return await response.json();
    }

    showMessage(message, type = 'info') {
        // Create or update message container
        let messageContainer = document.querySelector('.nlmsf-message');
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'nlmsf-message';
            document.body.appendChild(messageContainer);
        }

        messageContainer.className = `nlmsf-message nlmsf-message-${type}`;
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';

        // Auto-hide after 3 seconds
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000);
    }

    formatMonth(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short' });
    }

    formatDay(dateString) {
        const date = new Date(dateString);
        return date.getDate();
    }

    formatDateTime(dateString, timeString) {
        const date = new Date(dateString);
        const [hours, minutes] = timeString.split(':');
        const timeDate = new Date();
        timeDate.setHours(parseInt(hours), parseInt(minutes));

        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedTime = timeDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        return `${formattedDate} at ${formattedTime}`;
    }
}

// Initialize the events manager
const nlmsfEvents = new NLMSFEventsManager();
