import React from 'react';

// Hero Component
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md mb-8">
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-full shadow-sm">
          <span className="text-white mr-2">📋</span>
          <span className="text-white text-sm font-medium">Newly Diagnosed</span>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent">
        Health Insurance Guidance
      </h1>
      
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
        Understanding your insurance rights and coverage options when dealing with cancer.
      </p>
      
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="#rights" className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md border border-blue-200 hover:bg-blue-100 transition">
          Your Rights
        </a>
        <a href="#costs" className="bg-teal-50 text-teal-700 px-4 py-2 rounded-md border border-teal-200 hover:bg-teal-100 transition">
          Cost Limits
        </a>
        <a href="#benefits" className="bg-green-50 text-green-700 px-4 py-2 rounded-md border border-green-200 hover:bg-green-100 transition">
          Essential Benefits
        </a>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Insurance Guide</h2>
      </div>
      
      <div className="p-2">
        <div className="py-2 px-3 text-sm font-medium text-gray-500 border-b border-gray-100">
          KEY SECTIONS
        </div>
        
        <nav className="flex flex-col">
          <a href="#rights" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-blue-600 mr-2">▸</span>
            Your Rights
          </a>
          <a href="#costs" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-teal-600 mr-2">▸</span>
            Cost Limits
          </a>
          <a href="#financial-help" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-green-600 mr-2">▸</span>
            Financial Help
          </a>
          <a href="#mental-health" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-purple-600 mr-2">▸</span>
            Mental Health
          </a>
          <a href="#senior-costs" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-red-600 mr-2">▸</span>
            Senior Drug Costs
          </a>
          <a href="#benefits" className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition">
            <span className="text-green-600 mr-2">▸</span>
            Essential Benefits
          </a>
        </nav>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-md">
          <a href="https://healthcare.gov" className="flex items-center text-blue-700 font-medium hover:underline">
            <span className="mr-2">🔗</span>
            Healthcare.gov
          </a>
        </div>
      </div>
    </div>
  );
};

