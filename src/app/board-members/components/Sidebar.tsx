import React from 'react';
import { boardMembers } from '../data/boardMembers';

export const Sidebar: React.FC = () => {
  // Group board members by type
  const leadershipMembers = boardMembers.filter(member => member.memberType === 'leadership');
  const medicalMembers = boardMembers.filter(member => member.memberType === 'medical');
  const outreachMembers = boardMembers.filter(member => member.memberType === 'outreach');
  const supportMembers = boardMembers.filter(member => member.memberType === 'support');

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h3 className="text-xl font-bold mb-4 pb-2 border-b bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Our Board Members
      </h3>
      
      <nav className="space-y-4">
        {/* Leadership Section */}
        {leadershipMembers.length > 0 && (
          <div>
            <h4 className="font-medium text-blue-700 mb-2">Leadership</h4>
            <ul className="space-y-1">
              {leadershipMembers.map(member => (
                <li key={member.id}>
                  <a 
                    href={`#${member.id}`} 
                    className="block py-1 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded text-sm border-l-2 border-blue-100 hover:border-blue-500 transition-colors"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Medical Section */}
        {medicalMembers.length > 0 && (
          <div>
            <h4 className="font-medium text-purple-700 mb-2">Medical</h4>
            <ul className="space-y-1">
              {medicalMembers.map(member => (
                <li key={member.id}>
                  <a 
                    href={`#${member.id}`} 
                    className="block py-1 px-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded text-sm border-l-2 border-purple-100 hover:border-purple-500 transition-colors"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Outreach Section */}
        {outreachMembers.length > 0 && (
          <div>
            <h4 className="font-medium text-teal-700 mb-2">Community Outreach</h4>
            <ul className="space-y-1">
              {outreachMembers.map(member => (
                <li key={member.id}>
                  <a 
                    href={`#${member.id}`} 
                    className="block py-1 px-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded text-sm border-l-2 border-teal-100 hover:border-teal-500 transition-colors"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Support Section */}
        {supportMembers.length > 0 && (
          <div>
            <h4 className="font-medium text-pink-700 mb-2">Support & Services</h4>
            <ul className="space-y-1">
              {supportMembers.map(member => (
                <li key={member.id}>
                  <a 
                    href={`#${member.id}`} 
                    className="block py-1 px-2 text-gray-700 hover:bg-pink-50 hover:text-pink-700 rounded text-sm border-l-2 border-pink-100 hover:border-pink-500 transition-colors"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      
      {/* Denver Support Section */}
      <div className="mt-8 pt-6 border-t border-amber-200">
        <h4 className="text-amber-600 font-medium mb-2">Denver Support</h4>
        <p className="text-gray-600 text-sm mb-3">
          Need assistance or have questions about LMS? Our Denver team is here to help.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-medium hover:bg-amber-600 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
