import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" data-testid="certifications-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-amber-400 uppercase tracking-[0.2em] mb-3">10 · Certifications</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            Verified, not vibed. <span className="text-slate-500">The pieces of paper.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <div
              key={c.title}
              data-testid={`cert-${i}`}
              className="glass rounded-2xl p-7 tilt fade-up relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl" />
              <Award size={28} className="text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
              <div className="mono text-xs text-slate-400 mb-3">{c.period}</div>
              <p className="text-sm text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
