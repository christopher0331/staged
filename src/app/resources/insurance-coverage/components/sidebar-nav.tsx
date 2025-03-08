"use client";

import { useEffect, useState } from 'react';
import { Shield, DollarSign, PiggyBank, Heart, Pill, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionLink {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

const sections: SectionLink[] = [
  { id: 'affordable-care-act', label: 'ACA Protections', icon: Shield, color: 'text-blue-600' },
  { id: 'cost-limits', label: 'Cost Limits', icon: DollarSign, color: 'text-indigo-600' },
  { id: 'financial-assistance', label: 'Financial Assistance', icon: PiggyBank, color: 'text-teal-600' },
  { id: 'additional-resources', label: 'Additional Resources', icon: FileText, color: 'text-purple-600' }
];

const subSections: Record<string, SectionLink[]> = {
  'affordable-care-act': [
    { id: 'pre-existing-conditions', label: 'Pre-existing Conditions', icon: Shield, color: 'text-blue-600' },
    { id: 'coverage-denial', label: 'Coverage Denial Protection', icon: Shield, color: 'text-blue-600' }
  ],
  'cost-limits': [
    { id: 'out-of-pocket-maximums', label: 'Out-of-Pocket Maximums', icon: DollarSign, color: 'text-indigo-600' },
    { id: 'lifetime-limits', label: 'No Lifetime Limits', icon: DollarSign, color: 'text-indigo-600' }
  ],
  'financial-assistance': [
    { id: 'mental-health', label: 'Mental Health Support', icon: Heart, color: 'text-teal-600' },
    { id: 'senior-drug-costs', label: 'Prescription Coverage for Seniors', icon: Pill, color: 'text-teal-600' },
    { id: 'essential-benefits', label: 'Essential Health Benefits', icon: FileText, color: 'text-teal-600' }
  ]
};

interface SidebarNavProps {
  items?: any[];
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
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
    <nav className={cn("flex flex-col space-y-1", className)}>
      {sections.map((section) => (
        <div key={section.id} className="mb-2">
          <button
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeSection === section.id
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
            )}
          >
            <section.icon className={cn("mr-2 h-4 w-4", section.color)} />
            <span>{section.label}</span>
          </button>
          
          {subSections[section.id] && (
            <div className="ml-4 mt-1 space-y-1">
              {subSections[section.id].map((subSection) => (
                <button
                  key={subSection.id}
                  onClick={() => scrollToSection(subSection.id)}
                  className={cn(
                    "flex w-full items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    activeSection === subSection.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-500 hover:text-blue-600 hover:bg-blue-50/50"
                  )}
                >
                  <subSection.icon className={cn("mr-2 h-3 w-3", subSection.color)} />
                  <span>{subSection.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export const sidebarNavItems = [
  {
    title: "Affordable Care Act Protections",
    href: "#affordable-care-act",
  },
  {
    title: "Cost Limits",
    href: "#cost-limits",
  },
  {
    title: "Financial Assistance",
    href: "#financial-assistance",
  },
  {
    title: "Additional Resources",
    href: "#additional-resources",
  },
];
