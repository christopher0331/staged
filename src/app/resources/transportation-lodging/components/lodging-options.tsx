"use client";

import { Building, ExternalLink, Phone, MapPin } from 'lucide-react';
import { lodgingData } from '../data';

export function LodgingOptions() {
  return (
    <div id="lodging-options" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-green-800 mb-6 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
        {lodgingData.title}
      </h2>
      
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 shadow-md border border-green-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-green-500 p-2 rounded-full mr-4">
            <Building className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800">General Lodging Resources</h3>
            <p className="text-green-600">Organizations that help cancer patients find temporary lodging during treatment</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {lodgingData.generalResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
              <h4 className="text-lg font-semibold text-green-700 mb-2">{resource.name}</h4>
              <p className="text-gray-700 mb-3">{resource.description}</p>
              
              {resource.contactInfo && (
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone className="h-4 w-4 mr-2 text-green-500" />
                  <span>{resource.contactInfo}</span>
                </div>
              )}
              
              {resource.website && resource.website !== "#" && (
                <a 
                  href={resource.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-green-800 mb-4">Sarcoma Center Temporary Lodging Guide</h3>
      <p className="text-gray-700 mb-6">
        Many cancer centers offer lodging assistance or have partnerships with nearby accommodations. 
        Contact the patient services department at your treatment center for specific information.
      </p>
      
      <div className="bg-white rounded-lg p-6 shadow-md border border-green-200">
        <h4 className="text-lg font-semibold text-green-700 mb-4">Medical Centers with Lodging Resources</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lodgingData.medicalCenters.map((center, index) => (
            <div key={index} className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
              <a 
                href={center.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800 hover:underline text-sm"
              >
                {center.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
