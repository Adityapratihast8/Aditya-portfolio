import * as Lucide from "lucide-react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">04 · Services</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-2xl">
              What I'll build for you.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            Freelance-friendly engagements. Fixed-scope or sprint-based. NDAs welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = Lucide[s.icon] || Lucide.Sparkles;
            return (
              <div
                key={s.title}
                data-testid={`service-card-${i}`}
                className="group glass rounded-2xl p-7 tilt relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/0 group-hover:bg-blue-500/15 blur-2xl transition" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 grid place-items-center mb-5">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
