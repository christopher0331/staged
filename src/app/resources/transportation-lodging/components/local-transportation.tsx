"use client";

import { Car, ExternalLink, Phone } from 'lucide-react';
import { transportationData } from '../data';

export function LocalTransportation() {
  return (
    <div id="local-transportation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
        {transportationData.local.title}
      </h2>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Car className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Local Transportation Options</h3>
            <p className="text-blue-600">Services to help patients get to and from local medical appointments</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {transportationData.local.resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">{resource.name}</h4>
              <p className="text-gray-700 mb-3">{resource.description}</p>
              
              {resource.contactInfo && (
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{resource.contactInfo}</span>
                </div>
              )}
              
              {resource.website && resource.website !== "#" && (
                <a 
                  href={resource.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
        <h4 className="font-semibold text-blue-700 mb-2">Need Help Finding Transportation?</h4>
        <p className="text-gray-700">
          Contact the American Cancer Society at <a href="tel:1-800-227-2345" className="text-blue-600 hover:text-blue-800 font-medium">1-800-227-2345</a> for assistance in finding transportation options in your area.
        </p>
      </div>
    </div>
  );
}
