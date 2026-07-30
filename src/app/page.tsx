import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Servizi } from "@/components/sections/Servizi";
import { ZonaServita } from "@/components/sections/ZonaServita";
import { Faq } from "@/components/sections/Faq";
import { Contatti } from "@/components/sections/Contatti";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Servizi />
        <ZonaServita />
        <Faq />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
