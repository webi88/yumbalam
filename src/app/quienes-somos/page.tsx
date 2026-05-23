import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, TreePine, Heart, Shield } from "lucide-react";

export const metadata = { title: "Quiénes Somos — Frente Pro Yum Balam" };

const VALORES = [
  { icon: TreePine, titulo: "El territorio primero", texto: "Toda decisión de desarrollo tiene que partir de la capacidad que tiene el territorio de sostenerla sin degradarse." },
  { icon: Users,    titulo: "La comunidad decide", texto: "No hay proyecto legítimo que no haya pasado por la consulta y el consentimiento de las comunidades que viven en él." },
  { icon: Heart,    titulo: "Desarrollo para quedarse", texto: "Queremos un desarrollo que permita a nuestros hijos vivir, trabajar y criar a sus hijos en la misma región." },
  { icon: Shield,   titulo: "Transparencia total", texto: "Cada acuerdo, cada negociación, cada peso que maneje el Frente debe ser conocido y aprobado por la asamblea." },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="relative pt-32 pb-20 bg-selva-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80"
              alt="Selva Yum Balam"
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="relative container-max max-w-3xl">
            <span className="tag-pill bg-selva-700/50 border border-selva-600/50 text-selva-300 mb-4">
              Quiénes Somos
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              La voz de quienes viven, trabajan y cuidan el territorio
            </h1>
            <p className="text-selva-300 text-xl leading-relaxed">
              El Frente Pro Desarrollo Sustentable Yum Balam es la organización
              que reúne a ejidatarios, campesinos, pescadores y comunidades originarias
              del norte de Quintana Roo.
            </p>
          </div>
        </div>

        {/* Historia */}
        <section className="section-padding section-white">
          <div className="container-max max-w-3xl space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-tierra-900 mb-5">Cómo nacimos</h2>
              <p className="text-tierra-700 text-lg leading-relaxed mb-4">
                En 2024, ante la aceleración de proyectos de desarrollo en la zona norte
                de Quintana Roo —muchos de ellos sin consulta previa y con impactos ambientales
                no evaluados— un grupo de ejidatarios de Holbox, Chiquila y Kantunilkín decidió
                que la respuesta a los proyectos mal hechos no era el rechazo a todo, sino la
                construcción de una propuesta propia.
              </p>
              <p className="text-tierra-700 leading-relaxed mb-4">
                Así nació el Frente: no como un movimiento de oposición pura, sino como
                una plataforma para construir el modelo de desarrollo que las comunidades
                sí quieren y que el territorio sí puede sostener.
              </p>
              <p className="text-tierra-700 leading-relaxed">
                Hoy somos más de 300 familias organizadas en tres ejidos, con respaldo
                de organizaciones civiles, académicos y técnicos especializados en
                ecología, derecho agrario y turismo comunitario.
              </p>
            </div>

            {/* Valores */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-tierra-900 mb-6">Nuestros principios</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {VALORES.map(({ icon: Icon, titulo, texto }) => (
                  <div key={titulo} className="bg-arena-50 rounded-xl border border-arena-200 p-6">
                    <div className="w-10 h-10 rounded-xl bg-selva-100 text-selva-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-tierra-900 mb-2">{titulo}</h3>
                    <p className="text-tierra-600 text-sm leading-relaxed">{texto}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estructura */}
            <div className="bg-selva-900 rounded-2xl p-8 text-white">
              <h2 className="font-heading text-2xl font-bold mb-4">Cómo estamos organizados</h2>
              <p className="text-selva-300 leading-relaxed mb-3">
                El Frente opera bajo una estructura asamblearia. Las decisiones importantes
                se toman en asamblea general con voto de los ejidatarios representados.
                Tenemos un consejo directivo de nueve personas elegidas por asamblea,
                con mandatos renovables de dos años.
              </p>
              <p className="text-selva-400 text-sm leading-relaxed">
                Contamos con tres comisiones de trabajo: Territorio y Medio Ambiente,
                Desarrollo Económico Comunitario, y Comunicación y Relaciones Externas.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
