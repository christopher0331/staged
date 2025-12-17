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
                <th className="py-3 px-4 text-left text-teal-800 font-semibold border-b border-purple-200">
                  <div className="flex items-center">
                    <Scale className="h-4 w-4 mr-2 text-teal-600" />
                    Grading
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-indigo-800 font-semibold border-b border-purple-200">
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-indigo-600" />
                    Staging
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">What it measures</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Appearance and behavior of cancer cells</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Size and spread of cancer in the body</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Determined by</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Microscopic examination of cancer cells</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Physical exams, imaging tests, biopsies, surgery</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Indicates</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">How aggressive the cancer cells are</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">How far the cancer has advanced</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Classification</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually Grades 1-3 or 1-4</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually Stages 0-IV (with substages)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Primary purpose</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Predict growth rate and aggressiveness</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Determine extent of disease and treatment approach</td>
              </tr>
              <tr className="bg-purple-50/50">
                <td className="py-3 px-4 border-b border-purple-100 font-medium text-purple-700">Can change over time</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Usually remains the same, but can change</td>
                <td className="py-3 px-4 border-b border-purple-100 text-gray-700">Yes, as cancer grows or shrinks</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-purple-700">Relationship to treatment</td>
                <td className="py-3 px-4 text-gray-700">Helps determine treatment intensity and urgency</td>
                <td className="py-3 px-4 text-gray-700">Helps determine treatment strategy (surgery, radiation, etc.)</td>
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

    </div>
  )
}
