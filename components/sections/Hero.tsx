'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Star, MapPin } from 'lucide-react'

const WHATSAPP_NUMBER = '918655559777'
const WHATSAPP_MSG = encodeURIComponent('Hi PowerAdda! I\'d like to get an instant quote.')

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Hero() {
  const handleQuote = () => {
    const el = document.querySelector('#quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e40af 1px, transparent 1px),
            linear-gradient(to bottom, #1e40af 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Mumbai's Premium Energy Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Fast & Reliable{' '}
              <span className="text-blue-600">Battery Replacement</span>{' '}
              at Your Doorstep
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="show"
              className="text-lg text-gray-500 mb-3 leading-relaxed"
            >
              Premium Car, Bike & Inverter Battery Solutions Across Mumbai
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              animate="show"
              className="text-base text-gray-400 mb-10"
            >
              Modern energy systems for mobility and homes
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.45}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <button
                onClick={handleQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Get Instant Quote
                <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1fb855] rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp}
              custom={0.55}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-blue-500" />
                <span className="text-sm text-gray-500 font-medium">Genuine Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-blue-500 fill-blue-100" />
                <span className="text-sm text-gray-500 font-medium">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span className="text-sm text-gray-500 font-medium">All Mumbai Locations</span>
              </div>
            </motion.div>
          </div>

          {/* Right – Abstract energy graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <EnergyGraphic />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          custom={0.65}
          initial="hidden"
          animate="show"
          className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-gray-100"
        >
          {[
            { value: '5,000+', label: 'Batteries Installed' },
            { value: '4.9★', label: 'Customer Rating' },
            { value: 'All Mumbai', label: 'Coverage Area' },
            { value: 'Same Day', label: 'Service Speed' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EnergyGraphic() {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-60 blur-2xl" />

      {/* Main circle */}
      <div className="absolute inset-8 rounded-full border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-xl flex items-center justify-center">
        {/* Center bolt */}
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg energy-pulse">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>

      {/* Orbit 1 */}
      <div className="absolute inset-4 rounded-full border border-dashed border-blue-200 orbit-1">
        <OrbitDot position="top" />
        <OrbitDot position="bottom" />
      </div>

      {/* Orbit 2 */}
      <div className="absolute inset-0 rounded-full border border-dashed border-blue-100 orbit-2">
        <OrbitDot position="left" color="blue-300" />
        <OrbitDot position="right" color="blue-300" />
      </div>

      {/* Floating labels */}
      <FloatingLabel label="Car Battery" top="8%" left="-5%" delay={0} />
      <FloatingLabel label="Solar" top="70%" left="-10%" delay={0.4} />
      <FloatingLabel label="Inverter" top="8%" right="-5%" delay={0.2} />
      <FloatingLabel label="Wind Energy" top="70%" right="-5%" delay={0.6} />
    </div>
  )
}

function OrbitDot({ position, color = 'blue-400' }: { position: string; color?: string }) {
  const posMap: Record<string, React.CSSProperties> = {
    top: { top: '-4px', left: '50%', transform: 'translateX(-50%)' },
    bottom: { bottom: '-4px', left: '50%', transform: 'translateX(-50%)' },
    left: { left: '-4px', top: '50%', transform: 'translateY(-50%)' },
    right: { right: '-4px', top: '50%', transform: 'translateY(-50%)' },
  }
  return (
    <div
      className="absolute w-2 h-2 rounded-full bg-blue-400"
      style={posMap[position]}
    />
  )
}

function FloatingLabel({
  label, top, left, right, delay,
}: {
  label: string; top: string; left?: string; right?: string; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 + delay }}
      className="absolute px-2.5 py-1 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-medium text-gray-600 whitespace-nowrap"
      style={{ top, left, right }}
    >
      {label}
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
