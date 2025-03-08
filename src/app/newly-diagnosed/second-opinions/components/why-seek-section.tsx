import { HelpCircle, CheckCircle, AlertCircle } from "lucide-react"

export function WhySeekSection() {
  const reasons = [
    "To confirm diagnosis or treatment plan (17-68% of patients)",
    "Due to treatment complications (46% of cancer patients)",
    "Because of unfulfilled needs or negative experiences (approximately one-third of patients)",
    "To gain more information about their condition and treatment options",
    "To ensure all possible treatment avenues are explored",
    "To feel more confident about their medical decisions"
  ]

  return (
    <div className="space-y-8">
      <div id="reasons" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <HelpCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Common Reasons</h3>
            <p className="text-blue-600">Why patients seek second opinions</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Multiple factors justify patients seeking a second medical opinion. Research shows that:
        </p>
        
        <ul className="space-y-3">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div id="research-findings" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Research Findings</h3>
            <p className="text-indigo-600">What studies tell us about second opinions</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          According to different research studies:
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-all duration-300 border">
            <h4 className="font-semibold mb-2 text-gray-800">Philip et al. (2010)</h4>
            <p className="text-sm text-gray-700">Found that a significant percentage of patients seek second opinions to confirm their diagnosis or treatment plan.</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 hover:shadow-md transition-all duration-300 border">
            <h4 className="font-semibold mb-2 text-gray-800">Mellink et al. (2003)</h4>
            <p className="text-sm text-gray-700">Reported that from 17% to 68% of patients ask for second medical opinions to confirm diagnosis or treatment.</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300 border">
            <h4 className="font-semibold mb-2 text-gray-800">Tam et al. (2005)</h4>
            <p className="text-sm text-gray-700">Nearly half (46%) of cancer patients sought a second medical opinion due to treatment complications.</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-md transition-all duration-300 border">
            <h4 className="font-semibold mb-2 text-gray-800">Various Studies</h4>
            <p className="text-sm text-gray-700">Approximately one-third of patients had unfulfilled needs and/or negative experiences that led them to seek additional opinions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
