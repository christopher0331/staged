import { Metadata } from "next"
import { Hero } from "./components/hero"
import { OverviewSection } from "./components/overview-section"
import { BenefitsRisksSection } from "./components/benefits-risks-section"
import { PhasesSection } from "./components/phases-section"
import { ParticipationSection } from "./components/participation-section"
import { FaqSection } from "./components/faq-section"
import { MythsFactsSection } from "./components/myths-facts-section"
import { ResourcesSection } from "./components/resources-section"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "What Are Clinical Trials | LMS Foundation",
  description: "Understanding clinical trials for cancer treatment, their benefits, risks, and how to participate, with specific information for Leiomyosarcoma patients.",
}

export default function ClinicalTrialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Clinical trials are essential in advancing cancer treatments, including those for Leiomyosarcoma (LMS).
            This page explains what clinical trials are, their importance, how they work, and how you can participate.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <div id="overview" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">What Are Clinical Trials?</h2>
              <OverviewSection />
            </div>

            <div id="benefits-risks" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Benefits & Risks</h2>
              <BenefitsRisksSection />
            </div>

            <div id="phases" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Phases of Clinical Trials</h2>
              <PhasesSection />
            </div>

            <div id="participation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">How to Participate</h2>
              <ParticipationSection />
            </div>

            <div id="faq" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-rose-800 mb-6 bg-gradient-to-r from-rose-50 to-rose-100 p-4 rounded-lg border border-rose-200">Frequently Asked Questions</h2>
              <FaqSection />
            </div>

            <div id="myths-facts" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">Myths vs. Facts</h2>
              <MythsFactsSection />
            </div>

            <div id="resources" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg border border-emerald-200">Additional Resources</h2>
              <ResourcesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
