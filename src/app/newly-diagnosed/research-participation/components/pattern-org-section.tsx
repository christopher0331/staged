"use client";

import React from 'react';
import { ExternalLink, Database, Beaker, Share2, Users } from 'lucide-react';
import { patternOrgData } from '../data';

export function PatternOrgSection() {
  return (
    <div id="pattern-org" className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">Pattern.org Research Initiative</h2>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">{patternOrgData.title}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {patternOrgData.links.map((link, index) => (
                <div key={index} className="inline-flex items-center">
                  {index > 0 && <span className="text-blue-400 mx-1">and</span>}
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                  >
                    {link.text}
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-xl font-bold text-blue-700">{patternOrgData.slogan}</p>
        </div>
        
        <p className="text-gray-700 mb-4">{patternOrgData.description}</p>
        
        <p className="text-gray-700 mb-4">
          <a 
            href="https://pattern.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Pattern.org
          </a> {patternOrgData.patternDescription}
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 italic rounded-r-md">
          <p className="text-gray-700">
            "{patternOrgData.quote}"
          </p>
          <p className="text-right mt-2 font-medium text-blue-700">- {patternOrgData.quoteSource}</p>
        </div>
        
        <p className="text-gray-700">
          {patternOrgData.goalStatement}
        </p>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          {patternOrgData.platformDescription}
        </p>
        
        <ul className="list-none space-y-4 mb-6">
          {patternOrgData.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              {index === 0 && <Database className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />}
              {index === 1 && <Beaker className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />}
              {index === 2 && <Share2 className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />}
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-3">An LMS Biobank is established:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {patternOrgData.biobank.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <p className="mt-4 text-blue-700 font-medium">
            {patternOrgData.conclusion}
          </p>
        </div>
        
        <div className="bg-blue-100 p-4 rounded-md text-center mt-8 border border-blue-200">
          <p className="text-lg font-bold text-blue-800">
            {patternOrgData.callToAction}
          </p>
        </div>
      </div>
    </div>
  );
}
