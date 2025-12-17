import React from 'react';

const RelatedResources = () => {
  return (
    <div id="related-resources" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Related Resources</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-rose-50 to-rose-100">
        <div className="prose max-w-none">
          <p className="mb-4 text-rose-800 italic font-medium">Click titles for more information:</p>
          
          <ul className="list-none space-y-4 text-gray-700">
            <li className="transition-transform hover:translate-x-1">
              <a 
                href="https://www.cancer.gov/publications/patient-education/facing-forward" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-rose-700 hover:text-rose-900 hover:underline flex items-center p-3 bg-white/70 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span className="mr-3 text-rose-500 text-xl">→</span> 
                <span>Facing Forward: Life After Cancer Treatment</span>
              </a>
            </li>
            <li className="transition-transform hover:translate-x-1">
              <a 
                href="https://www.cancer.gov/publications/patient-education/make-a-difference" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-rose-700 hover:text-rose-900 hover:underline flex items-center p-3 bg-white/70 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span className="mr-3 text-rose-500 text-xl">→</span> 
                <span>Facing Forward: Making a Difference in Cancer</span>
              </a>
            </li>
            <li className="transition-transform hover:translate-x-1">
              <a 
                href="http://cancercontrol.cancer.gov/ocs/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-rose-700 hover:text-rose-900 hover:underline flex items-center p-3 bg-white/70 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span className="mr-3 text-rose-500 text-xl">→</span> 
                <span>Office of Cancer Survivorship</span>
              </a>
            </li>
            <li className="transition-transform hover:translate-x-1">
              <a 
                href="https://survivorship.cancer.gov/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="text-rose-700 hover:text-rose-900 hover:underline flex items-center p-3 bg-white/70 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span className="mr-3 text-rose-500 text-xl">→</span> 
                <span>Springboard Beyond Cancer</span>
              </a>
            </li>
          </ul>
          
          <div className="mt-8 p-4 bg-rose-100/70 border-l-4 border-rose-500 rounded">
            <p className="font-medium text-rose-800">
              <span className="font-bold">NOTE:</span> Partnering with your oncologist/oncology care team for your continued care is important in rebuilding quality of life after treatment with a survivorship care plan in place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedResources;
