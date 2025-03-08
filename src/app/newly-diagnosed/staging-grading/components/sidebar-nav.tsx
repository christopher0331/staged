'use client';

import { useEffect, useState } from 'react';
import { Info, Target, Scale, Diff, Stethoscope, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubSection {
  id: string;
  label: string;
  parentId: string;
}

interface SectionLink {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  subsections?: SubSection[];
}

const sections: SectionLink[] = [
  { 
    id: 'overview', 
    label: 'Overview', 
    icon: Info, 
    color: 'text-blue-600',
    subsections: [
      { id: 'basic-concepts', label: 'Basic Concepts', parentId: 'overview' },
      { id: 'purpose', label: 'Purpose & Use', parentId: 'overview' }
    ]
  },
  { 
    id: 'staging', 
    label: 'Cancer Staging', 
    icon: Target, 
    color: 'text-indigo-600',
    subsections: [
      { id: 'staging-definition', label: 'Definition & Purpose', parentId: 'staging' },
      { id: 'staging-systems', label: 'Staging Systems', parentId: 'staging' },
      { id: 'staging-methods', label: 'Staging Methods', parentId: 'staging' }
    ]
  },
  { 
    id: 'grading', 
    label: 'Cancer Grading', 
    icon: Scale, 
    color: 'text-teal-600',
    subsections: [
      { id: 'grading-definition', label: 'Definition & Purpose', parentId: 'grading' },
      { id: 'grading-systems', label: 'Grading Systems', parentId: 'grading' }
    ]
  },
  { 
    id: 'differences', 
    label: 'Key Differences', 
    icon: Diff, 
    color: 'text-purple-600',
    subsections: [
      { id: 'comparison-table', label: 'Side-by-Side Comparison', parentId: 'differences' },
      { id: 'clinical-examples', label: 'Clinical Examples', parentId: 'differences' }
    ]
  },
  { 
    id: 'importance', 
    label: 'Importance in Treatment', 
    icon: Stethoscope, 
    color: 'text-rose-600',
    subsections: [
      { id: 'treatment-planning', label: 'Treatment Planning', parentId: 'importance' },
      { id: 'prognosis', label: 'Prognosis & Outcomes', parentId: 'importance' }
    ]
  },
  { 
    id: 'sarcoma-specific', 
    label: 'Sarcoma-Specific Info', 
    icon: Microscope, 
    color: 'text-amber-600',
    subsections: [
      { id: 'sarcoma-staging', label: 'Sarcoma Staging', parentId: 'sarcoma-specific' },
      { id: 'sarcoma-grading', label: 'Sarcoma Grading', parentId: 'sarcoma-specific' }
    ]
  }
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

    // Also observe subsections
    sections.forEach(section => {
      section.subsections?.forEach(subsection => {
        const element = document.getElementById(subsection.id);
        if (element) observer.observe(element);
      });
    });

    return () => {
      // Cleanup
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
      
      sections.forEach(section => {
        section.subsections?.forEach(subsection => {
          const element = document.getElementById(subsection.id);
          if (element) observer.unobserve(element);
        });
      });
    };
  }, []);

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Page Contents</h3>
      
      <div className="space-y-2">
        <ul className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isParentActive = activeSection === section.id || 
              section.subsections?.some(sub => activeSection === sub.id);
            const colorBase = section.color.split('-')[1];
            
            return (
              <li key={section.id} className="space-y-1">
                {/* Main category */}
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "flex items-center gap-2 text-sm py-2 px-3 w-full text-left rounded-md transition-colors font-medium",
                    activeSection === section.id
                      ? `bg-gradient-to-r from-${colorBase}-50 to-${colorBase}-100 ${section.color}`
                      : isParentActive
                        ? `text-${colorBase}-700 bg-${colorBase}-50`
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon className={cn("h-4 w-4", 
                    activeSection === section.id || isParentActive 
                      ? section.color 
                      : "text-gray-500"
                  )} />
                  {section.label}
                </button>
                
                {/* Subcategories */}
                {section.subsections && section.subsections.length > 0 && (
                  <ul className="ml-6 space-y-1 border-l-2 border-gray-100 pl-2">
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id}>
                        <button
                          onClick={() => scrollToSection(subsection.id)}
                          className={cn(
                            "flex items-center gap-2 text-sm py-1.5 px-3 w-full text-left rounded-md transition-colors",
                            activeSection === subsection.id
                              ? `bg-gradient-to-r from-${colorBase}-50 to-${colorBase}-100 ${section.color} font-medium`
                              : `text-gray-600 hover:text-${colorBase}-700 hover:bg-gray-50`
                          )}
                        >
                          <div className={cn(
                            "h-2 w-2 rounded-full", 
                            activeSection === subsection.id 
                              ? `bg-${colorBase}-500` 
                              : "bg-gray-300"
                          )} />
                          {subsection.label}
                        </button>
                      </li>
                    ))}
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
