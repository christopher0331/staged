import { Repeat } from "lucide-react"
import { recurrenceData } from "../data"

export function RecurrenceTypesSection() {
  // Array of gradient colors for recurrence items
  const recurrenceGradients = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-teal-50 to-teal-100 border-teal-200",
    "from-indigo-50 to-indigo-100 border-indigo-200"
  ]
  
  return (
    <section id="recurrence-types" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-500 p-2 rounded-full mr-4">
          <Repeat className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-indigo-800">Types of Recurrence</h2>
          <p className="text-indigo-600">Understanding different recurrence patterns</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        LMS can recur in different ways, and understanding the type of recurrence helps determine the appropriate treatment approach. The three main types of recurrence are:
      </p>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {recurrenceData.recurrenceTypes.map((item, index) => (
          <div
            key={item.location}
            className={`p-5 rounded-lg bg-gradient-to-br ${recurrenceGradients[index % recurrenceGradients.length]} hover:shadow-md transition-all duration-300 border`}
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-800">{item.location} Recurrence</h3>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
            <div className="bg-white/70 p-4 rounded-lg border border-indigo-100">
              <h4 className="font-medium text-indigo-800 mb-2">Treatment Approach:</h4>
              <p className="text-sm text-gray-700">{item.treatment}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-white/70 p-5 rounded-lg border border-indigo-200">
        <h3 className="font-semibold text-indigo-800 mb-3">Important Considerations</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>Treatment for recurrent LMS is often more complex than initial treatment</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>The approach depends on factors such as previous treatments, time since original diagnosis, and your overall health</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span>Clinical trials may offer additional options for recurrent LMS</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
