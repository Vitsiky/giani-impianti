export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "idraulica",
    title: "Idraulica",
    description:
      "Installazione e manutenzione di impianti idraulici, riparazione perdite, sostituzione sanitari e tubazioni, per case private e attività commerciali.",
  },
  {
    slug: "riscaldamento",
    title: "Riscaldamento",
    description:
      "Installazione, manutenzione e assistenza su caldaie e impianti di riscaldamento, per garantire efficienza e sicurezza durante tutto l'anno.",
  },
  {
    slug: "climatizzazione",
    title: "Climatizzazione e Refrigerazione",
    description:
      "Installazione e manutenzione di climatizzatori e impianti di refrigerazione, per abitazioni, negozi ed esercizi commerciali (banchi frigo, celle, vetrine refrigerate).",
  },
];
