import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES[0]}
          alt="Territorio Yum Balam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-selva-950/80 via-selva-950/60 to-selva-950/85" />
      </div>

      {/* Content */}
      <div className="relative container-max pt-24 pb-16 flex flex-col items-start">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-tierra-400 animate-pulse" />
          <span className="text-tierra-300 text-sm font-semibold tracking-wide uppercase">
            Quintana Roo · Área Natural Protegida Yum Balam
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
          La tierra, el monte y el mar{" "}
          <span className="text-selva-300">son nuestros.</span>
          <br />
          El futuro también.
        </h1>

        <p className="text-white/75 text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          Somos ejidatarios, campesinos y pobladores originarios de la región norte de Quintana Roo.
          Exigimos un desarrollo que nos incluya, que cuide lo que tenemos, y que construya con nosotros,
          no por encima de nosotros.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/quienes-somos" className="btn-primary text-base px-7 py-4">
            Conoce el Frente <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/noticias" className="btn-outline text-base px-7 py-4 border-white/40 text-white hover:bg-white/10">
            Lee nuestros comunicados
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/15 w-full max-w-lg">
          {[
            { value: "3", label: "Ejidos organizados" },
            { value: "50K", label: "Ha. de reserva protegidas" },
            { value: "2 años", label: "De organización activa" },
          ].map(({ value, label }) => (
            <div key={label} className="text-left">
              <div className="font-heading text-2xl font-bold text-selva-300">{value}</div>
              <div className="text-white/55 text-xs mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
