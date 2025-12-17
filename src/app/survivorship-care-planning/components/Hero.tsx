import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-200 text-purple-700 text-sm font-medium hover:bg-purple-300 transition-colors">
          Patient Resources
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-purple-700">
          Survivorship Care Planning
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          The roadmap to "a new normal" of moving forward with living for the patient and their family. Studies have shown that putting such a plan in place enhances survival.
        </p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Survivorship Care Planning after treatment involves the oncologist, the oncology care team, the patient, and their family/caregivers who have been supporting them throughout the treatment phase.
        </p>
      </div>
    </>
  );
};

export default Hero;
