'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle, Loader2 } from 'lucide-react'

const CATEGORIES = [
  'Battery Distributor / Wholesaler',
  'Solar Equipment Supplier',
  'EV Component Supplier',
  'Service Franchise Partner',
  'Installation Contractor',
  'Other',
]

type VendorForm = {
  businessName: string
  contactPerson: string
  mobile: string
  category: string
  city: string
  message: string
}

const initial: VendorForm = {
  businessName: '', contactPerson: '', mobile: '',
  category: '', city: '', message: '',
}

export default function VendorSection() {
  const [form, setForm] = useState<VendorForm>(initial)
  const [errors, setErrors] = useState<Partial<VendorForm>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const validate = () => {
    const e: Partial<VendorForm> = {}
    if (!form.businessName.trim()) e.businessName = 'Required'
    if (!form.contactPerson.trim()) e.contactPerson = 'Required'
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Valid mobile required'
    if (!form.category) e.category = 'Required'
    if (!form.city.trim()) e.city = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  const inputClass = (f: keyof VendorForm) =>
    `w-full px-4 py-3 text-sm bg-white border rounded-xl outline-none transition-all placeholder:text-gray-400 ${
      errors[f] ? 'border-red-300 focus:ring-2 focus:ring-red-100' : 'border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50'
    }`

  return (
    <section id="vendor" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Partner With Us
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Grow your business with PowerAdda
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              We're building a network of trusted energy partners across Mumbai. If you're a supplier, distributor, contractor, or franchise seeker — let's connect.
            </p>
            <div className="space-y-3">
              {[
                'Battery & energy product distributors',
                'Solar equipment suppliers',
                'Service franchise opportunities',
                'EV infrastructure partners',
                'Installation and field contractors',
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle size={15} className="text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-white border border-green-100 text-center shadow-sm"
                >
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Partnership Request Sent!
                  </h3>
                  <p className="text-sm text-gray-500">Our business team will review your details and reach out within 2 business days.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Business Name *</label>
                      <input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your company name" className={inputClass('businessName')} />
                      {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Contact Person *</label>
                      <input name="contactPerson" value={form.contactPerson} onChange={handleChange} placeholder="Your name" className={inputClass('contactPerson')} />
                      {errors.contactPerson && <p className="mt-1 text-xs text-red-500">{errors.contactPerson}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
                      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit number" className={inputClass('mobile')} maxLength={10} />
                      {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">City *</label>
                      <input name="city" value={form.city} onChange={handleChange} placeholder="Your city" className={inputClass('city')} />
                      {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Partnership Category *</label>
                    <div className="relative">
                      <select name="category" value={form.category} onChange={handleChange} className={`${inputClass('category')} appearance-none pr-10`}>
                        <option value="">Select category</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message (Optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your business and what you're looking for..." className={`${inputClass('message')} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-xl transition-all"
                  >
                    {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" />Submitting...</> : 'Submit Partnership Request'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
