"use client";

import { motion } from "framer-motion";
import {
  Scale, HandCoins, Users2, Vote, Leaf, HeartHandshake, Sparkles, ShieldCheck,
} from "lucide-react";
import { IMAGES } from "@/lib/images";

const PILARES = [
  {
    icon: Scale,
    color: "bg-tierra-100 text-tierra-700",
    titulo: "Justicia territorial",
    texto:
      "Defendemos un desarrollo que reduzca desigualdades y permita que las comunidades del norte de Quintana Roo participen del bienestar que genera su propio territorio.",
  },
  {
    icon: HandCoins,
    color: "bg-selva-100 text-selva-700",
    titulo: "Prosperidad compartida",
    texto:
      "El crecimiento económico solo tiene sentido cuando sus beneficios llegan verdaderamente al pueblo y no se concentran en unos cuantos sectores.",
  },
  {
    icon: Users2,
    color: "bg-caribe-100 text-caribe-700",
    titulo: "Soberanía comunitaria",
    texto:
      "Reconocemos a ejidos, comunidades mayas, pescadores y habitantes locales como actores fundamentales en el cuidado y futuro del territorio.",
  },
  {
    icon: Vote,
    color: "bg-arena-200 text-tierra-700",
    titulo: "Conservación con participación",
    texto:
      "La protección ambiental necesita legitimidad social. Las comunidades deben formar parte activa de las decisiones sobre su entorno.",
  },
  {
    icon: Leaf,
    color: "bg-selva-100 text-selva-700",
    titulo: "Desarrollo sustentable",
    texto:
      "Rechazamos la falsa dicotomía entre desarrollo y naturaleza. Apostamos por modelos responsables, regulados y compatibles con la conservación ecológica.",
  },
  {
    icon: HeartHandshake,
    color: "bg-tierra-100 text-tierra-700",
    titulo: "Bienestar colectivo",
    texto:
      "El verdadero desarrollo se mide en dignidad, oportunidades y calidad de vida para quienes habitan el territorio.",
  },
  {
    icon: Sparkles,
    color: "bg-caribe-100 text-caribe-700",
    titulo: "Humanismo ambiental",
    texto:
      "Creemos en un ambientalismo que coloque al pueblo en el centro de la conversación territorial y ambiental.",
  },
];

export default function QueDefendemosSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="que-defendemos">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES[5] ?? IMAGES[0]}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arena-50 via-arena-50/95 to-arena-50" />
      </div>

      <div className="container-max relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="tag-pill bg-tierra-100 text-tierra-700 border border-tierra-200 mb-4 mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" /> Qué defendemos
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-tierra-900 mt-3 leading-tight">
            No puede existir conservación ambiental duradera sin justicia social
          </h2>
          <p className="text-tierra-700 text-lg leading-relaxed mt-5">
            Este espacio defiende una idea central: <strong>no puede existir conservación
            ambiental duradera sin justicia social</strong>, bienestar colectivo y
            participación comunitaria.
          </p>
          <p className="text-tierra-600 text-base leading-relaxed mt-4">
            Creemos en un modelo donde proteger la naturaleza y generar prosperidad
            para las comunidades no sean objetivos opuestos, sino parte de la misma
            transformación territorial.
          </p>
        </div>

        {/* Pilares grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILARES.map(({ icon: Icon, color, titulo, texto }, i) => (
            <motion.div
              key={titulo}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-6 border border-arena-200 hover:border-tierra-400 hover:shadow-xl transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-tierra-900 text-lg leading-snug">
                {titulo}
              </h3>
              <p className="text-tierra-600 text-sm leading-relaxed mt-2">{texto}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto text-center bg-tierra-900 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src={IMAGES[10] ?? IMAGES[0]}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-tierra-900/60" />
          </div>
          <p className="relative font-heading text-xl lg:text-2xl leading-snug">
            Esta plataforma existe para impulsar una visión distinta del Caribe mexicano:
            <span className="block mt-2 text-tierra-300">
              más justa, más sustentable y con mayor participación social.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
