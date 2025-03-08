import React from 'react';
import { FileText } from 'lucide-react';

export function SurvivorshipPlanning() {
  return (
    <section className="mb-12">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">SURVIVORSHIP CARE PLANNING</h2>
        <p className="mb-4">
          A One-on-One Discussion with the Foundation to initiate a customized plan for the patient with the caregiver – a Team Effort and offered as another information session by the NLMSF for general discussion and then one-on-one follow up if requested by the patient.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Sharing this plan with your healthcare team:</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Oncology Care Team</li>
          <li>Regular doctors outside of the oncology setting, such as:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Endocrinologist if you have diabetes</li>
              <li>Cardiologist</li>
              <li>Other specialists involved in your care</li>
            </ul>
          </li>
        </ul>
        
        <div className="mt-6">
          <a 
            href="https://www.cancer.net/sites/cancer.net/files/asco_answers_guide_caregiving.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
          >
            <FileText className="mr-2 h-5 w-5" />
            Download Survivorship Care Planning Guide
          </a>
        </div>
      </div>
    </section>
  );
}
