"use client";

import { Calendar, Clock, MapPin, Users } from "lucide-react";

export function EventDetails() {
  return (
    <div id="event-details" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
        Event Details
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Date</h3>
              <p className="text-gray-700">Sunday, March 9, 2025</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Time</h3>
              <p className="text-gray-700">Evening</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-gray-700">Madison, Wisconsin</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Hosted By</h3>
              <p className="text-gray-700">The Rosenblum Family</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
        <p className="text-gray-700 italic">
          A very special event to celebrate springtime, the joys of life, Jon's continued fight, 
          and the doctors, nurses, researchers, and care staff that have made it possible.
        </p>
      </div>
    </div>
  );
}
