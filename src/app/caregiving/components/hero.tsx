import React from 'react';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-nlmsf-purple py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Caregiving Counts</h1>
        <p className="text-lg md:text-xl mb-6">
          A National LMS Foundation Support Initiative to support new caregivers, caregivers at all stages of the journey - be it a family or friend to care for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#resources" 
            className="bg-white text-nlmsf-purple font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            View Resources
          </a>
          <a 
            href="https://nlmsf.org/podcast/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
          >
            Listen to Podcasts
          </a>
        </div>
      </div>
    </section>
  );
}
