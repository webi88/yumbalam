import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Frente Pro Yum Balam`, description: post.excerpt };
}

export default function NoticiaPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="relative pt-28 pb-0">
          <div className="relative h-64 lg:h-96 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-selva-950/90 via-selva-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container-max pb-8">
              <span className="tag-pill bg-selva-700/60 border border-selva-600/40 text-selva-300 mb-3">
                {post.category}
              </span>
              <h1 className="font-heading text-2xl lg:text-4xl font-bold text-white leading-tight max-w-3xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-white/60 text-sm">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} de lectura</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="section-padding section-white">
          <div className="container-max max-w-3xl">
            <Link href="/noticias" className="inline-flex items-center gap-2 text-selva-600 hover:text-selva-500 text-sm font-semibold mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Volver a noticias
            </Link>
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-tierra-900 prose-p:text-tierra-700 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
