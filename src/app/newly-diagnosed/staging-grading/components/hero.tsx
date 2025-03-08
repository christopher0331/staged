import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative py-12 mb-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl -z-10"></div>
      
      <div className="text-center space-y-6 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 text-sm font-medium border border-indigo-200 shadow-sm">
          Patient Education
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
          Staging vs Grading of Cancer Tumors
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          Understanding the critical differences between staging and grading of cancer tumors
          and their importance in your treatment journey.
        </p>
        
        <div className="pt-4">
          <Link 
            href="#differences" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            Learn the Key Differences
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
