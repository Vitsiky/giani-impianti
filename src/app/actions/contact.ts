import { z } from "zod";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"nome" | "telefono" | "messaggio" | "privacy", string[]>>;
};

const contactSchema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome (almeno 2 caratteri)."),
  telefono: z.string().min(6, "Inserisci un numero di telefono valido."),
  messaggio: z.string().min(10, "Descrivi brevemente cosa ti serve (almeno 10 caratteri)."),
  privacy: z.string().refine((v) => v === "on", {
    message: "Devi accettare l'informativa privacy per continuare.",
  }),
});

export async function sendContactMessage(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    nome: formData.get("nome"),
    telefono: formData.get("telefono"),
    messaggio: formData.get("messaggio"),
    privacy: formData.get("privacy") ?? "",
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
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `Nuova richiesta da ${nome}`,
        from_name: "Giani Impianti - Sito Web",
        Nome: nome,
        Telefono: telefono,
        Messaggio: messaggio,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      console.error("Web3Forms error:", data);
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
