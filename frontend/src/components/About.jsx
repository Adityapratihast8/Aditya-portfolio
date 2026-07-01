import { about } from "@/data/portfolio";
import { Target, Sparkles, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">01 · About</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            Engineer who writes requirements. <span className="text-slate-500">Analyst who ships code.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5 fade-up">
            {about.intro.map((p, i) => (
              <p key={i} className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4 fade-up">
            <Card icon={<Sparkles size={18} className="text-amber-400" />} title="Biggest strength" body={about.strength} testid="about-strength" />
            <Card icon={<Target size={18} className="text-blue-400" />} title="Why me vs. other freshers" body={about.differentiator} testid="about-differentiator" />
            <Card icon={<Compass size={18} className="text-sky-400" />} title="Career goal" body={about.goal} testid="about-goal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, body, testid }) {
  return (
    <div data-testid={testid} className="glass rounded-2xl p-6 tilt">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">{title}</h3>
      </div>
      <p className="text-slate-300 leading-relaxed">{body}</p>
    </div>
  );
}
