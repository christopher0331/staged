import { Quote } from "lucide-react";
import { homeData } from "../data";

export function TestimonialsSection() {
  // Array of gradient backgrounds for testimonial cards
  const gradients = [
    "from-amber-100 to-orange-50 border-l-amber-400",
    "from-teal-100 to-emerald-50 border-l-teal-400",
    "from-blue-100 to-sky-50 border-l-blue-400",
    "from-rose-100 to-pink-50 border-l-rose-400",
    "from-indigo-100 to-violet-50 border-l-indigo-400",
    "from-green-100 to-lime-50 border-l-green-400"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Community Voices</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from patients, caregivers, and healthcare professionals in the LMS community
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-md bg-gradient-to-br ${gradients[index % gradients.length]} border-l-4 hover:shadow-lg transition-shadow`}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-400 opacity-30" />
              <blockquote className="relative">
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/testimonials" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more stories from our community
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
