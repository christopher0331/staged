import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Dna } from "lucide-react";

export function StagingOverview() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 p-2 rounded-full mr-4">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-800">Understanding LMS Staging</h3>
          <p className="text-blue-600">The process of determining how far cancer has spread</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">
        The process of finding out how far leiomyosarcoma has spread is called staging. In sarcoma staging, 
        doctors evaluate the appearance of the tumor under the microscope and judge how fast the cancer seems 
        to be growing. The stage of a sarcoma is the most significant factor in determining each patient's 
        prognosis and selecting treatment options.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold mb-2 text-gray-800">Staging Process</h4>
          <ul className="space-y-3">
            {[
              "Biopsies examination",
              "Imaging tests of main tumor (CT/MRI)",
              "Evaluation of potential spread",
              "Microscopic tissue analysis"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-200 p-1 rounded-full mr-3 mt-1">
                  <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <Dna className="h-5 w-5 text-teal-600" />
            Genetic Testing Note
          </h4>
          <p className="text-gray-700">
            Molecular/genomic testing for sarcoma-related genes may not be for everyone, but staying informed 
            and asking questions about testing availability allows you to self-advocate. Explore all testing 
            options for potential targeted therapies.
          </p>
        </div>
      </div>
    </div>
  );
}
