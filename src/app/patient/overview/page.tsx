import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Overview | NLMSF",
  description: "Essential information and guidance for newly diagnosed LMS patients and their caregivers.",
};

export default function PatientOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-200 text-nlmsf-purple text-sm font-medium hover:bg-purple-300 transition-colors">
            Patient Resources
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-nlmsf-purple">
            Coping with a New LMS Diagnosis
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Guidance and support for your journey with LMS, from initial diagnosis through treatment and beyond.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A Leiomyosarcoma (LMS) diagnosis can be overwhelming. This page provides essential resources, tips, and guidance to help you navigate your journey with confidence and support.
          </p>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tips for First Appointment */}
          <div className="p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-4">Tips for Your First Appointment</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Don't go alone – bring someone to take notes and minimize distractions</li>
                  <li>Keep a symptom journal between appointments</li>
                  <li>Prepare a list of questions with space for answers</li>
                  <li>Bring your current medication list</li>
                  <li>Bring entertainment for potential wait times</li>
                </ul>
              </div>
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Be honest about all concerns (physical, emotional, or otherwise)</li>
                  <li>Ask about support services and complementary therapies</li>
                  <li>Ensure you understand the next steps before leaving</li>
                  <li>Share your question list with a caregiver for completeness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>
          
          {/* Courage, Hope, Resilience & Strength */}
          <div className="p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-4">Building Resilience</h2>
            <p className="text-gray-600 mb-6">
              We are all survivors from the time of initial diagnosis through treatment and into long-term survivorship.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-medium text-nlmsf-purple">Personal Growth</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Reflect on and connect with your inner strength</li>
                  <li>Renew your faith in meeting challenges</li>
                  <li>Take charge of your care through education</li>
                  <li>Practice acceptance through meditation or yoga</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-nlmsf-purple">Practical Steps</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Learn about healthy eating and the microbiome</li>
                  <li>Build your support network</li>
                  <li>Explore all possible healing approaches</li>
                  <li>Be your own best advocate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>
          
          {/* Additional Resources */}
          <div className="p-6">
            <h2 className="text-2xl text-nlmsf-purple mb-4">Additional Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="https://www.cancer.gov/about-cancer/coping"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200"
              >
                <h3 className="font-medium text-nlmsf-purple">National Cancer Institute</h3>
                <p className="mt-2 text-sm text-gray-600">Tips for Coping with a New Cancer Diagnosis</p>
              </a>
              <a
                href="https://www.mayoclinic.org/patient-visitor-guide/preparing-for-your-visit/how-to-make-the-most-of-your-appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200"
              >
                <h3 className="font-medium text-nlmsf-purple">Mayo Clinic</h3>
                <p className="mt-2 text-sm text-gray-600">Making the Most of Your Appointment</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
