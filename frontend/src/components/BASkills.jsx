import { baSkills } from "@/data/portfolio";

export default function BASkills() {
  return (
    <section id="ba-skills" data-testid="ba-skills-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-amber-400 uppercase tracking-[0.2em] mb-3">03 · Business Analyst Skills</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            The other half of the job. <span className="text-slate-500">Requirements, frameworks, delivery.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(baSkills).map(([group, items]) => (
            <div
              key={group}
              data-testid={`ba-group-${group.toLowerCase()}`}
              className="glass rounded-2xl p-6 fade-up"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 hover:border-amber-400/40 hover:bg-amber-400/[0.06] transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
