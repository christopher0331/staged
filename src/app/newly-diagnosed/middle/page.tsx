import { Hero } from "./components/hero";
import { ResourceCard as ResourceCardComponent } from "./components/resource-card";
import { VideoSection } from "./components/video-section";
import { middlePageData } from "./data";

export default function NewlyDiagnosedMiddlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        <Hero />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {middlePageData.cards.map((card) => (
            <ResourceCardComponent
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        
        <VideoSection />
        
        {/* Denver-specific CTA Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Denver LMS Resources</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Local Treatment Centers</h3>
              <p className="text-gray-700 mb-4">
                Denver residents have access to specialized sarcoma treatment centers with expertise in LMS care.
              </p>
              <a 
                href="/denver-resources/treatment-centers" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Find Treatment Centers
              </a>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Support Groups</h3>
              <p className="text-gray-700 mb-4">
                Connect with other LMS patients and caregivers in the Denver area through local support groups.
              </p>
              <a 
                href="/denver-resources/support-groups" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Join Support Groups
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
