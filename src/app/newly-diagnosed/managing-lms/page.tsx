import { Metadata } from "next"
import Link from "next/link"
import { Activity, Repeat, HeartPulse, PlusCircle, Pill, Calendar } from "lucide-react"

import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Managing LMS | NLMSF",
  description: "Managing your LMS diagnosis and treatment",
}

export default function ManagingLMSPage() {
  return (
    <div className="container py-10">
      <PageHeader
        title="Managing LMS"
        description="Comprehensive resources for managing your LMS journey"
        gradient="from-purple-600 to-indigo-600"
      />
      
      <div className="mt-8 space-y-10">
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
          <div className="flex items-center mb-4">
            <div className="bg-purple-500 p-2 rounded-full mr-4">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-800">Managing Your LMS Journey</h2>
              <p className="text-purple-600">Resources and guidance for living with LMS</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            Living with Leiomyosarcoma (LMS) requires ongoing management and care. This section provides comprehensive resources to help you navigate various aspects of your LMS journey, from treatment management to dealing with potential recurrence.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link 
              href="/newly-diagnosed/managing-lms/recurrence"
              className="bg-white/70 rounded-lg p-5 border border-purple-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-1.5 rounded-full mr-2 group-hover:bg-purple-200 transition-colors">
                  <Repeat className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800">Recurrence Management</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Understanding, monitoring, and coping with potential LMS recurrence.
              </p>
              <div className="text-purple-600 text-sm font-medium flex items-center">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            
            <div className="bg-white/70 rounded-lg p-5 border border-purple-200 opacity-60">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-1.5 rounded-full mr-2">
                  <Pill className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800">Treatment Management</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Tools and resources for managing your ongoing LMS treatments.
              </p>
              <div className="text-purple-600 text-sm font-medium flex items-center">
                <span>Coming soon</span>
              </div>
            </div>
            
            <div className="bg-white/70 rounded-lg p-5 border border-purple-200 opacity-60">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-1.5 rounded-full mr-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-800">Long-term Follow-up</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Guidelines and recommendations for long-term LMS monitoring.
              </p>
              <div className="text-purple-600 text-sm font-medium flex items-center">
                <span>Coming soon</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-2 rounded-full mr-4">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-blue-800">Denver LMS Management Program</h2>
              <p className="text-blue-600">Specialized support for the Denver LMS community</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            The National LeioMyoSarcoma Foundation's Denver chapter offers a comprehensive LMS Management Program designed to support patients throughout their entire LMS journey.
          </p>
          
          <div className="bg-white/70 p-5 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-3">Program Benefits</h3>
            <ul className="space-y-2 text-gray-700 mb-5">
              <li className="flex items-start">
                <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Personalized care coordination with LMS specialists</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Regular check-ins with dedicated nurse navigators</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Access to the latest treatment protocols and clinical trials</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Support groups and counseling services for patients and caregivers</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+13038083437" 
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact the Denver LMS Hotline
              </a>
              
              <a 
                href="mailto:support@nlmsf.org" 
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}