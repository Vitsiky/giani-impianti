"use client";

import { useActionState } from "react";
import { Send, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { FacebookIcon } from "@/components/ui/icons/FacebookIcon";
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "@/lib/content/contact";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

export function Contatti() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <section id="contatti" className="border-t border-border py-16 sm:py-24">
      <Container>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-marino sm:text-4xl">
          Contattaci
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Il modo più veloce per un preventivo: scrivici su WhatsApp. In alternativa, usa il
          modulo qui sotto.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="flex flex-col justify-between rounded-xl border border-border bg-marino p-8 text-on-marino">
            <div>
              <WhatsAppIcon className="h-8 w-8" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-semibold">Scrivici su WhatsApp</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Risposta diretta: {PHONE_DISPLAY}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-fit"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                Apri WhatsApp
              </Button>
              <Button href={`tel:${PHONE_HREF}`} variant="outline" className="w-full border-white/30 bg-transparent text-on-marino hover:bg-white/10 sm:w-fit">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Chiama ora
              </Button>
              <div className="mt-2 flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Giani Impianti"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-on-marino transition-colors hover:bg-white/10"
                >
                  <InstagramIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Giani Impianti"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-on-marino transition-colors hover:bg-white/10"
                >
                  <FacebookIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <form action={formAction} className="rounded-xl border border-border bg-background p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="text-sm font-medium text-marino">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="min-h-11 rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {state.errors?.nome && (
                  <p className="text-sm text-destructive">{state.errors.nome[0]}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="telefono" className="text-sm font-medium text-marino">
                  Telefono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="min-h-11 rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {state.errors?.telefono && (
                  <p className="text-sm text-destructive">{state.errors.telefono[0]}</p>
                )}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-1.5">
              <label htmlFor="messaggio" className="text-sm font-medium text-marino">
                Cosa ti serve?
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                required
                rows={4}
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              {state.errors?.messaggio && (
                <p className="text-sm text-destructive">{state.errors.messaggio[0]}</p>
              )}
            </div>

            <Button type="submit" disabled={pending} className="mt-6 w-full sm:w-fit">
              <Send className="h-4 w-4" aria-hidden="true" />
              {pending ? "Invio in corso…" : "Invia richiesta"}
            </Button>

            <p aria-live="polite" className="mt-3 text-sm">
              {state.status === "success" && (
                <span className="text-muted-foreground">{state.message}</span>
              )}
              {state.status === "error" && (
                <span className="text-destructive">{state.message}</span>
              )}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
