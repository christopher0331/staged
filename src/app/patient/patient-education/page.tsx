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
                <h3 className="font-medium text-nlmsf-purple flex items-center gap-2">
                  Patients - Caregivers Advocacy Roundtable
                </h3>
                <p className="mt-2 text-sm text-gray-600">First MONDAY of each month – 7 pm EDT</p>
                <a href="#" className="mt-4 text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark flex items-center gap-1">
                  Join Virtual Meeting <span>→</span>
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  Guest Speakers featured for most meetings on topics selected by participants
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
                <h3 className="font-medium text-nlmsf-purple flex items-center gap-2">
                  Survivors Inspire Peer Network
                </h3>
                <p className="mt-2 text-sm text-gray-600">Third THURSDAY of each month – 7 pm EDT</p>
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
                Contact annieachee@aol.com or call 303 808-3437 to join the virtual meetings.
                The NLMSF Newsletters and FB Support Group will always announce scheduled meetings and guest speakers for each meeting.
              </p>
            </div>
          </div>

          {/* Video Resources */}
          <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-6">
              Leiomyosarcoma Education Videos
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <a
                  key={topic}
                  href={`#${topic.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
                >
                  <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark">{topic}</h3>
                </a>
              ))}
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
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}

const topics = [
  "ABC's of a New Diagnosis",
  "Basic Research",
  "Caregiving",
  "Chemotherapy and Targeted Agents",
  "Circulating Tumor DNA and Liquid Biopsies",
  "Clinical Trials",
  "Cutaneous Leiomyosarcoma",
  "General Information on Sarcoma Care",
  "Imaging/Radiology",
  "Immunotherapy",
  "The Microbiome",
  "Nutrition",
  "Pathology",
  "PECOMA",
  "Patient Centered Research",
  "Radiation Therapy",
  "Sarculator",
  "Surgical Treatment",
  "Survivorship Care Planning",
  "Uterine Fibroids",
];
