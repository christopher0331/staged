import React from 'react';

const PlanningModels = () => {
  return (
    <div id="planning-models" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Survivorship Care Planning Models</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="prose max-w-none">
          <p className="text-amber-800 font-medium mb-3">Various Sources for General Guidance:</p>
          
          <div className="p-5 bg-white/70 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Please visit the following sites to become acquainted with what will help you to navigate issues during treatment, as well as after treatment is completed. This information is helpful to discuss with your oncologist / medical care team.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Cancer.Net and the American Society of Clinical Oncology (ASCO) have put together wonderful, helpful guidance that will benefit you after treatment and enhance your survivorship through careful, ongoing connection with your oncology/medical care team. 
            </p>
          </div>
          
          <div className="mt-6">
            <p className="mb-2 text-amber-800 font-medium">The following link will take you to this important information:</p>
            <a 
              href="https://www.cancer.net/survivorship/what-survivorship" 
              target="_blank" 
              rel="noreferrer noopener"
              className="inline-block px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg shadow hover:shadow-md transition-all transform hover:-translate-y-0.5 font-medium text-sm"
            >
              Visit Cancer.Net Survivorship Resources
            </a>
            
            <p className="mt-3 text-xs text-gray-500">
              <a 
                href="https://www.cancer.net/survivorship/what-survivorship" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-amber-600 hover:text-amber-800 hover:underline font-medium"
              >
                https://www.cancer.net/survivorship/what-survivorship
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningModels;
