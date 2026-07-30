import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.gianimpianti.it";
const title = "Giani Impianti — Idraulica, Riscaldamento e Climatizzazione in Toscana";
const description =
  "Impianti idraulici, riscaldamento e climatizzazione/frigo in tutta la Toscana, disponibili anche per trasferte. Preventivo gratuito su WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Giani Impianti",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Giani Impianti — Idraulica, riscaldamento e climatizzazione in Toscana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Giani Impianti",
  url: siteUrl,
  description,
  telephone: "+393762315813",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Toscana",
  },
  sameAs: [
    "https://www.instagram.com/giani.impianti",
    "https://www.facebook.com/profile.php?id=61574385837522",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
