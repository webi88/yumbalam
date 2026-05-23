import AnimateOnScroll from "./AnimateOnScroll";
import { Facebook, Instagram, Youtube, Play } from "lucide-react";

const REDES = [
  { icon: Facebook,  label: "Facebook",  handle: "@FrenteYumBalam",  href: "https://facebook.com", color: "bg-blue-600 hover:bg-blue-500" },
  { icon: Instagram, label: "Instagram", handle: "@frenteproyumbalam", href: "https://instagram.com", color: "bg-pink-600 hover:bg-pink-500" },
  { icon: Youtube,   label: "YouTube",   handle: "Frente Yum Balam",  href: "https://youtube.com", color: "bg-red-600 hover:bg-red-500" },
];

export default function MultimediaSection() {
  return (
    <section className="section-padding section-selva">
      <div className="container-max">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <span className="tag-pill bg-selva-700/50 border border-selva-600/50 text-selva-300 mb-4">
              Multimedia y Redes
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-2">
              Míranos, síguenos, comparte
            </h2>
            <p className="text-selva-300 mt-3 max-w-xl mx-auto">
              Nuestras acciones, asambleas y recorridos por el territorio se documentan en tiempo real.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Video embed placeholder */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden bg-selva-800 aspect-video group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Video del Frente"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                <div className="text-center px-6">
                  <p className="text-white font-heading font-bold text-lg leading-snug">
                    Asamblea Ejidal — Mayo 2026
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    "El desarrollo que queremos: nuestras condiciones"
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-selva-900/80 rounded-lg px-3 py-1.5 text-xs text-white/70">
                Próximamente en YouTube
              </div>
            </div>
          </AnimateOnScroll>

          {/* Redes sociales */}
          <AnimateOnScroll direction="left" delay={0.15}>
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-white mb-6">
                Síguenos en redes sociales
              </h3>
              {REDES.map(({ icon: Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl ${color} transition-colors group`}
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{label}</div>
                    <div className="text-white/70 text-xs">{handle}</div>
                  </div>
                  <div className="ml-auto text-white/40 group-hover:text-white/80 text-xs transition-colors">
                    Seguir →
                  </div>
                </a>
              ))}

              {/* TikTok manual */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.79a4.83 4.83 0 01-1.01-.1z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">TikTok</div>
                  <div className="text-white/70 text-xs">@frenteproyumbalam</div>
                </div>
                <div className="ml-auto text-white/40 group-hover:text-white/80 text-xs transition-colors">
                  Seguir →
                </div>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
