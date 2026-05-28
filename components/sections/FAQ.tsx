'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What types of batteries does PowerAdda service?',
    a: 'We service all standard car batteries (lead-acid, AGM, EFB), two-wheeler batteries, inverter batteries (tubular and flat plate), and lithium-ion/LiFePO4 battery systems for residential and commercial applications.',
  },
  {
    q: 'Do you offer doorstep installation in Mumbai?',
    a: 'Yes. All our services are doorstep-based — our certified technicians come to your home, office, or any location across Mumbai (Western, Central, Harbour lines, and Navi Mumbai). You do not need to visit any workshop.',
  },
  {
    q: 'How quickly can I get a battery replaced?',
    a: 'For most car and bike battery replacements, we offer same-day service. Once you submit a quote request or reach us on WhatsApp, our team responds within minutes and schedules a technician at your earliest convenience.',
  },
  {
    q: 'Do you service inverters and home backup systems?',
    a: 'Yes. We supply and install inverter batteries of all capacities (100Ah to 200Ah and above), perform system sizing consultations, and provide tubular and flat plate options from leading brands.',
  },
  {
    q: 'Are the batteries covered under warranty?',
    a: 'All batteries supplied by PowerAdda come with manufacturer warranty. We only stock genuine products from authorized distributors. Warranty terms vary by product — our team will clearly communicate this at the time of purchase.',
  },
  {
    q: 'Does PowerAdda offer solar energy solutions?',
    a: 'Yes. We design and install rooftop solar systems for homes and businesses in Mumbai — both grid-tied and off-grid. We also assist with MSEDCL net metering applications and applicable government subsidies.',
  },
  {
    q: 'What wind energy products do you offer?',
    a: 'We offer small-scale VAWT (Vertical Axis Wind Turbine) and sub-5kW HAWT systems suitable for rooftops and semi-open urban areas. We also design hybrid solar-wind systems for reliable round-the-clock power generation.',
  },
  {
    q: 'Do you install lithium battery packs for custom applications?',
    a: 'Yes. We design and supply custom Li-ion and LiFePO4 battery packs with integrated BMS for residential energy storage, backup power, and portable power stations. Suitable for homes, offices, and small businesses.',
  },
  {
    q: 'How do I get started with PowerAdda?',
    a: 'The easiest way is to WhatsApp us directly or fill out our quote form on this page. Describe your requirement — car battery, inverter, solar, or any other service — and our team will respond with a recommendation and pricing within minutes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">FAQ</span>
            </div>
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Everything you need to know about PowerAdda's services, products, and processes.
            </p>
            <a
              href={`https://wa.me/918655559777?text=${encodeURIComponent('Hi PowerAdda! I have a question.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1fb855] rounded-xl transition-all"
            >
              <WhatsAppIcon />
              Ask on WhatsApp
            </a>
          </motion.div>

          {/* Right – accordion */}
          <div className="lg:col-span-2 space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq, index, open, onToggle,
}: {
  faq: { q: string; a: string }
  index: number
  open: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`rounded-xl border transition-colors ${
        open ? 'border-blue-200 bg-blue-50/50' : 'border-gray-100 bg-gray-50 hover:border-gray-200'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span
          className={`text-sm font-semibold transition-colors ${open ? 'text-blue-700' : 'text-gray-800'}`}
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
          open ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-500'
        }`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
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
