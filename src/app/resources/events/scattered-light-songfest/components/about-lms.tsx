"use client";

import { AlertCircle, Microscope } from "lucide-react";
import Link from "next/link";

export function AboutLMS() {
  return (
    <div id="about-lms" className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
        About Leiomyosarcoma
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700">
              Leiomyosarcoma (LMS) is a very rare cancer. When it metastasizes and spreads around the body, 
              it is often aggressive and incurable. Because of its rarity, funding and resources are the most 
              significant barrier to finding a cure.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Microscope className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700">
              We're fundraising to help change that. Funds donated will be used to support researchers on the 
              cutting edge of LMS to better treat this rare cancer.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">About the National Leiomyosarcoma Foundation</h3>
          <p className="text-gray-700">
            The National Leiomyosarcoma Foundation is the first organization to have ever supported patients and 
            research in the United States - since 1997. Incorporated as a 501(c)(3) in 2001, it is now a global 
            entity with 140+ researchers in support of the LMS Research Initiatives.
          </p>
          <p className="text-gray-700 mt-2">
            It has received a 97% level Charity Navigator recognition reflecting its integrity in stewardship of 
            donations received on behalf of Leiomyosarcoma Research.
          </p>
          <div className="mt-4">
            <Link 
              href="/newly-diagnosed/what-is-lms" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              Learn more about LMS
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
