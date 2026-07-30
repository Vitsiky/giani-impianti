import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/content/contact";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="inline-flex h-11 items-center gap-2.5">
            <Image src="/icon.png" alt="" width={32} height={32} className="h-8 w-8" priority />
            <span className="font-heading text-lg font-semibold tracking-tight text-marino">
              Giani Impianti
            </span>
          </a>
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}
