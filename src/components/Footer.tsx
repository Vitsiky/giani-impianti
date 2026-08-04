import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { FacebookIcon } from "@/components/ui/icons/FacebookIcon";
import { INSTAGRAM_URL, FACEBOOK_URL, PHONE_DISPLAY, ADMIN_EMAIL } from "@/lib/content/contact";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <a href="#top" className="inline-flex items-center gap-2.5">
            <Image src="/icon.png" alt="" width={24} height={24} className="h-6 w-6" />
            <span className="font-heading text-sm font-semibold text-marino">
              Giani Impianti
            </span>
          </a>
          <p className="text-sm text-muted-foreground">{PHONE_DISPLAY} · Tutta la Toscana</p>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Giani Impianti"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-marino transition-colors hover:bg-muted"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Giani Impianti"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-marino transition-colors hover:bg-muted"
            >
              <FacebookIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          Giani Impianti · P.IVA 02535860973 · Sede legale: Viale della Repubblica, 239, Prato
          (PO) 59100 · Sede operativa: Via Montelupo, 28, Montespertoli (FI) 50025
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left">
          Per informazioni amministrative:{" "}
          <a href={`mailto:${ADMIN_EMAIL}`} className="font-medium text-marino hover:underline">
            {ADMIN_EMAIL}
          </a>
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left">
          Sito realizzato da{" "}
          <a
            href="https://www.instantweb.info"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-marino hover:underline"
          >
            Instant Web
          </a>
          {" · "}
          <Link href="/privacy" className="font-medium text-marino hover:underline">
            Privacy
          </Link>
        </p>
      </Container>
    </footer>
  );
}
