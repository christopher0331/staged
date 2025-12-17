import React from 'react';

const NavigationSidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
        <h3 className="text-lg font-bold text-white">Survivorship Care Planning</h3>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a 
              href="#introduction" 
              className="block p-2 text-purple-700 hover:bg-purple-50 rounded-md transition-colors font-medium"
            >
              Introduction
            </a>
          </li>
          <li>
            <a 
              href="#why-important" 
              className="block p-2 text-blue-700 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Why Survivorship Care is Important
            </a>
          </li>
          <li>
            <a 
              href="#information-needed" 
              className="block p-2 text-teal-700 hover:bg-teal-50 rounded-md transition-colors font-medium"
            >
              Information Needed for Care Plan
            </a>
          </li>
          <li>
            <a 
              href="#use-of-plan" 
              className="block p-2 text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors font-medium"
            >
              What to Do with the Plan
            </a>
          </li>
          <li>
            <a 
              href="#related-resources" 
              className="block p-2 text-rose-700 hover:bg-rose-50 rounded-md transition-colors font-medium"
            >
              Related Resources
            </a>
          </li>
          <li>
            <a 
              href="#planning-models" 
              className="block p-2 text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
            >
              Care Planning Models
            </a>
          </li>
          <li>
            <a 
              href="#follow-up-care" 
              className="block p-2 text-blue-700 hover:bg-blue-50 rounded-md transition-colors font-medium"
            >
              Follow-Up Care
            </a>
          </li>
          <li>
            <a 
              href="#examples" 
              className="block p-2 text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors font-medium"
            >
              Examples & Templates
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Denver-specific resources section */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 mt-4 border-t border-amber-200">
        <h4 className="text-amber-800 font-semibold mb-2">Denver Resources</h4>
        <p className="text-sm text-amber-900 mb-3">
          Local resources for cancer survivors in the Denver area
        </p>
        <a
          href="/denver-resources"
          className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md hover:from-amber-600 hover:to-amber-700 transition-all transform hover:-translate-y-0.5 text-sm font-medium"
        >
          View Denver Resources
        </a>
      </div>
      
      {/* Donation Section */}
      <div className="p-4 mt-4 border-t border-gray-200">
        <h4 className="text-gray-800 font-semibold mb-2">Support Our Mission</h4>
        <a
          href="/donate"
          className="inline-block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all text-center font-medium"
        >
          Donate to NLMSF
        </a>
      </div>
    </div>
  );
};

export default NavigationSidebar;
