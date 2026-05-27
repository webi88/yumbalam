"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ARTICULOS } from "@/lib/articulos";

// Duplicamos la lista para crear el efecto de loop infinito sin "saltos"
const TRACK = [...ARTICULOS, ...ARTICULOS];

export default function ArticulosCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-selva-950 py-20 overflow-hidden relative">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tierra-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-selva-400 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="tag-pill bg-selva-800/60 border border-selva-700/50 text-tierra-300 mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Serie editorial
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-3 leading-tight">
              Una sola conversación
            </h2>
            <p className="text-selva-300/80 text-base mt-3 max-w-2xl">
              La protección de Yum Balam y el norte de Quintana Roo solo es legítima si
              incorpora bienestar económico y soberanía ejidal. Aquí va la conversación
              completa, publicada en Círculo Político.
            </p>
          </div>
        </div>
      </div>

      {/* Loop track */}
      <div
        className="relative mt-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient masks for edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-selva-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-selva-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {TRACK.map((a, idx) => (
            <motion.a
              key={`${a.numero}-${idx}`}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group relative w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden bg-selva-900 border border-selva-800 hover:border-tierra-500/40 hover:shadow-2xl hover:shadow-tierra-900/30 transition-colors"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={a.imagen}
                  alt={a.titulo}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-selva-950 via-selva-950/40 to-transparent" />

                {/* Number badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-tierra-500/90 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase">
                  Cap. {String(a.numero).padStart(2, "0")} / 17
                </div>

                {/* External icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-tierra-300 transition-colors">
                  {a.titulo}
                </h3>
                <p className="text-selva-400 text-sm mt-2 leading-relaxed line-clamp-2">
                  {a.resumen}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-selva-800">
                  <span className="text-tierra-400 text-[11px] font-semibold tracking-wide uppercase">
                    Leer en Círculo Político
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-tierra-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Hint */}
      <div className="container-max mt-10 text-center">
        <p className="text-selva-500 text-xs">
          ← Pasa el cursor para detener · Toca una tarjeta para abrir el artículo →
        </p>
      </div>
    </section>
  );
}
