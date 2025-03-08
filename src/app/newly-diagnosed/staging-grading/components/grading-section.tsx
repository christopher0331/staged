import { Scale, Microscope } from "lucide-react"

export function GradingSection() {
  return (
    <div className="space-y-8">
      <div id="grading-definition" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Definition & Purpose</h3>
            <p className="text-teal-600">What grading tells us about cancer cells</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-teal-700">Cancer grading</span> determines the aggressiveness of cancer cells by examining how abnormal they appear compared to healthy cells under a microscope. Grading helps predict:
        </p>
        
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <div className="bg-teal-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">How quickly the cancer might grow</span>
          </li>
          <li className="flex items-start">
            <div className="bg-teal-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">How likely it is to spread</span>
          </li>
          <li className="flex items-start">
            <div className="bg-teal-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">How the cancer might respond to treatment</span>
          </li>
        </ul>
        
        <div className="bg-white/70 rounded-lg p-4 border border-teal-100 shadow-sm">
          <p className="text-gray-700">
            The grade of a cancer is determined by a pathologist who examines a sample of the cancer tissue under a microscope. The pathologist looks at how the cancer cells differ from normal cells and assigns a grade based on the degree of abnormality.
          </p>
        </div>
        
        <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-100">
          <p className="text-gray-700 italic">
            "The grade of a cancer describes how abnormal the cancer cells are, compared to healthy cells. This can help your cancer doctor understand how quickly the cancer may grow, or how likely it is to spread."
            <span className="block text-right text-sm mt-2">— City of Hope Cancer Center</span>
          </p>
        </div>
      </div>

      <div id="grading-systems" className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 shadow-md border border-emerald-200">
        <div className="flex items-center mb-4">
          <div className="bg-emerald-500 p-2 rounded-full mr-4">
            <Microscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-800">Grading Systems</h3>
            <p className="text-emerald-600">How cancer cells are classified by appearance</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Different types of cancer use different grading systems, but most follow a similar pattern of increasing abnormality:
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/70 rounded-lg p-4 border border-emerald-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-emerald-800 mb-2">General Grading Scale</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-20 text-center font-bold text-emerald-700 border-r border-emerald-100 pr-2">Grade 1</div>
                <div className="pl-3 text-sm text-gray-700">
                  <span className="font-medium">Well-differentiated:</span> Cancer cells look similar to normal cells and are growing slowly
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-20 text-center font-bold text-emerald-700 border-r border-emerald-100 pr-2">Grade 2</div>
                <div className="pl-3 text-sm text-gray-700">
                  <span className="font-medium">Moderately differentiated:</span> Cancer cells look somewhat different from normal cells
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-20 text-center font-bold text-emerald-700 border-r border-emerald-100 pr-2">Grade 3</div>
                <div className="pl-3 text-sm text-gray-700">
                  <span className="font-medium">Poorly differentiated:</span> Cancer cells look very different from normal cells and are growing more rapidly
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-20 text-center font-bold text-emerald-700 border-r border-emerald-100 pr-2">Grade 4</div>
                <div className="pl-3 text-sm text-gray-700">
                  <span className="font-medium">Undifferentiated:</span> Cancer cells look extremely abnormal and are growing very rapidly
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-emerald-100 hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-emerald-800 mb-2">Simplified Grading System</h4>
            <p className="text-sm text-gray-700 mb-3">
              Some cancers use a simplified three-tier grading system:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="text-center font-bold text-emerald-700 mb-2">Low Grade</div>
                <p className="text-xs text-gray-700 text-center">
                  Slow-growing, less aggressive
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="text-center font-bold text-emerald-700 mb-2">Intermediate Grade</div>
                <p className="text-xs text-gray-700 text-center">
                  Moderately aggressive
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="text-center font-bold text-emerald-700 mb-2">High Grade</div>
                <p className="text-xs text-gray-700 text-center">
                  Fast-growing, more aggressive
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-4 border border-emerald-100">
          <h4 className="font-semibold text-emerald-800 mb-2">Specialized Grading Systems</h4>
          <p className="text-sm text-gray-700 mb-3">
            Some types of cancer have their own specialized grading systems:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <div className="bg-emerald-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
              </div>
              <span><span className="font-medium">Gleason Score for Prostate Cancer:</span> Ranges from 2-10 based on how the cancer cells are arranged in patterns</span>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
              </div>
              <span><span className="font-medium">Scarff-Bloom-Richardson (SBR) for Breast Cancer:</span> Evaluates tubule formation, nuclear grade, and mitotic rate</span>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
              </div>
              <span><span className="font-medium">FNCLCC System for Soft Tissue Sarcomas:</span> Based on differentiation, mitotic count, and necrosis</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
