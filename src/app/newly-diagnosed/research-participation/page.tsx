import { Metadata } from 'next';
import { Hero } from './components/hero';
import { CountMeInSection } from './components/count-me-in-section';
import { PatternOrgSection } from './components/pattern-org-section';
import { CureIdSection } from './components/cure-id-section';
import { SidebarNav } from './components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Patient-Driven Research | National LMS Foundation',
  description: 'Discover three powerful ways to participate in LMS research through Count Me In, Pattern.org, and CURE ID initiatives to advance treatments and improve outcomes.',
  openGraph: {
    title: 'Patient-Driven Research | National LMS Foundation',
    description: 'Discover three powerful ways to participate in LMS research through Count Me In, Pattern.org, and CURE ID initiatives to advance treatments and improve outcomes.',
    url: 'https://nlmsf.org/newly-diagnosed/research-participation',
    siteName: 'National LMS Foundation',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ResearchParticipationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            As a patient, you have the power to directly impact LMS research and treatment development. 
            Below are three important initiatives where your participation can make a significant difference 
            in advancing our understanding of Leiomyosarcoma and improving outcomes for all patients.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <CountMeInSection />
            <PatternOrgSection />
            <CureIdSection />
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 text-center">
                <h2 className="text-xl font-bold text-purple-800 mb-3">Your Participation Makes a Difference</h2>
                <p className="text-gray-700 mb-6">
                  By participating in these research initiatives, you're helping to accelerate discoveries, 
                  develop new treatments, and improve outcomes for all LMS patients.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-purple-600 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-700 transition-colors shadow-sm"
                >
                  Contact Us With Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
