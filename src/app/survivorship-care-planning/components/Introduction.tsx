import React from 'react';

const Introduction = () => {
  return (
    <div id="introduction" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Introduction</h2>
      </div>
      <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-t-0 border-purple-100">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Survivorship Care Planning is the roadmap to "a new normal" of moving forward with living for the patient and their family. Studies have shown that putting such a plan in place enhances survival.
          </p>
          
          <p className="text-gray-700 mt-5 leading-relaxed">
            Survivorship Care Planning after treatment involves the oncologist, the oncology care team that has been involved in the treatment journey with the patient.
          </p>
          
          <p className="text-gray-700 mt-5 leading-relaxed">
            The TEAM involves the patient and the oncologist and oncology care team, as well as the family/caregiver(s) supporting the patient throughout the treatment phase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
