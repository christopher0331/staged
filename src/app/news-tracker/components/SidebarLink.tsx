'use client';

import React from 'react';

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SidebarLink({ href, children }: SidebarLinkProps) {
  return (
    <a 
      href={href} 
      className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-indigo-700 transition-colors duration-200"
      style={{ borderLeft: '3px solid transparent' }}
      onMouseOver={(e) => e.currentTarget.style.borderLeft = '3px solid rgb(99, 102, 241)'}
      onMouseOut={(e) => e.currentTarget.style.borderLeft = '3px solid transparent'}
    >
      {children}
    </a>
  );
}
