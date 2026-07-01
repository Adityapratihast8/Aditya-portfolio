import { useEffect, useRef, useState } from "react";
import { technicalSkills } from "@/data/portfolio";

const categories = ["Languages", "Backend", "Database", "Frontend", "CS Fundamentals", "Tools"];

function Bar({ name, rating }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-testid={`skill-${name.replace(/\s|\//g, "-").toLowerCase()}`} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="mono text-slate-400">{rating}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800/70 overflow-hidden">
        <div
          className="h-full skill-fill transition-[width] duration-[1200ms] ease-out"
          style={{ width: visible ? `${rating}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function TechSkills() {
  return (
    <section id="skills" data-testid="tech-skills-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">02 · Technical Skills</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            The stack I ship with. <span className="text-slate-500">Numbers, not buzzwords.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const items = technicalSkills.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} data-testid={`skill-cat-${cat.toLowerCase().replace(/\s/g, "-")}`} className="glass rounded-2xl p-6 fade-up">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-5">{cat}</h3>
                {items.map((s) => <Bar key={s.name} {...s} />)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
