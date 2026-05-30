import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs, articles } from "@/lib/insights";

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | PowerAdda Insights`,
    description: article.metaDescription,
    openGraph: {
      title: `${article.title} | PowerAdda Insights`,
      description: article.metaDescription,
      url: `https://poweradda.com/insights/${article.slug}`,
      siteName: "PowerAdda",
      locale: "en_IN",
      type: "article",
      publishedTime: article.dateISO,
    },
  };
}

const categoryColors = {
  "Battery Guide": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Inverter Tips": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Solar Insights": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "EV Energy": "text-green-400 bg-green-400/10 border-green-400/20",
  "Lithium Education": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

function renderContent(markdown) {
  const lines = markdown.trim().split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">
          {line.replace("## ", "")}
        </h2>
      );
      i++; continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-blue-300 mt-6 mb-2">
          {line.replace("### ", "")}
        </h3>
      );
      i++; continue;
    }

    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {rows[0].split("|").filter((c) => c.trim()).map((cell, ci) => (
                  <th key={ci} className="text-left text-gray-300 font-semibold px-4 py-2 border border-white/10 bg-white/5">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="hover:bg-white/[0.02]">
                  {row.split("|").filter((c) => c.trim()).map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 border border-white/10 text-gray-400">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2">
          {listItems.map((item, li) => (
            <li key={li} className="flex items-start gap-2 text-gray-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.trim() === "") { i++; continue; }

    elements.push(
      <p key={i} className="text-gray-400 leading-relaxed my-3"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
    i++;
  }

  return elements;
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-white/10 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-gray-300 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-gray-400 truncate max-w-[200px]">{article.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[article.category] || "text-blue-400 bg-blue-400/10 border-blue-400/20"}`}>
              {article.category}
            </span>
            <span className="text-xs text-gray-500">{article.readTime}</span>
            <span className="text-xs text-gray-500">{article.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-blue-500/50 pl-4">
            {article.excerpt}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <article className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {renderContent(article.content)}
        </div>
      </article>

      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 to-[#0a0a0a] p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Need help with your energy setup?</h3>
            <p className="text-gray-400 text-sm mb-5">
              Our team is on WhatsApp — get a free recommendation within minutes.
            </p>
            <a
              href="https://wa.me/918655559777?text=Hi%20PowerAdda!%20I%20read%20your%20article%20and%20need%20help."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-colors duration-200"
            >
              WhatsApp PowerAdda
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-300 mb-6">More from Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group p-4 rounded-xl border border-white/5 bg-[#111111] hover:border-blue-500/30 transition-all duration-200"
              >
                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${categoryColors[rel.category] || "text-blue-400 bg-blue-400/10 border-blue-400/20"}`}>
                  {rel.category}
                </span>
                <p className="text-sm text-gray-300 font-medium mt-2 leading-snug group-hover:text-blue-300 transition-colors line-clamp-3">
                  {rel.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/insights" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-1">
              ← Back to all Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
