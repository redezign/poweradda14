'use client'

const items = [
  'Car Batteries',
  'Bike Batteries',
  'Inverter Systems',
  'Solar Energy',
  'Wind Energy',
  'Lithium Batteries',
  'Home Backup',
  'Energy Infrastructure',
  'Smart Power Solutions',
  'LiFePO4 Packs',
  'Portable Generators',
  'EV Energy Systems',
]

export default function ServicesTicker() {
  const doubled = [...items, ...items]

  return (
    <section className="py-6 bg-gray-950 overflow-hidden border-y border-gray-900">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />

        <div className="ticker-track gap-0">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-0 flex-shrink-0"
            >
              <span className="px-8 text-sm font-semibold text-gray-300 tracking-wide whitespace-nowrap uppercase">
                {item}
              </span>
              <span className="text-blue-500 text-lg font-light flex-shrink-0">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
