import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, Loader2 } from "lucide-react";
import { profile } from "@/data/portfolio";

const PROJECT_TYPES = [
  "Full-time Role",
  "Freelance Project",
  "Internship",
  "Collaboration",
  "Consultation",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "", project_type: PROJECT_TYPES[0],
  });
  const [sending, setSending] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return toast.error("Please add your name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return toast.error("Please add a valid email.");
    if (form.subject.trim().length < 2) return toast.error("Please add a subject.");
    if (form.message.trim().length < 10) return toast.error("Message should be at least 10 characters.");

    setSending(true);
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, form);
      toast.success("Message sent! I'll get back within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "", project_type: PROJECT_TYPES[0] });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Failed to send. Please try email instead.";
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up text-center max-w-2xl mx-auto">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">13 · Contact</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
            Let's talk.
          </h2>
          <p className="text-slate-400">
            Hiring for a role, scoping a project, or just want to discuss a problem — pick whichever channel works.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <aside className="lg:col-span-2 space-y-3">
            <ContactCard testid="contact-email" icon={<Mail size={18} />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactCard testid="contact-phone" icon={<Phone size={18} />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
            <ContactCard testid="contact-whatsapp" icon={<MessageCircle size={18} />} label="WhatsApp" value="Chat instantly" href={profile.whatsapp} external />
            <ContactCard testid="contact-linkedin" icon={<Linkedin size={18} />} label="LinkedIn" value="Connect on LinkedIn" href={profile.linkedin} external />
            <div data-testid="contact-location" className="glass rounded-2xl p-4 flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </aside>

          <form
            data-testid="contact-form"
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input data-testid="contact-input-name" value={form.name} onChange={update("name")} placeholder="Your name" className={inputCls} required />
              </Field>
              <Field label="Email">
                <input data-testid="contact-input-email" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className={inputCls} required />
              </Field>
            </div>
            <Field label="Project Type">
              <select data-testid="contact-input-type" value={form.project_type} onChange={update("project_type")} className={inputCls}>
                {PROJECT_TYPES.map((t) => <option key={t} value={t} className="bg-[#0A0F1C]">{t}</option>)}
              </select>
            </Field>
            <Field label="Subject">
              <input data-testid="contact-input-subject" value={form.subject} onChange={update("subject")} placeholder="What's this about?" className={inputCls} required />
            </Field>
            <Field label="Message">
              <textarea data-testid="contact-input-message" rows={5} value={form.message} onChange={update("message")} placeholder="Tell me about the role / project / problem…" className={`${inputCls} resize-none`} required />
            </Field>

            <button
              data-testid="contact-submit-btn"
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold shadow-[0_0_22px_rgba(59,130,246,0.45)] transition"
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls = "w-full bg-white/[0.04] border border-white/10 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 transition";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block mono text-[11px] uppercase tracking-wider text-slate-400 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({ icon, label, value, href, external, testid }) {
  return (
    <a
      data-testid={testid}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="glass rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500/40 hover:bg-white/[0.06] transition group"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 grid place-items-center text-blue-400">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="mono text-[11px] uppercase tracking-wider text-slate-400">{label}</div>
        <div className="text-sm text-slate-200 truncate">{value}</div>
      </div>
    </a>
  );
}
