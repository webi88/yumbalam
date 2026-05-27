"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import { CAPITULOS, articulosPorCapitulo, type Capitulo } from "@/lib/articulos";

export default function NarrativaTabs() {
  const [activeId, setActiveId] = useState<Capitulo["id"]>(CAPITULOS[0].id);
  const activo = CAPITULOS.find((c) => c.id === activeId)!;
  const lista = articulosPorCapitulo(activeId);

  return (
    <section className="section-padding bg-arena-50 relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-selva-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-tierra-100 rounded-full blur-3xl opacity-50" />

      <div className="container-max relative">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="tag-pill bg-selva-100 text-selva-700 border border-selva-200 mb-4">
            <Compass className="w-3.5 h-3.5" /> Narrativa madre
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-tierra-900 mt-3 leading-tight">
            La conversación, ordenada
          </h2>
          <p className="text-tierra-700 text-lg leading-relaxed mt-4 italic border-l-4 border-tierra-400 pl-5">
            La protección ambiental en Yum Balam y el norte de Quintana Roo solo será
            legítima y sostenible si incorpora bienestar económico, soberanía ejidal
            y prosperidad compartida para las comunidades históricamente excluidas.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {CAPITULOS.map((cap) => {
            const isActive = cap.id === activeId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                className={`relative flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-tierra-900 border-tierra-900 text-white shadow-lg shadow-tierra-900/20"
                    : "bg-white border-arena-200 text-tierra-700 hover:border-tierra-400 hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`font-heading text-2xl font-bold ${
                    isActive ? "text-tierra-300" : "text-tierra-400"
                  }`}
                >
                  {cap.numero}
                </span>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest font-semibold opacity-60">
                    Capítulo
                  </div>
                  <div className="font-bold text-sm">{cap.titulo}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active chapter content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid lg:grid-cols-3 gap-5"
          >
            {/* Capítulo intro card */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start bg-tierra-900 rounded-2xl p-7 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  src={lista[0]?.imagen}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-tierra-900/70" />
              </div>
              <div className="relative">
                <div className="font-heading text-6xl font-bold text-tierra-300/60 leading-none">
                  {activo.numero}
                </div>
                <h3 className="font-heading text-2xl font-bold mt-2 leading-tight">
                  {activo.titulo}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mt-4">
                  {activo.bajada}
                </p>
                <div className="mt-6 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="text-tierra-300 text-xs font-bold tracking-widest uppercase">
                      {lista.length} artículos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {lista.map((a, i) => (
                <motion.a
                  key={a.numero}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-arena-200 hover:border-tierra-400 hover:shadow-xl transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={a.imagen}
                      alt={a.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-tierra-700 text-[10px] font-bold tracking-widest">
                      {String(a.numero).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-tierra-900 text-sm leading-snug line-clamp-2 group-hover:text-selva-700 transition-colors">
                      {a.titulo}
                    </h4>
                    <p className="text-tierra-500 text-xs mt-1.5 leading-relaxed line-clamp-2">
                      {a.resumen}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-tierra-500 text-[11px] font-semibold uppercase tracking-wide">
                      Leer
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {CAPITULOS.map((cap, i) => {
            const isActive = cap.id === activeId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                className={`flex items-center gap-2 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <span
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isActive ? "w-12 bg-tierra-700" : "w-5 bg-tierra-400"
                  }`}
                />
                {i < CAPITULOS.length - 1 && (
                  <span className="text-tierra-300 text-xs">→</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
