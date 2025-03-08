"use client";

import { Plane, ExternalLink, Phone } from 'lucide-react';
import { transportationData } from '../data';

export function DistantTransportation() {
  return (
    <div id="distant-transportation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">
        {transportationData.distant.title}
      </h2>
      
      <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Long-Distance Transportation Options</h3>
            <p className="text-teal-600">Services to help patients travel to distant medical appointments</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportationData.distant.resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-teal-100">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">{resource.name}</h4>
              <p className="text-gray-700 mb-3">{resource.description}</p>
              
              {resource.contactInfo && (
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="h-4 w-4 mr-2 text-teal-500" />
                  <span>{resource.contactInfo}</span>
                </div>
              )}
              
              {resource.website && resource.website !== "#" && (
                <a 
                  href={resource.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
        <h4 className="font-semibold text-teal-700 mb-2">Planning Ahead</h4>
        <p className="text-gray-700">
          Many of these services require advance notice. It's recommended to contact them as soon as you know your travel dates for medical appointments.
        </p>
      </div>
    </div>
  );
}
