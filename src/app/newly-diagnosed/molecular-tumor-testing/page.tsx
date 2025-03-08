import { Hero } from "./components/hero";
import { PartnershipCard } from "./components/partnership-card";
import { biomarkerInfo } from "./data";

export default function MolecularTumorTesting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        <Hero />
        
        <div className="space-y-8">
          {biomarkerInfo.partnerships.map((partnership, index) => (
            <PartnershipCard key={index} partnership={partnership} />
          ))}
        </div>
      </div>
    </div>
  );
}
