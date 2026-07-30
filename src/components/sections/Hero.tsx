import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/content/contact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface pb-24 pt-14 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary">
              Idraulica · Riscaldamento · Climatizzazione
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-4xl font-black leading-[1.05] tracking-tight text-marino sm:text-5xl">
              L&apos;impianto giusto, senza sorprese.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Installazione e assistenza su impianti idraulici, riscaldamento e
              climatizzazione in tutta la Toscana. Anche per trasferte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                Scrivici su WhatsApp
              </Button>
              <Button href={`tel:${PHONE_HREF}`} variant="outline" size="lg" className="rounded-full">
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center lg:max-w-none">
            <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-celeste/25 via-primary/10 to-transparent" />
            <Image
              src="/brand/logo-transparent.png"
              alt="Giani Impianti"
              width={420}
              height={420}
              priority
              className="relative w-[85%] max-w-[380px] drop-shadow-[0_18px_40px_rgba(11,58,91,0.18)]"
            />
          </div>
        </div>
      </Container>

      <WaveDivider fill="var(--color-background)" className="absolute inset-x-0 bottom-0 h-14 sm:h-20" />
    </section>
  );
}
