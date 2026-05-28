'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    icon: '🏷️',
    title: 'Genuine Products',
    desc: 'Only authentic, warranty-backed batteries and energy systems from verified manufacturers.',
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    desc: 'Same-day service across Mumbai. We respond to enquiries within minutes.',
  },
  {
    icon: '🚚',
    title: 'Doorstep Installation',
    desc: 'Our certified technicians come to your location. No workshop visit required.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Get a detailed quote before any work begins.',
  },
  {
    icon: '🔧',
    title: 'Expert Technicians',
    desc: 'Trained professionals with years of hands-on experience in battery systems.',
  },
  {
    icon: '📍',
    title: 'Mumbai Coverage',
    desc: 'Serving all zones — Western, Central, Harbour, and Navi Mumbai.',
  },
  {
    icon: '🌱',
    title: 'Renewable Vision',
    desc: 'Building toward a clean energy future with solar, wind, and lithium solutions.',
  },
  {
    icon: '📋',
    title: 'After-Service Support',
    desc: 'We stay connected post-installation for warranty, maintenance, and queries.',
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left – sticky title */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Why PowerAdda
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Built different. Delivered better.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              We combine the reliability of a seasoned service provider with the speed and standards of a modern tech platform. Every interaction is designed to earn your trust.
            </p>

            {/* Highlight box */}
            <div className="p-5 rounded-2xl bg-blue-600 text-white">
              <p
                className="text-lg font-bold mb-1"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Trusted across Mumbai
              </p>
              <p className="text-sm text-blue-100 leading-relaxed">
                From Borivali to Chembur, Thane to Navi Mumbai — thousands of homes and vehicles powered by PowerAdda.
              </p>
            </div>
          </motion.div>

          {/* Right – grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-200 group"
    >
      <div className="text-2xl mb-3">{reason.icon}</div>
      <h3
        className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {reason.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed">{reason.desc}</p>
    </motion.div>
  )
}
