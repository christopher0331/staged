import { Target, Search, FileText } from "lucide-react"

export function StagingSection() {
  const stagingMethods = [
    {
      name: "Clinical Staging",
      description: "Determines how much cancer there is based on physical examination, imaging tests, and biopsies of affected areas.",
      when: "Done before treatment begins"
    },
    {
      name: "Pathological Staging",
      description: "Can be determined when a patient has surgery to remove a tumor and nearby lymph nodes.",
      when: "Done during or after surgery"
    },
    {
      name: "Post-Therapy Staging",
      description: "Evaluates the extent of cancer after treatment, such as chemotherapy or radiation.",
      when: "Done after treatment is completed"
    },
    {
      name: "Restaging",
      description: "Assesses cancer that has recurred after treatment.",
      when: "Done when cancer returns after treatment"
    }
  ]

  return (
    <div className="space-y-8">
      <div id="staging-definition" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Definition & Purpose</h3>
            <p className="text-indigo-600">What staging tells us about cancer</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-indigo-700">Cancer staging</span> evaluates the size of a tumor, its location, and how far or aggressively the cancer may have spread. Staging helps determine:
        </p>
        
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">The extent of the primary tumor (T)</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">Whether cancer has spread to nearby lymph nodes (N)</span>
          </li>
          <li className="flex items-start">
            <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
              <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            </div>
            <span className="text-gray-700">Whether cancer has metastasized to other parts of the body (M)</span>
          </li>
        </ul>
        
        <div className="bg-white/70 rounded-lg p-4 border border-indigo-100 shadow-sm">
          <p className="text-gray-700">
            Staging is crucial for determining the most appropriate treatment approach and for estimating a patient's prognosis. It provides a standardized way for doctors to communicate about a patient's cancer.
          </p>
        </div>
      </div>

      <div id="staging-systems" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Staging Systems</h3>
            <p className="text-blue-600">Common methods for classifying cancer stages</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-blue-700 mb-3">TNM Staging System</h4>
          <p className="text-gray-700 mb-3">
            The most commonly used cancer staging system is the TNM system, which stands for:
          </p>
          
          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            <div className="p-3 rounded-lg bg-white/70 border border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <span className="font-bold text-blue-600 text-sm">T</span>
                </div>
                <h5 className="font-semibold text-blue-800">Tumor</h5>
              </div>
              <p className="text-sm text-gray-700">
                Describes the size and extent of the main (primary) tumor
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-white/70 border border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <span className="font-bold text-blue-600 text-sm">N</span>
                </div>
                <h5 className="font-semibold text-blue-800">Node</h5>
              </div>
              <p className="text-sm text-gray-700">
                Indicates whether the cancer has spread to nearby lymph nodes
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-white/70 border border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <span className="font-bold text-blue-600 text-sm">M</span>
                </div>
                <h5 className="font-semibold text-blue-800">Metastasis</h5>
              </div>
              <p className="text-sm text-gray-700">
                Indicates whether the cancer has spread to other parts of the body
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-blue-700 mb-3">Numerical Staging</h4>
          <p className="text-gray-700 mb-3">
            Cancer stages are often expressed as a number on a scale of 0 through IV:
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center p-2 rounded-lg bg-white/70 hover:shadow-sm transition-all duration-300">
              <div className="w-16 text-center font-bold text-blue-700 border-r border-blue-100 pr-2">Stage 0</div>
              <div className="pl-3 text-sm text-gray-700">Carcinoma in situ (early cancer that has not spread)</div>
            </div>
            
            <div className="flex items-center p-2 rounded-lg bg-white/70 hover:shadow-sm transition-all duration-300">
              <div className="w-16 text-center font-bold text-blue-700 border-r border-blue-100 pr-2">Stage I</div>
              <div className="pl-3 text-sm text-gray-700">Cancer is small and has not spread beyond the organ where it started</div>
            </div>
            
            <div className="flex items-center p-2 rounded-lg bg-white/70 hover:shadow-sm transition-all duration-300">
              <div className="w-16 text-center font-bold text-blue-700 border-r border-blue-100 pr-2">Stage II</div>
              <div className="pl-3 text-sm text-gray-700">Cancer has grown but has not spread to nearby tissues</div>
            </div>
            
            <div className="flex items-center p-2 rounded-lg bg-white/70 hover:shadow-sm transition-all duration-300">
              <div className="w-16 text-center font-bold text-blue-700 border-r border-blue-100 pr-2">Stage III</div>
              <div className="pl-3 text-sm text-gray-700">Cancer has grown larger and may have spread to nearby tissues and/or lymph nodes</div>
            </div>
            
            <div className="flex items-center p-2 rounded-lg bg-white/70 hover:shadow-sm transition-all duration-300">
              <div className="w-16 text-center font-bold text-blue-700 border-r border-blue-100 pr-2">Stage IV</div>
              <div className="pl-3 text-sm text-gray-700">Cancer has spread to other parts of the body (metastasized)</div>
            </div>
          </div>
        </div>
      </div>

      <div id="staging-methods" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <Search className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Staging Methods</h3>
            <p className="text-teal-600">Different approaches to determining cancer stage</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          There are several different types of staging that may be used at different points in a patient's cancer journey:
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {stagingMethods.map((method, index) => (
            <div key={index} className="p-4 rounded-lg bg-white/70 border border-teal-200 hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-teal-800 mb-2">{method.name}</h4>
              <p className="text-sm text-gray-700 mb-2">{method.description}</p>
              <div className="text-xs font-medium text-teal-600 bg-teal-50 inline-block px-2 py-1 rounded-full">
                {method.when}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-4 bg-white/70 rounded-lg border border-teal-100">
          <p className="text-gray-700">
            The staging method used depends on the type of cancer, available information, and the point in the treatment journey. Your doctor will explain which staging approach is being used in your specific case.
          </p>
        </div>
      </div>
    </div>
  )
}
