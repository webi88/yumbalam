"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    titulo: "Asamblea Ejidal — Mayo 2026",
    subtitulo: "\"El desarrollo que queremos: nuestras condiciones\"",
    duracion: "18 min",
    categoria: "Asamblea",
    thumb: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80",
    youtubeId: null,
  },
  {
    id: 2,
    titulo: "Recorrido por la Reserva Yum Balam",
    subtitulo: "Manglar, selva y litoral: lo que queremos cuidar",
    duracion: "12 min",
    categoria: "Territorio",
    thumb: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=900&q=80",
    youtubeId: null,
  },
  {
    id: 3,
    titulo: "Voces de Holbox: pescadores organizados",
    subtitulo: "Don Aurelio y su familia llevan 40 años en la laguna",
    duracion: "9 min",
    categoria: "Comunidad",
    thumb: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80",
    youtubeId: null,
  },
  {
    id: 4,
    titulo: "Propuesta de turismo ejidal sustentable",
    subtitulo: "Así funciona el modelo que estamos construyendo",
    duracion: "22 min",
    categoria: "Propuesta",
    thumb: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=80",
    youtubeId: null,
  },
  {
    id: 5,
    titulo: "Rueda de prensa — Comunicado Conjunto",
    subtitulo: "Tres ejidos, una sola voz ante las autoridades",
    duracion: "35 min",
    categoria: "Comunicado",
    thumb: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=900&q=80",
    youtubeId: null,
  },
];

const CAT_COLORS: Record<string, string> = {
  Asamblea:   "bg-tierra-100  text-tierra-700",
  Territorio: "bg-selva-100   text-selva-700",
  Comunidad:  "bg-caribe-100  text-caribe-700",
  Propuesta:  "bg-selva-100   text-selva-700",
  Comunicado: "bg-arena-200   text-tierra-700",
};

export default function VideoCarousel() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % VIDEOS.length);
    }, 5000);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const prev = () => { stopAuto(); setActive((a) => (a - 1 + VIDEOS.length) % VIDEOS.length); startAuto(); };
  const next = () => { stopAuto(); setActive((a) => (a + 1) % VIDEOS.length); startAuto(); };

  const featured = VIDEOS[active];

  return (
    <section className="bg-selva-950 py-16 overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="tag-pill bg-selva-800 border border-selva-700 text-selva-300 mb-3">Video</span>
            <h2 className="font-heading text-3xl font-bold text-white mt-2">Míranos en acción</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-selva-700 text-white hover:bg-selva-800 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-selva-700 text-white hover:bg-selva-800 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Featured */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-selva-900 cursor-pointer group"
                onClick={() => setLightbox(active)}
              >
                <img
                  src={featured.thumb}
                  alt={featured.titulo}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-selva-950/90 via-selva-950/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-9 h-9 text-white ml-1.5 fill-white" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className={`tag-pill text-xs mb-2 ${CAT_COLORS[featured.categoria]}`}>
                    {featured.categoria}
                  </span>
                  <h3 className="font-heading font-bold text-white text-lg leading-snug">
                    {featured.titulo}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{featured.subtitulo}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-white/40 text-xs">{featured.duracion}</span>
                    <span className="text-selva-400 text-xs">Próximamente en YouTube</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                  <motion.div
                    key={`bar-${active}`}
                    className="h-full bg-tierra-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {VIDEOS.map((v, i) => (
              <motion.button
                key={v.id}
                onClick={() => { stopAuto(); setActive(i); startAuto(); }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
                className={`flex gap-3 rounded-xl p-2.5 text-left transition-all duration-200 group ${
                  i === active
                    ? "bg-selva-800 ring-1 ring-selva-600"
                    : "hover:bg-selva-900"
                }`}
              >
                {/* Thumb */}
                <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={v.thumb} alt={v.titulo} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className={`w-4 h-4 fill-white text-white ${i === active ? "opacity-100" : "opacity-60"}`} />
                  </div>
                </div>

                <div className="flex-1 min-w-0 py-0.5">
                  <span className={`text-xs font-semibold ${i === active ? "text-tierra-300" : "text-selva-500"}`}>
                    {v.categoria} · {v.duracion}
                  </span>
                  <p className={`text-sm font-semibold leading-snug line-clamp-2 mt-0.5 ${
                    i === active ? "text-white" : "text-selva-300 group-hover:text-white"
                  } transition-colors`}>
                    {v.titulo}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dot indicators mobile */}
        <div className="flex justify-center gap-1.5 mt-5 lg:hidden">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => { stopAuto(); setActive(i); startAuto(); }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === active ? "bg-tierra-400 w-5" : "bg-selva-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl bg-selva-950 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="aspect-video relative bg-selva-900 flex items-center justify-center">
                <img
                  src={VIDEOS[lightbox].thumb}
                  alt={VIDEOS[lightbox].titulo}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white/50 fill-white/50 ml-1" />
                  </div>
                  <p className="text-white/50 text-sm">Video próximamente disponible</p>
                </div>
              </div>
              <div className="p-5">
                <span className={`tag-pill text-xs ${CAT_COLORS[VIDEOS[lightbox].categoria]}`}>
                  {VIDEOS[lightbox].categoria}
                </span>
                <h3 className="font-heading font-bold text-white text-xl mt-2">{VIDEOS[lightbox].titulo}</h3>
                <p className="text-selva-400 text-sm mt-1">{VIDEOS[lightbox].subtitulo}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
