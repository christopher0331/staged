import React from 'react';

interface ClinicalTrial {
  id: string;
  title: string;
  location: string;
  phase: string;
  status: string;
  sponsor: string;
  briefDescription: string;
}

export const ClinicalTrials: React.FC = () => {
  // Mock data - will be replaced with API call
  const trials: ClinicalTrial[] = [
    {
      id: "NCT05123456",
      title: "Phase II Study of Trabectedin in Advanced Leiomyosarcoma",
      location: "MD Anderson Cancer Center, Houston, TX",
      phase: "Phase II",
      status: "Recruiting",
      sponsor: "MD Anderson Cancer Center",
      briefDescription: "Testing effectiveness of trabectedin in patients with advanced leiomyosarcoma"
    },
    {
      id: "NCT05234567",
      title: "Immunotherapy Combination for Soft Tissue Sarcomas",
      location: "Memorial Sloan Kettering, New York, NY",
      phase: "Phase I/II",
      status: "Recruiting",
      sponsor: "Memorial Sloan Kettering Cancer Center",
      briefDescription: "Evaluating combination immunotherapy approach for LMS patients"
    },
    {
      id: "NCT05345678",
      title: "Targeted Therapy for LMS with Specific Mutations",
      location: "Dana-Farber Cancer Institute, Boston, MA",
      phase: "Phase II",
      status: "Recruiting",
      sponsor: "Dana-Farber Cancer Institute",
      briefDescription: "Precision medicine approach for LMS patients with specific genetic markers"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-nlmsf-purple">Clinical Trials</h2>
        <a 
          href="/newly-diagnosed/clinical-trials" 
          className="text-sm text-nlmsf-purple hover:text-nlmsf-purple-dark font-medium"
        >
          View All →
        </a>
      </div>
      
      <div className="space-y-4">
        {trials.map((trial) => (
          <div key={trial.id} className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-100">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                {trial.status}
              </span>
              <span className="text-xs text-gray-500 font-mono">{trial.id}</span>
            </div>
            
            <h3 className="font-semibold text-nlmsf-purple mb-2 text-sm leading-tight">
              {trial.title}
            </h3>
            
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="truncate">{trial.location}</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{trial.phase}</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 mt-2 line-clamp-2">
              {trial.briefDescription}
            </p>
            
            <div className="mt-3 pt-2 border-t border-purple-200">
              <button className="text-xs text-nlmsf-purple hover:text-nlmsf-purple-dark font-medium">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-blue-900 mb-1">Need Help Finding Trials?</h4>
            <p className="text-xs text-blue-800 mb-2">Our team can help you identify clinical trials that may be right for you.</p>
            <a href="/support" className="text-xs text-blue-600 hover:text-blue-800 font-medium">
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
