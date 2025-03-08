import Image from "next/image";
import { homeData } from "../data";

export function PartnersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Working together with leading organizations to advance LMS research and patient care
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-center justify-items-center">
            {homeData.partners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-4 transition-all"
              >
                <div className="relative w-48 h-24 overflow-hidden rounded-lg p-4 bg-gray-50 flex items-center justify-center mb-2 transition-all group-hover:bg-blue-50">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="text-sm text-gray-500 text-center group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/partners" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all our partners and collaborators
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
