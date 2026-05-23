"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "", tipo: "info" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-selva-900 pt-32 pb-16">
          <div className="container-max max-w-3xl">
            <span className="tag-pill bg-selva-700/50 border border-selva-600/50 text-selva-300 mb-4">
              Contacto
            </span>
            <h1 className="font-heading text-4xl font-bold text-white mt-3 mb-4">
              Únete o escríbenos
            </h1>
            <p className="text-selva-300 text-lg leading-relaxed">
              Si eres ejidatario, campesino, académico, periodista o simplemente alguien que quiere
              saber más del Frente, escríbenos.
            </p>
          </div>
        </div>

        <section className="section-padding section-cream">
          <div className="container-max max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-tierra-900 mb-4">Información de contacto</h2>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: "Ubicación", text: "Holbox, Quintana Roo, México" },
                      { icon: Mail,   label: "Correo",    text: "contacto@frenteproyumbalam.org" },
                      { icon: Phone,  label: "Teléfono",  text: "+52 998 000 0000" },
                    ].map(({ icon: Icon, label, text }) => (
                      <div key={label} className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-selva-100 text-selva-700 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-tierra-500 text-xs font-semibold uppercase tracking-wide">{label}</p>
                          <p className="text-tierra-800 text-sm mt-0.5">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-selva-900 rounded-2xl p-6 text-white">
                  <h3 className="font-heading font-bold text-lg mb-3">¿Quieres unirte al Frente?</h3>
                  <p className="text-selva-300 text-sm leading-relaxed">
                    Si eres ejidatario de Holbox, Chiquila o Kantunilkín y quieres participar
                    en la organización, mándanos un mensaje indicando tu ejido de origen.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-arena-200 p-8 space-y-5 shadow-sm">
                    <div>
                      <label className="block text-tierra-700 text-sm font-semibold mb-1.5">Nombre completo</label>
                      <input
                        type="text" name="nombre" required
                        value={form.nombre} onChange={handleChange}
                        className="w-full border border-arena-200 rounded-lg px-4 py-2.5 text-tierra-900 text-sm outline-none focus:ring-2 focus:ring-selva-400 focus:border-transparent bg-arena-50"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-tierra-700 text-sm font-semibold mb-1.5">Correo electrónico</label>
                      <input
                        type="email" name="correo" required
                        value={form.correo} onChange={handleChange}
                        className="w-full border border-arena-200 rounded-lg px-4 py-2.5 text-tierra-900 text-sm outline-none focus:ring-2 focus:ring-selva-400 focus:border-transparent bg-arena-50"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-tierra-700 text-sm font-semibold mb-1.5">¿Para qué nos escribes?</label>
                      <select
                        name="tipo" value={form.tipo} onChange={handleChange}
                        className="w-full border border-arena-200 rounded-lg px-4 py-2.5 text-tierra-900 text-sm outline-none focus:ring-2 focus:ring-selva-400 bg-arena-50"
                      >
                        <option value="info">Quiero más información</option>
                        <option value="unirse">Quiero unirme al Frente</option>
                        <option value="prensa">Soy periodista / medios</option>
                        <option value="academia">Soy investigador / académico</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-tierra-700 text-sm font-semibold mb-1.5">Mensaje</label>
                      <textarea
                        name="mensaje" rows={5} required
                        value={form.mensaje} onChange={handleChange}
                        className="w-full border border-arena-200 rounded-lg px-4 py-2.5 text-tierra-900 text-sm outline-none focus:ring-2 focus:ring-selva-400 focus:border-transparent bg-arena-50 resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-60"
                    >
                      {loading ? "Enviando..." : <><Send className="w-4 h-4" /> Enviar mensaje</>}
                    </button>
                  </form>
                ) : (
                  <div className="bg-selva-50 border border-selva-200 rounded-2xl p-10 text-center">
                    <div className="text-5xl mb-4">🌿</div>
                    <h3 className="font-heading text-2xl font-bold text-selva-800 mb-2">¡Gracias por escribirnos!</h3>
                    <p className="text-selva-600">Nos pondremos en contacto contigo pronto.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
