import { Metadata } from "next";
import { Hero } from "./components/hero";
import { LocalTransportation } from "./components/local-transportation";
import { DistantTransportation } from "./components/distant-transportation";
import { LodgingOptions } from "./components/lodging-options";
import { SidebarNav } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "Transportation & Lodging Resources | National Leiomyosarcoma Foundation",
  description: "Access transportation and lodging resources for cancer patients and caregivers, including local and distant travel assistance and temporary housing options.",
};

export default function TransportationLodgingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Finding transportation and lodging during cancer treatment can be challenging. 
            These resources are designed to help patients and caregivers access reliable 
            transportation to medical appointments and secure temporary lodging when 
            treatment requires travel away from home.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <div id="local-transportation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Local Transportation</h2>
              <LocalTransportation />
            </div>

            <div id="distant-transportation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Distant Transportation</h2>
              <DistantTransportation />
            </div>

            <div id="lodging-options" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Lodging Options</h2>
              <LodgingOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
