import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqItems } from "@/lib/content/faq";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-16 sm:py-24">
      <Container>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-marino sm:text-4xl">
          Domande frequenti
        </h2>
        <div className="mt-10 flex flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border bg-background p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-marino marker:content-none">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
