import { Metadata } from "next"
import { Hero } from "./components/hero"
import { OverviewSection } from "./components/overview-section"
import { StagingSection } from "./components/staging-section"
import { GradingSection } from "./components/grading-section"
import { DifferencesSection } from "./components/differences-section"
import { ImportanceSection } from "./components/importance-section"
import { SarcomaSpecificSection } from "./components/sarcoma-specific-section"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Staging vs Grading of Cancer Tumors",
  description: "Understanding the difference between staging and grading of cancer tumors, with specific information for Leiomyosarcoma patients.",
}

export default function StagingGradingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Understanding the difference between staging and grading is crucial for patients with cancer, 
            including those with Leiomyosarcoma (LMS). This page explains these concepts, their importance 
            in treatment planning, and specific information relevant to sarcoma patients.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <div id="overview" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Overview: Staging vs Grading</h2>
              <OverviewSection />
            </div>

            <div id="staging" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Cancer Staging</h2>
              <StagingSection />
            </div>

            <div id="grading" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Cancer Grading</h2>
              <GradingSection />
            </div>

            <div id="differences" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">Key Differences</h2>
              <DifferencesSection />
            </div>

            <div id="importance" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-rose-800 mb-6 bg-gradient-to-r from-rose-50 to-rose-100 p-4 rounded-lg border border-rose-200">Importance in Treatment Planning</h2>
              <ImportanceSection />
            </div>

            <div id="sarcoma-specific" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">Sarcoma-Specific Information</h2>
              <SarcomaSpecificSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
