import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICULOS, CAPITULOS, articulosPorCapitulo } from "@/lib/articulos";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = { title: "Noticias y Comunicados — Frente Pro Yum Balam" };

const CAP_COLORS: Record<string, string> = {
  diagnostico: "bg-tierra-100 text-tierra-700 border-tierra-200",
  marco:       "bg-selva-100 text-selva-700 border-selva-200",
  yumbalam:    "bg-caribe-100 text-caribe-700 border-caribe-200",
  voz:         "bg-arena-200 text-tierra-700 border-arena-300",
};

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <div className="bg-selva-900 pt-32 pb-16">
          <div className="container-max">
            <span className="tag-pill bg-selva-700/50 border border-selva-600/50 text-selva-300 mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Serie editorial · Círculo Político
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight max-w-3xl">
              Lo que estamos diciendo y haciendo
            </h1>
            <p className="text-selva-300 text-lg mt-5 max-w-2xl leading-relaxed">
              {ARTICULOS.length} artículos que construyen, paso a paso, la idea de una
              protección territorial con bienestar, soberanía ejidal y prosperidad
              compartida para el norte de Quintana Roo.
            </p>
          </div>
        </div>

        {/* Capítulos */}
        <section className="section-padding section-cream">
          <div className="container-max space-y-16">
            {CAPITULOS.map((cap) => {
              const lista = articulosPorCapitulo(cap.id);
              return (
                <div key={cap.id} id={cap.id} className="scroll-mt-24">
                  {/* Capítulo header */}
                  <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-arena-200">
                    <span className="font-heading text-5xl font-bold text-tierra-300">
                      {cap.numero}
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-tierra-500">
                        Capítulo
                      </div>
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-tierra-900 leading-tight">
                        {cap.titulo}
                      </h2>
                    </div>
                    <span className={`ml-auto hidden sm:inline-block tag-pill border ${CAP_COLORS[cap.id]}`}>
                      {lista.length} artículos
                    </span>
                  </div>
                  <p className="text-tierra-600 leading-relaxed mb-8 max-w-3xl">
                    {cap.bajada}
                  </p>

                  {/* Articles grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lista.map((a) => (
                      <a
                        key={a.numero}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group card-cream overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={a.imagen}
                            alt={a.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-tierra-700 text-[10px] font-bold tracking-widest">
                            Cap. {String(a.numero).padStart(2, "0")}
                          </span>
                          <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-4 h-4 text-tierra-700" />
                          </span>
                        </div>
                        <div className="p-5">
                          <h3 className="font-heading font-bold text-tierra-900 group-hover:text-selva-700 transition-colors leading-snug mb-2 line-clamp-3">
                            {a.titulo}
                          </h3>
                          <p className="text-tierra-500 text-sm leading-relaxed line-clamp-2 mb-4">
                            {a.resumen}
                          </p>
                          <div className="flex items-center gap-1.5 text-tierra-500 text-[11px] font-semibold uppercase tracking-wide">
                            Leer en Círculo Político
                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
