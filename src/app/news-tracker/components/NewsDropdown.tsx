'use client';

import React, { useState } from 'react';

interface NewsItem {
  url: string;
  title: string;
  date: string;
  description: string;
}

interface NewsDropdownProps {
  year: string;
  colorClasses: {
    base: string;
    text: string;
    hoverText: string;
  };
  initialItems: NewsItem[];
  additionalItems: NewsItem[];
}

export default function NewsDropdown({ 
  year, 
  colorClasses, 
  initialItems, 
  additionalItems 
}: NewsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Initial items are always shown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {initialItems.map((item, index) => (
          <a 
            key={`${year}-initial-${index}`}
            href={item.url} 
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-4 ${colorClasses.base} rounded-lg border hover:shadow-md transition-shadow duration-300`}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className={`font-semibold ${colorClasses.text}`}>{item.title}</h4>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </a>
        ))}
        
        {/* View More button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-2">
          <button 
            onClick={toggleDropdown}
            className={`inline-flex items-center ${colorClasses.text} hover:${colorClasses.hoverText} font-medium`}
            aria-expanded={isOpen}
          >
            {isOpen ? 'Hide' : 'View More'} {year} News Trackers
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Additional items shown when dropdown is open */}
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 animate-fadeIn">
          {additionalItems.map((item, index) => (
            <a 
              key={`${year}-additional-${index}`}
              href={item.url} 
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-4 ${colorClasses.base} rounded-lg border hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className={`font-semibold ${colorClasses.text}`}>{item.title}</h4>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
