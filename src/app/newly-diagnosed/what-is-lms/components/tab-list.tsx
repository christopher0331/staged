'use client';

import { Microscope, Syringe, BookOpen } from "lucide-react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function CustomTabList() {
  const [activeTab, setActiveTab] = useState('diagnosis')

  return (
    <div className="relative">
      <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 rounded-t-xl overflow-hidden shadow-md relative">
        <TabsTrigger 
          value="diagnosis" 
          onClick={() => setActiveTab('diagnosis')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          {activeTab !== "diagnosis" && (
            <span className="absolute -top-6 text-sm bg-blue-600 text-white font-medium px-3 py-1 rounded-full shadow-md animate-pulse">
              Click here
            </span>
          )}
          <div className="flex items-center gap-2">
            <Microscope className={`h-5 w-5 ${activeTab === 'diagnosis' ? 'text-blue-600' : 'text-gray-600'}`} /> 
            <span className="font-medium">Diagnosis</span>
          </div>
        </TabsTrigger>
        
        <TabsTrigger 
          value="treatment" 
          onClick={() => setActiveTab('treatment')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          {activeTab !== "treatment" && (
            <span className="absolute -top-6 text-sm bg-indigo-600 text-white font-medium px-3 py-1 rounded-full shadow-md animate-pulse">
              Click here
            </span>
          )}
          <div className="flex items-center gap-2">
            <Syringe className={`h-5 w-5 ${activeTab === 'treatment' ? 'text-indigo-600' : 'text-gray-600'}`} /> 
            <span className="font-medium">Treatment</span>
          </div>
        </TabsTrigger>
        
        <TabsTrigger 
          value="resources" 
          onClick={() => setActiveTab('resources')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          {activeTab !== "resources" && (
            <span className="absolute -top-6 text-sm bg-teal-600 text-white font-medium px-3 py-1 rounded-full shadow-md animate-pulse">
              Click here
            </span>
          )}
          <div className="flex items-center gap-2">
            <BookOpen className={`h-5 w-5 ${activeTab === 'resources' ? 'text-teal-600' : 'text-gray-600'}`} /> 
            <span className="font-medium">Resources</span>
          </div>
        </TabsTrigger>
      </TabsList>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 -bottom-4 -left-4 w-8 h-8 bg-blue-200 rounded-full blur-md"></div>
      <div className="absolute -z-10 -bottom-4 -right-4 w-8 h-8 bg-indigo-200 rounded-full blur-md"></div>
    </div>
  )
}
