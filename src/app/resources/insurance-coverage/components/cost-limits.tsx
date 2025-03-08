"use client";

import { DollarSign } from "lucide-react";
import { insuranceCoverageData } from "../data";

export function CostLimits() {
  const { costLimits } = insuranceCoverageData;

  return (
    <section id="cost-limits" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{costLimits.title}</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-6">{costLimits.description}</p>
        
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
          <ul className="space-y-4">
            {costLimits.items.map((item, index) => (
              <li key={index} className="flex">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-green-50 p-4 rounded-md">
            <p className="text-sm text-green-800">
              <strong>Did you know?</strong> The Affordable Care Act eliminated annual and lifetime limits on how much an insurance company spends on covered expenses for your health care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
