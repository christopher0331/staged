import React, { useState, useEffect } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  zoomLink: string;
  displayOnHomepage: boolean;
}

interface EventsDisplayProps {
  showAll?: boolean;
  maxEvents?: number;
}

export const EventsDisplay: React.FC<EventsDisplayProps> = ({ 
  showAll = false, 
  maxEvents = 3 
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      
      // Filter events based on display preference
      const filteredEvents = showAll 
        ? data 
        : data.filter((event: Event) => event.displayOnHomepage);
      
      // Limit events if maxEvents is specified
      const limitedEvents = maxEvents 
        ? filteredEvents.slice(0, maxEvents)
        : filteredEvents;
      
      setEvents(limitedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <div className="events-loading">
        <div className="loading-spinner"></div>
        <p>Loading upcoming events...</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="no-events">
        <i className="fas fa-calendar-times"></i>
        <p>No upcoming events at this time.</p>
        <p className="text-sm">Check back soon for new events and opportunities!</p>
      </div>
    );
  }

  return (
    <div className="events-display">
      <div className="events-header">
        <h2 className="events-title">
          <i className="fas fa-calendar-alt"></i>
          Upcoming Events
        </h2>
        {!showAll && (
          <a href="/events" className="view-all-link">
            View All Events
            <i className="fas fa-arrow-right"></i>
          </a>
        )}
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-date-badge">
              <div className="event-month">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
              </div>
              <div className="event-day">
                {new Date(event.date).getDate()}
              </div>
            </div>
            
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              
              <div className="event-details">
                <div className="event-datetime">
                  <i className="fas fa-clock"></i>
                  <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
                </div>
              </div>
              
              <p className="event-description">{event.description}</p>
              
              <div className="event-actions">
                <a 
                  href={event.zoomLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="register-button"
                >
                  <i className="fas fa-video"></i>
                  Register
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDisplay;
