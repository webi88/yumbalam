"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",        href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Noticias",      href: "/noticias" },
  { label: "Contacto",      href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-selva-950 shadow-lg"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-selva-500 flex items-center justify-center shadow flex-shrink-0 group-hover:bg-selva-400 transition-colors">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-heading font-bold text-white text-sm">Frente Pro</span>
              <span className="block font-heading font-semibold text-selva-300 text-xs -mt-0.5 tracking-wide">Yum Balam</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/85 hover:text-selva-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn-tierra text-sm px-5 py-2.5">
              Únete al Frente
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white hover:text-selva-300 transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-selva-950 flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-selva-300 text-2xl font-heading font-semibold py-4 border-b border-selva-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8">
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="btn-tierra w-full justify-center text-lg"
              >
                Únete al Frente
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
