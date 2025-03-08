"use client";

import { Activity, Microscope, Users, Beaker } from "lucide-react";

export function Hero() {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md">
        <Activity className="h-4 w-4" />
        <span>Patients in Action</span>
      </div>
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
        Patient-Driven Research
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
      </div>
      
      <p className="mx-auto max-w-2xl text-xl text-gray-700">
        Make research matter through your direct participation and advocacy
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg shadow-sm">
          <Microscope className="h-5 w-5" />
          <span>Count Me In Project</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg shadow-sm">
          <Users className="h-5 w-5" />
          <span>Pattern.org</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg shadow-sm">
          <Beaker className="h-5 w-5" />
          <span>CURE ID</span>
        </div>
      </div>
    </div>
  );
}
