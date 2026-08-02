import Image from "next/image";
import { Droplet, Flame, Snowflake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content/services";

export function Servizi() {
  const [idraulica, riscaldamento, climatizzazione] = services;

  return (
    <section id="servizi" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-black tracking-tight text-marino sm:text-4xl">
            Servizi
          </h2>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Interventi su misura per privati e attività commerciali, in tutta la Toscana.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col gap-6 rounded-[28px] bg-marino p-8 text-on-marino sm:flex-row sm:p-10">
              <div className="sm:flex sm:h-full sm:max-w-xs sm:flex-col sm:justify-center">
                <Snowflake className="h-9 w-9 text-celeste" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">
                  {climatizzazione.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/75">
                  {climatizzazione.description}
                </p>
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl border border-white/15 shadow-lg sm:h-auto sm:flex-1">
                <Image
                  src="/lavori/banco-frigo.jpg"
                  alt="Banco frigo installato da Giani Impianti"
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-5 rounded-[28px] border border-border bg-background p-7">
              <div>
                <Droplet className="h-8 w-8 text-primary" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-xl font-bold text-marino">
                  {idraulica.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {idraulica.description}
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/lavori/tubazioni-rame.jpg"
                  alt="Tubazioni in rame installate da Giani Impianti"
                  width={900}
                  height={677}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full rounded-[28px] border border-border bg-background p-7">
              <Flame className="h-8 w-8 text-primary" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-4 font-heading text-xl font-bold text-marino">
                {riscaldamento.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {riscaldamento.description}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
