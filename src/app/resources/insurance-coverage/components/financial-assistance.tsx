"use client";

import { Wallet } from "lucide-react";
import { insuranceCoverageData } from "../data";

export function FinancialAssistance() {
  const { financialAssistance } = insuranceCoverageData;

  return (
    <section id="financial-assistance" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 bg-purple-100 rounded-full p-3 mr-4">
            <Wallet className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{financialAssistance.title}</h2>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-500">
          <ul className="space-y-4">
            {financialAssistance.items.map((item, index) => (
              <li key={index} className="flex">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-purple-50 p-4 rounded-md">
            <p className="text-sm text-purple-800">
              <strong>Tip:</strong> You might be able to get financial help to pay for some costs if you're buying insurance through your state's Marketplace. Both tax credits and cost-sharing subsidies are available to people with qualifying incomes. Check on healthcare.gov to find out.
            </p>
          </div>
          
          <div className="mt-4">
            <a 
              href="https://www.healthcare.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-800"
            >
              Visit Healthcare.gov
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
