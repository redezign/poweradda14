import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutPage from '@/components/sections/AboutPage'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: 'About Us – PowerAdda | Mumbai Energy & Mobility Company',
  description: "Learn about PowerAdda — Mumbai's premium clean energy and mobility solutions company. Our story, mission, vision, and operations across Mumbai.",
  openGraph: {
    title: 'About Us – PowerAdda',
    description: "Mumbai's clean energy & mobility solutions company. Doorstep battery service, solar, wind & clean energy.",
    url: 'https://poweradda.com/about',
  },
}

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
