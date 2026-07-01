import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <button
            data-testid="nav-logo"
            onClick={() => go("home")}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 grid place-items-center font-bold text-sm text-white shadow-[0_0_18px_rgba(59,130,246,0.6)]">
              A
            </span>
            <span className="hidden sm:block font-semibold tracking-tight">{profile.firstName}<span className="text-blue-400">.</span></span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`nav-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              data-testid="nav-hire-btn"
              href="#contact"
              onClick={(e) => { e.preventDefault(); go("contact"); }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)] transition"
            >
              Hire Me
            </a>
            <button
              data-testid="nav-menu-toggle"
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div data-testid="nav-mobile" className="lg:hidden mt-2 glass rounded-2xl p-3">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`nav-mobile-link-${l.id}`}
                    onClick={() => go(l.id)}
                    className="w-full text-left px-4 py-3 text-slate-200 hover:bg-white/5 rounded-xl"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
