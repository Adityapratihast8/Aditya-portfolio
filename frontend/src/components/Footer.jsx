import { profile } from "@/data/portfolio";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between gap-6 items-center">
        <div className="text-sm text-slate-400">
          <span className="font-semibold text-slate-200">{profile.name}</span> · {profile.role}
          <div className="mt-1 mono text-xs text-slate-500">© {new Date().getFullYear()} · Crafted with intent.</div>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" data-testid="footer-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.04] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] text-slate-300 transition"><Linkedin size={16} /></a>
          <a aria-label="Email" data-testid="footer-email" href={`mailto:${profile.email}`} className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.04] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] text-slate-300 transition"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
