import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function SpecialistsSection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Finding a Sarcoma Specialist</h3>
            <p className="text-blue-600">Connecting with the right medical expertise</p>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Once diagnosed, finding a Sarcoma Specialist is crucial. Your primary care physician or diagnosing oncologist 
          can recommend one, preferably experienced with Leiomyosarcoma cases. If they have no suggestions, refer to 
          our list of Sarcoma Centers, all of which have LMS experience.
        </p>
        
        <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-indigo-600" />
            Sarcoma Centers of Excellence
          </h4>
          <p className="text-gray-700">
            Finding the right treatment center and a specialist you are comfortable with is imperative. 
            The Sarcoma Alliance Through Research Collaboration (SARC) provides a map of Sarcoma Centers 
            of Excellence throughout the U.S.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center mt-4 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors font-medium"
          >
            View SARC Centers Map
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
