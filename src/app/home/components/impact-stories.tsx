import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Research Breakthrough",
    description: "How NLMSF-funded research led to new treatment options for LMS patients",
    image: "/images/impact/research.jpg",
    href: "/impact/research-breakthrough"
  },
  {
    title: "Patient Journey",
    description: "Sarah's story of hope and resilience through her LMS diagnosis and treatment",
    image: "/images/impact/patient.jpg",
    href: "/impact/patient-journey"
  },
  {
    title: "Community Support",
    description: "How our support groups are making a difference in patients' lives",
    image: "/images/impact/community.jpg",
    href: "/impact/community-support"
  }
];

export function ImpactStories() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Impact Stories</h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Real stories of hope, resilience, and progress in the fight against LMS
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all hover:bg-white/20">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                  {story.title}
                </h3>
                <p className="mt-3 text-blue-100">
                  {story.description}
                </p>
                <Link 
                  href={story.href}
                  className="mt-4 inline-flex items-center text-blue-300 hover:text-blue-200"
                >
                  Read the full story
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/impact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Impact Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
