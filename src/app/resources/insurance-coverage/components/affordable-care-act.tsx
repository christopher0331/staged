"use client";

import { Shield } from "lucide-react";
import { insuranceCoverageData } from "../data";

export function AffordableCareAct() {
  const { affordableCareAct } = insuranceCoverageData;

  return (
    <section id="affordable-care-act" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{affordableCareAct.title}</h2>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500">
          <ul className="space-y-4">
            {affordableCareAct.items.map((item, index) => (
              <li key={index} className="flex">
                <span className="text-blue-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Important note:</strong> If you qualify and want to take part in a clinical trial, your health plan must help pay for routine costs associated with approved clinical trials. A trial may help you get new cancer treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
