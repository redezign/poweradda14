'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pillars = [
  { label: 'Mission', text: 'Make premium energy solutions accessible to every Mumbai household and business — reliably, affordably, and without compromise.' },
  { label: 'Vision', text: 'To become India\'s trusted platform for distributed clean energy — powering millions of homes, vehicles, and businesses sustainably.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-950 to-blue-950 p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10">
                <div
                  className="text-5xl lg:text-6xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Power<span className="text-blue-400">Adda</span>
                </div>
                <p className="text-blue-200 text-sm font-medium tracking-wide mb-8">Powering Mobility & Homes</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 'Mumbai', label: 'Base of Operations' },
                    { value: '2020+', label: 'Operating Since' },
                    { value: '6', label: 'Service Verticals' },
                    { value: 'Clean', label: 'Energy Vision' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div
                        className="text-lg font-bold text-white mb-0.5"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 px-4 py-3 bg-blue-600 rounded-2xl text-white text-xs font-bold shadow-lg"
            >
              🌱 Building toward net zero
            </motion.div>
          </motion.div>

          {/* Right – content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                About Us
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Mumbai's energy & mobility specialists
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-gray-500 text-base leading-relaxed">
                <strong className="text-gray-800 font-semibold">Who We Are:</strong> PowerAdda is a Mumbai-based energy and mobility solutions company, serving individual consumers, households, and businesses with premium battery, inverter, solar, and clean energy products and services.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                <strong className="text-gray-800 font-semibold">What We Do:</strong> We provide doorstep battery replacements for cars and bikes, complete home backup systems, rooftop solar installations, and emerging wind energy solutions — all under one roof.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                <strong className="text-gray-800 font-semibold">Mumbai Operations:</strong> Our technicians are spread across Western, Central, and Harbour lines — enabling fast response times across the entire city and Navi Mumbai.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                <strong className="text-gray-800 font-semibold">Future Expansion:</strong> We are actively building toward clean energy infrastructure — integrating lithium battery systems, distributed solar, urban wind, and smart energy management for a sustainable tomorrow.
              </p>
            </div>

            {/* Mission / Vision */}
            <div className="space-y-4 mb-8">
              {pillars.map((p) => (
                <div key={p.label} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span
                    className="text-xs font-bold text-blue-600 uppercase tracking-wide"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {p.label}
                  </span>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#quote')
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({ top, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
            >
              Work With Us
              <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
