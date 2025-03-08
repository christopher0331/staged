import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import { stagingData } from "../data";

export function TNMGrading() {
  // Array of gradient colors for TNM factors
  const tnmGradients = [
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-amber-50 to-amber-100 border-amber-200",
    "from-rose-50 to-rose-100 border-rose-200"
  ];
  
  // Array of gradient colors for grade factors
  const gradeGradients = [
    "from-emerald-50 to-emerald-100 border-emerald-200",
    "from-amber-50 to-amber-100 border-amber-200",
    "from-blue-50 to-blue-100 border-blue-200"
  ];
  
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-500 p-2 rounded-full mr-4">
          <Target className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-indigo-800">TNM System & Grading</h3>
          <p className="text-indigo-600">Understanding how LMS is classified and staged</p>
        </div>
      </div>
      
      <div className="space-y-8">
        {/* TNM System */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">TNM Staging System</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {stagingData.tnmFactors.map((factor, index) => (
              <div 
                key={factor.letter} 
                className={`p-4 rounded-lg bg-gradient-to-br ${tnmGradients[index % tnmGradients.length]} hover:shadow-md transition-all duration-300 border`}
              >
                <div className="text-2xl font-bold text-gray-800 mb-2">{factor.letter}</div>
                <p className="text-sm text-gray-700">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grading Factors */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-5 shadow-sm border border-teal-200 mt-6">
          <h3 className="text-lg font-semibold text-teal-800 mb-4">Grade (G) Factors</h3>
          <p className="text-gray-700 mb-4">
            The grade is a sign of how likely the cancer will spread. Under the French or FNCLCC system, 
            grade is based on three factors:
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {stagingData.gradeFactors.map((factor, index) => (
              <div 
                key={factor.factor} 
                className={`p-4 rounded-lg bg-gradient-to-br ${gradeGradients[index % gradeGradients.length]} hover:shadow-md transition-all duration-300 border`}
              >
                <h4 className="font-medium text-gray-800 mb-2">{factor.factor}</h4>
                <p className="text-sm text-gray-700">{factor.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The scores for each factor are added to determine the grade for the cancer. Higher-grade 
            cancers tend to grow and spread faster than lower-grade cancers.
          </p>
        </div>
      </div>
    </div>
  );
}
