'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    id: 'car-battery-guide',
    slug: 'when-to-replace-car-battery-mumbai',
    tag: 'Battery Guide',
    tagColor: 'bg-blue-50 text-blue-700',
    title: 'How to Know When Your Car Battery Needs Replacement',
    excerpt: 'Slow engine cranking, dim headlights, and a battery warning light are early signs your car battery is failing. Learn the complete checklist to catch it before you get stranded.',
    readTime: '4 min read',
    date: 'Jun 2025',
  },
  {
    id: 'inverter-tips',
    slug: 'tubular-vs-flat-plate-inverter-battery-mumbai',
    tag: 'Inverter Tips',
    tagColor: 'bg-violet-50 text-violet-700',
    title: 'Tubular vs Flat Plate Batteries: Which Inverter Battery Is Right for You?',
    excerpt: 'Mumbai homes face unique power backup challenges. We compare battery types, backup duration, maintenance needs, and total cost of ownership to help you decide.',
    readTime: '6 min read',
    date: 'May 2025',
  },
  {
    id: 'solar-guide',
    slug: 'rooftop-solar-mumbai-2025-guide',
    tag: 'Solar Insights',
    tagColor: 'bg-amber-50 text-amber-700',
    title: 'Rooftop Solar in Mumbai: A Complete 2025 Installation Guide',
    excerpt: 'Everything you need to know — system sizing, MSEDCL net metering, government subsidies, and realistic payback periods for Mumbai apartments and bungalows.',
    readTime: '8 min read',
    date: 'Apr 2025',
  },
  {
    id: 'ev-energy',
    slug: 'ev-home-charging-mumbai-guide',
    tag: 'EV Energy',
    tagColor: 'bg-cyan-50 text-cyan-700',
    title: 'Home Charging Infrastructure for Electric Vehicles in Mumbai',
    excerpt: 'As EV adoption grows, so does the need for smart home charging setups. This guide covers charger types, electrical requirements, and safe installation practices.',
    readTime: '5 min read',
    date: 'Mar 2025',
  },
  {
    id: 'lithium-education',
    slug: 'liion-vs-lifepo4-lithium-battery-home-india',
    tag: 'Lithium Education',
    tagColor: 'bg-emerald-50 text-emerald-700',
    title: 'Li-ion vs LiFePO4: Which Lithium Battery Chemistry is Safer for Homes?',
    excerpt: 'Both are lithium chemistries, but they behave very differently. We break down cycle life, thermal stability, cost, and the best use cases for each in Indian conditions.',
    readTime: '6 min read',
    date: 'Feb 2025',
  },
  {
    id: 'bike-battery',
    slug: 'bike-battery-maintenance-mumbai-heat',
    tag: 'Battery Guide',
    tagColor: 'bg-blue-50 text-blue-700',
    title: "Two-Wheeler Battery Maintenance: Extend Battery Life in Mumbai's Heat",
    excerpt: "Mumbai's tropical climate accelerates battery degradation. Follow these expert maintenance tips to extend your bike battery life by 30% or more.",
    readTime: '3 min read',
    date: 'Jan 2025',
  },
]

export default function Insights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="insights" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Insights
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Energy knowledge hub
            </h2>
          </div>
          <p className="text-sm text-gray-400 sm:text-right sm:max-w-xs">
            Expert guides on batteries, solar, inverters, and clean energy for Indian homes and vehicles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
          >
            View All Insights
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Link href={`/insights/${article.slug}`}>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
        className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-blue-100 hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col"
      >
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.tagColor}`}>
            {article.tag}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock size={12} />
            {article.readTime}
          </div>
        </div>

        <h3
          className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {article.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed flex-grow line-clamp-3 mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-xs text-gray-400">{article.date}</span>
          <span className="text-xs font-semibold text-blue-600 group-hover:gap-2 flex items-center gap-1 transition-all">
            Read more <ArrowRight size={12} />
          </span>
        </div>
      </motion.article>
    </Link>
  )
}
