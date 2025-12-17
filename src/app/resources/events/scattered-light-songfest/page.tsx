import { Metadata } from "next";
import { Hero } from "./components/hero";
import { EventDetails } from "./components/event-details";
import { JonsStory } from "./components/jons-story";
import { DonationSection } from "./components/donation-section";
import { AboutLMS } from "./components/about-lms";
import { EventSidebar } from "./components/sidebar";

export const metadata: Metadata = {
  title: "Scattered Light Spring Songfest | NLMSF",
  description: "Join us for the Scattered Light Spring Songfest in Madison, Wisconsin to celebrate Jon Rosenblum's continued fight against metastatic leiomyosarcoma and support LMS research.",
  openGraph: {
    title: "Scattered Light Spring Songfest | NLMSF",
    description: "Join us for the Scattered Light Spring Songfest in Madison, Wisconsin to celebrate Jon Rosenblum's continued fight against metastatic leiomyosarcoma and support LMS research.",
    url: "https://nlmsf.org/resources/events/scattered-light-songfest",
    siteName: "National LMS Foundation",
    locale: "en_US",
    type: "website",
  },
};

export default function ScatteredLightSongfestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Join us for a very special evening to celebrate springtime, the joys of life, Jon Rosenblum's continued fight against metastatic leiomyosarcoma, 
            and the doctors, nurses, researchers, and care staff that have made it possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <EventSidebar />
          </div>
          
          <div className="lg:col-span-3 space-y-10 order-1 lg:order-2">
            <div id="event-details">
              <EventDetails />
            </div>
            
            <div id="jons-story">
              <JonsStory />
            </div>
            
            <div id="about-lms">
              <AboutLMS />
            </div>
            
            <div id="donation">
              <DonationSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
