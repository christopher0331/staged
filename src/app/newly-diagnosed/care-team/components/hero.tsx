import { Users, Heart, Activity } from "lucide-react";

export function Hero() {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md">
        <Users className="h-4 w-4" />
        <span>Newly Diagnosed</span>
      </div>
      
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Your Sarcoma Clinical Care Team
      </h1>
      
      <div className="flex justify-center mb-8">
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
      </div>
      
      <p className="mx-auto max-w-2xl text-xl text-gray-700">
        Understanding the roles of each member of your healthcare team and how they work together to provide your care
      </p>
    </div>
  );
}
