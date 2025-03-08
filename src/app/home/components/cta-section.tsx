import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-indigo-500 opacity-20"></div>
        <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-blue-400 opacity-20"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your support helps us continue our mission of education, advocacy, and research 
          for the LMS community. Together, we can make a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-involved/donate"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition-colors hover:bg-blue-50 shadow-lg"
          >
            Make a Donation
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 border-2 border-white/80 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600 shadow-lg"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
