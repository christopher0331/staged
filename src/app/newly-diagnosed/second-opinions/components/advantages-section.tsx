import { ThumbsUp, Stethoscope, Brain, Users } from "lucide-react"

export function AdvantagesSection() {
  const patientBenefits = [
    "Improved diagnosis or better treatment options",
    "Psychological benefit of exercising autonomy and control",
    "Freedom of choice in healthcare decisions",
    "Increased confidence in treatment plan",
    "Access to specialized expertise for rare conditions",
    "Better understanding of condition and treatment options"
  ]

  return (
    <div className="space-y-8">
      <div id="benefits" className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <ThumbsUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">Benefits of Second Opinions</h3>
            <p className="text-purple-600">How patients can benefit from seeking additional perspectives</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          The impact of second medical opinions in the oncology treatment pathway is currently being debated. Second medical opinions may involve potential advantages for patients, physicians, and society.
        </p>
        
        <ul className="space-y-3 mb-4">
          {patientBenefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-white/70 rounded-lg p-4 border border-purple-100 shadow-sm">
          <p className="text-gray-700 italic">
            "Patients can benefit from a second medical opinion, resulting in improved diagnosis or better treatments, or can benefit psychologically being enabled to act more autonomously and exercise some control and freedom of choice." (Axon et al., 2008)
          </p>
        </div>
      </div>

      <div id="stakeholder-advantages" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Advantages for All Stakeholders</h3>
            <p className="text-indigo-600">How second opinions benefit the healthcare ecosystem</p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-md transition-all duration-300 border">
            <div className="flex items-center mb-3">
              <div className="bg-indigo-500 p-1.5 rounded-full mr-2">
                <Stethoscope className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-indigo-800">For Physicians</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">Opportunity to collaborate with colleagues</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">Access to different perspectives and approaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">Validation of complex treatment decisions</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-md transition-all duration-300 border">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 p-1.5 rounded-full mr-2">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-purple-800">For Patients</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">Improved diagnosis accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">Better treatment outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span className="text-gray-700">Increased confidence in medical decisions</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-all duration-300 border">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 p-1.5 rounded-full mr-2">
                <Users className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800">For Society</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Advancement of medical knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Potentially more cost-effective treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">Better overall healthcare outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
