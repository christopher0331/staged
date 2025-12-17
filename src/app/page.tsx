import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Home",
}

import { StatsSection } from "./home/components/stats-section";
import { PartnersSection } from "./home/components/partners-section";
import { CTASection } from "./home/components/cta-section";
import { TestimonialsSection } from "./home/components/testimonials-section";
import { MissionSection } from "./home/components/mission-section";
import { FeaturedResources } from "./home/components/featured-resources";
import { ImpactStories } from "./home/components/impact-stories";
import { UpcomingEvents } from "./home/components/upcoming-events";
import { ClinicalTrials } from "./home/components/clinical-trials";
import { SupportHotline } from "./home/components/support-hotline";
import { homeData } from "./home/data";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <Image
          src="/hero-image-nlmsf.jpg"
          alt="NLMSF Hero Image"
          fill
          className="object-cover object-[center_0%] z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-indigo-800/60 to-purple-800/50"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium">Supporting the LMS Community Since 2008</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              National LeioMyoSarcoma Foundation
            </h1>
            <p className="mt-6 text-xl text-white/90 md:text-2xl">
              Providing education, advocacy, support, and research for the LMS
              Community as we move forward in the quest for the cure.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/support"
                className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 shadow-lg"
              >
                Get Support
              </a>
              <a
                href="/get-involved/donate"
                className="rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20 shadow-lg"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-white py-12 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinical Trials */}
            <ClinicalTrials />

            {/* Support Hotline */}
            <SupportHotline />

            {/* Upcoming Events */}
            <UpcomingEvents />
          </div>
        </div>
      </section>

      {/* Featured Resources - Replaced with new component */}
      <FeaturedResources />

      {/* Mission Section - New */}
      <MissionSection />
      
      {/* Impact Stories - New */}
      <ImpactStories />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Stats Section */}
      <StatsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
