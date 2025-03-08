import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { imagingTests } from "../data";

import { Stethoscope, ImageIcon, Microscope, ClipboardList } from "lucide-react";

export function DiagnosisTab() {
  // Array of gradient colors for imaging tests
  const gradients = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-teal-50 to-teal-100 border-teal-200",
    "from-amber-50 to-amber-100 border-amber-200",
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-rose-50 to-rose-100 border-rose-200",
    "from-emerald-50 to-emerald-100 border-emerald-200"
  ];

  return (
    <div className="space-y-8">
      <div id="initial-assessment" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Initial Assessment</h3>
            <p className="text-blue-600">The first steps in diagnosing Leiomyosarcoma</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          If your doctor suspects you may have Leiomyosarcoma, they will likely perform a physical examination and order several tests. The diagnosis process typically involves:
        </p>
        
        <ul className="space-y-3">
          {[
            "Physical examination to check for any visible or palpable abnormalities",
            "Review of your medical history and symptoms",
            "Various imaging tests to identify the location and extent of the tumor",
            "Biopsy to confirm the diagnosis"
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

      <div id="imaging-tests" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Imaging Tests</h3>
            <p className="text-indigo-600">Common imaging tests used in LMS diagnosis</p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {imagingTests.map((test, index) => (
            <div 
              key={test.title} 
              className={`p-4 rounded-lg bg-gradient-to-br ${gradients[index % gradients.length]} hover:shadow-md transition-all duration-300 border`}
            >
              <h4 className="font-semibold mb-2 text-gray-800">{test.title}</h4>
              <p className="text-sm text-gray-700">{test.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="biopsy" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <Microscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Biopsy</h3>
            <p className="text-teal-600">The definitive test for LMS diagnosis</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          A biopsy is necessary to confirm a diagnosis of Leiomyosarcoma. During this procedure:
        </p>
        
        <ul className="space-y-3">
          {[
            "A sample of tissue is removed from the suspected tumor",
            "The sample is examined under a microscope by a pathologist",
            "Special tests may be performed on the tissue to determine the exact type of tumor",
            "Results help determine the grade and stage of the cancer"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-teal-200 p-1 rounded-full mr-3 mt-1">
                <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
