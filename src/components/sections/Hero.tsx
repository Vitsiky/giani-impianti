import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/content/contact";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Idraulica · Riscaldamento · Climatizzazione
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-marino sm:text-5xl lg:text-6xl">
          Impianti fatti bene, in tutta la Toscana.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Installazione e assistenza su impianti idraulici, riscaldamento e climatizzazione/
          refrigerazione, per privati e attività commerciali. Operiamo in tutta la Toscana,
          disponibili anche per trasferte.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            Scrivici su WhatsApp
          </Button>
          <Button href={`tel:${PHONE_HREF}`} variant="outline" size="lg">
            Chiama {PHONE_DISPLAY}
          </Button>
        </div>
      </Container>
    </section>
  );
}
