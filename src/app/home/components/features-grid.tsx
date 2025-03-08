import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeData } from "../data";

export function FeaturesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How We Can Help
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeData.features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group p-6 rounded-lg bg-white border shadow-sm hover:shadow-md hover:border-nlmsf-purple transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-nlmsf-purple mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <div className="flex items-center text-nlmsf-purple font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
