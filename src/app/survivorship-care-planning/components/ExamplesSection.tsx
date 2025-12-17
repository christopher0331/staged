import React from 'react';

const ExamplesSection = () => {
  return (
    <div id="examples" className="space-y-6">
      <div className="rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Examples of Cancer Care Plans</h2>
          <p className="text-indigo-100 mt-1">The power of survivorship</p>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
          <h3 className="text-xl font-bold text-white">
            Follow-up Care After Cancer Treatment | Cancer.Net
          </h3>
        </div>
        
        <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="prose max-w-none">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0 hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Follow-up Care After Cancer Treatment. ... of your follow-up care plan once treatment is ... information from the American Society of Clinical Oncology ...
                </p>
                <div className="mt-3">
                  <a 
                    href="http://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-md shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-sm font-medium"
                  >
                    Visit Cancer.Net Resources
                  </a>
                  <p className="mt-2 text-xs text-gray-500">
                    <a 
                      href="http://www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco" 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      www.cancer.net/survivorship/follow-care-after-cancer-treatment/asco
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-4">
          <h3 className="text-xl font-bold text-white">
            An Updated Survivorship Care Planning Template
          </h3>
        </div>
        
        <div className="p-6 bg-gradient-to-r from-teal-50 to-teal-100">
          <div className="prose max-w-none">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0 hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  ... the American Society of Clinical Oncology (ASCO) released an updated cancer survivorship care planning template and resources for healthcare providers.
                </p>
                <div className="mt-3">
                  <a 
                    href="https://www.canceradvocacy.org/news/an-updated-survivorship-care" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-md shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-sm font-medium"
                  >
                    Visit Cancer Advocacy
                  </a>
                  <p className="mt-2 text-xs text-gray-500">
                    <a 
                      href="https://www.canceradvocacy.org/news/an-updated-survivorship-care" 
                      target="_blank" 
                      rel="noreferrer noopener"
                      className="text-teal-600 hover:text-teal-800 hover:underline"
                    >
                      https://www.canceradvocacy.org/news/an-updated-survivorship-care
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
