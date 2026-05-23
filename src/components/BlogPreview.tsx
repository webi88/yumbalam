import Link from "next/link";
import { posts } from "@/lib/posts";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const CATEGORY_COLORS: Record<string, string> = {
  "Comunicado":    "bg-tierra-100 text-tierra-700",
  "Propuesta":     "bg-selva-100 text-selva-700",
  "Medio Ambiente":"bg-caribe-100 text-caribe-700",
  "Comunidad":     "bg-arena-200 text-tierra-700",
};

export default function BlogPreview() {
  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <section className="section-padding bg-arena-50">
      <div className="container-max">
        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="tag-pill bg-tierra-100 text-tierra-700 border border-tierra-200 mb-3">
                Noticias y Comunicados
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-tierra-900">
                Lo que estamos diciendo
              </h2>
            </div>
            <Link href="/noticias" className="btn-outline text-sm shrink-0">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <AnimateOnScroll className="lg:col-span-3" delay={0.1}>
            <Link href={`/noticias/${featured.slug}`} className="group block card-cream overflow-hidden h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-selva-950/60 to-transparent" />
                <span className={`absolute top-4 left-4 tag-pill ${CATEGORY_COLORS[featured.category] ?? "bg-arena-200 text-tierra-700"}`}>
                  {featured.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-tierra-900 group-hover:text-selva-700 transition-colors leading-snug mb-3">
                  {featured.title}
                </h3>
                <p className="text-tierra-600 text-sm leading-relaxed mb-4 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-tierra-400 text-xs">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={0.15 + i * 0.1}>
                <Link href={`/noticias/${post.slug}`} className="group flex gap-4 card-cream p-4">
                  <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`tag-pill text-xs mb-1 ${CATEGORY_COLORS[post.category] ?? "bg-arena-200 text-tierra-700"}`}>
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <h4 className="font-heading font-bold text-tierra-900 group-hover:text-selva-700 text-sm leading-snug line-clamp-2 transition-colors">
                      {post.title}
                    </h4>
                    <span className="text-tierra-400 text-xs mt-1 block">{post.date}</span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
