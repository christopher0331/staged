"use client";

import { ExternalLink } from "lucide-react";
import { insuranceCoverageData } from "../data";

export function AdditionalResources() {
  const { additionalResources } = insuranceCoverageData;

  return (
    <section id="additional-resources" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{additionalResources.title}</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalResources.items.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-blue-600">{resource.name}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need more help? Contact our support team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
          >
            Contact Us
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
