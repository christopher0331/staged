import { Hero } from "./components/hero";
import { ResourceCard as ResourceCardComponent } from "./components/resource-card";
import { VideoSection } from "./components/video-section";
import { PartnersSection } from "./components/partners-section";
import { homeData } from "./data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-100">
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl space-y-12">
        <Hero />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeData.cards.map((card) => (
            <ResourceCardComponent
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        
        <VideoSection />
      </div>
      
      <PartnersSection />
    </div>
  );
}
