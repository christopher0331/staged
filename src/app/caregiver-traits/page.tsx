import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import TraitsSection from './components/TraitsSection';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Caregiver Traits | NLMSF',
  description: 'Acknowledging the Special Traits of Caregivers - Understanding the essential qualities that make caregivers so important in the cancer journey.',
};

export default function CaregiverTraitsPage() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - now on the left */}
          <div className="md:w-1/3 md:sticky md:top-24 h-fit order-2 md:order-1">
            <Sidebar />
          </div>
          
          {/* Main content - now on the right */}
          <div className="md:w-2/3 order-1 md:order-2">
            <Introduction />
            <TraitsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
