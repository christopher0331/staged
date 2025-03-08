import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import { stagingData } from "../data";

export function ResourcesSection() {
  // Array of gradient colors for resource items
  const resourceGradients = [
    "from-emerald-50 to-emerald-100 border-emerald-200",
    "from-blue-50 to-blue-100 border-blue-200",
    "from-amber-50 to-amber-100 border-amber-200",
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-rose-50 to-rose-100 border-rose-200",
    "from-teal-50 to-teal-100 border-teal-200"
  ];
  
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 shadow-md border border-emerald-200">
      <div className="flex items-center mb-4">
        <div className="bg-emerald-500 p-2 rounded-full mr-4">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-800">Additional Resources</h3>
          <p className="text-emerald-600">Helpful information for LMS patients</p>
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stagingData.resources.map((resource, index) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-lg bg-gradient-to-br ${resourceGradients[index % resourceGradients.length]} hover:shadow-md transition-all duration-300 border group`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-800 group-hover:text-emerald-800">
                  {resource.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600 capitalize">
                  {resource.type} Resource
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-emerald-600" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200 hover:shadow-md transition-all duration-300">
        <h4 className="font-semibold mb-2 text-teal-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Note for Patients
        </h4>
        <p className="text-gray-700">
          Treatment Planning is important in the first steps of care. All planning is customized and 
          case-specific – it is not a "one size fits all" situation. Being proactive in your care 
          is important - which means knowing as much as you can and asking the right questions along the way.
        </p>
      </div>
    </div>
  );
}
