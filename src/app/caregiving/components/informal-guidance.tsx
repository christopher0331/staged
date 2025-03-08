import React from 'react';
import { FileText } from 'lucide-react';

export function InformalGuidance() {
  return (
    <section className="mb-12">
      <div className="bg-purple-50 border-l-4 border-nlmsf-purple p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-nlmsf-purple mb-4">Informal Guidance Highlights</h2>
        <p className="mb-4">
          We provide PowerPoints to share with attendees (in place of taking notes during sessions). 
          More resources are available after sessions to help guide and support your caregiving journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a 
            href="#" 
            className="inline-flex items-center text-nlmsf-purple hover:text-purple-700 font-medium"
          >
            <FileText className="mr-2 h-5 w-5" />
            Download PowerPoint Slides
          </a>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Group Discussion</h2>
        <p className="mb-4">
          Share concerns, experiences, and perspectives for mutual support with others who are:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Just starting out in caregiving</li>
          <li>Currently in caregiving mode</li>
          <li>No longer caregiving</li>
        </ul>
        <p className="text-sm italic mt-4">
          Join our quarterly virtual caregiving guidance sessions to connect with other caregivers.
        </p>
      </div>
    </section>
  );
}
