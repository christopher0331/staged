import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface PartnershipCardProps {
  partnership: {
    name: string;
    website: string;
    description: string;
    program?: {
      name: string;
      description: string;
      clinicalTrialLink?: string;
      features: string[];
      resources: { title: string; url: string; }[];
    };
    resources?: { title: string; url: string; }[];
    features?: string[];
    faq?: { question: string; answer: string; }[];
  };
}

export function PartnershipCard({ partnership }: PartnershipCardProps) {
  // Determine which gradient to use based on the partnership name
  const getGradient = (name: string) => {
    if (name.includes('Target')) {
      return 'from-indigo-50 to-indigo-100 border-indigo-200';
    } else {
      return 'from-violet-50 to-violet-100 border-violet-200';
    }
  };
  
  const cardGradient = getGradient(partnership.name);
  
  return (
    <div className={`bg-gradient-to-r ${cardGradient} rounded-xl p-6 shadow-md border`}>
      <div className="flex items-center mb-6">
        <div className="bg-indigo-500 p-2 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-indigo-800">{partnership.name}</h3>
      </div>
      
      <div className="space-y-6">
        <p className="text-gray-700 bg-white/80 p-4 rounded-lg shadow-sm">{partnership.description}</p>

        {/* Program Information */}
        {partnership.program && (
          <div className="space-y-4 bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {partnership.program.name}
            </h3>
            <p className="text-gray-700">{partnership.program.description}</p>
            
            {partnership.program.features && (
              <div className="space-y-2 bg-white/70 p-3 rounded-lg">
                {partnership.program.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Features */}
        {partnership.features && (
          <div className="space-y-4 bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border border-teal-200 shadow-sm">
            <h3 className="text-lg font-semibold text-teal-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Key Features
            </h3>
            <div className="space-y-2 bg-white/70 p-3 rounded-lg">
              {partnership.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        {(partnership.resources || partnership.program?.resources) && (
          <div className="space-y-4 bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {(partnership.resources || partnership.program?.resources)?.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg border bg-white/80 hover:bg-purple-100/80 transition-colors group shadow-sm"
                >
                  <span className="flex-1 text-sm text-gray-700 group-hover:text-purple-800">
                    {resource.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {partnership.faq && (
          <div className="space-y-4 bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg border border-amber-200 shadow-sm">
            <h3 className="text-lg font-semibold text-amber-800 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 bg-white/70 p-3 rounded-lg">
              {partnership.faq.map((item, index) => (
                <div key={index} className="space-y-2 p-3 border border-amber-100 rounded-lg hover:shadow-sm transition-all">
                  <h4 className="font-medium text-amber-900">{item.question}</h4>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
