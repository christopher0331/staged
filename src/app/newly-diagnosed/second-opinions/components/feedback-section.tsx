import { MessageSquare, FileText, Users } from "lucide-react"

export function FeedbackSection() {
  return (
    <div className="space-y-8">
      <div id="report-sharing" className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl p-6 shadow-md border border-rose-200">
        <div className="flex items-center mb-4">
          <div className="bg-rose-500 p-2 rounded-full mr-4">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-rose-800">Sharing the Report</h3>
            <p className="text-rose-600">How to communicate second opinion findings</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          A complete visit report should be, directly and/or through the patient, referred to the oncologist who will treat the patient. Consultation between both physicians with the patient can be most valuable for a team approach to treatment considerations and strategies.
        </p>
        
        <div className="bg-white/70 rounded-lg p-5 border border-rose-100 shadow-sm mb-4">
          <h4 className="font-semibold text-rose-700 mb-3">Key Elements of a Complete Report</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">Confirmation or revision of the diagnosis</span>
            </li>
            <li className="flex items-start">
              <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">Assessment of the current treatment plan</span>
            </li>
            <li className="flex items-start">
              <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">Alternative or additional treatment recommendations</span>
            </li>
            <li className="flex items-start">
              <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">Rationale for any suggested changes</span>
            </li>
            <li className="flex items-start">
              <div className="bg-rose-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-rose-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">Relevant research or clinical trial information</span>
            </li>
          </ul>
        </div>
        
        <p className="text-gray-700">
          The general practitioner could also be informed of this process, if needed, to ensure coordinated care across your entire healthcare team.
        </p>
      </div>

      <div id="team-approach" className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
        <div className="flex items-center mb-4">
          <div className="bg-amber-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-800">Team Approach</h3>
            <p className="text-amber-600">Facilitating collaboration between healthcare providers</p>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-amber-100 shadow-sm mb-4">
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-amber-700">Consultation between physicians with the patient present</span> can be particularly valuable for:
          </p>
          
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300 border">
              <h4 className="font-semibold text-amber-800 mb-2">Collaborative Decision Making</h4>
              <p className="text-sm text-gray-700">
                Allows all parties to discuss treatment options together, ensuring everyone understands the rationale behind recommendations.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300 border">
              <h4 className="font-semibold text-amber-800 mb-2">Addressing Concerns</h4>
              <p className="text-sm text-gray-700">
                Provides an opportunity for the patient to ask questions and have concerns addressed by both physicians simultaneously.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300 border">
              <h4 className="font-semibold text-amber-800 mb-2">Unified Treatment Strategy</h4>
              <p className="text-sm text-gray-700">
                Helps develop a cohesive treatment plan that incorporates insights from both medical perspectives.
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300 border">
              <h4 className="font-semibold text-amber-800 mb-2">Reducing Confusion</h4>
              <p className="text-sm text-gray-700">
                Minimizes the risk of miscommunication or misunderstanding between different healthcare providers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <p className="text-gray-700 text-center font-medium">
            "Second medical opinion is an important step and an opportunity for cancer patients and also for the oncologists, in particular cases."
          </p>
        </div>
      </div>
    </div>
  )
}
