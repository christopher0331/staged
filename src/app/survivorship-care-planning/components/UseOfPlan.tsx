import React from 'react';

const UseOfPlan = () => {
  return (
    <div id="use-of-plan" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">What Should I Do with the Plan?</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            This care plan is meant for you to review and discuss with your healthcare team (both oncology and primary care). Keep in mind that every case is different and the risks of some side effects vary based on the actual dose of radiation or chemotherapy that were received or the techniques that were used to administer these therapies. 
          </p>
          <div className="p-4 mt-4 bg-indigo-100/50 border-l-4 border-indigo-500 rounded">
            <p className="font-medium text-indigo-800">
              It is very important to review your plan of care with the oncology team to further clarify your risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseOfPlan;
