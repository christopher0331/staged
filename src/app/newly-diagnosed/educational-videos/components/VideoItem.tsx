import React from 'react';

export interface VideoItemProps {
  title: string;
  presenter?: string;
  date?: string;
  link?: string;
  description?: string;
}

export const VideoItem: React.FC<VideoItemProps> = ({ 
  title, 
  presenter = "", 
  date = "", 
  link = "", 
  description = "" 
}) => {
  return (
    
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
      <h3 className="font-medium text-lg text-gray-800 mb-2">{title}</h3>
      {presenter && <p className="text-gray-600 text-sm mb-1">{presenter}</p>}
      {date && <p className="text-gray-500 text-xs mb-3">{date}</p>}
      {description && <p className="text-gray-700 mb-3 text-sm">{description}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
          Watch Video
        </a>
      )}
    </div>
  );
};
