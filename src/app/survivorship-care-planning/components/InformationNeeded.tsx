import React from 'react';

const InformationNeeded = () => {
  return (
    <div id="information-needed" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">What Information Do I Need to Create a Care Plan?</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-teal-50 to-teal-100">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            The OncoLife Survivorship Care Plan is a "survivorship care plan" that is individualized based on the answers you provide in a brief questionnaire. In order to develop the most accurate plan of care, you may need to talk to your oncology team to have some details of your cancer therapy available:
          </p>
          
          <ul className="list-disc pl-8 mt-5 space-y-2 text-gray-700">
            <li className="pl-2">Type of cancer</li>
            <li className="pl-2">If you underwent surgery, what procedures were done?</li>
            <li className="pl-2">If you received chemotherapy, what medications were received?</li>
            <li className="pl-2">If you received radiation therapy, what type of cancer was this done for?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationNeeded;
