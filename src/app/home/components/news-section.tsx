import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { homeData } from "../data";

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Latest Updates
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeData.news.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarDays className="mr-2 h-4 w-4" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-nlmsf-purple mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
