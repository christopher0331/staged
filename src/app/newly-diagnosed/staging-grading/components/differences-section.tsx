import { Diff, Target, Scale } from "lucide-react"

export function DifferencesSection() {
  return (
    <div className="space-y-8">
      <div id="comparison-table" className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <Diff className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">Side-by-Side Comparison</h3>
            <p className="text-purple-600">Key differences between staging and grading</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-purple-100">
              <tr>
                <th className="py-3 px-4 text-left text-purple-800 font-semibold border-b border-purple-200">Aspect</th>
                <th className="py-3 px-4 text-left text-indigo-800 font-semibold border-b border-purple-200">
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-indigo-600" />
                    Staging
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-teal-800 font-semibold border-b border-purple-200">
                  <div className="flex items-center">
                    <Scale className="h-4 w-4 mr-2 text-teal-600" />
                    Grading
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">What it measures</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Size and spread of cancer in the body</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Appearance and behavior of cancer cells</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Determined by</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Physical exams, imaging tests, biopsies, surgery</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Microscopic examination of cancer cells</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Indicates</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">How far the cancer has advanced</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">How aggressive the cancer cells are</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Classification</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually Stages 0-IV (with substages)</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually Grades 1-3 or 1-4</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Primary purpose</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Determine extent of disease and treatment approach</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Predict growth rate and aggressiveness</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Can change over time</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Yes, as cancer grows or shrinks</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually remains the same, but can change</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-purple-700">Relationship to treatment</td>
                <td className="py-3 px-4 text-gray-700">Helps determine treatment strategy (surgery, radiation, etc.)</td>
                <td className="py-3 px-4 text-gray-700">Helps determine treatment intensity and urgency</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-white/70 rounded-lg border border-purple-100">
          <p className="text-gray-700">
            While staging and grading are distinct processes, they work together to provide a comprehensive picture of a patient's cancer. Both are essential for developing an appropriate treatment plan and estimating prognosis.
          </p>
        </div>
      </div>

      <div id="clinical-examples" className="bg-gradient-to-r from-violet-50 to-violet-100 rounded-xl p-6 shadow-md border border-violet-200">
        <div className="flex items-center mb-4">
          <div className="bg-violet-500 p-2 rounded-full mr-4">
            <Diff className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-violet-800">Clinical Examples</h3>
            <p className="text-violet-600">Real-world illustrations of staging and grading</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          The following examples illustrate how staging and grading work together in clinical practice:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white/70 rounded-lg p-5 border border-violet-200 shadow-sm">
            <h4 className="font-semibold text-violet-800 mb-3">Example 1: Breast Cancer</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                <div className="flex items-center mb-2">
                  <Target className="h-4 w-4 mr-2 text-indigo-600" />
                  <h5 className="font-medium text-indigo-800">Stage IIA</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The tumor is 2.5 cm in size and has not spread to nearby lymph nodes or distant sites.
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                <div className="flex items-center mb-2">
                  <Scale className="h-4 w-4 mr-2 text-teal-600" />
                  <h5 className="font-medium text-teal-800">Grade 2</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The cancer cells are moderately differentiated, showing some abnormal features.
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-violet-50 rounded-lg text-sm text-gray-700">
              <span className="font-medium">Clinical Implication:</span> This combination suggests a moderately aggressive cancer that has not spread extensively. Treatment might include surgery followed by radiation and possibly hormone therapy, depending on other factors like receptor status.
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-5 border border-violet-200 shadow-sm">
            <h4 className="font-semibold text-violet-800 mb-3">Example 2: Prostate Cancer</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                <div className="flex items-center mb-2">
                  <Target className="h-4 w-4 mr-2 text-indigo-600" />
                  <h5 className="font-medium text-indigo-800">Stage I</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The cancer is found only in the prostate and has not spread outside the gland.
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                <div className="flex items-center mb-2">
                  <Scale className="h-4 w-4 mr-2 text-teal-600" />
                  <h5 className="font-medium text-teal-800">Gleason Score 6 (3+3)</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The cancer cells show a low-grade pattern, suggesting slow growth.
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-violet-50 rounded-lg text-sm text-gray-700">
              <span className="font-medium">Clinical Implication:</span> This combination suggests a low-risk prostate cancer. Treatment options might include active surveillance, where the cancer is monitored closely rather than treated immediately, or localized treatments like radiation therapy or surgery.
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-5 border border-violet-200 shadow-sm">
            <h4 className="font-semibold text-violet-800 mb-3">Example 3: Soft Tissue Sarcoma</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                <div className="flex items-center mb-2">
                  <Target className="h-4 w-4 mr-2 text-indigo-600" />
                  <h5 className="font-medium text-indigo-800">Stage III</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The tumor is large ({'>'}5 cm) and has spread to nearby lymph nodes but not to distant sites.
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                <div className="flex items-center mb-2">
                  <Scale className="h-4 w-4 mr-2 text-teal-600" />
                  <h5 className="font-medium text-teal-800">Grade 3</h5>
                </div>
                <p className="text-sm text-gray-700">
                  The cancer cells are poorly differentiated, indicating a more aggressive tumor.
                </p>
              </div>
            </div>
            <div className="mt-3 p-3 bg-violet-50 rounded-lg text-sm text-gray-700">
              <span className="font-medium">Clinical Implication:</span> This combination suggests a high-risk sarcoma that requires aggressive treatment. The approach might include neoadjuvant chemotherapy (before surgery), followed by surgical resection and radiation therapy, and possibly adjuvant chemotherapy (after surgery).
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
