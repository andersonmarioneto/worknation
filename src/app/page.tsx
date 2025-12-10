import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Features } from "@/components/sections/Features"
import { AboutSummary } from "@/components/sections/AboutSummary"
import { Testimonials } from "@/components/sections/Testimonials"
import { CtaSection } from "@/components/sections/CtaSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Features />
      <AboutSummary />
      <Testimonials />
      <CtaSection />
    </main>
  )
}
