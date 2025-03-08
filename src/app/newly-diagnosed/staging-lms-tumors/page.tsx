import { Hero } from "./components/hero";
import { StagingOverview } from "./components/staging-overview";
import { TNMGrading } from "./components/tnm-grading";
import { StagesTable } from "./components/stages-table";
import { RecurrenceSection } from "./components/recurrence-section";
import { ResourcesSection } from "./components/resources-section";

export default function StagingLMSTumors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Staging is a critical part of understanding your LMS diagnosis. It helps your medical team determine the extent of the disease and plan the most effective treatment approach for your specific situation.
          </p>
        </div>
        
        <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <StagingOverview />
          </div>
          
          <div className="border-t border-gray-200"></div>
          
          <div className="p-6">
            <TNMGrading />
          </div>
          
          <div className="border-t border-gray-200"></div>
          
          <div className="p-6">
            <StagesTable />
          </div>
          
          <div className="border-t border-gray-200"></div>
          
          <div className="p-6">
            <RecurrenceSection />
          </div>
          
          <div className="border-t border-gray-200"></div>
          
          <div className="p-6">
            <ResourcesSection />
          </div>
        </div>
      </div>
    </div>
  );
}
