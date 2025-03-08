import React from 'react';
import { Calendar } from 'lucide-react';

export function CallToAction() {
  return (
    <section>
      <div className="bg-nlmsf-purple text-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Next Caregiving Session</h2>
        <p className="mb-6">
          Connect with other caregivers, share experiences, and learn valuable strategies for your caregiving journey.
        </p>
        <div className="inline-flex items-center justify-center bg-white text-nlmsf-purple font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
          <Calendar className="mr-2 h-5 w-5" />
          <a href="/contact" className="inline-block">Register for Next Session</a>
        </div>
      </div>
    </section>
  );
}
