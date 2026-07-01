import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Code, Github, Trophy, Award, Boxes, GraduationCap } from "lucide-react";

const ICONS = {
  leetcode_solved: Code,
  github_repos: Github,
  hackathons: Trophy,
  certifications: Award,
  projects_built: Boxes,
  years_learning: GraduationCap,
};
const LABELS = {
  leetcode_solved: "LeetCode Solved",
  github_repos: "GitHub Repos",
  hackathons: "Hackathons",
  certifications: "Certifications",
  projects_built: "Projects Built",
  years_learning: "Years Learning",
};

function Counter({ end }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const duration = 1200;
            const start = performance.now();
            const step = (now) => {
              const t = Math.min(1, (now - start) / duration);
              setV(Math.floor(t * end));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{v}</span>;
}

export default function Achievements() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/profile/stats`);
        setStats(res.data);
      } catch (e) {
        setStats({
          leetcode_solved: 320, github_repos: 28, hackathons: 4,
          certifications: 3, projects_built: 8, years_learning: 3,
        });
      }
    };
    fetchStats();
  }, []);

  if (!stats) return null;

  return (
    <section id="achievements" data-testid="achievements-section" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">08 · Achievements</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            Receipts. <span className="text-slate-500">Numbers that compound.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(stats).map(([k, v]) => {
            const Icon = ICONS[k] || Trophy;
            return (
              <div
                key={k}
                data-testid={`achievement-${k}`}
                className="glass rounded-2xl p-5 tilt fade-up"
              >
                <Icon size={20} className="text-blue-400 mb-3" />
                <div className="text-3xl font-bold tracking-tight">
                  <Counter end={v} />
                  {(k === "leetcode_solved" || k === "github_repos") && <span className="text-blue-400">+</span>}
                </div>
                <div className="text-xs text-slate-400 mt-1">{LABELS[k] || k}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