// Main page component
export default function HealthInsuranceGuidance() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <Hero />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          
          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Rights Section */}
            <section id="rights" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Your Rights as a Cancer Patient
              </h2>
              
              <div className="p-6">
                <p className="mb-4 text-gray-700">
                  Health plans* have to help pay for your cancer treatment. You have rights as a cancer patient under the Affordable Care Act:
                </p>
                
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Your insurance cannot be canceled because you have cancer.</li>
                  <li>You cannot be denied insurance if you have cancer.</li>
                  <li>Children with cancer cannot be turned down for coverage.</li>
                  <li>
                    If you qualify and want to take part in a clinical trial, your health plan must help pay for routine costs associated with approved clinical trials. A trial may help you get new cancer treatments.
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Cost Limits Section */}
            <section id="costs" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-teal-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Limits on How Much You Have to Pay
              </h2>
              
              <div className="p-6">
                <p className="mb-4 text-gray-700">
                  The Affordable Care Act has rules about the most you have to pay out-of-pocket for the medical care you get from your doctors and the hospitals that participate in your plan. These protections are available even if you have cancer:
                </p>
                
                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                  <li>There is no dollar limit on how much an insurance company spends on covered expenses for your health care. Annual and lifetime limits have gone away.</li>
                  <li>If you are sick, you cannot be charged more for health insurance.</li>
                  <li>Your out-of-pocket costs will be limited. There's a maximum amount, or cap, on how much you'll have to spend on copays, coinsurance, and deductibles.</li>
                </ul>
                
                <div className="bg-blue-50 p-5 rounded-md mb-6">
                  <p className="mb-4 text-gray-700">
                    If you enroll in a health plan through your state's Marketplace or have a health plan from your employer that covers medical and pharmacy costs – check the spending caps for the year you are needing information as these are your spending caps or maximums:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>If you are single, your out-of-pocket costs for in-network care are capped at $8,150 per year.</li>
                    <li>For a family, the cap is $ ______ for one year.</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-md transition-transform hover:scale-105">
                    <h3 className="font-medium text-blue-800 mb-2">The Affordable Care Act</h3>
                    <p className="text-sm">Learn about your coverage rights through the American Cancer Society resources</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-md transition-transform hover:scale-105">
                    <h3 className="font-medium text-green-800 mb-2">Affordable Care Act Plans</h3>
                    <p className="text-sm">Explore $0 preventive care with no deductible or out-of-pocket costs</p>
                  </div>
                  <div className="bg-purple-100 p-4 rounded-md transition-transform hover:scale-105">
                    <h3 className="font-medium text-purple-800 mb-2">Cancer Insurance Coverage</h3>
                    <p className="text-sm">Coverage options for cancer, heart attack & stroke, help to pay medical & non-medical expenses</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Financial Help Section */}
            <section id="financial-help" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Financial Help Options
              </h2>
              
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-4 text-gray-700">
                  <li>
                    <strong className="text-green-700">Tax Credits and Subsidies:</strong> You might be able to get financial help to pay for some costs if you're buying insurance through your state's Marketplace. Both tax credits and cost-sharing subsidies are available to people with qualifying incomes. Check on healthcare.gov to find out.
                  </li>
                  <li>
                    <strong className="text-green-700">Medicaid:</strong> You might qualify for Medicaid, even if you haven't qualified in the past. Some states have expanded Medicaid to cover more people. Check with your state's Marketplace to find out if your state is one of those.
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Mental Health Section */}
            <section id="mental-health" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-purple-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Mental Health Support During Cancer Treatment
              </h2>
              
              <div className="p-6">
                <p className="mb-4 text-gray-700">
                  Many people have depression and anxiety during cancer treatment. You can get depression screening at no extra cost. Health plans sold on state Marketplaces, through the individual market, and through small employers must cover mental health services. While employers with more than 50 employees don't have to cover mental health services, most do.
                </p>
                
                <p className="mb-4 text-gray-700">
                  In addition, mental health services must be provided under the same terms and conditions as other health care services. Health plans can no longer provide more limited mental health benefits than they do for other health care benefits. How much you pay for your care will depend on the plan you enroll in.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-300">
                  <p className="text-gray-700 italic">
                    You can also get these services through Medicare and Medicaid.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Senior Drug Costs Section */}
            <section id="senior-costs" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Savings on Cancer Drug Costs for Seniors
              </h2>
              
              <div className="p-6">
                <p className="text-gray-700">
                  If you are on Medicare Part D, the Affordable Care Act is eliminating the so-called "donut hole." That's a gap in your prescription drug coverage. Prior to the Affordable Care Act, that made you pay the full cost of meds once you reached the annual drug-spending limit. Now, you pay only 25% of the costs of both covered brand name and generic drugs while in the donut hole.
                </p>
              </div>
            </section>
            
            {/* Essential Benefits Section */}
            <section id="benefits" className="mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-600">
              <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                Essential Health Benefits
              </h2>
              
              <div className="p-6">
                <p className="mb-5 text-gray-700">
                  If you buy health insurance through your state's Marketplace, on the individual market, or get them from an employer with fewer than 50 employees, your plan must cover certain essential health benefits. You may need some of these services as a cancer patient, including:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Chronic disease care</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Emergency care</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Hospital Care</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Lab services</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Mental health services</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Outpatient treatment</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Prescription drug coverage</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-800">Rehabilitation services</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-400">
                  <p className="text-gray-700">
                    <span className="font-semibold">Be aware:</span> Each state determines exactly what must be covered under these categories. Individual health plans may add to those minimum requirements. It's important to read the plan's summary of benefits to see what your costs will be before you enroll. While large employers are not required to cover the essential health benefits, nearly all do.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Exceptions Section/Footnote */}
            <section className="mb-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  * Grandfathered health plans, those that existed before the Affordable Care Act was passed and have not significantly changed, are not required to offer some of these protections, such as bans on pre-existing conditions or annual limits on benefits. Check with your insurance company or HR department to find out if you're in a grandfathered plan. In addition, short-term health plans do not have to offer these benefits or protections. Short-term health policies are those in effect for less than 12 months, although they can be renewed for up to 3 years.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
