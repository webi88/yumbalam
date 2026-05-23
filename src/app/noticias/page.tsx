import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";

export const metadata = { title: "Noticias y Comunicados — Frente Pro Yum Balam" };

const CATEGORY_COLORS: Record<string, string> = {
  "Comunicado":    "bg-tierra-100 text-tierra-700",
  "Propuesta":     "bg-selva-100 text-selva-700",
  "Medio Ambiente":"bg-caribe-100 text-caribe-700",
  "Comunidad":     "bg-arena-200 text-tierra-700",
};

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-selva-900 pt-32 pb-16">
          <div className="container-max">
            <span className="tag-pill bg-selva-700/50 border border-selva-600/50 text-selva-300 mb-4">
              Noticias y Comunicados
            </span>
            <h1 className="font-heading text-4xl font-bold text-white mt-3">
              Lo que estamos diciendo y haciendo
            </h1>
          </div>
        </div>

        <section className="section-padding section-cream">
          <div className="container-max">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/noticias/${post.slug}`}
                  className="group card-cream overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 tag-pill ${CATEGORY_COLORS[post.category] ?? "bg-arena-200 text-tierra-700"}`}>
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-heading font-bold text-tierra-900 group-hover:text-selva-700 transition-colors leading-snug mb-2 line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="text-tierra-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-tierra-400 text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
