import { Stethoscope, FilePlus, HeartPulse } from "lucide-react"

export function ImportanceSection() {
  return (
    <div className="space-y-8">
      <div id="treatment-planning" className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl p-6 shadow-md border border-rose-200">
        <div className="flex items-center mb-4">
          <div className="bg-rose-500 p-2 rounded-full mr-4">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-800">Treatment Planning</h3>
            <p className="text-rose-600">How staging and grading guide treatment decisions</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Staging and grading are crucial tools that help healthcare professionals develop personalized treatment plans for cancer patients. Here's how they influence treatment decisions:
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          <div className="bg-white/70 rounded-lg p-5 border border-rose-200 shadow-sm">
            <h4 className="font-semibold text-rose-800 mb-3">Treatment Selection</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Determines whether surgery, radiation, chemotherapy, immunotherapy, or a combination is most appropriate</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Helps decide the sequence of treatments (e.g., surgery first or chemotherapy first)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Guides the extent of surgery needed (e.g., local excision vs. more extensive resection)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 rounded-lg p-5 border border-rose-200 shadow-sm">
            <h4 className="font-semibold text-rose-800 mb-3">Treatment Intensity</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Determines the aggressiveness of treatment approach</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Influences chemotherapy dosage and radiation therapy intensity</span>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Helps balance treatment efficacy with quality of life considerations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-rose-100">
          <h4 className="font-semibold text-rose-800 mb-3">Treatment Approaches Based on Stage and Grade</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-rose-50">
                  <th className="py-2 px-3 text-left text-rose-800 font-medium border border-rose-100">Stage/Grade</th>
                  <th className="py-2 px-3 text-left text-rose-800 font-medium border border-rose-100">Typical Treatment Approach</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-2 px-3 border border-rose-100 font-medium">Early Stage, Low Grade</td>
                  <td className="py-2 px-3 border border-rose-100">
                    Surgery alone or with limited adjuvant therapy; sometimes active surveillance
                  </td>
                </tr>
                <tr className="bg-rose-50/30">
                  <td className="py-2 px-3 border border-rose-100 font-medium">Early Stage, High Grade</td>
                  <td className="py-2 px-3 border border-rose-100">
                    Surgery plus adjuvant therapy (radiation and/or chemotherapy) to reduce recurrence risk
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border border-rose-100 font-medium">Advanced Stage, Low Grade</td>
                  <td className="py-2 px-3 border border-rose-100">
                    Multimodal approach with surgery if possible, plus systemic therapy; may be less aggressive
                  </td>
                </tr>
                <tr className="bg-rose-50/30">
                  <td className="py-2 px-3 border border-rose-100 font-medium">Advanced Stage, High Grade</td>
                  <td className="py-2 px-3 border border-rose-100">
                    Aggressive multimodal approach; may include neoadjuvant therapy, surgery, and adjuvant therapy
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-3 border border-rose-100 font-medium">Metastatic, Any Grade</td>
                  <td className="py-2 px-3 border border-rose-100">
                    Systemic therapy (chemotherapy, targeted therapy, immunotherapy); local treatments for symptom control
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="prognosis" className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6 shadow-md border border-pink-200">
        <div className="flex items-center mb-4">
          <div className="bg-pink-500 p-2 rounded-full mr-4">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-pink-800">Prognosis & Outcomes</h3>
            <p className="text-pink-600">How staging and grading inform survival predictions</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Staging and grading are powerful predictors of cancer outcomes and help doctors provide patients with information about their prognosis:
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          <div className="bg-white/70 rounded-lg p-5 border border-pink-200 shadow-sm">
            <h4 className="font-semibold text-pink-800 mb-3">Survival Estimates</h4>
            <p className="text-sm text-gray-700 mb-3">
              Stage and grade are key factors in estimating:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Overall survival rates</span>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Disease-free survival (time without cancer recurrence)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Progression-free survival (time without cancer growth)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 rounded-lg p-5 border border-pink-200 shadow-sm">
            <h4 className="font-semibold text-pink-800 mb-3">Risk Assessment</h4>
            <p className="text-sm text-gray-700 mb-3">
              Stage and grade help evaluate:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Risk of recurrence after treatment</span>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Risk of metastasis (cancer spread)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-pink-200 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                </div>
                <span>Likelihood of response to specific treatments</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-pink-100">
          <h4 className="font-semibold text-pink-800 mb-3">Important Considerations</h4>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start">
              <div className="bg-pink-500 p-1.5 rounded-full mr-3 mt-1 flex-shrink-0">
                <FilePlus className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="font-medium text-pink-800 mb-1">Individual Factors Matter</p>
                <p>While staging and grading provide statistical information, each patient is unique. Age, overall health, genetic factors, and specific tumor characteristics also influence outcomes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pink-500 p-1.5 rounded-full mr-3 mt-1 flex-shrink-0">
                <FilePlus className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="font-medium text-pink-800 mb-1">Statistics Are Population-Based</p>
                <p>Survival statistics are based on large groups of patients and may not predict what will happen in any individual case. They represent averages across diverse patient populations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pink-500 p-1.5 rounded-full mr-3 mt-1 flex-shrink-0">
                <FilePlus className="h-3 w-3 text-white" />
              </div>
              <div>
                <p className="font-medium text-pink-800 mb-1">Treatment Advances</p>
                <p>Cancer treatments are constantly improving. Survival statistics may be based on patients treated years ago and may not reflect outcomes with newer treatments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
