import { Metadata } from "next";
import { Hero } from "./components/hero";
import { LocalTransportation } from "./components/local-transportation";
import { DistantTransportation } from "./components/distant-transportation";
import { LodgingOptions } from "./components/lodging-options";
import { SidebarNav } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "Transportation & Lodging Resources | National Leiomyosarcoma Foundation",
  description: "Access transportation and lodging resources for cancer patients and caregivers, including local and distant travel assistance and temporary housing options.",
};

export default function TransportationLodgingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 order-2 lg:order-1 h-fit sticky top-24">
          <SidebarNav />
        </div>
        
        <div className="lg:col-span-3 order-1 lg:order-2">
          <LocalTransportation />
          <DistantTransportation />
          <LodgingOptions />
        </div>
      </div>
    </div>
  );
}
