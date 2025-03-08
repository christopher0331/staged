import { Heart, Users, Shield } from "lucide-react"

export function RelationshipsSection() {
  const relationshipElements = [
    "Trust",
    "Loyalty",
    "Intimacy",
    "Dependency",
    "Satisfaction",
    "Mutual commitment"
  ]

  return (
    <div className="space-y-8">
      <div id="emotional-contract" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">The Emotional Contract</h3>
            <p className="text-teal-600">Elements of the patient-oncologist relationship</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          The patient-oncologist relationship should carry inherent elements that belong to the emotional contract between patient and physician:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {relationshipElements.map((element, index) => (
            <div 
              key={index}
              className="bg-white/70 rounded-lg p-3 text-center border border-teal-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="font-medium text-teal-700">{element}</span>
            </div>
          ))}
        </div>
        
        <p className="text-gray-700">
          The major predictors for loyalty and mutual commitment to treatment success are trust and satisfaction (DiMatteo, 2003; Platonova et al., 2008).
        </p>
      </div>

      <div id="complex-dynamics" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Complex Dynamics</h3>
            <p className="text-blue-600">The unique nature of second opinion relationships</p>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-blue-100 shadow-sm mb-4">
          <p className="text-gray-700 mb-3">
            <span className="font-semibold text-blue-700">Second opinion is even more complex</span>, because two or more physicians are involved, resulting in two dyads, but not necessarily a triad (Greenfield et al., 2012).
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-3 bg-blue-50/70 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300">
                <span className="text-blue-700 font-bold">Patient</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300">
                <span className="text-blue-700 font-bold">Doctor 1</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300">
                <span className="text-blue-700 font-bold">Doctor 2</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700">
          The request for a second opinion can create complex dynamics between the patient and their healthcare providers. Navigating these relationships requires clear communication and understanding from all parties involved.
        </p>
      </div>
    </div>
  )
}
