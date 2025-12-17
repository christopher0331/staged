import React, { ReactNode } from 'react';

type ColorOption = 'blue' | 'teal' | 'purple' | 'green' | 'red' | 'amber' | 'indigo' | 'pink';

interface VideoSectionProps {
  id: string;
  title: string;
  color?: ColorOption;
  children: ReactNode;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ id, title, color = "blue", children }) => {
  const colorMap: Record<ColorOption, string> = {
    blue: "border-blue-600 bg-blue-50",
    teal: "border-teal-600 bg-teal-50",
    purple: "border-purple-600 bg-purple-50",
    green: "border-green-600 bg-green-50",
    red: "border-red-600 bg-red-50",
    amber: "border-amber-600 bg-amber-50",
    indigo: "border-indigo-600 bg-indigo-50",
    pink: "border-pink-600 bg-pink-50"
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
