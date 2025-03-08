import Image from "next/image";
import Link from "next/link";

export function MissionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              The National LeioMyoSarcoma Foundation is dedicated to supporting patients 
              and families affected by LMS through education, advocacy, and research initiatives.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500 mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Providing accurate, up-to-date information about LMS diagnosis, treatment options, and care.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Support</h3>
                  <p className="text-gray-600">Connecting patients and caregivers with resources, support groups, and community.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-500 mt-1"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Research</h3>
                  <p className="text-gray-600">Advancing scientific understanding and treatment options through research initiatives.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mission.jpg"
                alt="NLMSF Mission"
                width={600}
                height={450}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-amber-400 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-teal-400 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
