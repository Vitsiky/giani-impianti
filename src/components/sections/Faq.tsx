import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/content/faq";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-black tracking-tight text-marino sm:text-4xl">
            Domande frequenti
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-t border-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-marino marker:content-none">
                {item.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
