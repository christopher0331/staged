import React from 'react';

const FollowUpCare = () => {
  return (
    <div id="follow-up-care" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Coping – Follow-Up Medical Care</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-100">
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">National Cancer Institute Resources</h3>
          
          <div className="bg-white/70 p-5 rounded-lg shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Key Recommendation:</span> Once you're done with cancer treatment, you should receive a follow-up cancer plan from your doctor. All cancer survivors should have follow-up care.
              </p>
              
              <div className="mt-3">
                <a 
                  href="http://www.cancer.gov/about-cancer/coping/survivorship/follow-up-care" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-md shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-sm font-medium"
                >
                  Visit NCI Follow-Up Care Resources
                </a>
                
                <p className="mt-2 text-xs text-gray-500">
                  <a 
                    href="http://www.cancer.gov/about-cancer/coping/survivorship/follow-up-care" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    www.cancer.gov/about-cancer/coping/survivorship/follow-up-care
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpCare;
