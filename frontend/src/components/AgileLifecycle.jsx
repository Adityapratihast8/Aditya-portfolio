import { agilePhases } from "@/data/portfolio";

export default function AgileLifecycle() {
  return (
    <section id="agile" data-testid="agile-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-amber-400 uppercase tracking-[0.2em] mb-3">07 · Agile Lifecycle</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            How I deliver. <span className="text-slate-500">Sprint after sprint.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5">
            {agilePhases.map((phase, i) => (
              <div
                key={phase.name}
                data-testid={`agile-phase-${i}`}
                className="relative glass rounded-2xl p-5 fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/40 grid place-items-center mb-4 mono text-blue-300 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{phase.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
