import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

// Event data structure
interface Event {
  title: string;
  date: string;
  location: string;
  type: string;
  href: string;
}

// Sample upcoming events data
const upcomingEvents: Event[] = [
  {
    title: "Annual Patient Conference 2025",
    date: "2025-05-15",
    location: "Virtual Event",
    type: "Conference",
    href: "/events/annual-conference"
  },
  {
    title: "LMS Awareness Walk",
    date: "2025-04-10",
    location: "Denver, CO",
    type: "Fundraiser",
    href: "/events/awareness-walk"
  },
  {
    title: "Expert Panel: Latest LMS Treatments",
    date: "2025-03-28",
    location: "Virtual Event",
    type: "Educational",
    href: "/events/expert-panel"
  }
];

export function UpcomingEvents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-nlmsf-purple">Upcoming Events</h2>
        <Link 
          href="/events" 
          className="text-sm font-medium text-nlmsf-purple hover:text-nlmsf-purple-dark flex items-center"
        >
          View all events
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="space-y-4">
        {upcomingEvents.map((event, index) => (
          <Link 
            key={index} 
            href={event.href} 
            className="block p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-all duration-300 border border-purple-100 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-nlmsf-purple">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Calendar className="h-4 w-4 mr-1 text-indigo-500" />
                  <span>{new Date(event.date).toLocaleDateString("en-US", { 
                    month: "long", 
                    day: "numeric", 
                    year: "numeric" 
                  })}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1 text-indigo-500" />
                  <span>{event.location}</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {event.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="font-semibold text-blue-800">Stay Updated</h3>
          <p className="text-sm text-gray-700 mt-1 mb-3">Sign up for our newsletter to receive event notifications and foundation updates.</p>
          <Link 
            href="/newsletter-signup" 
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}
