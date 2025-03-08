"use client";

import { ExternalLink, FileText, Mail, Beaker, BookOpen } from 'lucide-react';
import { cureIdData } from '../data';

export function CureIdSection() {
  return (
    <div id="cure-id" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-green-800 mb-6 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">CURE ID Initiative</h2>
      
      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 shadow-md border border-green-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-green-500 p-2 rounded-full mr-4">
            <Beaker className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800">{cureIdData.title}</h3>
            <p className="text-green-600">{cureIdData.subtitle}</p>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h4 className="text-xl font-bold text-green-700">{cureIdData.heading}</h4>
          <p className="text-lg font-medium text-green-600 mt-1">{cureIdData.subheading}</p>
        </div>
        
        <p className="text-gray-700 mb-4">{cureIdData.description}</p>
        <p className="text-gray-700 mb-4">{cureIdData.drugRepurposingInfo}</p>
        <p className="text-gray-700 mb-4">{cureIdData.biomarkerInfo}</p>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-md">
          <div className="flex items-start">
            <BookOpen className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="mb-2 text-gray-700">{cureIdData.articleInfo.text}</p>
              <a 
                href={cureIdData.articleInfo.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-700 hover:text-green-900 font-medium inline-flex items-center"
              >
                {cureIdData.articleInfo.title}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-green-50 rounded-lg p-5 border border-green-200">
          <p className="text-gray-700 mb-6">
            {cureIdData.upcomingInfo}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 px-4 rounded-md transition-colors"
            >
              <FileText className="h-5 w-5 mr-2" />
              Preliminary information
            </a>
            
            <span className="text-gray-500">or</span>
            
            <a 
              href={`mailto:${cureIdData.contactEmail}`} 
              className="inline-flex items-center bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 px-4 rounded-md transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact {cureIdData.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
