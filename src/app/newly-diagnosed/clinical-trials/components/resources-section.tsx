import Link from "next/link"
import { ExternalLink, Search, Users, BookOpen, Video } from "lucide-react"

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

function ResourceCard({ title, description, url, icon }: ResourceCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white rounded-lg border border-emerald-200 p-5 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start gap-4">
        <div className="bg-emerald-100 p-2 rounded-full">
          {icon}
        </div>
        
        <div>
          <h4 className="font-medium text-emerald-800 mb-1 flex items-center">
            {title}
            <ExternalLink className="h-3.5 w-3.5 ml-1 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h4>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  )
}

export function ResourcesSection() {
  return (
    <div className="space-y-6">
      <div id="finding-trials" className="space-y-4">
        <h3 className="text-xl font-semibold text-emerald-700">Finding Clinical Trials</h3>
        
        <p className="text-gray-700">
          There are several resources available to help you find clinical trials that may be appropriate 
          for your specific situation. These tools allow you to search for trials based on cancer type, 
          location, treatment history, and other factors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <ResourceCard 
            title="ClinicalTrials.gov"
            description="The official U.S. database of clinical trials. Search for trials by condition, location, and eligibility criteria."
            url="https://clinicaltrials.gov/find-studies/how-to-search"
            icon={<Search className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="NIH Clinical Research Trials and You"
            description="Resources from the National Institutes of Health to help you understand and find clinical trials."
            url="https://www.nih.gov/health-information/nih-clinical-research-trials-you/finding-clinical-trial"
            icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="NCI Clinical Trials Finder"
            description="The National Cancer Institute's tool for finding NCI-supported clinical trials."
            url="https://www.cancer.gov/about-cancer/treatment/clinical-trials/search"
            icon={<Search className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="Cancer Centers Clinical Trials"
            description="Major cancer centers often have their own clinical trial search tools on their websites."
            url="https://healthcare.utah.edu/huntsmancancerinstitute/clinical-trials/"
            icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
          />
        </div>
        
        <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200 mt-6">
          <h4 className="font-medium text-emerald-800 mb-3">Tips for Searching Clinical Trials</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <div className="bg-emerald-100 rounded-full h-5 w-5 flex items-center justify-center text-emerald-700 font-medium mr-2 mt-0.5 flex-shrink-0 text-xs">1</div>
              <p>Be specific about your cancer type (e.g., "leiomyosarcoma" rather than just "sarcoma" or "cancer")</p>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-100 rounded-full h-5 w-5 flex items-center justify-center text-emerald-700 font-medium mr-2 mt-0.5 flex-shrink-0 text-xs">2</div>
              <p>Include your location or specify how far you're willing to travel</p>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-100 rounded-full h-5 w-5 flex items-center justify-center text-emerald-700 font-medium mr-2 mt-0.5 flex-shrink-0 text-xs">3</div>
              <p>Consider including your treatment history or current stage if relevant</p>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-100 rounded-full h-5 w-5 flex items-center justify-center text-emerald-700 font-medium mr-2 mt-0.5 flex-shrink-0 text-xs">4</div>
              <p>Use filters for trial status to find trials that are currently recruiting patients</p>
            </li>
            <li className="flex items-start">
              <div className="bg-emerald-100 rounded-full h-5 w-5 flex items-center justify-center text-emerald-700 font-medium mr-2 mt-0.5 flex-shrink-0 text-xs">5</div>
              <p>Save or bookmark promising trials to discuss with your healthcare team</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="expert-panels" className="space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-emerald-700">Expert Panels & Educational Resources</h3>
        
        <p className="text-gray-700">
          Learn more about clinical trials from experts in the field through panel discussions, 
          webinars, and educational resources specifically focused on sarcoma clinical trials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <ResourceCard 
            title="Clinical Trials Perspectives: Panel Discussion by Sarcoma Medical Oncologists"
            description="Watch sarcoma specialists discuss clinical trials, their importance, and what patients should know."
            url="#"
            icon={<Users className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="Easy Steps to Finding a Clinical Trial"
            description="A step-by-step guide to help patients navigate the process of finding and enrolling in clinical trials."
            url="#"
            icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="Understanding Clinical Trial Protocols"
            description="Learn how to read and understand clinical trial protocols and eligibility criteria."
            url="#"
            icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
          />
          
          <ResourceCard 
            title="Patient Experiences with Clinical Trials"
            description="Watch videos of patients sharing their experiences participating in clinical trials for sarcoma."
            url="#"
            icon={<Video className="h-5 w-5 text-emerald-600" />}
          />
        </div>
        
        <div className="bg-white rounded-lg border border-emerald-200 p-5 shadow-sm mt-6">
          <h4 className="font-medium text-emerald-800 mb-3">LMS Foundation Support</h4>
          <p className="text-gray-700">
            The Leiomyosarcoma Foundation can help connect you with resources, support groups, and 
            information about clinical trials specific to LMS. Our patient navigators can help you 
            understand your options and find appropriate clinical trials.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              Contact Us for Support
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
