"use client";

import { ExternalLink, FileText, Microscope, AlertCircle } from 'lucide-react';
import { countMeInData } from '../data';

export function CountMeInSection() {
  return (
    <div id="count-me-in" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">Count Me In Project</h2>
      
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <Microscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">{countMeInData.title}</h3>
            <p className="text-purple-600">{countMeInData.subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{countMeInData.description}</p>
        <p className="text-gray-700 mb-4">{countMeInData.additionalInfo}</p>
        
        <div className="bg-purple-100 p-4 rounded-md text-center mb-6 border border-purple-200">
          {countMeInData.highlights.map((highlight, index) => (
            <p key={index} className={`${index === 0 ? 'text-xl font-bold' : 'text-lg font-semibold'} text-purple-700 ${index === 0 ? 'mb-2' : ''}`}>
              {highlight}
            </p>
          ))}
        </div>
        
        <div className="flex justify-center mb-6">
          <a 
            href={countMeInData.handoutLink}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-md transition-colors"
          >
            <FileText className="h-5 w-5 mr-2" />
            Count Me In Project Handout
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700">
          {countMeInData.partnershipInfo}
        </p>
        
        <p className="text-gray-700">
          {countMeInData.projectInfo}
        </p>
        
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-700">For more detailed information:</span>
          <a 
            href={countMeInData.websiteLink}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
          >
            www.lmsproject.org
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg text-amber-800 mb-2">New Development - 2024 for Uterine LMS</h3>
              <p className="text-gray-700">{countMeInData.newDevelopment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
