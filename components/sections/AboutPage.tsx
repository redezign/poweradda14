'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Zap } from 'lucide-react'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
})

function Section({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero banner */}
      <div className="relative bg-gray-950 overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-gray-500 mb-6"
          >
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">About Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 mb-6"
          >
            <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Powering Mobility, Homes and{' '}
            <span className="text-blue-400">Future-Ready</span> Clean Energy Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl"
          >
            PowerAdda is a Mumbai-based clean energy and mobility solutions company dedicated to making reliable, sustainable, and future-ready energy solutions accessible to homes, businesses, and vehicle owners across India.
          </motion.p>
        </div>
      </div>

      {/* Intro paragraph */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Section>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Founded on the belief that clean energy should be convenient, affordable, and dependable, PowerAdda bridges the gap between traditional energy systems and the rapidly evolving world of renewable power and advanced battery technologies. From premium battery solutions and energy storage systems to solar, wind, and emerging clean energy infrastructure, we help individuals and organizations transition confidently toward a more sustainable future.
          </p>
        </Section>
      </div>

      {/* Mission + Vision */}
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            <MissionVisionCard
              label="Our Mission"
              icon="🎯"
              accent="blue"
              delay={0}
              text="To revolutionize energy access through convenient, transparent, and premium battery and renewable energy solutions — empowering mobility, energy independence, and sustainable living across India."
            />
            <MissionVisionCard
              label="Our Vision"
              icon="🔭"
              accent="indigo"
              delay={0.1}
              text="To become India's most trusted clean energy and mobility infrastructure platform, enabling seamless adoption of solar, wind, lithium-powered, and next-generation energy systems for homes, vehicles, and enterprises."
            />
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Zap size={15} className="text-white fill-white" />
            </div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Our Story
            </h2>
          </div>
          <div className="pl-0 sm:pl-11 space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              The future of energy is decentralized, intelligent, and sustainable. As cities grow and energy demands increase, the need for dependable clean energy solutions has never been greater.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              PowerAdda was created to accelerate this transition by connecting customers with trusted energy solutions, expert guidance, and reliable service delivery. Our goal is not only to support today's energy needs but also to help build the infrastructure that will power tomorrow's mobility, homes, businesses, and communities.
            </p>
          </div>
        </Section>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* Mumbai Operations */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0">
              <MapPin size={15} className="text-white" />
            </div>
            <h2
              className="text-2xl lg:text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Mumbai Operations
            </h2>
          </div>
          <div className="pl-0 sm:pl-11 space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Headquartered in Mumbai, PowerAdda operates across the city's major districts through a growing network of certified technicians, renewable energy consultants, and strategic partners. We provide doorstep battery services, energy storage solutions, and renewable energy project management tailored to the unique needs of residential, commercial, and industrial customers.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              As we expand, our vision remains clear: to make clean energy simpler, smarter, and more accessible for everyone.
            </p>
          </div>
          <div className="pl-0 sm:pl-11 mt-6 flex flex-wrap gap-2">
            {['Western Line', 'Central Line', 'Harbour Line', 'South Mumbai', 'Navi Mumbai', 'Thane'].map((zone) => (
              <span
                key={zone}
                className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600"
              >
                {zone}
              </span>
            ))}
          </div>
        </Section>
      </div>

      {/* Stats bar */}
      <div className="bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <Section>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: '5,000+', label: 'Batteries Installed' },
                { value: '4.9 ★', label: 'Customer Rating' },
                { value: '6', label: 'Service Verticals' },
                { value: 'All Mumbai', label: 'Coverage Area' },
              ].map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p
                    className="text-2xl lg:text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-blue-600 text-white">
          <div>
            <p
              className="text-lg font-bold mb-1"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Ready to make the switch to clean energy?
            </p>
            <p className="text-sm text-blue-100">
              Get a free quote from our experts — no commitment required.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/918655559777?text=${encodeURIComponent('Hi PowerAdda! I\'d like to learn more.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-xl transition-all whitespace-nowrap"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <Link
              href="/#quote"
              className="flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 rounded-xl transition-all whitespace-nowrap"
            >
              Get Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </Section>
      </div>
    </div>
  )
}

function MissionVisionCard({
  label, icon, accent, text, delay,
}: {
  label: string
  icon: string
  accent: 'blue' | 'indigo'
  text: string
  delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const accentMap = {
    blue: 'bg-blue-50 border-blue-100 text-blue-700',
    indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 lg:p-7 rounded-2xl bg-white border border-gray-100 shadow-sm"
    >
      <div className="text-2xl mb-4">{icon}</div>
      <h3
        className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-4 ${accentMap[accent]}`}
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {label}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
