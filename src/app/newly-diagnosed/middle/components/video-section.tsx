import { middlePageData } from "../data";

export function VideoSection() {
  return (
    <div className="mt-12 bg-white/80 rounded-xl shadow-md p-6 border border-indigo-100">
      <h2 className="text-2xl font-bold mb-4 text-indigo-800">Introduction to Leiomyosarcoma</h2>
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${middlePageData.videoId}`}
          title="Newly Diagnosed LMS Information"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Denver-specific CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Denver Resources
        </h3>
        <p className="mt-2 text-gray-700">Denver residents have access to specialized sarcoma centers and support groups. Connect with local resources to enhance your care journey.</p>
        <a href="/denver-resources" className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
          Find Denver Resources
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
