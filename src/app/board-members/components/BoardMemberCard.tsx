"use client";

import React, { useState } from 'react';
import { BoardMember } from '../data/boardMembers';
import Modal from './Modal';

interface BoardMemberCardProps {
  member: BoardMember;
}

export const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  // Color schemes based on member type
  const colorSchemes = {
    leadership: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      title: 'text-blue-700',
      button: 'bg-blue-500 hover:bg-blue-600',
      gradient: 'from-blue-500 to-indigo-600'
    },
    medical: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      title: 'text-purple-700',
      button: 'bg-purple-500 hover:bg-purple-600',
      gradient: 'from-purple-500 to-indigo-600'
    },
    outreach: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      title: 'text-teal-700',
      button: 'bg-teal-500 hover:bg-teal-600',
      gradient: 'from-teal-500 to-cyan-600'
    },
    support: {
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      title: 'text-pink-700',
      button: 'bg-pink-500 hover:bg-pink-600',
      gradient: 'from-pink-500 to-rose-600'
    }
  };

  const scheme = colorSchemes[member.memberType];
  
  // No bio preview - showing only name and position

  return (
    <>
      <div 
        id={member.id}
        className={`rounded-lg ${scheme.bg} border ${scheme.border} p-5 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col`}
      >
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Image (placeholder if none available) */}
          <div className="mb-5 flex justify-center">
            {member.imageUrl ? (
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-sm"
              />
            ) : (
              <div className={`w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-r ${scheme.gradient} text-white text-2xl font-bold`}>
                {member.name.split(' ').map(part => part[0]).join('')}
              </div>
            )}
          </div>
          
          {/* Name and Title */}
          <h3 className={`text-xl font-bold mb-2 ${scheme.title} text-center`}>{member.name}</h3>
          <p className="text-gray-600 text-sm mb-6 text-center">{member.title}</p>
        </div>
        
        {/* Read More Button */}
        <button 
          onClick={() => setModalOpen(true)}
          className={`mt-auto w-full py-2 ${scheme.button} text-white rounded-md text-sm font-medium transition-colors`}
        >
          Read Full Bio
        </button>
      </div>

      {/* Modal with Full Bio */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={member.name}
      >
        <div className="space-y-4">
          <p className="text-gray-600 font-medium">{member.title}</p>
          
          <div className="space-y-3">
            {member.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-700">{paragraph}</p>
            ))}
          </div>
          
          {member.organizations && member.organizations.length > 0 && (
            <div className="mt-4">
              <p className="font-medium text-gray-700">Member of:</p>
              <ul className="list-disc pl-5 mt-1 text-gray-600">
                {member.organizations.map((org, index) => (
                  <li key={index}>{org}</li>
                ))}
              </ul>
            </div>
          )}
          
          {member.links && member.links.length > 0 && (
            <div className="mt-4">
              {member.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-2 text-${member.memberType}-600 hover:text-${member.memberType}-800 underline`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default BoardMemberCard;
