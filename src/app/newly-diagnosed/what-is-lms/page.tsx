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
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leiomyosarcoma (LMS) is a rare type of soft tissue sarcoma that develops in smooth muscle cells. 
            These cells are found in many places throughout the body, including the digestive system, 
            blood vessels, and uterus. This page provides essential information to help you understand 
            LMS diagnosis, treatment options, and available resources.
          </p>
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
