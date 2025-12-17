"use client";

import { HeartPulse, User } from "lucide-react";

export function JonsStory() {
  return (
    <div id="jons-story" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
        Jon's Journey
      </h2>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-indigo-50 p-4 rounded-lg flex items-center justify-center md:w-1/4">
            <User className="h-16 w-16 text-indigo-600" />
          </div>
          
          <div className="md:w-3/4 space-y-4">
            <p className="text-gray-700">
              Jon Rosenblum has been fighting metastatic leiomyosarcoma for over 2.5 years. What felt like a calf strain 
              from a 6 AM YMCA basketball game became a fight for survival.
            </p>
            
            <p className="text-gray-700">
              The cancer, first discovered in the calf, had metastasized to over two dozen places around the body.
            </p>
          </div>
        </div>
        
        <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50">
          <h3 className="font-semibold text-indigo-800 mb-2 flex items-center">
            <HeartPulse className="h-5 w-5 mr-2" />
            Medical Team
          </h3>
          <p className="text-gray-700">
            An incredible team that has at times included Dr. Howard Bailey and Dr. Ryan Matteson at the Carbone Cancer Center 
            at UW-Madison, Dr. Brian Van Tine at the Siteman Cancer Center at Washington University in St. Louis, and 
            Dr. Steven Robinson at the Mayo Clinic in Rochester, sprung into action, providing access to the most innovative treatments.
          </p>
        </div>
        
        <p className="text-gray-700">
          This special event celebrates Jon's continued fight against LMS and honors the medical professionals who have 
          been instrumental in his journey. It's an opportunity to raise awareness and funds for LMS research while 
          celebrating life, resilience, and hope.
        </p>
      </div>
    </div>
  );
}
