"use client"

import Hero from "@/components/sections/Hero"
import ServicesGrid from "@/components/sections/ServicesGrid"
import StatsCounter from "@/components/sections/StatsCounter"
import TestimonialCarousel from "@/components/sections/TestimonialCarousel"
import CTABanner from "@/components/sections/CTABanner"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", icon: "Award" },
  { value: 250, suffix: "+", label: "Projects Completed", icon: "Building2" },
  { value: 200, suffix: "+", label: "Happy Clients", icon: "CheckCircle" },
  { value: 12, suffix: "", label: "Team Members", icon: "Users" },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid services={services} limit={6} />
      <StatsCounter stats={stats} />
      <TestimonialCarousel testimonials={testimonials} />
      <CTABanner title="Ready to Start Your Project?" subtitle="Get in touch for a free, no-obligation quote." buttonText="Get a Free Quote" buttonLink="/contact" />
    </>
  )
}
