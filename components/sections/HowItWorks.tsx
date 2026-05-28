'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Contact PowerAdda',
    desc: 'Reach us via WhatsApp or fill out our quick quote form. Tell us your vehicle type, location, and the service you need.',
    detail: 'Available via WhatsApp & web form',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Get Expert Recommendation',
    desc: 'Our technical team assesses your requirement and recommends the right battery or energy solution — with transparent pricing.',
    detail: 'Detailed quote shared within minutes',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Doorstep Installation',
    desc: 'A certified PowerAdda technician arrives at your location and completes installation professionally. Clean, fast, and hassle-free.',
    detail: 'Same-day service available',
    icon: '✅',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how" className="py-20 lg:py-28 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-4">
            <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
              How It Works
            </span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            From enquiry to installation — effortlessly.
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            We've designed the entire experience to be simple, transparent, and convenient. No workshops, no waiting, no surprises.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-px bg-gradient-to-r from-blue-600/20 via-blue-600 to-blue-600/20" />

          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href={`https://wa.me/918655559777?text=${encodeURIComponent('Hi PowerAdda! I\'d like to get started.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-xl transition-all shadow-sm"
          >
            <WhatsAppIcon />
            Start on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Number chip */}
      <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
        <span
          className="text-xs font-bold text-white"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {step.number}
        </span>
      </div>

      {/* Card */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
        <div className="text-3xl mb-4">{step.icon}</div>
        <h3
          className="text-lg font-bold text-white mb-3"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {step.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{step.desc}</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-xs text-blue-400 font-medium">{step.detail}</span>
        </div>
      </div>
    </motion.div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
