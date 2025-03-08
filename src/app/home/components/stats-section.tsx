import { homeData } from "../data";

export function StatsSection() {
  // Array of gradient colors for each stat card
  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-amber-500 to-orange-400",
    "from-emerald-500 to-teal-400",
    "from-rose-500 to-pink-400"
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference in the lives of those affected by LMS
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeData.stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300`}
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <p className="text-white/90 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
