import { MapPin, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ZonaServita() {
  return (
    <section id="zona" className="border-t border-border bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-background">
              <MapPin className="h-6 w-6 text-primary" aria-hidden="true" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-marino">Tutta la Toscana</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Interveniamo su tutto il territorio regionale, per abitazioni private e attività
                commerciali.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-background">
              <Truck className="h-6 w-6 text-primary" aria-hidden="true" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-marino">Anche trasferte</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Per interventi fuori regione, scrivici: valutiamo insieme la fattibilità caso per
                caso.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
