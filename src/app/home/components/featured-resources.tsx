import { ArrowRight, BookOpen, Calendar, Users, FileText, Car, Shield } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: BookOpen,
    title: "Educational Materials",
    description: "Access comprehensive guides and resources about LMS diagnosis and treatment options.",
    href: "/newly-diagnosed/what-is-lms",
    color: "bg-blue-500"
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Connect with others in the LMS community through in-person and virtual support groups.",
    href: "/support/groups",
    color: "bg-amber-500"
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Learn about your insurance rights and coverage options as a cancer patient.",
    href: "/resources/insurance-coverage",
    color: "bg-indigo-500"
  },
  {
    icon: Car,
    title: "Transportation & Lodging",
    description: "Find resources for transportation assistance and lodging during cancer treatment.",
    href: "/resources/transportation-lodging",
    color: "bg-green-500"
  },
  {
    icon: Calendar,
    title: "Upcoming Events",
    description: "Stay informed about conferences, webinars, and community gatherings.",
    href: "/events",
    color: "bg-teal-500"
  },
  {
    icon: FileText,
    title: "Latest Research",
    description: "Explore the newest findings and clinical trials in LMS research.",
    href: "/resources/research",
    color: "bg-rose-500"
  }
];

export function FeaturedResources() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of resources designed to support and inform the LMS community
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className={`h-2 ${resource.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${resource.color} text-white mb-4`}>
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {resource.description}
                </p>
                <Link 
                  href={resource.href}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
