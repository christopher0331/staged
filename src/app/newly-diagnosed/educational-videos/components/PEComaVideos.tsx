import React from 'react';

// Component to group videos by topic
const VideoSection = ({ id, title, color = "blue", children }) => {
  const colorMap = {
    blue: "border-blue-600 bg-blue-50",
    teal: "border-teal-600 bg-teal-50",
    purple: "border-purple-600 bg-purple-50",
    green: "border-green-600 bg-green-50",
    red: "border-red-600 bg-red-50",
    amber: "border-amber-600 bg-amber-50",
    indigo: "border-indigo-600 bg-indigo-50",
    pink: "border-pink-600 bg-pink-50",
    orange: "border-orange-600 bg-orange-50"
  };
  
  const borderColor = colorMap[color]?.split(" ")[0] || "border-blue-600";
  const bgColor = colorMap[color]?.split(" ")[1] || "bg-blue-50";
  
  return (
    <section id={id} className={`mb-10 bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${borderColor}`}>
      <h2 className="text-2xl font-bold p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        {title}
      </h2>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    </section>
  );
};

// Video Component to display individual video entries
const VideoItem = ({ 
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
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
          </svg>
          Watch Video
        </a>
      )}
    </div>
  );
};

export const PEComaVideos = () => {
  return (
    <VideoSection id="pecoma" title="PEComa" color="red">
      <VideoItem 
        title="PEComa Research Updates and Q & A"
        presenter="Dr. Andrew Wagner, Dana Farber Cancer Institute"
      />
      
      <VideoItem 
        title="Repurposing Drugs for prospective advancement of treatment for PEComa"
        presenter="Dr. Marco Schito, Director of C-Path's CURE Drug Repurposing Collaboratory"
        date="March 2024"
        description="The patient toolkit to participate in this patient-driven initiative"
        link="https://www.youtube.com/watch?v=yKp4zAo9TUU"
      />
    </VideoSection>
  );
};
