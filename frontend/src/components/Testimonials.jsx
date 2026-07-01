import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="section bg-[#0c1426]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">11 · Testimonials</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter max-w-3xl">
            What people say. <span className="text-slate-500">Representative voices.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="glass rounded-2xl p-7 tilt fade-up"
            >
              <Quote size={22} className="text-blue-400 mb-4 opacity-80" />
              <blockquote className="text-slate-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 grid place-items-center font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
