'use client'

import { motion } from 'framer-motion'
import { Zap, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '918655559777'
const WHATSAPP_MSG = encodeURIComponent('Hi PowerAdda! I\'d like to get a quote.')

const footerLinks = {
  Services: [
    { label: 'Car Battery', href: '/#services' },
    { label: 'Bike Battery', href: '/#services' },
    { label: 'Inverter & Home Backup', href: '/#services' },
    { label: 'Solar Energy', href: '/#services' },
    { label: 'Wind Energy', href: '/#services' },
    { label: 'Lithium Battery Systems', href: '/#services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Why PowerAdda', href: '/#why' },
    { label: 'How It Works', href: '/#how' },
    { label: 'Partner With Us', href: '/#vendor' },
    { label: 'Careers', href: '#' },
  ],
  Insights: [
    { label: 'Battery Guide', href: '/#insights' },
    { label: 'Inverter Tips', href: '/#insights' },
    { label: 'Solar Insights', href: '/#insights' },
    { label: 'EV Energy Systems', href: '/#insights' },
    { label: 'Lithium Education', href: '/#insights' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Ready to power up?
              </h3>
              <p className="text-gray-400 text-sm lg:text-base">
                Get a free quote. Our team responds within minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1fb855] rounded-xl transition-all"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <Link
                href="/#quote"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-xl transition-all"
              >
                Get Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Power<span className="text-blue-400">Adda</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Mumbai's premium energy and mobility solutions platform. Doorstep battery service, solar, wind, and clean energy infrastructure.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/918655559777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <WhatsAppIcon small />
                </div>
                +91 86555 59777
              </a>
              <a
                href="mailto:info@poweradda.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Mail size={14} />
                </div>
                info@poweradda.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PowerAdda. All rights reserved. Mumbai, India.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">Privacy Policy</span>
            <span className="text-xs text-gray-500">Terms of Service</span>
            <span className="text-xs text-gray-600">|</span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ small }: { small?: boolean }) {
  const size = small ? 14 : 16
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
