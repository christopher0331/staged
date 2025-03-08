"use client";

import { Microscope, Users, Beaker } from "lucide-react";

export function SidebarNav() {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md p-4 sticky top-24">
      <h3 className="font-bold text-lg mb-4 text-gray-800">Page Contents</h3>
      
      <div className="space-y-1">
        <a 
          href="#count-me-in" 
          className="flex items-center gap-2 p-2 hover:bg-purple-50 text-gray-700 hover:text-purple-700 rounded-md transition-colors"
        >
          <Microscope className="h-4 w-4" />
          <span>Count Me In Project</span>
        </a>
        
        <a 
          href="#pattern-org" 
          className="flex items-center gap-2 p-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-md transition-colors"
        >
          <Users className="h-4 w-4" />
          <span>Pattern.org</span>
        </a>
        
        <a 
          href="#cure-id" 
          className="flex items-center gap-2 p-2 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-md transition-colors"
        >
          <Beaker className="h-4 w-4" />
          <span>CURE ID</span>
        </a>
      </div>
    </div>
  );
}
