import { Metadata } from "next";
import { Hero } from "./components/hero";
import { SarcCenters } from "./components/sarc-centers";
import { TelemedicineCenters } from "./components/telemedicine-centers";
import { SecondOpinions } from "./components/second-opinions";

export const metadata: Metadata = {
  title: "Find a Sarcoma Specialist | NLMSF",
  description: "Locate sarcoma specialists and centers of excellence across the United States, including telemedicine options and second opinion resources.",
};

export default function FindSpecialistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        <Hero />
        
        <div className="space-y-12">
          <SarcCenters />
          <TelemedicineCenters />
          <SecondOpinions />
        </div>
      </div>
    </div>
  );
}
