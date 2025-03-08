import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { treatmentOptions } from "../data";
import { Syringe, Pill, Zap, Target, FileText, Clipboard } from "lucide-react";

export function TreatmentTab() {
  // Array of treatment card styles
  const treatmentStyles = [
    { bg: "from-blue-50 to-blue-100", icon: Syringe, iconBg: "bg-blue-500", textColor: "text-blue-800", border: "border-blue-200" },
    { bg: "from-amber-50 to-amber-100", icon: Zap, iconBg: "bg-amber-500", textColor: "text-amber-800", border: "border-amber-200" },
    { bg: "from-emerald-50 to-emerald-100", icon: Pill, iconBg: "bg-emerald-500", textColor: "text-emerald-800", border: "border-emerald-200" },
    { bg: "from-rose-50 to-rose-100", icon: Target, iconBg: "bg-rose-500", textColor: "text-rose-800", border: "border-rose-200" },
    { bg: "from-purple-50 to-purple-100", icon: FileText, iconBg: "bg-purple-500", textColor: "text-purple-800", border: "border-purple-200" }
  ];

  return (
    <div className="space-y-8">
      <div id="treatment-overview" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <Clipboard className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Treatment Overview</h3>
            <p className="text-indigo-600">Understanding your treatment options for Leiomyosarcoma</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Treatment for Leiomyosarcoma typically involves a combination of approaches. Your specific treatment plan will depend on several factors, including:
        </p>
        
        <ul className="space-y-3">
          {[
            "The size and location of the tumor",
            "Whether the cancer has spread",
            "Your overall health and preferences",
            "The grade and stage of the cancer"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-indigo-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 id="treatment-options" className="text-xl font-bold text-gray-800 mt-8 mb-4">Treatment Options</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {treatmentOptions.map((option, index) => {
          const style = treatmentStyles[index % treatmentStyles.length];
          const Icon = style.icon;
          
          return (
            <div 
              key={option.title} 
              className={`bg-gradient-to-br ${style.bg} rounded-xl p-5 shadow-md border ${style.border || 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-3">
                <div className={`${style.iconBg} p-2 rounded-full mr-3`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h4 className={`font-bold ${style.textColor}`}>{option.title}</h4>
              </div>
              <p className="text-gray-700">{option.description}</p>
            </div>
          );
        })}
      </div>

      <div id="clinical-trials" className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200 mt-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">Clinical Trials</h3>
            <p className="text-purple-600">Exploring additional treatment options</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Clinical trials may provide access to new treatments that are not yet widely available. These trials:
        </p>
        
        <ul className="space-y-3">
          {[
            "Test new drugs, combinations of drugs, or other treatments",
            "Help researchers understand which approaches work better for different patients",
            "May provide treatment options when standard treatments have not worked",
            "Contribute to the advancement of cancer treatment for future patients"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-purple-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-purple-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
