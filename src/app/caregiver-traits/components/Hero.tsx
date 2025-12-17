import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section bg-sky-50">
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-100 text-blue-600 text-sm font-medium hover:bg-sky-200 transition-colors">
          Caregiver Resources
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
          Caregiver Traits
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Understanding and acknowledging the special qualities that make caregivers essential in the cancer journey.
        </p>
      </div>
    </div>
  );
};

export default Hero;
