import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { appointmentPreparationSteps } from "../data";
import Link from "next/link";

export function PreparationSteps() {
  // Array of gradient colors for preparation steps
  const stepGradients = [
    "from-amber-50 to-amber-100 border-amber-200",
    "from-teal-50 to-teal-100 border-teal-200",
    "from-rose-50 to-rose-100 border-rose-200"
  ];
  
  return (
    <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
      <div className="flex items-center mb-4">
        <div className="bg-teal-500 p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-teal-800">Preparing for Your Journey</h3>
          <p className="text-teal-600">Essential steps to take after diagnosis</p>
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-3">
        {appointmentPreparationSteps.map((section, index) => (
          <div
            key={section.title}
            className={`p-4 rounded-lg bg-gradient-to-br ${stepGradients[index % stepGradients.length]} hover:shadow-md transition-all duration-300 border`}
          >
            <h4 className="font-semibold text-gray-800 mb-4">{section.title}</h4>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">
                    {item === "Prepare questions for your care team" ? (
                      <Link href="/newly-diagnosed/care-team-questions" className="text-purple-600 hover:text-purple-800 hover:underline">
                        {item}
                      </Link>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
