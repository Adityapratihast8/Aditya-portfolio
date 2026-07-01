import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/portfolio";

export default function FAQ() {
  return (
    <section id="faq" data-testid="faq-section" className="section">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 fade-up">
          <div className="mono text-xs text-blue-400 uppercase tracking-[0.2em] mb-3">12 · FAQ</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            Questions before you write.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2" data-testid="faq-accordion">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-5 border-none"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
