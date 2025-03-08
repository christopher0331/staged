import { CheckCircle, XCircle } from "lucide-react"

export function BenefitsRisksSection() {
  return (
    <div className="space-y-8">
      <p className="text-gray-700">
        Clinical trials are experiments, so they may have both benefits and risks. 
        Researchers hope to discover benefits for treating cancer or managing symptoms. 
        The risks depend on the treatment being studied and the health of the people who participate.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Benefits Section */}
        <div id="benefits" className="space-y-4">
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
            Potential Benefits
          </h3>
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-indigo-800">Access to new treatments:</span> Patients in clinical trials may receive treatments not yet available to everyone.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-indigo-800">Close monitoring:</span> Participants typically receive careful monitoring and attention from research and healthcare teams.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-indigo-800">Contributing to medical knowledge:</span> Helping to advance cancer treatment for future patients can be personally satisfying.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-indigo-800">Potential for better outcomes:</span> Some clinical trials may offer treatments that prove more effective than standard care.
                </p>
              </li>
            </ul>
            
            <div className="mt-4 bg-white/70 rounded-lg p-3 border border-indigo-100">
              <p className="text-sm text-indigo-800 italic">
                "Taking part in finding new and better cancer treatments can be personally satisfying, as you would be helping others."
              </p>
              <p className="text-xs text-indigo-600 mt-1">— Huntsman Cancer Institute</p>
            </div>
          </div>
        </div>
        
        {/* Risks Section */}
        <div id="risks" className="space-y-4">
          <h3 className="text-xl font-semibold text-indigo-700 flex items-center">
            <XCircle className="h-5 w-5 mr-2 text-rose-500" />
            Potential Risks
          </h3>
          
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-5 border border-rose-200 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-rose-100 p-1 rounded-full mt-0.5 mr-3">
                  <XCircle className="h-4 w-4 text-rose-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-rose-800">Uncertain effectiveness:</span> There is no guarantee that clinical trial treatments will help or be better than existing treatments.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-rose-100 p-1 rounded-full mt-0.5 mr-3">
                  <XCircle className="h-4 w-4 text-rose-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-rose-800">Side effects:</span> New treatments may cause unexpected or more severe side effects than standard treatments.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-rose-100 p-1 rounded-full mt-0.5 mr-3">
                  <XCircle className="h-4 w-4 text-rose-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-rose-800">Time commitment:</span> Participation may require more frequent hospital visits, tests, and monitoring than standard care.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="bg-rose-100 p-1 rounded-full mt-0.5 mr-3">
                  <XCircle className="h-4 w-4 text-rose-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-medium text-rose-800">Randomization:</span> In some trials, you may not be able to choose which treatment you receive.
                </p>
              </li>
            </ul>
            
            <div className="mt-4 bg-white/70 rounded-lg p-3 border border-rose-100">
              <p className="text-sm text-rose-800 italic">
                "You always make the final decision about taking part in a clinical trial. You will not start treatment until you fully understand all of the potential benefits and risks."
              </p>
              <p className="text-xs text-rose-600 mt-1">— Huntsman Cancer Institute</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-indigo-200 p-5 shadow-sm mt-6">
        <h4 className="font-medium text-indigo-800 mb-3">Your Right to Choose</h4>
        <p className="text-gray-700">
          It's important to remember that participation in clinical trials is always voluntary. 
          You have the right to stop participating in a clinical trial at any time and for any reason. 
          Your healthcare team will continue to provide you with the best available standard care 
          regardless of your decision about clinical trial participation.
        </p>
      </div>
    </div>
  )
}
