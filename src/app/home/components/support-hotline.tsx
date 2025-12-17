import React from 'react';

export const SupportHotline: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nlmsf-purple">24/7 Support Hotline</h2>
      
      <div className="space-y-4">
        {/* Primary Contact */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-nlmsf-purple to-nlmsf-purple-dark p-6 text-white shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 className="font-semibold text-lg">Primary Contact</h3>
            </div>
            <a 
              href="tel:+13038083437" 
              className="block text-3xl font-bold hover:text-white/90 transition-colors mb-2"
            >
              (303) 808-3437
            </a>
            <p className="text-white/80 text-sm">Available 24 hours a day, 7 days a week</p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        {/* Alternative Contact */}
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-nlmsf-purple" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <h3 className="font-semibold text-nlmsf-purple">Alternative Contact</h3>
          </div>
          <a 
            href="tel:+13037830924" 
            className="text-2xl font-bold text-nlmsf-purple hover:text-nlmsf-purple-dark transition-colors block mb-1"
          >
            (303) 783-0924
          </a>
          <p className="text-gray-600 text-sm">Backup support line</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <a 
            href="/support" 
            className="flex items-center justify-center p-3 bg-white border-2 border-nlmsf-purple text-nlmsf-purple rounded-lg hover:bg-nlmsf-purple hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Get Support
          </a>
          <a 
            href="/newly-diagnosed/find-specialist" 
            className="flex items-center justify-center p-3 bg-white border-2 border-nlmsf-purple text-nlmsf-purple rounded-lg hover:bg-nlmsf-purple hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            Find Doctor
          </a>
        </div>

        {/* Emergency Notice */}
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-red-900 mb-1">Medical Emergency?</h4>
              <p className="text-xs text-red-800">For immediate medical emergencies, call 911 or go to your nearest emergency room.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
