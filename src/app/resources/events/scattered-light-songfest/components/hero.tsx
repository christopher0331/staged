"use client";

import { Calendar, MapPin, Music } from "lucide-react";

export function Hero() {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md">
        <Music className="h-4 w-4" />
        <span>Special Event</span>
      </div>
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
        SCATTERED LIGHT SPRING SONGFEST
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg shadow-sm">
          <Calendar className="h-5 w-5" />
          <span>Sunday, March 9, 2025</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">
          <MapPin className="h-5 w-5" />
          <span>Madison, Wisconsin</span>
        </div>
      </div>
    </div>
  );
}
