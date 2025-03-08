import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from "lucide-react";
import { stagingData } from "../data";

export function StagesTable() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
      <div className="flex items-center mb-4">
        <div className="bg-amber-500 p-2 rounded-full mr-4">
          <Table className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-800">Treatment by Stage</h3>
          <p className="text-amber-600">Common treatments based on LMS stage</p>
        </div>
      </div>
      
      <div className="overflow-x-auto bg-white/90 rounded-lg shadow-sm border border-amber-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-amber-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-amber-900 bg-amber-50">Stage</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-amber-900 bg-amber-50">Primary Treatment Options</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-amber-900 bg-amber-50">Follow Up Care</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-100">
            {stagingData.stages.map((stage, index) => (
              <tr 
                key={stage.stage}
                className={index % 2 === 0 ? "bg-amber-50/30" : "bg-white"}
              >
                <td className="py-4 px-4 text-sm font-medium text-amber-700">{stage.stage}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{stage.primaryTreatment}</td>
                <td className="py-4 px-4 text-sm text-gray-700">{stage.followUpCare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 hover:shadow-md transition-all duration-300">
        <h4 className="font-semibold mb-2 text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Important Note
        </h4>
        <p className="text-gray-700">
          Treatment options may vary based on individual factors. Always consult with your healthcare team 
          to determine the most appropriate treatment plan for your specific situation.
        </p>
      </div>
    </div>
  );
}
