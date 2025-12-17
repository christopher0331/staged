import { Metadata } from "next"
import { Repeat, Activity, HeartPulse, BookOpen } from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { RecurrenceTypesSection } from "./components/recurrence-types-section"
import { MonitoringSection } from "./components/monitoring-section"
import { CopingSection } from "./components/coping-section"
import { ResourcesSection } from "./components/resources-section"
import { SidebarNav } from "./components/sidebar-nav"

export const metadata: Metadata = {
  title: "Recurrence Management | NLMSF",
  description: "Understanding and managing LMS recurrence",
}

export default function RecurrenceManagementPage() {
  return (
    <div className="container py-10">
      <PageHeader
        title="Recurrence Management"
        description="Understanding and managing LMS recurrence"
        gradient="from-purple-600 to-indigo-600"
      />
      
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <aside className="md:w-64 lg:w-72 flex-shrink-0">
          <SidebarNav />
        </aside>
        
        <main className="flex-1 space-y-12">
          <section id="overview" className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 p-2 rounded-full mr-4">
                <Repeat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-purple-800">Understanding LMS Recurrence</h2>
                <p className="text-purple-600">What you need to know about recurrence</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              Leiomyosarcoma (LMS) recurrence refers to the return of cancer after treatment and a period of time during which the cancer cannot be detected. Despite successful initial treatment, some cancer cells may remain undetected in the body and eventually grow into detectable tumors.
            </p>
            
            <div className="bg-white/70 rounded-lg p-5 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-3">Key Facts About LMS Recurrence</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Recurrence is a common concern for LMS patients due to the aggressive nature of the disease</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>The risk of recurrence depends on various factors including the initial stage, grade, and location of the tumor</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Regular monitoring and follow-up care are essential for early detection of recurrence</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Treatment options for recurrent LMS depend on the location and extent of the recurrence</span>
                </li>
              </ul>
            </div>
          </section>
          
          <RecurrenceTypesSection />
          <MonitoringSection />
          <CopingSection />
          <ResourcesSection />
        </main>
      </div>
    </div>
  )
}
