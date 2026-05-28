'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const WHATSAPP_NUMBER = '918655559777'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-5">
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Contact</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              We're here when you need us.
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-10">
              The fastest way to reach us is WhatsApp. For business enquiries or partnerships, email works great too.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi PowerAdda!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">WhatsApp (Preferred)</p>
                  <p className="text-sm font-semibold text-white">+91 86555 59777</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:info@poweradda.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-white">info@poweradda.com</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Service Area</p>
                  <p className="text-sm font-semibold text-white">Mumbai — All Zones + Navi Mumbai</p>
                </div>
              </div>
            </div>

            {/* Coverage zones */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide">Coverage Zones</p>
              <div className="flex flex-wrap gap-2">
                {['Western Line', 'Central Line', 'Harbour Line', 'South Mumbai', 'Navi Mumbai', 'Thane'].map((z) => (
                  <span key={z} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – map placeholder + hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 aspect-[4/3] bg-gray-900 relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-3">
                  <MapPin size={20} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-white mb-1">Mumbai Coverage Area</p>
                <p className="text-xs text-gray-500">All zones across Greater Mumbai</p>
              </div>
              {/* Dot markers */}
              {[
                { top: '20%', left: '30%', label: 'Borivali' },
                { top: '35%', left: '40%', label: 'Andheri' },
                { top: '50%', left: '35%', label: 'Bandra' },
                { top: '65%', left: '42%', label: 'Worli' },
                { top: '75%', left: '48%', label: 'Colaba' },
                { top: '30%', left: '65%', label: 'Thane' },
                { top: '50%', left: '72%', label: 'Navi Mumbai' },
              ].map((dot) => (
                <div
                  key={dot.label}
                  className="absolute"
                  style={{ top: dot.top, left: dot.left }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 relative">
                    <div className="absolute w-5 h-5 rounded-full bg-blue-400/20 -top-1.5 -left-1.5 animate-ping" />
                  </div>
                </div>
              ))}
            </div>

            {/* Service hours */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <p
                className="text-sm font-bold text-white mb-4"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Service Hours
              </p>
              <div className="space-y-2.5">
                {[
                  { day: 'Monday – Saturday', time: '8:00 AM – 8:00 PM' },
                  { day: 'Sunday', time: '9:00 AM – 5:00 PM' },
                  { day: 'Public Holidays', time: 'Limited availability' },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{row.day}</span>
                    <span className="text-xs font-medium text-gray-300">{row.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-xs text-gray-400">WhatsApp available beyond service hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
