'use client';

import { useEffect, useState } from 'react';
import { Microscope, Syringe, BookOpen, MapPin, ImageIcon, FileText, Clipboard, BookMarked } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionLink {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

const sections: SectionLink[] = [
  { id: 'diagnosis', label: 'Diagnosis', icon: Microscope, color: 'text-blue-600' },
  { id: 'treatment', label: 'Treatment', icon: Syringe, color: 'text-indigo-600' },
  { id: 'resources', label: 'Resources', icon: BookOpen, color: 'text-teal-600' }
];

const subSections: Record<string, SectionLink[]> = {
  diagnosis: [
    { id: 'initial-assessment', label: 'Initial Assessment', icon: Microscope, color: 'text-blue-600' },
    { id: 'imaging-tests', label: 'Imaging Tests', icon: ImageIcon, color: 'text-indigo-600' },
    { id: 'biopsy', label: 'Biopsy', icon: Microscope, color: 'text-teal-600' }
  ],
  treatment: [
    { id: 'treatment-overview', label: 'Treatment Overview', icon: Clipboard, color: 'text-indigo-600' },
    { id: 'treatment-options', label: 'Treatment Options', icon: Syringe, color: 'text-blue-600' },
    { id: 'clinical-trials', label: 'Clinical Trials', icon: FileText, color: 'text-purple-600' }
  ],
  resources: [
    { id: 'lms-types', label: 'Types of LMS', icon: MapPin, color: 'text-teal-600' },
    { id: 'medical-terms', label: 'Medical Terms Dictionary', icon: BookMarked, color: 'text-indigo-600' }
  ]
};

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

    // Observe subsections
    Object.values(subSections).flat().forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup
      [...sections, ...Object.values(subSections).flat()].forEach(section => {
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
            const isActive = activeSection === section.id || 
                          (subSections[section.id] && subSections[section.id].some(sub => sub.id === activeSection));
            
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
                
                {/* Subsections */}
                {subSections[section.id] && (
                  <ul className="space-y-1 ml-6 mt-2">
                    {subSections[section.id].map((subSection) => {
                      const SubIcon = subSection.icon;
                      return (
                        <li key={subSection.id}>
                          <button
                            onClick={() => scrollToSection(subSection.id)}
                            className={cn(
                              "flex items-center gap-2 text-sm py-1 px-2 w-full text-left rounded-md transition-colors",
                              activeSection === subSection.id
                                ? `bg-gradient-to-r from-${subSection.color.split('-')[1]}-50 to-${subSection.color.split('-')[1]}-100 ${subSection.color} font-medium`
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            )}
                          >
                            <SubIcon className={cn("h-3.5 w-3.5", activeSection === subSection.id ? subSection.color : "text-gray-500")} />
                            {subSection.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
