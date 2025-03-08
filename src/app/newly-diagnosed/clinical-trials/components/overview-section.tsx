import { Info, Search, Activity, Pill, HeartPulse } from "lucide-react"

export function OverviewSection() {
  return (
    <div className="space-y-8">
      <div id="definition" className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-700">Definition & Purpose</h3>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 shadow-sm">
          <p className="text-gray-700 italic">
            "Clinical trials test the safety and effectiveness of new cancer drugs and treatments. 
            They help us find better ways to prevent, diagnose, and treat cancer. 
            Nearly all current cancer treatments started in a clinical trial."
          </p>
          <p className="text-sm text-blue-600 mt-2 font-medium">— Huntsman Cancer Institute</p>
        </div>
        
        <p className="text-gray-700">
          Clinical trials are carefully designed research studies that involve human volunteers. 
          These studies help researchers determine if new treatments, drugs, or medical devices 
          are safe and effective before they become widely available to patients.
        </p>
        
        <p className="text-gray-700">
          For cancer patients, including those with Leiomyosarcoma (LMS), clinical trials 
          represent a vital pathway for accessing cutting-edge treatments that may not yet 
          be available through standard care options.
        </p>
      </div>
      
      <div id="importance" className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-700">Why Clinical Trials Matter</h3>
        
        <p className="text-gray-700">
          Researchers design cancer clinical trials to find new ways to accomplish multiple goals 
          in cancer care. The U.S. Food and Drug Administration (FDA) must approve new treatments 
          before they can be widely used, and clinical trials are an essential part of this approval process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Search className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800">Find & Diagnose Cancer</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Developing new methods and technologies to detect cancer earlier and more accurately.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Pill className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800">Treat Cancer</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Testing new drugs, drug combinations, surgical approaches, and radiation techniques.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800">Prevent Cancer</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Investigating methods to reduce cancer risk through lifestyle changes, vaccines, or medications.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border border-blue-100 p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <HeartPulse className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-blue-800">Manage Symptoms & Side Effects</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Finding better ways to manage cancer symptoms and treatment side effects to improve quality of life.
            </p>
          </div>
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
          <h4 className="font-medium text-blue-800 mb-2">For Leiomyosarcoma Patients</h4>
          <p className="text-gray-700">
            Clinical trials are particularly important for rare cancers like Leiomyosarcoma, where standard 
            treatment options may be limited. They offer opportunities to access innovative therapies 
            that target specific molecular pathways involved in sarcoma development and progression.
          </p>
        </div>
      </div>
    </div>
  )
}
