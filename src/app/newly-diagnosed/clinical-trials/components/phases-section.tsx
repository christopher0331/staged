import { CircleUser, Beaker, BarChart4, Building2 } from "lucide-react"

export function PhasesSection() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700">
        Clinical trials start with early discovery and ongoing research. After approval by the FDA, 
        the research goes through several distinct phases. Each phase has specific goals and involves 
        different numbers of participants.
      </p>
      
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-teal-400 to-teal-500 hidden md:block"></div>
        
        <div className="space-y-8 relative">
          {/* Phase 1 */}
          <div id="phase1" className="md:ml-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-1 top-6 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow-md hidden md:block"></div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <Beaker className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800">Phase 1</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Primary Goal</h4>
                  <p className="text-sm text-gray-700">Determine safety and best dosage levels</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Participants</h4>
                  <div className="flex items-center">
                    <CircleUser className="h-4 w-4 text-teal-500 mr-1" />
                    <p className="text-sm text-gray-700">12-24 participants</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Focus</h4>
                  <p className="text-sm text-gray-700">Safety, side effects, and how the drug is processed in the body</p>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">
                Phase 1 trials focus on finding the right dose of a new drug and evaluating its safety. 
                These trials typically involve a small number of participants and are often the first time 
                a new treatment is tested in humans after laboratory studies.
              </p>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div id="phase2" className="md:ml-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-1 top-6 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow-md hidden md:block"></div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <BarChart4 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800">Phase 2</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Primary Goal</h4>
                  <p className="text-sm text-gray-700">Determine how the new treatment affects the body and certain cancers</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Participants</h4>
                  <div className="flex items-center">
                    <CircleUser className="h-4 w-4 text-teal-500 mr-1" />
                    <p className="text-sm text-gray-700">Under 100 participants</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Focus</h4>
                  <p className="text-sm text-gray-700">Record and analyze data on effectiveness</p>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">
                Phase 2 trials continue to monitor safety while beginning to evaluate how well the new treatment 
                works against specific types of cancer. These trials involve more participants than Phase 1 
                and may last longer. Researchers collect data on tumor response and side effects.
              </p>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div id="phase3" className="md:ml-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-1 top-6 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow-md hidden md:block"></div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <CircleUser className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800">Phase 3</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Primary Goal</h4>
                  <p className="text-sm text-gray-700">Compare results between new and standard treatment</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Participants</h4>
                  <div className="flex items-center">
                    <CircleUser className="h-4 w-4 text-teal-500 mr-1" />
                    <p className="text-sm text-gray-700">Hundreds of participants</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Focus</h4>
                  <p className="text-sm text-gray-700">Confirming effectiveness and monitoring side effects</p>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">
                Phase 3 trials compare the new treatment with the current standard treatment. 
                These trials involve hundreds of participants across multiple research centers. 
                They provide the most reliable data about effectiveness and side effects. 
                Positive results from Phase 3 trials often lead to FDA approval of the new treatment.
              </p>
            </div>
          </div>
          
          {/* Phase 4 */}
          <div id="phase4" className="md:ml-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-1 top-6 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow-md hidden md:block"></div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <Building2 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800">Phase 4</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Primary Goal</h4>
                  <p className="text-sm text-gray-700">Approve and market treatment; determine drug safety over time</p>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Participants</h4>
                  <div className="flex items-center">
                    <CircleUser className="h-4 w-4 text-teal-500 mr-1" />
                    <p className="text-sm text-gray-700">Thousands of participants</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 border border-teal-100">
                  <h4 className="font-medium text-teal-700 mb-1">Focus</h4>
                  <p className="text-sm text-gray-700">Long-term safety and effectiveness in the general population</p>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">
                Phase 4 trials occur after a treatment has been approved and is being marketed. 
                These studies continue to monitor the treatment's safety and effectiveness in the 
                general population over a longer period. They may also explore the treatment's use 
                for different types of cancer or in combination with other treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-teal-200 p-5 shadow-sm mt-6">
        <h4 className="font-medium text-teal-800 mb-3">The Importance of Each Phase</h4>
        <p className="text-gray-700">
          Each phase of clinical trials builds upon the information learned in the previous phases. 
          This step-by-step approach ensures that only treatments with proven safety and effectiveness 
          become widely available to patients. The entire process from initial laboratory research to 
          FDA approval can take several years, highlighting the rigorous evaluation process that new 
          cancer treatments must undergo.
        </p>
      </div>
    </div>
  )
}
