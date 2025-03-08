import { Metadata } from "next"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Hero } from "./components/hero"
import { CareTeamTab } from "./components/care-team-tab"
import { RolesTab } from "./components/roles-tab"
import { ResourcesTab } from "./components/resources-tab"
import { CustomTabList } from "./components/tab-list"

export const metadata: Metadata = {
  title: "Your Sarcoma Clinical Care Team",
  description: "Learn about the different members of your Sarcoma Clinical Care Team and their roles in your treatment journey.",
}

export default function CareTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        <Hero />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            There are many people who are part of your Sarcoma Clinic care team. Each member of your care team is important and they work together to give you the best care. It is important for you to talk with your care team about any questions or concerns you may have about your health.
          </p>
        </div>
        
        <Tabs defaultValue="team" className="w-full">
          <CustomTabList />

          <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
            <TabsContent value="team" className="p-6">
              <CareTeamTab />
            </TabsContent>

            <TabsContent value="roles" className="p-6">
              <RolesTab />
            </TabsContent>

            <TabsContent value="resources" className="p-6">
              <ResourcesTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
