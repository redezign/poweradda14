'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'car-battery',
    icon: '🚗',
    title: 'Car Battery Replacement',
    description: 'Doorstep car battery service across Mumbai. Genuine brand batteries with warranty. Fast diagnostics and same-day installation.',
    features: ['Maruti, Honda, Hyundai & all brands', 'Doorstep installation', 'Old battery pickup'],
    color: 'from-blue-50 to-white',
    accent: '#2563eb',
  },
  {
    id: 'bike-battery',
    icon: '🏍️',
    title: 'Bike Battery Solutions',
    description: 'Premium two-wheeler battery replacement for all makes. Expert fitment at your location with zero hassle.',
    features: ['All bike brands covered', 'Quick 20-min installation', 'Warranty included'],
    color: 'from-slate-50 to-white',
    accent: '#475569',
  },
  {
    id: 'inverter',
    icon: '🏠',
    title: 'Inverter & Home Backup',
    description: 'High-performance inverter batteries and complete home backup systems. Stay powered through any outage.',
    features: ['Tubular & flat plate options', 'System sizing consultation', 'Annual maintenance'],
    color: 'from-violet-50 to-white',
    accent: '#7c3aed',
  },
  {
    id: 'solar',
    icon: '☀️',
    title: 'Solar Energy Systems',
    description: 'Rooftop and ground-mounted solar solutions for homes and businesses. End-to-end design, supply and installation.',
    features: ['Grid-tied & off-grid systems', 'Net metering support', 'Subsidy guidance'],
    color: 'from-amber-50 to-white',
    accent: '#d97706',
  },
  {
    id: 'wind',
    icon: '💨',
    title: 'Wind Energy Solutions',
    description: 'Urban and semi-urban wind energy systems. Small-scale VAWT installations for rooftops and open areas.',
    features: ['VAWT & HAWT systems', 'Hybrid solar-wind options', 'Site assessment'],
    color: 'from-cyan-50 to-white',
    accent: '#0891b2',
  },
  {
    id: 'lithium',
    icon: '⚡',
    title: 'Lithium Battery Systems',
    description: 'Custom Li-ion & LiFePO4 battery packs and portable power stations for residential and commercial applications.',
    features: ['Li-ion & LiFePO4 chemistry', 'Custom pack design', 'BMS integrated'],
    color: 'from-emerald-50 to-white',
    accent: '#059669',
  },
]

const WHATSAPP_NUMBER = '918655559777'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Top gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ color: service.accent }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} border border-gray-100 flex items-center justify-center text-2xl mb-4`}
      >
        {service.icon}
      </div>

      {/* Content */}
      <h3
        className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {service.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi PowerAdda! I'm interested in ${service.title}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group/link"
      >
        Enquire Now
        <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Complete Energy & Mobility Solutions
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            From doorstep battery replacements to solar installations — we deliver end-to-end energy solutions for homes, vehicles, and businesses across Mumbai.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
