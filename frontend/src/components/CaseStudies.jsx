import { projects } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="casestudies" data-testid="case-studies-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-amber-400 uppercase tracking-[0.2em] mb-3">06 · Case Studies</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            Two deep-dives. <span className="text-slate-500">How I turn a problem into a product.</span>
          </h2>
        </div>

        <div className="space-y-10">
          {featured.map((p, idx) => (
            <article
              key={p.id}
              data-testid={`case-study-${p.id}`}
              className={`grid lg:grid-cols-12 gap-8 items-center fade-up ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6 glass rounded-3xl overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
              </div>
              <div className="lg:col-span-6 space-y-4">
                <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em]">Case Study · {p.category}</div>
                <h3 className="text-3xl font-bold tracking-tight">{p.title}</h3>
                <div>
                  <div className="mono text-[11px] uppercase tracking-wider text-slate-400">Context</div>
                  <p className="text-slate-300 mt-1">{p.problem}</p>
                </div>
                <div>
                  <div className="mono text-[11px] uppercase tracking-wider text-slate-400">My Approach</div>
                  <p className="text-slate-300 mt-1">{p.solution}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="glass rounded-xl p-4">
                    <div className="mono text-[10px] uppercase tracking-wider text-blue-400">Business Value</div>
                    <p className="text-sm text-slate-200 mt-1.5">{p.value}</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="mono text-[10px] uppercase tracking-wider text-amber-400">Agile</div>
                    <p className="text-sm text-slate-200 mt-1.5">{p.agile}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[10px] mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 mt-2"
                  data-testid={`case-study-cta-${p.id}`}
                >
                  See in projects <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
