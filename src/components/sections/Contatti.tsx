"use client";

import { useActionState } from "react";
import { Send, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
    <section id="contatti" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-black tracking-tight text-marino sm:text-4xl">
            Parliamone su WhatsApp
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Il modo più veloce per un preventivo. Rispondiamo direttamente, senza intermediari.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Scrivici su WhatsApp
            </Button>
            <Button href={`tel:${PHONE_HREF}`} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </Button>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Giani Impianti"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-marino transition-colors hover:bg-muted"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Giani Impianti"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-marino transition-colors hover:bg-muted"
            >
              <FacebookIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-xl">
          <div className="rounded-[28px] border border-border bg-background p-8 sm:p-10">
            <h3 className="font-heading text-lg font-bold text-marino">
              Preferisci scrivere qui?
            </h3>
            <form action={formAction} className="mt-5">
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
                    className="min-h-11 rounded-xl border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                    className="min-h-11 rounded-xl border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                  className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {state.errors?.messaggio && (
                  <p className="text-sm text-destructive">{state.errors.messaggio[0]}</p>
                )}
              </div>

              <Button type="submit" disabled={pending} className="mt-6 w-full">
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
        </Reveal>
      </Container>
    </section>
  );
}
