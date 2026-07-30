import { Droplet, Flame, Snowflake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/content/services";

const icons = [Droplet, Flame, Snowflake];

export function Servizi() {
  return (
    <section id="servizi" className="border-t border-border py-16 sm:py-24">
      <Container>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-marino sm:text-4xl">
          Servizi
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Interventi su misura per privati e attività commerciali, in tutta la Toscana.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.slug}
                className="rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-marino">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
