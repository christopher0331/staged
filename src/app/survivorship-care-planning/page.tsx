import React from 'react';
import { Metadata } from 'next';

// Import components
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import WhySurvivorshipCare from './components/WhySurvivorshipCare';
import InformationNeeded from './components/InformationNeeded';
import UseOfPlan from './components/UseOfPlan';
import RelatedResources from './components/RelatedResources';
import PlanningModels from './components/PlanningModels';
import FollowUpCare from './components/FollowUpCare';
import ExamplesSection from './components/ExamplesSection';
import NavigationSidebar from './components/NavigationSidebar';

export const metadata: Metadata = {
  title: 'Survivorship Care Planning | NLMSF',
  description: 'Learn about survivorship care planning after cancer treatment - roadmap to "a new normal" of moving forward with living for the patient and their family.',
};

export default function SurvivorshipCarePlanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content and Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Left Side */}
          <aside className="lg:w-1/3">
            <NavigationSidebar />
          </aside>
          
          {/* Main Content - Right Side */}
          <main className="lg:w-2/3 space-y-6">
            {/* Content sections in separate cards for better visual distinction */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Introduction />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <WhySurvivorshipCare />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <InformationNeeded />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <UseOfPlan />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <RelatedResources />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <PlanningModels />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <FollowUpCare />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ExamplesSection />
            </div>
          </main>
        </div>
        
        {/* Footer note */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>For questions or more information about survivorship care planning, please contact us at <a href="mailto:annieachee@aol.com" className="text-purple-600 hover:text-purple-800">annieachee@aol.com</a> or call <a href="tel:+13037830924" className="text-purple-600 hover:text-purple-800">303-783-0924</a>.</p>
        </div>
      </div>
    </div>
  );
}
