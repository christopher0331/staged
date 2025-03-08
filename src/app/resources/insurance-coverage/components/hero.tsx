"use client";

import { Shield, DollarSign, FileText } from "lucide-react";
import { insuranceCoverageData } from "../data";

export function Hero() {
  const { generalInfo } = insuranceCoverageData;

  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md">
        <Shield className="h-4 w-4" />
        <span>Insurance Resources</span>
      </div>
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {generalInfo.title}
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
      
      <p className="mx-auto max-w-2xl text-xl text-gray-700">
        {generalInfo.description}
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg shadow-sm">
          <Shield className="h-5 w-5" />
          <span>ACA Protections</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg shadow-sm">
          <DollarSign className="h-5 w-5" />
          <span>Financial Assistance</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg shadow-sm">
          <FileText className="h-5 w-5" />
          <span>Coverage Options</span>
        </div>
      </div>
    </div>
  );
}
