import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { Users, Sprout, Fish } from "lucide-react";
import { IMAGES } from "@/lib/images";

const VOCES = [
  {
    icon: Users,
    color: "bg-selva-100 text-selva-700",
    titulo: "Ejidatarios",
    texto:
      "Los ejidos son el corazón legal y social del territorio. Son quienes tienen el derecho sobre la tierra y quienes más pierden o ganan con cada decisión de desarrollo.",
  },
  {
    icon: Sprout,
    color: "bg-tierra-100 text-tierra-700",
    titulo: "Campesinos y milperos",
    texto:
      "Quienes trabajan el monte conocen sus ciclos, sus límites y su potencial mejor que cualquier consultor externo. Su conocimiento es el punto de partida.",
  },
  {
    icon: Fish,
    color: "bg-caribe-100 text-caribe-700",
    titulo: "Pescadores y comunidades costeras",
    texto:
      "La Laguna Yalahau y el litoral caribeño sostienen familias enteras. Cuidarlos es una cuestión de justicia y de sentido económico.",
  },
];

export default function QuienesSomosSection() {
  return (
    <section className="section-padding section-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <AnimateOnScroll direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={IMAGES[1]}
                alt="Comunidad y territorio Yum Balam"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-selva-950/80 to-transparent p-6">
                <p className="text-white font-heading font-semibold text-lg leading-snug">
                  "La selva no es un obstáculo para el desarrollo. Es la razón por la que el desarrollo vale la pena."
                </p>
                <p className="text-selva-300 text-sm mt-2">— Asamblea Ejidal, Mayo 2026</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll delay={0.1}>
              <span className="tag-pill bg-selva-100 text-selva-700 border border-selva-200 mb-4">
                Quiénes Somos
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-tierra-900 mt-3 mb-5 leading-tight">
                Voces que vienen del territorio, no de la ciudad
              </h2>
              <p className="text-tierra-700 text-lg leading-relaxed mb-8">
                El Frente Pro Desarrollo Sustentable Yum Balam no es una ONG ni una empresa.
                Es la organización de las comunidades que viven dentro y alrededor de la
                Reserva de la Biosfera Yum Balam, en el norte de Quintana Roo.
              </p>
            </AnimateOnScroll>

            <div className="space-y-4">
              {VOCES.map(({ icon: Icon, color, titulo, texto }, i) => (
                <AnimateOnScroll key={titulo} delay={0.15 + i * 0.1}>
                  <div className="flex gap-4 p-4 rounded-xl bg-arena-50 border border-arena-200">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-tierra-900 text-sm mb-1">{titulo}</h3>
                      <p className="text-tierra-600 text-sm leading-relaxed">{texto}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.45}>
              <div className="mt-8">
                <Link href="/quienes-somos" className="btn-primary">
                  Conoce nuestra historia completa
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
