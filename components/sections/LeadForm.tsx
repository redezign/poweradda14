'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle, Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Car Battery Replacement',
  'Bike Battery Replacement',
  'Inverter & Home Backup',
  'Solar Energy System',
  'Wind Energy Solution',
  'Lithium Battery System',
  'Portable Power System',
  'Other / Not Sure',
]

type FormData = {
  name: string
  mobile: string
  service: string
  vehicleType: string
  location: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = {
  name: '', mobile: '', service: '',
  vehicleType: '', location: '', message: '',
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Errors>({})
  const [expanded, setExpanded] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, '')))
      e.mobile = 'Enter a valid 10-digit Indian mobile number'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    // Auto-expand additional fields when service is selected
    if (name === 'service' && value) setExpanded(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    // Simulate API call — replace with Google Sheets endpoint later
    await new Promise((r) => setTimeout(r, 1200))

    // Future: POST to Google Sheets App Script or Tally webhook here
    setStatus('success')
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 text-sm text-gray-900 bg-white border rounded-xl outline-none transition-all placeholder:text-gray-400 ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50'
    }`

  return (
    <section id="quote" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Get a Quote
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Tell us what you need. We'll do the rest.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Fill in a few details and our team will get back to you with a detailed quote — usually within minutes during business hours.
            </p>

            {/* Trust points */}
            <div className="space-y-3">
              {[
                'No commitment required',
                'Transparent pricing, no hidden charges',
                'Expert recommendation included',
                'Same-day service available',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-white border border-green-100 text-center shadow-sm"
                >
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-green-500" />
                  </div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Request Received!
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Thank you. Team PowerAdda will contact you shortly with your personalised quote.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm(initialForm); setExpanded(false) }}
                    className="mt-6 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('name')}
                      autoComplete="name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={inputClass('mobile')}
                      autoComplete="tel"
                      maxLength={10}
                    />
                    {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Service Type *</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass('service')} appearance-none pr-10`}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  {/* Expand toggle */}
                  <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>{expanded ? '− Hide' : '+ Add'} additional details (optional)</span>
                  </button>

                  {/* Expandable fields */}
                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden space-y-4"
                      >
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Vehicle Type / System</label>
                          <input
                            type="text"
                            name="vehicleType"
                            value={form.vehicleType}
                            onChange={handleChange}
                            placeholder="e.g. Honda City, Activa, Inverter 800VA"
                            className={inputClass('vehicleType')}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Location / Area</label>
                          <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            placeholder="e.g. Andheri West, Thane"
                            className={inputClass('location')}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Additional Message</label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Any specific requirements or questions..."
                            className={`${inputClass('message')} resize-none`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Request My Quote'
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We respect your privacy. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
