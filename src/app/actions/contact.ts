"use server";

import { Resend } from "resend";
import { z } from "zod";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"nome" | "telefono" | "messaggio", string[]>>;
};

const contactSchema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome (almeno 2 caratteri)."),
  telefono: z.string().min(6, "Inserisci un numero di telefono valido."),
  messaggio: z.string().min(10, "Descrivi brevemente cosa ti serve (almeno 10 caratteri)."),
});

export async function sendContactMessage(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    nome: formData.get("nome"),
    telefono: formData.get("telefono"),
    messaggio: formData.get("messaggio"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Controlla i campi evidenziati.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { nome, telefono, messaggio } = parsed.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Giani Impianti <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuova richiesta da ${nome}`,
      text: `Nome: ${nome}\nTelefono: ${telefono}\n\n${messaggio}`,
      html: `<p><strong>Nome:</strong> ${nome}</p><p><strong>Telefono:</strong> ${telefono}</p><p><strong>Messaggio:</strong></p><p>${messaggio}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Non sono riuscito a inviare il messaggio. Riprova o scrivici su WhatsApp.",
      };
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message: "Non sono riuscito a inviare il messaggio. Riprova o scrivici su WhatsApp.",
    };
  }

  return {
    status: "success",
    message: "Richiesta inviata. Ti rispondiamo il prima possibile.",
  };
}
