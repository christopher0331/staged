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
import { homeData } from "./home/data";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated with less purple dominance */}
      <section className="relative py-20 text-white">
        <Image
          src="/images/unity.png"
          alt="Unity background"
          fill
          className="object-cover object-[center_0%]"
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
            {/* For Patients */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-nlmsf-purple">For Patients & Caregivers</h2>
              <div className="space-y-4">
                <a href="/newly-diagnosed/what-is-lms" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="font-semibold text-nlmsf-purple">Understanding LMS</h3>
                  <p className="text-sm text-gray-600 mt-1">Learn about diagnosis, treatment, and care options</p>
                </a>
                <a href="/support" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="font-semibold text-nlmsf-purple">Support Services</h3>
                  <p className="text-sm text-gray-600 mt-1">Connect with our community and get help</p>
                </a>
                <a href="/newly-diagnosed/find-specialist" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="font-semibold text-nlmsf-purple">Find a Specialist</h3>
                  <p className="text-sm text-gray-600 mt-1">Locate LMS experts near you</p>
                </a>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-nlmsf-purple">24/7 Support Hotline</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-nlmsf-purple to-nlmsf-purple-dark rounded-lg text-white">
                  <h3 className="font-semibold">Primary Contact</h3>
                  <a href="tel:+13038083437" className="text-2xl font-bold block mt-2 hover:text-white/90">
                    (303) 808-3437
                  </a>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-nlmsf-purple">Alternative Contact</h3>
                  <a href="tel:+13037830924" className="text-2xl font-bold block mt-2 text-nlmsf-purple hover:text-nlmsf-purple-dark">
                    (303) 783-0924
                  </a>
                </div>
              </div>
            </div>

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
