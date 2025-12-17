import React from 'react';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import BoardSection from './components/BoardSection';
import { boardMembers } from './data/boardMembers';

// Group board members by type
const leadershipMembers = boardMembers.filter(member => member.memberType === 'leadership');
const medicalMembers = boardMembers.filter(member => member.memberType === 'medical');
const outreachMembers = boardMembers.filter(member => member.memberType === 'outreach');
const supportMembers = boardMembers.filter(member => member.memberType === 'support');

export default function BoardMembersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {leadershipMembers.length > 0 && (
              <BoardSection 
                title="Leadership Team" 
                description="Our executive leadership team guiding the foundation's mission and vision."
                members={leadershipMembers}
                type="leadership"
              />
            )}
            
            {medicalMembers.length > 0 && (
              <BoardSection 
                title="Medical Advisors" 
                description="Medical professionals providing expert guidance and support."
                members={medicalMembers}
                type="medical"
              />
            )}
            
            {outreachMembers.length > 0 && (
              <BoardSection 
                title="Community Outreach" 
                description="Board members focused on connecting with and supporting the LMS community."
                members={outreachMembers}
                type="outreach"
              />
            )}
            
            {supportMembers.length > 0 && (
              <BoardSection 
                title="Support & Services" 
                description="Board members providing specialized services to support the foundation's activities."
                members={supportMembers}
                type="support"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
