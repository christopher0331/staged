import { Info, Target, Scale } from "lucide-react"

export function OverviewSection() {
  return (
    <div className="space-y-8">
      <div id="basic-concepts" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Info className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Basic Concepts</h3>
            <p className="text-blue-600">Understanding staging and grading fundamentals</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          When a patient is diagnosed with cancer, healthcare professionals use two distinct but complementary 
          classification systems to assess the cancer: <span className="font-semibold">staging</span> and <span className="font-semibold">grading</span>.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-white/70 border border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                <Target className="h-4 w-4 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800">Staging</h4>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Evaluates the extent of cancer</span> in the body, including the size of the tumor, 
              its location, and whether it has spread to nearby lymph nodes or other parts of the body.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-white/70 border border-blue-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                <Scale className="h-4 w-4 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800">Grading</h4>
            </div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Assesses the appearance of cancer cells</span> under a microscope, 
              indicating how aggressive the cancer cells look compared to normal cells and how quickly they might grow and spread.
            </p>
          </div>
        </div>
      </div>

      <div id="purpose" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Purpose & Use</h3>
            <p className="text-indigo-600">Why staging and grading matter</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Both staging and grading are essential tools that help healthcare professionals:
        </p>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700"><span className="font-medium">Determine the most appropriate treatment plan</span> for each individual patient</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700"><span className="font-medium">Estimate prognosis</span> and predict how the cancer might behave</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700"><span className="font-medium">Communicate effectively</span> about the cancer between healthcare providers</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700"><span className="font-medium">Compare treatment outcomes</span> across similar cases and in clinical trials</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700"><span className="font-medium">Track changes</span> in the cancer over time</span>
          </li>
        </ul>
        
        <div className="mt-4 p-4 bg-white/70 rounded-lg border border-indigo-100">
          <p className="text-gray-700 italic">
            "For most types of cancer, doctors need to know how much cancer there is and where it is (among other things) to help determine the best treatment options."
            <span className="block text-right text-sm mt-2">— Cancer Treatment Centers of America</span>
          </p>
        </div>
      </div>
    </div>
  )
}
