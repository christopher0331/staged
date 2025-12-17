import { homeData } from "../data";

export function Hero() {
  return (
    <div className="mb-12 text-center max-w-4xl mx-auto">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-indigo-200 text-indigo-800 text-sm font-medium hover:from-purple-200 hover:to-indigo-300 transition-all shadow-sm">
        National Leiomyosarcoma Foundation
      </div>
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
        {homeData.welcome.title}
      </h1>
      <p className="mx-auto max-w-2xl text-xl text-gray-600 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm">
        {homeData.welcome.description}
      </p>
    </div>
  );
}
