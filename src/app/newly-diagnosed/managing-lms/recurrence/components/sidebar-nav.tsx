'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Repeat, Activity, HeartPulse, BookOpen } from "lucide-react"

interface SectionLink {
  id: string
  label: string
  icon: any
  color: string
}

export function SidebarNav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>("overview")
  
  const sections: SectionLink[] = [
    { 
      id: 'overview', 
      label: 'Understanding Recurrence', 
      icon: Repeat, 
      color: 'text-purple-600'
    },
    { 
      id: 'recurrence-types', 
      label: 'Types of Recurrence', 
      icon: Repeat, 
      color: 'text-indigo-600'
    },
    { 
      id: 'monitoring', 
      label: 'Monitoring Strategies', 
      icon: Activity, 
      color: 'text-blue-600'
    },
    { 
      id: 'coping', 
      label: 'Coping Strategies', 
      icon: HeartPulse, 
      color: 'text-teal-600'
    },
    { 
      id: 'resources', 
      label: 'Resources', 
      icon: BookOpen, 
      color: 'text-amber-600'
    }
  ]
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])
  
  return (
    <nav className="sticky top-24 space-y-1">
      <div className="mb-4 pb-2 border-b border-gray-200">
        <Link href="/newly-diagnosed/managing-lms" className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Managing LMS
        </Link>
      </div>
      
      {sections.map((section) => {
        const Icon = section.icon
        const isActive = activeSection === section.id
        
        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive 
                ? "bg-purple-100 text-purple-900" 
                : "text-gray-600 hover:text-purple-900 hover:bg-purple-50"
            }`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
              setActiveSection(section.id)
            }}
          >
            <Icon className={`mr-3 h-5 w-5 ${isActive ? section.color : "text-gray-400"}`} />
            <span>{section.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
