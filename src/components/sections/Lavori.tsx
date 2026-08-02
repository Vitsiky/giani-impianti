import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Lavori() {
  return (
    <section id="lavori" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-black tracking-tight text-marino sm:text-4xl">
            Alcuni lavori
          </h2>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Un assaggio dei nostri interventi, tra cantieri e attività commerciali.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="lg:row-span-2">
            <figure className="h-full overflow-hidden rounded-[28px] border border-border bg-background">
              <div className="relative h-64 w-full lg:h-full">
                <Image
                  src="/lavori/dettaglio-rame.jpg"
                  alt="Dettaglio di tubazioni in rame installate da Giani Impianti"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-marino">
                Dettaglio tubazioni in rame
              </figcaption>
            </figure>
          </div>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-[28px] border border-border bg-background">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/lavori/mercato-centrale-milano.jpg"
                  alt="Banco frigo su misura realizzato per Il Tartufo, Mercato Centrale Milano"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-marino">
                Banco frigo su misura — Mercato Centrale Milano
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15}>
            <figure className="overflow-hidden rounded-[28px] border border-border bg-background">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/lavori/cella-frigorifera.jpg"
                  alt="Impianto di refrigerazione a soffitto installato da Giani Impianti"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-marino">
                Impianto di refrigerazione a soffitto
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.2} className="sm:col-span-2">
            <figure className="overflow-hidden rounded-[28px] border border-border bg-background">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/lavori/cantiere-saldatura.jpg"
                  alt="Lavorazione e saldatura tubazioni in cantiere"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-marino">
                Lavorazione in cantiere
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
