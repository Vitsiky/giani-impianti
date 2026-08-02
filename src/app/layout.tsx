import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://gianiimpianti.com";
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
  verification: {
    google: "Hji9xcpfdpGTfD3ZcD2-qCBBqSlZJV6l4duDyC0g08s",
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
      className={`${archivo.variable} ${publicSans.variable} h-full antialiased`}
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
