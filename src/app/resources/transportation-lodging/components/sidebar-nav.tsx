"use client";

import { Car, Plane, Building } from "lucide-react";

export function SidebarNav() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <h2 className="font-bold text-lg">On This Page</h2>
      </div>
      
      <div className="p-4">
        <a 
          href="#local-transportation" 
          className="flex items-center gap-2 p-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-md transition-colors"
        >
          <Car className="h-4 w-4" />
          <span>Local Transportation</span>
        </a>
        
        <a 
          href="#distant-transportation" 
          className="flex items-center gap-2 p-2 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-md transition-colors"
        >
          <Plane className="h-4 w-4" />
          <span>Distant Transportation</span>
        </a>
        
        <a 
          href="#lodging-options" 
          className="flex items-center gap-2 p-2 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-md transition-colors"
        >
          <Building className="h-4 w-4" />
          <span>Lodging Options</span>
        </a>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <h3 className="font-medium text-gray-700 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Contact the American Cancer Society for assistance finding transportation and lodging options.
        </p>
        <a 
          href="tel:1-800-227-2345" 
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Call 1-800-227-2345
        </a>
      </div>
    </div>
  );
}
