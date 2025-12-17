import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EventsSidebar } from "./components/events-sidebar";

export const metadata: Metadata = {
  title: "Events | NLMSF",
  description: "Upcoming events and fundraisers supporting the National Leiomyosarcoma Foundation and LMS research.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md">
            <Calendar className="h-4 w-4" />
            <span>Community Events</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Upcoming Events
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          
          <p className="mx-auto max-w-2xl text-xl text-gray-700">
            Join us at these upcoming events to support the LMS community, connect with others, and help fund critical research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <EventsSidebar />
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div id="upcoming-events" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link 
                href="/resources/events/scattered-light-songfest"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="bg-purple-100 text-purple-800 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    March 9, 2025
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Scattered Light Spring Songfest</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Madison, Wisconsin</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Join us for a special evening to celebrate Jon Rosenblum's continued fight against metastatic 
                    leiomyosarcoma and support LMS research.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
              
              {/* Placeholder for future events */}
              <div className="bg-white/60 rounded-xl shadow-sm overflow-hidden border border-dashed border-gray-300 flex items-center justify-center p-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600">More events coming soon</h3>
                  <p className="text-gray-500 mt-2">Check back for updates on upcoming events and fundraisers</p>
                </div>
              </div>
            </div>
            
            <div id="host-event" className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to host your own event?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                If you're interested in organizing a fundraiser or awareness event for the National Leiomyosarcoma Foundation, 
                we'd love to hear from you and provide support.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Denver-specific CTA section */}
            <div id="denver-events" className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Denver Area Events</h3>
                  <p className="text-gray-700 mb-4">
                    Looking for LMS community events in the Denver metropolitan area? Connect with local supporters and find Denver-specific gatherings.
                  </p>
                  <Link 
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm"
                  >
                    Find Denver Events
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center shadow-md">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
