import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export function EventsSidebar() {
  // List of current and future events
  const events = [
    {
      href: "/resources/events/scattered-light-songfest",
      label: "Scattered Light Songfest",
      date: "March 9, 2025",
      color: "purple" as const
    }
    // More events can be added here as they are created
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-container border-b border-gray-200 pb-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Events</h3>
        
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="nav-item">
              <Link 
                href={event.href}
                className="flex flex-col p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:translate-x-1"
              >
                <div className="flex items-center mb-1">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 bg-${event.color}-500`}></span>
                  <span className="font-medium text-gray-900">{event.label}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 pl-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{event.date}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link 
            href="/resources"
            className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-all duration-200 hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4 mr-2 text-purple-600" />
            <span>Back to Resources</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
