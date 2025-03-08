import { Metadata } from "next";
import { Hero } from "./components/hero";
import { SpecialistsSection } from "./components/specialists-section";
import { ResourcesSection } from "./components/resources-section";
import { PreparationSteps } from "./components/preparation-steps";

export const metadata: Metadata = {
  title: "Next Steps After Diagnosis | NLMSF",
  description: "Learn about finding specialists, preparing for treatment, and accessing resources after an LMS diagnosis.",
};

export default function NextStepsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        <Hero />
        
        <div className="space-y-12">
          <SpecialistsSection />
          <PreparationSteps />
          <ResourcesSection />
        </div>
      </div>
    </div>
  );
}
