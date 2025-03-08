import { Users, BookOpen, GraduationCap } from "lucide-react"

export function PatientProfileSection() {
  const educationStats = [
    { level: "Illiterate", percentage: 35 },
    { level: "Primary School", percentage: 30 },
    { level: "Secondary School", percentage: 22 },
    { level: "Higher Education", percentage: 13 }
  ]

  return (
    <div className="space-y-8">
      <div id="nomadic-patients" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">"Nomadic" Patients</h3>
            <p className="text-indigo-600">Understanding patient behavior patterns</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Patients temporarily referring to multiple practitioners of the same medical specialty, or different specialties for the same symptoms, are defined as "nomads" by many researchers (Boudali et al., 2012).
        </p>
        
        <div className="bg-white/70 rounded-lg p-4 border border-indigo-100 shadow-sm">
          <p className="text-gray-700 italic">
            "Nomadic patients" seek multiple opinions as part of their strategy to navigate complex healthcare systems and ensure they receive optimal care for their condition.
          </p>
        </div>
      </div>

      <div id="education-levels" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Education Levels</h3>
            <p className="text-blue-600">Educational background of patients seeking multiple opinions</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          In a study conducted among nomadic non-cancer patients seeking several opinions, researchers administered a questionnaire to 250 patients with different illnesses. The education levels varied significantly:
        </p>
        
        <div className="relative pt-1 mb-6">
          {educationStats.map((stat, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{stat.level}</span>
                <span className="text-sm font-medium text-gray-700">{stat.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    index === 0 ? "bg-blue-500" : 
                    index === 1 ? "bg-indigo-500" : 
                    index === 2 ? "bg-purple-500" : "bg-teal-500"
                  }`} 
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/70 rounded-lg p-4 border border-blue-100 shadow-sm">
          <p className="text-gray-700">
            This data suggests that patients of all educational backgrounds seek second opinions, with a slightly higher proportion among those with lower formal education levels.
          </p>
        </div>
      </div>
    </div>
  )
}
