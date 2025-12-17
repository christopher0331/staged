import { Metadata } from "next";
import { videoSections } from "./data";

export const metadata: Metadata = {
  title: "Patient Education Programs | NLMSF",
  description: "Educational programs, workshops, and video resources for the LMS community.",
};

export default function PatientEducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-200 text-nlmsf-purple text-sm font-medium hover:bg-purple-300 transition-colors">
            Patient Education
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-nlmsf-purple">
            Patient and Family Education Programs
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            The NLMSF collaborates annually with major sarcoma centers of excellence to bring important and special educational opportunities to the LMS Community.
          </p>
          <p className="mx-auto max-w-2xl text-md text-gray-500 mt-2">
            <span className="text-nlmsf-purple font-medium">Note:</span> Due to the COVID-19 health crisis, all five in-person LMS education programs originally scheduled in 2020 were postponed. Special education programs are taking place by phone or online meeting within the new NLMSF Patient Caregiver Initiatives.  
          </p>
        </div>

        <div className="space-y-8">
          {/* Monthly Programs */}
          <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-4">Educational Workshops</h2>
            <p className="text-gray-600 mb-6">
              of the National Leiomyosarcoma Foundation
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 text-lg font-medium">PC</span>
                  </div>
                  <h3 className="font-medium text-nlmsf-purple text-lg">
                    Patients - Caregivers Advocacy Roundtable
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-600"><strong>First MONDAY</strong> of each month – 7 pm EDT</p>
                <a href="#" className="mt-4 text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark flex items-center gap-1">
                  Join Virtual Meeting <span>→</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Guest Speakers featured for most meetings on topics selected by participants
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 text-lg font-medium">SI</span>
                  </div>
                  <h3 className="font-medium text-nlmsf-purple text-lg">
                    Survivors Inspire Peer Network
                  </h3>
                </div>
                <p className="mt-2 text-sm text-gray-600"><strong>Third THURSDAY</strong> of each month – 7 pm EDT</p>
                <a href="#" className="mt-4 text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark flex items-center gap-1">
                  Join Virtual Meeting <span>→</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Guest speaker featured at meetings on important topics selected by participants
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg border bg-white shadow-sm text-center">
              <p className="text-sm text-gray-600">
                Contact <a href="mailto:annieachee@aol.com" className="text-nlmsf-purple hover:text-nlmsf-purple-dark">annieachee@aol.com</a> or call <a href="tel:3038083437" className="text-nlmsf-purple hover:text-nlmsf-purple-dark">303-808-3437</a> to join the virtual meetings.
                The NLMSF Newsletters and FB Support Group will always announce scheduled meetings and guest speakers for each meeting.
              </p>
            </div>
          </div>

          {/* Video Resources */}
          <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-6">
              Leiomyosarcoma Education Videos for Patients and Caregivers
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videoSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
                >
                  <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark">{section.title}</h3>
                  <p className="mt-2 text-xs text-gray-500">{section.videos.length} video{section.videos.length !== 1 ? 's' : ''}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Denver-specific CTA */}
          <div className="p-5 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="rounded-full bg-purple-100 p-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-nlmsf-purple">Denver LMS Support Resources</h3>
                <p className="text-sm text-gray-600 mt-1">Looking for local support in Denver? Connect with our Denver-based patient advocates who can help guide you through local resources and treatment options.</p>
              </div>
              <div className="ml-auto">
                <a href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-nlmsf-purple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Connect in Denver
                </a>
              </div>
            </div>
          </div>

          {/* Video Content Sections */}
          {videoSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-20"
            >
              <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg p-6">
                <h2 className="text-2xl text-nlmsf-purple mb-6">{section.title}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.videos.map((video, idx) => (
                    <div key={idx} className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
                      {video.presenter && (
                        <div className="mb-3 flex items-start gap-3">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-700 text-sm font-medium">
                              {video.presenter.split(' ').slice(-1)[0][0]}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-nlmsf-purple">{video.presenter}</h4>
                            {video.title && <p className="mt-0.5 text-sm text-gray-600">{video.title}</p>}
                          </div>
                        </div>
                      )}
                      <h3 className="text-base font-medium text-gray-900">{video.topic}</h3>
                      {video.date && (
                        <p className="mt-1 text-sm text-gray-600">{video.date}</p>
                      )}
                      {video.description && (
                        <p className="mt-2 text-sm text-gray-600">{video.description}</p>
                      )}
                      {video.url && (
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark gap-1"
                        >
                          Watch Video <span>→</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional Resources Section */}
          <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-6">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm hover:shadow-md transition-all duration-200">
                <h3 className="font-medium text-nlmsf-purple mb-2">UCLA – NLMSF Patient/Family LMS Education Symposium</h3>
                <p className="text-sm text-gray-600">Access recordings and materials from our comprehensive educational symposium covering various aspects of LMS treatment and care.</p>
                <a href="#" className="mt-3 inline-flex items-center text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark gap-1">
                  View Symposium Resources <span>→</span>
                </a>
              </div>
              <div className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm hover:shadow-md transition-all duration-200">
                <h3 className="font-medium text-nlmsf-purple mb-2">Denver LMS Support Group</h3>
                <p className="text-sm text-gray-600">Connect with other LMS patients and caregivers in the Denver area for in-person and virtual support meetings.</p>
                <a href="#" className="mt-3 inline-flex items-center text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark gap-1">
                  Join Denver Support Group <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
