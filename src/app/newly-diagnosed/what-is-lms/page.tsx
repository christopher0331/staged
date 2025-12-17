import { Metadata } from "next"
import { Hero } from "./components/hero"
import { DiagnosisTab } from "./components/diagnosis-tab"
import { TreatmentTab } from "./components/treatment-tab"
import { ResourcesTab } from "./components/resources-tab"
import { SidebarNav } from "./components/sidebar-nav"

const imagingTests = [
  {
    title: "X-ray",
    description: "Examination of the possible area of cancer to look for tumors or to see if there is any spread beyond the cancer's origin."
  },
  {
    title: "CT Scan",
    description: "A painless, non-invasive way to see inside the body using X-ray imaging. Creates cross-sectional images of soft tissue, organs, blood vessels, and bone that can be combined into 3-D pictures."
  },
  {
    title: "MRI Scan",
    description: "Captures detailed images of the inside of the body using magnetic fields and radio waves."
  },
  {
    title: "PET/CT Scan",
    description: "Combines CT imaging with a radioactive glucose solution to track cancer cells, which absorb glucose more quickly than healthy cells."
  },
  {
    title: "Ultrasound",
    description: "Uses sound waves to create pictures of organs, veins, and arteries."
  },
  {
    title: "Angiogram",
    description: "Uses x-ray and contrast dye injected through a catheter to check blood vessels and blood flow for blockages or leakage."
  }
];

const lmsSubtypes = [
  { title: "Blood Vessel LMS", link: "https://www.dovemed.com/diseases-conditions/leiomyosarcoma-blood-vessel/" },
  { title: "Bone LMS", link: "https://www.hindawi.com/journals/sarcoma/2012/636849/" },
  { title: "Breast LMS", link: "https://www.dovemed.com/diseases-conditions/leiomyosarcoma-breast/" },
  { title: "Cardiac LMS", link: "https://www.dovemed.com/diseases-conditions/cardiac-leiomyosarcoma/" },
  { title: "Cutaneous LMS", link: "https://www.dovemed.com/diseases-conditions/primary-cutaneous-leiomyosarcoma/" },
  { title: "Uterine LMS", link: "https://www.dovemed.com" },
  { title: "Vascular LMS", link: "https://www.dovemed.com/article-synonyms/leiomyosarcoma-vascular-origin/" },
  { title: "Retroperitoneal LMS", link: "https://www.dovemed.com/article-synonyms/leiomyosarcoma-retroperitoneum/" },
  { title: "Stomach LMS", link: "https://www.dovemed.com/diseases-conditions/leiomyosarcoma-stomach/" },
]

const treatmentOptions = [
  {
    title: "Surgery",
    description: "Tumor resection with wide margins to enhance potential for non-recurrence.",
  },
  {
    title: "Radiation Therapy",
    description: "Used to destroy cancer cells while preserving surrounding organ function.",
  },
  {
    title: "Chemotherapy",
    description: "Various drug combinations including gemcitabine-docetaxel and trabectedin.",
  },
  {
    title: "Targeted Drug Therapy",
    description: "Directed at specific molecular features, often including Pazopanib.",
  },
  {
    title: "Immunotherapy",
    description: "Treatment that uses the body's immune system to help fight cancer.",
  },
]

export const metadata: Metadata = {
  title: "What is Leiomyosarcoma (LMS)?",
  description: "Learn about Leiomyosarcoma (LMS), its symptoms, diagnosis, and treatment options.",
}

export default function WhatIsLMSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">What is Leiomyosarcoma (LMS)?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-purple-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Understanding this Rare Cancer
              </h3>
              <p className="text-gray-700">
                Leiomyosarcoma is a form of cancer. The term "cancer" refers to a group of diseases characterized by abnormal, uncontrolled cellular growth that invades surrounding tissues and may spread (metastasize) to distant body sites via the bloodstream, the lymphatic system, or other means.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Soft Tissue Sarcoma
              </h3>
              <p className="text-gray-700">
                Leiomyosarcoma is a type of soft tissue sarcoma. Soft tissue sarcomas are malignant tumors that arise from the connective tissue, which connects, supports and surrounds various structures and organs in the body. Soft tissue includes fat, muscle, nerves, tendons and blood vessels. There are over 70 types of soft tissue sarcomas.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl border border-teal-100 shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-teal-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Leiomyosarcoma
              </h3>
              <p className="text-gray-700">
                Leiomyosarcomas are malignant tumors that arise from smooth muscle cells. There are essentially two types of muscles in the body – voluntary and involuntary. Smooth muscles are involuntary muscles – the brain has no conscious control over them. They react involuntarily in response to various stimuli, such as causing digestive contractions, salivary gland activation, and goose bumps in response to cold.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100 shadow-sm">
              <h3 className="flex items-center text-lg font-semibold text-rose-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Common Sites & Spread
              </h3>
              <p className="text-gray-700">
                Since smooth muscle is found all over the body, leiomyosarcomas can form almost anywhere where there are blood vessels. The most common sites are the abdomen, retroperitoneum (the space behind the abdominal cavity), uterus and the extremities. Leiomyosarcomas usually spread via the bloodstream. It is very rare to see it in the lymphatics. There are no known causes of leiomyosarcoma.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 shadow-sm mb-6">
            <h3 className="flex items-center text-lg font-semibold text-amber-800 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Statistics & Prevalence
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-gray-700 md:w-2/3">
                Soft tissue sarcomas are rare in adults and account for less than 1 percent of all new cases of cancer. The American Cancer Society estimates that about 13,520 new cases of soft tissue sarcoma will be diagnosed in 2025 (7,600 cases in men and 5,920 cases in women).
              </p>
              <div className="mt-4 md:mt-0 md:w-1/3 md:pl-6">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="text-3xl font-bold text-purple-700">10-20%</span>
                  <p className="text-gray-600">of soft tissue sarcomas are Leiomyosarcomas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-xl shadow-md text-white text-center">
            <p className="text-lg font-medium">
              This page provides essential information to help you understand LMS diagnosis, treatment options, and available resources.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block">
            <SidebarNav />
          </div>
          
          <div className="w-full space-y-10">
            <div id="diagnosis" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Diagnosis</h2>
              <DiagnosisTab />
            </div>

            <div id="treatment" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">Treatment</h2>
              <TreatmentTab />
            </div>

            <div id="resources" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">Resources</h2>
              <ResourcesTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
