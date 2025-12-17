'use client';

import { useEffect, useState } from 'react';
import { Car, Plane, Building, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionLink {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

const sections: SectionLink[] = [
  { id: 'local-transportation', label: 'Local Transportation', icon: Car, color: 'text-blue-600' },
  { id: 'distant-transportation', label: 'Distant Transportation', icon: Plane, color: 'text-indigo-600' },
  { id: 'lodging-options', label: 'Lodging Options', icon: Building, color: 'text-teal-600' }
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small offset to account for fixed headers
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on the URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Check on initial load
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Set up intersection observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
    );

    // Observe main sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Page Contents</h3>
      
      <div className="space-y-6">
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "flex items-center gap-2 text-sm py-2 px-3 w-full text-left rounded-md transition-colors font-medium",
                    isActive
                      ? `bg-gradient-to-r from-${section.color.split('-')[1]}-50 to-${section.color.split('-')[1]}-100 ${section.color}`
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isActive ? section.color : "text-gray-500")} />
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <h3 className="font-medium text-blue-800 mb-2">Need Help?</h3>
        <p className="text-sm text-gray-700 mb-3">
          Contact the American Cancer Society for assistance finding transportation and lodging options.
        </p>
        <a 
          href="tel:1-800-227-2345" 
          className="inline-flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call 1-800-227-2345
        </a>
      </div>
    </div>
  );
}
