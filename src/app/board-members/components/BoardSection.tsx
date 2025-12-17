"use client";

import React from 'react';
import { BoardMember } from '../data/boardMembers';
import BoardMemberCard from './BoardMemberCard';

interface BoardSectionProps {
  title: string;
  description?: string;
  members: BoardMember[];
  type: 'leadership' | 'medical' | 'outreach' | 'support';
}

const sectionColors = {
  leadership: {
    bg: 'from-blue-600 to-indigo-600',
    text: 'text-blue-600'
  },
  medical: {
    bg: 'from-purple-600 to-indigo-600',
    text: 'text-purple-600'
  },
  outreach: {
    bg: 'from-teal-600 to-cyan-600',
    text: 'text-teal-600'
  },
  support: {
    bg: 'from-pink-600 to-rose-600',
    text: 'text-pink-600'
  }
};

export const BoardSection: React.FC<BoardSectionProps> = ({ 
  title, 
  description, 
  members,
  type
}) => {
  const colors = sectionColors[type];

  return (
    <section id={`section-${type}`} className="py-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${colors.bg} bg-clip-text text-transparent`}>
          {title}
        </h2>
        
        {description && (
          <p className={`text-lg ${colors.text} mb-8`}>
            {description}
          </p>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
