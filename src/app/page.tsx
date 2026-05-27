import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArticulosCarousel from "@/components/ArticulosCarousel";
import QueDefendemosSection from "@/components/QueDefendemosSection";
import QuienesSomosSection from "@/components/QuienesSomosSection";
import NarrativaTabs from "@/components/NarrativaTabs";
import MultimediaSection from "@/components/MultimediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ArticulosCarousel />
      <QueDefendemosSection />
      <QuienesSomosSection />
      <NarrativaTabs />
      <MultimediaSection />
      <Footer />
    </main>
  );
}
