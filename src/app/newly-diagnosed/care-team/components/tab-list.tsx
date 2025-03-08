'use client';

import { Users, ClipboardList, BookOpen } from "lucide-react"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function CustomTabList() {
  const [activeTab, setActiveTab] = useState('team')

  return (
    <div className="relative">
      <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 rounded-t-xl overflow-hidden shadow-md relative">
        <TabsTrigger 
          value="team" 
          onClick={() => setActiveTab('team')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          {activeTab !== "team" && (
            <span className="absolute -top-6 text-sm bg-blue-600 text-white font-medium px-3 py-1 rounded-full shadow-md animate-pulse">
              Click here
            </span>
          )}
          <Users className="h-5 w-5" />
          <span className="font-medium">Care Team Members</span>
        </TabsTrigger>

        <TabsTrigger 
          value="roles" 
          onClick={() => setActiveTab('roles')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          <ClipboardList className="h-5 w-5" />
          <span className="font-medium">Team Roles</span>
        </TabsTrigger>

        <TabsTrigger 
          value="resources" 
          onClick={() => setActiveTab('resources')}
          className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
        >
          <BookOpen className="h-5 w-5" />
          <span className="font-medium">Resources</span>
        </TabsTrigger>
      </TabsList>
    </div>
  )
}
