import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { PHONE_DISPLAY } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Informativa Privacy — Giani Impianti",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container>
          <div className="prose prose-marino mx-auto max-w-2xl py-16 sm:py-24">
            <h1 className="font-heading text-3xl font-black tracking-tight text-marino">
              Informativa sulla privacy
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Ultimo aggiornamento: agosto 2026
            </p>

            <h2 className="mt-8 font-heading text-xl font-bold text-marino">
              Titolare del trattamento
            </h2>
            <p>
              Giani Impianti, con sede legale in Via della Repubblica, Prato, P.IVA
              02535860973, contattabile al numero {PHONE_DISPLAY}, è il titolare del
              trattamento dei dati personali raccolti tramite questo sito.
            </p>

            <h2 className="mt-8 font-heading text-xl font-bold text-marino">
              Dati raccolti e finalità
            </h2>
            <p>
              Attraverso il modulo di contatto raccogliamo nome, numero di telefono e il
              contenuto del messaggio inviato. Questi dati sono utilizzati esclusivamente
              per rispondere alla richiesta di informazioni o preventivo e non vengono usati
              per finalità di marketing né ceduti a terzi per scopi commerciali.
            </p>

            <h2 className="mt-8 font-heading text-xl font-bold text-marino">
              Servizi di terze parti
            </h2>
            <p>
              L&apos;invio del modulo di contatto è gestito tramite il servizio{" "}
              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-marino underline"
              >
                Web3Forms
              </a>
              , che riceve i dati inseriti nel modulo al solo scopo di inoltrarli alla nostra
              casella di posta. Consigliamo di consultare l&apos;informativa privacy di
              Web3Forms per maggiori dettagli sul trattamento da parte loro.
            </p>

            <h2 className="mt-8 font-heading text-xl font-bold text-marino">
              Conservazione dei dati
            </h2>
            <p>
              I dati inviati tramite il modulo sono conservati per il tempo necessario a
              gestire la richiesta e per eventuali obblighi di legge, e successivamente
              cancellati.
            </p>

            <h2 className="mt-8 font-heading text-xl font-bold text-marino">
              I tuoi diritti
            </h2>
            <p>
              In qualsiasi momento puoi richiedere l&apos;accesso, la rettifica o la
              cancellazione dei tuoi dati personali, oppure opporti al loro trattamento,
              scrivendoci tramite i contatti presenti sul sito. Hai inoltre diritto di
              proporre reclamo al Garante per la protezione dei dati personali.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
