import { BookOpen, FileText, Video, Link as LinkIcon } from "lucide-react"
import { recurrenceData } from "../data"

export function ResourcesSection() {
  return (
    <section id="resources" className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
      <div className="flex items-center mb-4">
        <div className="bg-amber-500 p-2 rounded-full mr-4">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-amber-800">Resources</h2>
          <p className="text-amber-600">Helpful information about LMS recurrence</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        Access these trusted resources to learn more about LMS recurrence, treatment options, and coping strategies. Knowledge is a powerful tool in managing your LMS journey.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {recurrenceData.resources.map((resource, index) => {
          let Icon = FileText
          if (resource.type === 'video') Icon = Video
          if (resource.type === 'pdf') Icon = FileText
          
          return (
            <a 
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/70 rounded-lg p-5 border border-amber-200 hover:shadow-md transition-all duration-300 flex items-start"
            >
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Icon className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">{resource.title}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="capitalize">{resource.type}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-amber-600">
                    <LinkIcon className="h-3 w-3 mr-1" />
                    Visit Resource
                  </span>
                </p>
              </div>
            </a>
          )
        })}
      </div>
      
      <div className="mt-6 bg-white/70 p-5 rounded-lg border border-amber-200">
        <h3 className="font-semibold text-amber-800 mb-3">Denver LMS Resource Center</h3>
        <p className="text-gray-700 mb-4">
          The Denver chapter of the National LeioMyoSarcoma Foundation maintains a comprehensive resource center for LMS patients and caregivers.
        </p>
        <div className="bg-amber-50/70 p-4 rounded-md border border-amber-100">
          <h4 className="font-medium text-amber-700 mb-2">Available Resources</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <div className="bg-amber-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>Printed materials about LMS recurrence and treatment options</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>Educational videos featuring LMS specialists</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>Access to medical journals and research papers</span>
            </li>
            <li className="flex items-start">
              <div className="bg-amber-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
              </div>
              <span>Personal stories from LMS survivors who have experienced recurrence</span>
            </li>
          </ul>
          <div className="mt-4">
            <a 
              href="mailto:resources@nlmsf.org" 
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
