"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const LINKS = [
  { label: "Inicio",        href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Noticias",      href: "/noticias" },
  { label: "Contacto",      href: "/contacto" },
];

const LEGALES = [
  { label: "Aviso de Privacidad", href: "#" },
  { label: "Términos de Uso",     href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer className="bg-selva-950 text-white border-t border-selva-800">
      <div className="container-max py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-selva-600 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-bold text-white text-sm">Frente Pro</span>
                <span className="block font-heading text-selva-400 text-xs tracking-wide">Desarrollo Sustentable Yum Balam</span>
              </div>
            </div>
            <p className="text-selva-400 text-sm leading-relaxed max-w-xs mb-6">
              Una organización de ejidatarios, campesinos y comunidades originarias de Quintana Roo que creen que el mejor cuidado de Yum Balam pasa por el desarrollo de quienes lo habitan.
            </p>
            {/* Suscripción */}
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                <div className="flex-1 flex items-center gap-2 bg-selva-800 border border-selva-700 rounded-lg px-3 py-2">
                  <Mail className="w-4 h-4 text-selva-500 flex-shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="bg-transparent text-sm text-white placeholder:text-selva-500 outline-none w-full"
                  />
                </div>
                <button type="submit" className="btn-tierra text-sm px-4 py-2 rounded-lg">
                  Únete
                </button>
              </form>
            ) : (
              <p className="text-selva-400 text-sm bg-selva-800 rounded-lg px-4 py-3 max-w-sm">
                ✓ ¡Gracias! Te mantendremos informado.
              </p>
            )}
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-selva-400 hover:text-selva-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wide">Redes Sociales</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: Facebook,  label: "Facebook",  href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Youtube,   label: "YouTube",   href: "https://youtube.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-selva-400 hover:text-selva-300 text-sm transition-colors">
                  <Icon className="w-4 h-4" /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-selva-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-selva-600 text-xs">
            © {new Date().getFullYear()} Frente Pro Desarrollo Sustentable Yum Balam · frenteproyumbalam.org
          </p>
          <div className="flex gap-4">
            {LEGALES.map((l) => (
              <Link key={l.label} href={l.href} className="text-selva-700 hover:text-selva-500 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
            <span className="text-selva-700 text-xs">
              Desarrollado por{" "}
              <a href="https://webi.mx" target="_blank" rel="noopener noreferrer" className="hover:text-selva-500 transition-colors">
                webi.mx
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
