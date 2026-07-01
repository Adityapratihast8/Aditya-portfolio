import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const filters = ["All", "Backend", "Frontend", "Full Stack"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" data-testid="projects-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10 fade-up flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">05 · Projects</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-2xl">
              Things I've built. <span className="text-slate-500">Real and conceptual.</span>
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap" data-testid="projects-filters">
            {filters.map((f) => (
              <button
                key={f}
                data-testid={`filter-${f.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition border ${
                  filter === f
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <button
              key={p.id}
              data-testid={`project-card-${p.id}`}
              onClick={() => setActive(p)}
              className="group text-left glass rounded-2xl overflow-hidden tilt flex flex-col"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] mono uppercase tracking-wider px-2 py-1 rounded-full bg-black/40 border border-white/10 text-slate-200">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="absolute top-3 right-3 text-[10px] mono uppercase tracking-wider px-2 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4">{p.problem}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      data-testid="project-modal"
      className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[88vh] overflow-y-auto glass rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          data-testid="project-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="aspect-[16/8] relative overflow-hidden rounded-t-3xl">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
        </div>
        <div className="p-7 sm:p-9">
          <div className="flex items-center gap-2 mono text-xs text-slate-400 mb-2">
            <span>{project.category}</span><span>·</span><span>{project.period}</span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight mb-5">{project.title}</h3>

          <Block label="Business Problem" body={project.problem} />
          <Block label="Solution" body={project.solution} />
          <Block label="Business Value" body={project.value} />

          <div className="mb-5">
            <Label>Tech Stack</Label>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.map((t) => (
                <span key={t} className="text-xs mono px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200">{t}</span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <Label>Features</Label>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                {project.features.map((f) => <li key={f} className="flex gap-2"><span className="text-blue-400">▸</span>{f}</li>)}
              </ul>
            </div>
            <div>
              <Label>Future Scope</Label>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                {project.future.map((f) => <li key={f} className="flex gap-2"><span className="text-amber-400">▸</span>{f}</li>)}
              </ul>
            </div>
          </div>

          <Block label="Agile Process" body={project.agile} />
        </div>
      </div>
    </div>
  );
}

function Label({ children }) {
  return <div className="mono text-[11px] uppercase tracking-[0.18em] text-blue-400">{children}</div>;
}
function Block({ label, body }) {
  return (
    <div className="mb-5">
      <Label>{label}</Label>
      <p className="text-slate-300 leading-relaxed mt-1.5">{body}</p>
    </div>
  );
}
