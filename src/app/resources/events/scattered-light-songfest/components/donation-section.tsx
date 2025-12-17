"use client";

import { DollarSign, Heart, Mail } from "lucide-react";
import Link from "next/link";

export function DonationSection() {
  return (
    <div id="donation" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-teal-800 mb-6 bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200">
        Support LMS Research
      </h2>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          This evening honors so many: The Researchers are the Heroes Among Us and the Patients and their families 
          and friends are the Champions of Hope for the acceleration of research and treatment options for the 
          immediate and long term future of SURVIVORSHIP of this disease.
        </p>
        
        <p className="text-gray-700">
          Your donation honors Jon, the research clinicians / physician scientists helping Jon as well as the 
          global Leiomyosarcoma Community through the International Leiomyosarcoma Research Roundtable of the 
          National Leiomyosarcoma Foundation.
        </p>
        
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-100">
          <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            Ways to Donate
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <DollarSign className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Online Donation</h4>
                <div className="mt-1 space-y-2">
                  <p className="text-gray-700">Website: <Link href="https://nlmsf.org/form/DONATE" className="text-teal-600 hover:text-teal-800">https://nlmsf.org/form/DONATE</Link></p>
                  <p className="text-gray-700">Social Media: <Link href="https://nlmsf.org/form/FUNFYYQXWCA" className="text-teal-600 hover:text-teal-800">https://nlmsf.org/form/FUNFYYQXWCA</Link></p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Mail a Check</h4>
                <p className="text-gray-700">
                  Checks may be sent to:<br />
                  NLMSF<br />
                  1685 So. Colorado Blvd, Unit S, Suite 447<br />
                  Denver, CO 80222
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4">HONOR and CELEBRATE JON THIS EVENING!</h3>
          <Link 
            href="https://nlmsf.org/form/DONATE" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
