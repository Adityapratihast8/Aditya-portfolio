import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [t, setT] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[i % words.length];
    const speed = del ? 45 : 85;
    const timer = setTimeout(() => {
      if (!del) {
        setT(cur.slice(0, t.length + 1));
        if (t.length + 1 === cur.length) setTimeout(() => setDel(true), 1400);
      } else {
        setT(cur.slice(0, t.length - 1));
        if (t.length - 1 === 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [t, del, i, words]);

  return <span className="caret text-blue-400">{t}</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-28 pb-20 noise"
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-[380px] h-[380px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <div
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-slate-300 mb-7"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span className="mono">{profile.availability}</span>
          </div>

          <h1
            data-testid="hero-name"
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.02] mb-6"
          >
            <span className="block text-white">{profile.firstName}<span className="text-blue-400">.</span></span>
          </h1>

          <div className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 min-h-[2.4rem]">
            <Typewriter words={profile.taglines} />
          </div>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-9">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              data-testid="hero-hire-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_36px_rgba(59,130,246,0.65)] transition"
            >
              Hire Me
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              data-testid="hero-resume-btn"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold transition"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              data-testid="hero-projects-btn"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-slate-300 hover:text-white transition"
            >
              View Projects →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-400" />
              {profile.location}
            </div>
            <span className="mono text-slate-500">EST · GMT · IST</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-br from-blue-500/30 via-sky-500/10 to-amber-400/20 blur-2xl" />
            <div className="relative glass rounded-3xl p-6 tilt">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="mono text-xs text-slate-400">~/aditya.profile</span>
              </div>
              <pre className="mono text-[13px] leading-relaxed text-slate-200 whitespace-pre-wrap">
{`const aditya = {
  role: "SDE × BA × Agile",
  stack: ["Java", "Spring Boot", "MySQL"],
  ba:    ["BRD", "FRD", "SRS", "Scrum"],
  solving: "business problems with code",
  open:    true,
};`}
              </pre>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="text-xl font-bold text-white">8+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Projects</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="text-xl font-bold text-white">320+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">LeetCode</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
                  <div className="text-xl font-bold text-white">12</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
