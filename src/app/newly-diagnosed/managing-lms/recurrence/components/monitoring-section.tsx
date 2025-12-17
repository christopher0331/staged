import { Activity, Calendar, Clock } from "lucide-react"
import { recurrenceData } from "../data"

export function MonitoringSection() {
  return (
    <section id="monitoring" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 p-2 rounded-full mr-4">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-800">Monitoring Strategies</h2>
          <p className="text-blue-600">Surveillance and early detection</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        Regular monitoring after LMS treatment is crucial for early detection of recurrence. Your healthcare team will develop a personalized surveillance plan based on your specific situation, but most plans include these key components:
      </p>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {recurrenceData.monitoringStrategies.map((strategy, index) => (
          <div key={index} className="bg-white/70 rounded-lg p-5 border border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-3">
              {index === 0 ? (
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Activity className="h-4 w-4 text-blue-600" />
                </div>
              ) : index === 1 ? (
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
              ) : (
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
              )}
              <h3 className="font-semibold text-blue-800">{strategy.title}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">{strategy.description}</p>
            <div className="bg-blue-50/70 p-3 rounded-md border border-blue-100">
              <h4 className="text-xs uppercase tracking-wider text-blue-600 mb-1">Typical Frequency</h4>
              <p className="text-sm text-gray-700">{strategy.frequency}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-white/70 p-5 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-3">Denver LMS Surveillance Program</h3>
        <p className="text-gray-700 mb-4">
          The National LeioMyoSarcoma Foundation's Denver chapter offers a specialized surveillance program for LMS patients. This program provides:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>Coordinated imaging and follow-up appointments with LMS specialists</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>Access to the latest surveillance technologies and protocols</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>Support from nurse navigators who specialize in LMS care</span>
          </li>
        </ul>
        <div className="mt-4">
          <a 
            href="tel:+13038083437" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact the Denver LMS Hotline
          </a>
        </div>
      </div>
    </section>
  )
}
