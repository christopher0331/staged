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
            // Send as string '1' to satisfy server's strict check
            const response = await this.makeAjaxRequest('get_events', { homepage_only: '1' });
            if (response.success) {
                this.renderEventsDisplay(response.data);
            }
        } catch (error) {
            console.error('Error loading events for display:', error);
        }
    }

    async loadEventsForAdmin() {
        try {
            // Explicitly request all events
            const response = await this.makeAjaxRequest('get_events', { homepage_only: '0' });
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

        // Split into upcoming vs past based on local date/time
        const now = new Date();
        const todayY = now.getFullYear();
        const todayM = now.getMonth();
        const todayD = now.getDate();
        const upcoming = [];
        const past = [];
        for (const e of events) {
            const d = this.parseLocalDate(e.event_date);
            let hours = 23, minutes = 59; // default to end-of-day if no time provided
            if (e.event_time && /\d{2}:\d{2}/.test(e.event_time)) {
                const [h, m] = e.event_time.split(':');
                hours = parseInt(h || '0', 10);
                minutes = parseInt(m || '0', 10);
            }
            d.setHours(hours, minutes, 0, 0);

            // If event date is before today, mark as past regardless of time
            if (
                d.getFullYear() < todayY ||
                (d.getFullYear() === todayY && d.getMonth() < todayM) ||
                (d.getFullYear() === todayY && d.getMonth() === todayM && d.getDate() < todayD)
            ) {
                past.push(e);
            } else if (d.getTime() >= now.getTime()) {
                upcoming.push(e);
            } else {
                past.push(e);
            }
        }

        // If no upcoming, show friendly message
        let html = '';
        if (upcoming.length === 0) {
            html += `
                <div class="nlmsf-no-events">
                    <i class="fas fa-calendar-times"></i>
                    <p>No upcoming events at this time.</p>
                    <p class="text-sm">Check back soon for new events and opportunities!</p>
                </div>`;
        } else {
            html += upcoming.map(event => this.renderEventCard(event, false)).join('');
        }

        // Add Recent Recordings section if there are past events still flagged for homepage
        if (past.length > 0) {
            html += `
                <div class="nlmsf-grid-divider">
                    <i class="fas fa-history"></i>
                    Recent Recordings
                </div>`;
            html += past.map(event => this.renderEventCard(event, true)).join('');
        }

        container.innerHTML = html;
    }

    renderEventCard(event, isPast) {
        const cta = isPast
            ? `<a href="#" class="nlmsf-register-button" aria-disabled="true" onclick="return false;">
                    <i class="fas fa-video"></i>
                    Video coming soon
               </a>`
            : `<a href="${event.zoom_link}" target="_blank" rel="noopener noreferrer" class="nlmsf-register-button">
                    <i class="fas fa-video"></i>
                    Register
               </a>`;

        const multiTz = this.formatSelectedTimezones(event);

        return `
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
                            <span>${multiTz || this.formatDateTimeInTZ(event.event_date, event.event_time, event.base_timezone)}</span>
                        </div>
                    </div>
                    <p class="nlmsf-event-description">${event.description}</p>
                    <div class="nlmsf-event-actions">
                        ${cta}
                    </div>
                </div>
            </div>`;
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
            display_on_homepage: formData.get('display_on_homepage') ? 1 : 0,
            base_timezone: formData.get('base_timezone'),
            show_et: formData.get('show_et') ? 1 : 0,
            show_ct: formData.get('show_ct') ? 1 : 0,
            show_mt: formData.get('show_mt') ? 1 : 0,
            show_pt: formData.get('show_pt') ? 1 : 0
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
            display_on_homepage: formData.get('display_on_homepage') ? 1 : 0,
            base_timezone: formData.get('base_timezone'),
            show_et: formData.get('show_et') ? 1 : 0,
            show_ct: formData.get('show_ct') ? 1 : 0,
            show_mt: formData.get('show_mt') ? 1 : 0,
            show_pt: formData.get('show_pt') ? 1 : 0
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
                // Refresh admin list
                this.loadEventsForAdmin();
                // If display block exists on current page, refresh it as well
                if (document.querySelector('.nlmsf-events-display')) {
                    this.loadEventsForDisplay();
                }
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
        if (form.querySelector('[name="base_timezone"]')) {
            form.querySelector('[name="base_timezone"]').value = event.base_timezone || 'America/New_York';
        }
        if (form.querySelector('[name="show_et"]')) form.querySelector('[name="show_et"]').checked = (event.show_et == 1);
        if (form.querySelector('[name="show_ct"]')) form.querySelector('[name="show_ct"]').checked = (event.show_ct == 1);
        if (form.querySelector('[name="show_mt"]')) form.querySelector('[name="show_mt"]').checked = (event.show_mt == 1);
        if (form.querySelector('[name="show_pt"]')) form.querySelector('[name="show_pt"]').checked = (event.show_pt == 1);
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
        const date = this.parseLocalDate(dateString);
        return date.toLocaleDateString('en-US', { month: 'short' });
    }

    formatDay(dateString) {
        const date = this.parseLocalDate(dateString);
        return date.getDate();
    }

    formatDateTime(dateString, timeString) {
        return this.formatDateTimeInTZ(dateString, timeString, undefined);
    }

    formatDateTimeInTZ(dateString, timeString, timeZone) {
        // If no timezone provided, fallback to browser local
        const [y, m, d] = dateString.split('-').map(Number);
        const [hh, mm] = timeString.split(':').map(v => parseInt(v, 10));
        let instant;
        if (timeZone) {
            instant = this.wallTimeToInstant(y, m, d, hh || 0, mm || 0, timeZone);
        } else {
            instant = new Date(y, (m || 1) - 1, d || 1, hh || 0, mm || 0, 0, 0);
        }

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }).format(instant);

        const formattedTime = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            hour: 'numeric', minute: '2-digit', hour12: true
        }).format(instant);

        return `${formattedDate} at ${formattedTime}`;
    }

    // Helper: parse YYYY-MM-DD as a local date (avoids UTC shift)
    parseLocalDate(dateString) {
        if (!dateString) return new Date();
        const parts = dateString.split('-').map(Number);
        if (parts.length !== 3) return new Date(dateString);
        const [y, m, d] = parts;
        return new Date(y, (m || 1) - 1, d || 1);
    }

    // Build a Date from event local time in its base timezone, then format into selected zones
    formatSelectedTimezones(event) {
        if (!event || !event.event_date || !event.event_time || !event.base_timezone) return '';
        const [y, m, d] = event.event_date.split('-').map(Number);
        const [hh, mm] = event.event_time.split(':').map(v => parseInt(v, 10));
        const baseInstant = this.wallTimeToInstant(y, m, d, hh || 0, mm || 0, event.base_timezone);

        const zones = [
            { key: 'show_et', tz: 'America/New_York', label: 'ET' },
            { key: 'show_ct', tz: 'America/Chicago', label: 'CT' },
            { key: 'show_mt', tz: 'America/Denver', label: 'MT' },
            { key: 'show_pt', tz: 'America/Los_Angeles', label: 'PT' },
        ];

        const parts = [];
        zones.forEach(z => {
            if (Number(event[z.key]) === 1) {
                const t = baseInstant.toLocaleTimeString('en-US', {
                    timeZone: z.tz,
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                });
                parts.push(`${t} ${z.label}`);
            }
        });

        if (parts.length === 0) return '';
        // Also include the date (in base timezone) for clarity
        const dateStr = baseInstant.toLocaleDateString('en-US', {
            timeZone: event.base_timezone,
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        return `${dateStr} · ${parts.join(' / ')}`;
    }

    // Convert a wall time in a specific IANA timezone into the corresponding real instant (Date)
    wallTimeToInstant(year, month, day, hour, minute, timeZone) {
        // Initial guess: interpret components in UTC
        let guess = new Date(Date.UTC(year, (month || 1) - 1, day || 1, hour || 0, minute || 0));
        const dtf = new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour12: false,
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });

        // Helper to extract parts in the timezone for a given instant
        const getParts = (date) => {
            const parts = dtf.formatToParts(date);
            const map = {};
            parts.forEach(p => { if (p.type !== 'literal') map[p.type] = parseInt(p.value, 10); });
            return map; // {year, month, day, hour, minute, second}
        };

        // Perform up to 2 refinement iterations to handle DST offsets
        for (let i = 0; i < 2; i++) {
            const p = getParts(guess);
            // Build a UTC date from the current parts we got in the TZ
            const currentUTC = Date.UTC(p.year, (p.month || 1) - 1, p.day || 1, p.hour || 0, p.minute || 0, p.second || 0);
            const targetUTC = Date.UTC(year, (month || 1) - 1, day || 1, hour || 0, minute || 0, 0);
            const deltaMs = targetUTC - currentUTC;
            if (Math.abs(deltaMs) < 60000) break;
            guess = new Date(guess.getTime() + deltaMs);
        }
        return guess;
    }
}

// Initialize the events manager
const nlmsfEvents = new NLMSFEventsManager();
