import { MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function ZonaServita() {
  return (
    <section id="zona" className="relative overflow-hidden bg-marino py-24 text-on-marino sm:py-32">
      <WaveDivider fill="var(--color-background)" flip className="absolute inset-x-0 top-0 h-14 sm:h-20" />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <MapPinned className="mx-auto h-10 w-10 text-celeste" aria-hidden="true" strokeWidth={1.5} />
          <h2 className="mt-5 font-heading text-3xl font-black tracking-tight sm:text-5xl">
            Tutta la Toscana. Anche oltre.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Interveniamo su tutto il territorio regionale, per abitazioni private e attività
            commerciali. Per lavori fuori regione scrivici: valutiamo insieme la fattibilità.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
