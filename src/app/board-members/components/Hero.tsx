import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-indigo-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Meet Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Board
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-3">
              The National Leiomyosarcoma Foundation is comprised of volunteer Board members committed to the foundation's vision.
            </p>
            <p className="text-lg text-gray-700 mb-3">
              The Board members serving the Foundation are here for YOU – for patients, families, and caregivers. 
              They are passionate about answering your questions and being available to respond to requested assistance. 
              They represent and advocate for you.
            </p>
            <p className="text-lg text-gray-700">
              The Board members have been touched by LMS in some way, whether as a survivor/thriver or as a family member/caregiver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
