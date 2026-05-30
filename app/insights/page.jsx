import Link from "next/link";
import { articles } from "@/lib/insights";

export const metadata = {
  title: "Insights – Energy & Battery Guides | PowerAdda Mumbai",
  description:
    "Expert guides on car batteries, inverters, rooftop solar, EV charging, and lithium energy systems for Mumbai homes and vehicles. Practical advice from PowerAdda.",
  keywords:
    "battery guide Mumbai, solar installation Mumbai, inverter battery tips, EV charging Mumbai, LiFePO4 battery India, PowerAdda insights",
  openGraph: {
    title: "Insights – Energy & Battery Guides | PowerAdda Mumbai",
    description:
      "Expert guides on car batteries, inverters, rooftop solar, EV charging, and lithium energy systems for Mumbai homes and vehicles.",
    url: "https://poweradda.com/insights",
    siteName: "PowerAdda",
    locale: "en_IN",
    type: "website",
  },
};

const categoryColors = {
  "Battery Guide": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Inverter Tips": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Solar Insights": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "EV Energy": "text-green-400 bg-green-400/10 border-green-400/20",
  "Lithium Education": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-widest uppercase mb-6">
            Energy Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            PowerAdda{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Insights
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Expert guides on batteries, solar, inverters, EV charging, and
            clean energy — written specifically for Mumbai homes and vehicles.
          </p>
        </div>
      </section>

      {/* Category Filter Labels */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {Object.keys(categoryColors).map((cat) => (
            <span
              key={cat}
              className={`text-xs px-3 py-1 rounded-full border font-medium ${categoryColors[cat]}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group relative flex flex-col bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                      categoryColors[article.category] ||
                      "text-blue-400 bg-blue-400/10 border-blue-400/20"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors duration-200 line-clamp-3">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-600">{article.date}</span>
                  <span className="text-blue-400 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Read more
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-[#0a0a0a] p-8 md:p-12 overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
              Need advice for your specific situation?
            </h2>
            <p className="text-gray-400 mb-6 relative z-10 max-w-xl mx-auto">
              Our energy experts are available on WhatsApp. Get a personalised
              recommendation for your home, vehicle, or business — free of
              charge.
            </p>
            <a
              href="https://wa.me/918655559777?text=Hi%20PowerAdda!%20I%20read%20your%20insights%20and%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-colors duration-200"
            >
              WhatsApp Our Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
