import { Metadata } from "next"
import { Hero } from "./components/hero"
import { WhySeekSection } from "./components/why-seek-section"
import { PatientProfileSection } from "./components/patient-profile-section"
import { RelationshipsSection } from "./components/relationships-section"
import { AdvantagesSection } from "./components/advantages-section"
import { FeedbackSection } from "./components/feedback-section"
import { PartnershipsSection } from "./components/partnerships-section"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Second Opinions for LMS Patients",
  description: "Learn about the importance of second opinions, when to seek them, and how to navigate the process for Leiomyosarcoma patients.",
}

export default function SecondOpinionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Seeking a second opinion is an important step for many cancer patients, especially those with 
            rare cancers like Leiomyosarcoma (LMS). This page provides essential information about why 
            patients seek second opinions, how to navigate the process, and resources available to help.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <div id="why-seek" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Why Patients Seek Second Opinions</h2>
              <WhySeekSection />
            </div>

            <div id="patient-profile" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Patient Profiles and Characteristics</h2>
              <PatientProfileSection />
            </div>

            <div id="relationships" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Patient-Oncologist Relationships</h2>
              <RelationshipsSection />
            </div>

            <div id="advantages" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">Advantages of Second Opinions</h2>
              <AdvantagesSection />
            </div>

            <div id="feedback" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-rose-800 mb-6 bg-gradient-to-r from-rose-50 to-rose-100 p-4 rounded-lg border border-rose-200">Giving Feedback to Your Care Team</h2>
              <FeedbackSection />
            </div>

            <div id="partnerships" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200">Institutional Partnerships</h2>
              <PartnershipsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
