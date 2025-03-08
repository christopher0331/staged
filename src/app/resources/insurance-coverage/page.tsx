import { Metadata } from "next";
import { Hero } from "./components/hero";
import { AffordableCareAct } from "./components/affordable-care-act";
import { CostLimits } from "./components/cost-limits";
import { FinancialAssistance } from "./components/financial-assistance";
import { AdditionalResources } from "./components/additional-resources";
import { SidebarNav, sidebarNavItems } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "Cancer and Insurance Coverage | NLMSF",
  description: "Learn about your insurance rights and coverage options as a cancer patient, including protections under the Affordable Care Act.",
};

export default function InsuranceCoveragePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Understanding your insurance coverage is crucial when navigating cancer treatment. 
            This guide provides essential information about insurance protections, cost limits, 
            and financial assistance programs available to cancer patients and their families.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <div className="sticky top-20 bg-white rounded-xl shadow-md overflow-hidden p-4">
              <h3 className="text-lg font-semibold mb-4 px-2">On This Page</h3>
              <SidebarNav items={sidebarNavItems} />
            </div>
          </div>
          
          <div className="w-full space-y-10">
            <div id="affordable-care-act" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Affordable Care Act Protections</h2>
              <AffordableCareAct />
            </div>

            <div id="cost-limits" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Cost Limits & Out-of-Pocket Expenses</h2>
              <CostLimits />
            </div>

            <div id="financial-assistance" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Financial Assistance Programs</h2>
              <FinancialAssistance />
            </div>
            
            <div id="additional-resources" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">Additional Resources</h2>
              <AdditionalResources />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
