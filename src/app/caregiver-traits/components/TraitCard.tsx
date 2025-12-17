import React from 'react';

interface TraitCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  traitType: 'compassion' | 'patience' | 'dependability' | 'flexibility';
}

const TraitCard: React.FC<TraitCardProps> = ({ title, description, linkText, linkUrl, traitType }) => {
  // Color schemes for each trait type
  const colorSchemes = {
    compassion: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      link: 'text-blue-600 hover:text-blue-800'
    },
    patience: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
      link: 'text-teal-600 hover:text-teal-800'
    },
    dependability: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      link: 'text-purple-600 hover:text-purple-800'
    },
    flexibility: {
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-700',
      link: 'text-pink-600 hover:text-pink-800'
    }
  };

  const colors = colorSchemes[traitType];

  return (
    <div className={`trait-card mb-8 p-6 rounded-lg ${colors.bg} shadow-sm hover:shadow-md transition-shadow duration-300`}>
      <h4 className={`text-xl font-bold ${colors.text} mb-3 pb-2 border-b ${colors.border}`}>
        {title}
      </h4>
      <p className="text-gray-700 mb-3">
        {description}
      </p>
      {linkText && linkUrl && (
        <a 
          href={linkUrl}
          className={`${colors.link} underline font-medium`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default TraitCard;
