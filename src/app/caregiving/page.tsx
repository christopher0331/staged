import React from 'react';
import { Metadata } from 'next';
import { Hero } from './components/hero';
import { InformalGuidance } from './components/informal-guidance';
import { CaregivingResources } from './components/caregiving-resources';
import { SurvivorshipPlanning } from './components/survivorship-planning';
import { CallToAction } from './components/call-to-action';

export const metadata: Metadata = {
  title: 'Caregiving Counts | National LMS Foundation',
  description: 'Support resources for caregivers of LMS patients at all stages of the journey, including guidance, group discussions, and educational materials.',
  openGraph: {
    title: 'Caregiving Counts | National LMS Foundation',
    description: 'Support resources for caregivers of LMS patients at all stages of the journey, including guidance, group discussions, and educational materials.',
    url: 'https://nlmsf.org/caregiving',
    siteName: 'National LMS Foundation',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CaregivingPage() {
  return (
    <main>
      <Hero />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <InformalGuidance />
        <CaregivingResources />
        <SurvivorshipPlanning />
        <CallToAction />
      </div>
    </main>
  );
}
