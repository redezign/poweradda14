import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ServicesTicker from '@/components/sections/ServicesTicker'
import Services from '@/components/sections/Services'
import WhyChoose from '@/components/sections/WhyChoose'
import HowItWorks from '@/components/sections/HowItWorks'
import About from '@/components/sections/About'
import LeadForm from '@/components/sections/LeadForm'
import VendorSection from '@/components/sections/VendorSection'
import Insights from '@/components/sections/Insights'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import FloatingCTA from '@/components/ui/FloatingCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesTicker />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <About />
        <LeadForm />
        <VendorSection />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
