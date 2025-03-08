import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Repeat } from "lucide-react";
import { stagingData } from "../data";

export function RecurrenceSection() {
  // Array of gradient colors for recurrence items
  const recurrenceGradients = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-teal-50 to-teal-100 border-teal-200",
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-emerald-50 to-emerald-100 border-emerald-200",
    "from-purple-50 to-purple-100 border-purple-200"
  ];
  
  return (
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
      <div className="flex items-center mb-4">
        <div className="bg-purple-500 p-2 rounded-full mr-4">
          <Repeat className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">Recurrence Treatment Options</h3>
          <p className="text-purple-600">Treatment approaches for recurring LMS</p>
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-3">
        {stagingData.recurrence.map((item, index) => (
          <div
            key={item.location}
            className={`p-4 rounded-lg bg-gradient-to-br ${recurrenceGradients[index % recurrenceGradients.length]} hover:shadow-md transition-all duration-300 border`}
          >
            <h4 className="font-semibold mb-2 text-gray-800">{item.location}</h4>
            <p className="text-sm text-gray-700">{item.treatment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
