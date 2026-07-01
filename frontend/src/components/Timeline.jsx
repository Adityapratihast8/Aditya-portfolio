import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" data-testid="timeline-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">09 · Experience & Education</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            The path so far. <span className="text-slate-500">Fresher with a head start.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent" />

          {education.map((edu, i) => (
            <div
              key={edu.degree}
              data-testid={`timeline-item-${i}`}
              className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 mb-10 fade-up ${
                i % 2 ? "" : "sm:[&>div:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
              <div className={`${i % 2 ? "sm:text-right sm:pr-6" : "sm:text-left sm:pl-6"}`}>
                <div className="mono text-xs text-blue-400">{edu.period}</div>
                <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-slate-400">{edu.school}</p>
              </div>
              <div className={`hidden sm:block ${i % 2 ? "sm:pl-6" : "sm:pr-6 sm:text-right"}`}>
                <div className={`inline-flex items-center gap-2 glass rounded-xl px-3 py-2 ${i % 2 ? "" : ""}`}>
                  <GraduationCap size={16} className="text-blue-400" />
                  <span className="text-sm text-slate-300">Academic</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
