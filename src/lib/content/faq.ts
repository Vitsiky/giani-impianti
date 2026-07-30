export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "In quali zone operate?",
    answer:
      "Lavoriamo in tutta la Toscana. Per esigenze particolari siamo disponibili anche per trasferte fuori regione: scrivici per verificare la fattibilità.",
  },
  {
    question: "Che tipo di interventi fate?",
    answer:
      "Ci occupiamo di impianti idraulici, riscaldamento e climatizzazione/refrigerazione, sia per privati che per attività commerciali (bar, ristoranti, negozi alimentari).",
  },
  {
    question: "Fate sopralluoghi e preventivi?",
    answer:
      "Sì. Scrivici su WhatsApp descrivendo il tipo di intervento: ti indichiamo se serve un sopralluogo o se possiamo darti già una prima indicazione.",
  },
  {
    question: "Intervenite anche per urgenze?",
    answer:
      "Scrivici su WhatsApp spiegando il problema: verifichiamo la disponibilità e ti rispondiamo il prima possibile.",
  },
  {
    question: "Lavorate solo con privati o anche con aziende?",
    answer:
      "Entrambi. Realizziamo interventi per abitazioni private e per attività commerciali, inclusi impianti di refrigerazione per il settore alimentare (banchi frigo, celle, vetrine).",
  },
];
