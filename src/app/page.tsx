import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import QuienesSomosSection from "@/components/QuienesSomosSection";
import BlogPreview from "@/components/BlogPreview";
import MultimediaSection from "@/components/MultimediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoCarousel />
      <QuienesSomosSection />
      <BlogPreview />
      <MultimediaSection />
      <Footer />
    </main>
  );
}
