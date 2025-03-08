import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABC's of Newly Diagnosed | NLMSF",
  description: "Essential guidance for those newly diagnosed with Leiomyosarcoma (LMS)",
};

export default function ABCsOfNewlyDiagnosedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-nlmsf-purple sm:text-5xl mb-4">ABC's of Newly Diagnosed</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Essential guidance for navigating your LMS diagnosis and treatment journey</p>
        </div>

        <div className="mt-8 space-y-12">
          {/* Section A */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-nlmsf-purple mb-6">
              A - Awareness
            </h2>
            <p className="text-gray-700 mb-4">
              Awareness of the various aspects of this disease is key to be able to have effective and efficient appointments.
            </p>
            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Become aware of what LMS is</li>
              <li>
                See resource information about the disease from{" "}
                <a href="https://www.nlmsf.org" className="text-nlmsf-purple hover:underline">
                  www.nlmsf.org
                </a>{" "}
                and{" "}
                <a href="https://www.leiomyosarcoma.info" className="text-nlmsf-purple hover:underline">
                  www.leiomyosarcoma.info
                </a>
              </li>
              <li>
                Become aware of your pathology report and its importance in proceeding
                down the right course of treatment
              </li>
              <li>You have the right to seek a second opinion pathology assessment</li>
              <li>
                Be aware of genomic/molecular testing opportunities to evaluate your tumor
                for best treatment protocols to be impacted by the results received
              </li>
              <li>
                Patient consent to donate tumor tissue prior to surgery to the Cancer Cell Line Project for LMS
              </li>
              <li>Dental Care prior to oncologic treatment</li>
              <li>
                Be aware of all the resources available at your fingertips from the NLMSF on insurance, lodging and transportation to
                distant sarcoma centers
              </li>
              <li>
                Be aware of all three websites of the NLMSF to access information and assistance to help and guide you and your family/caregiver
              </li>
            </ul>
          </section>

          {/* Section B */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-nlmsf-purple mb-6">
              B - Be Your Own Best Advocate
            </h2>
            <p className="text-gray-700 mb-4">
              To be an effective member of your care team:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>
                Finding a sarcoma center of excellence - for sarcoma specialist care
                or if one location is an issue; request your community provider to consult with the
                sarcoma specialist (telemedicine)
              </li>
              <li>Learn about your multidisciplinary care team - their role in your care</li>
              <li>NCCN Guidelines on treatment at which stage of the treatment journey</li>
              <li>Second Opinions are your right</li>
              <li>Review your health insurance policy regarding care, medications, etc.</li>
            </ul>
          </section>

          {/* Section C */}
          <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-nlmsf-purple mb-6">
              C - Communication
            </h2>
            <p className="text-gray-700 mb-4">
              Communication is key with your care team:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Who are they</li>
              <li>Guidance on questions to ask</li>
              <li>Discuss side effects immediately from treatment</li>
              <li>Discuss the potential for recurrence, and anticipation of next steps</li>
              <li>Discuss survivorship care planning for after treatment</li>
              <li>Contact the NLMSF - accessible 24/7</li>
              <li>Request information about the NLMSF LMS LifeLine Buddy Program</li>
              <li>
                Request information about the Learning Curves Workshop Initiatives of the NLMSF
                <ul className="pl-6 mt-2 space-y-1">
                  <li>Patient-Caregiver Advocacy Roundtable</li>
                  <li>Survivors Inspire Peer Network</li>
                </ul>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-nlmsf-purple/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-nlmsf-purple mb-3">Need Additional Support?</h3>
            <p className="text-gray-700">
              The National Leiomyosarcoma Foundation is here to help. Contact us anytime for resources, 
              support, or to connect with others in the LMS community.
            </p>
            <div className="mt-4">
              <a 
                href="/contact" 
                className="inline-block bg-nlmsf-purple text-white px-4 py-2 rounded hover:bg-nlmsf-purple/90 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
