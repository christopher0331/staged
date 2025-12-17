import { HeartPulse, Users, Utensils, MessageSquare } from "lucide-react"
import { recurrenceData } from "../data"

export function CopingSection() {
  return (
    <section id="coping" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
      <div className="flex items-center mb-4">
        <div className="bg-teal-500 p-2 rounded-full mr-4">
          <HeartPulse className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-teal-800">Coping Strategies</h2>
          <p className="text-teal-600">Managing the emotional impact of recurrence</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        Dealing with the possibility or reality of LMS recurrence can be emotionally challenging. Developing effective coping strategies is an essential part of your overall well-being and can positively impact your treatment journey.
      </p>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {recurrenceData.copingStrategies.map((strategy, index) => {
          let Icon = Users
          if (index === 1) Icon = Utensils
          if (index === 2) Icon = MessageSquare
          
          return (
            <div key={index} className="bg-white/70 rounded-lg p-5 border border-teal-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-teal-100 p-1.5 rounded-full mr-2">
                  <Icon className="h-4 w-4 text-teal-600" />
                </div>
                <h3 className="font-semibold text-teal-800">{strategy.title}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">{strategy.description}</p>
              
              {index === 0 && strategy.resources && (
                <div className="bg-teal-50/70 p-3 rounded-md border border-teal-100">
                  <h4 className="text-xs uppercase tracking-wider text-teal-600 mb-1">Recommended Resources</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {strategy.resources.map((resource, i) => (
                      <li key={i} className="flex items-center">
                        <div className="bg-teal-200 w-1.5 h-1.5 rounded-full mr-2"></div>
                        <span>{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {index === 1 && strategy.benefits && (
                <div className="bg-teal-50/70 p-3 rounded-md border border-teal-100">
                  <h4 className="text-xs uppercase tracking-wider text-teal-600 mb-1">Benefits</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {strategy.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <div className="bg-teal-200 w-1.5 h-1.5 rounded-full mr-2"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {index === 2 && (
                <div className="bg-teal-50/70 p-3 rounded-md border border-teal-100">
                  <h4 className="text-xs uppercase tracking-wider text-teal-600 mb-1">Why It Matters</h4>
                  <p className="text-sm text-gray-700">{strategy.importance}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      <div className="mt-6 bg-white/70 p-5 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-3">Denver Support Resources</h3>
        <p className="text-gray-700 mb-4">
          The Denver chapter of the National LeioMyoSarcoma Foundation offers specialized support for patients dealing with recurrence concerns:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-teal-50/70 p-4 rounded-md border border-teal-100">
            <h4 className="font-medium text-teal-700 mb-2">Monthly Support Group</h4>
            <p className="text-sm text-gray-700 mb-3">
              Join our monthly in-person and virtual support group specifically for LMS patients and caregivers.
            </p>
            <div className="text-sm text-gray-600">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>First Tuesday of every month</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Denver Medical Center & Zoom</span>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50/70 p-4 rounded-md border border-teal-100">
            <h4 className="font-medium text-teal-700 mb-2">One-on-One Counseling</h4>
            <p className="text-sm text-gray-700 mb-3">
              Access free individual counseling with therapists who specialize in cancer recurrence anxiety.
            </p>
            <a 
              href="tel:+13038083437" 
              className="inline-flex items-center px-3 py-1.5 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
