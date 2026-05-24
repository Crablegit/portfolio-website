"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AwardsSection } from "@/components/awards-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <ActivitiesSection />
      <ContactSection />
    </main>
  )
}
