"use client";

import { Car, Plane, Building } from "lucide-react";

export function Hero() {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium shadow-md">
        <Car className="h-4 w-4" />
        <span>Patient Resources</span>
      </div>
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
        Transportation & Lodging Resources
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
      </div>
      
      <p className="mx-auto max-w-2xl text-xl text-gray-700">
        Access to transportation and lodging assistance for cancer patients and their caregivers
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg shadow-sm">
          <Car className="h-5 w-5" />
          <span>Local Transportation</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg shadow-sm">
          <Plane className="h-5 w-5" />
          <span>Distant Transportation</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg shadow-sm">
          <Building className="h-5 w-5" />
          <span>Lodging Options</span>
        </div>
      </div>
    </div>
  );
}
