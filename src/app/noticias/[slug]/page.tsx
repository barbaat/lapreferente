import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User } from "lucide-react";
import { NewsImage } from "@/components/brand/news-image";
import { NewsCard } from "@/components/news/news-card";
import { ShareButton } from "@/components/news/share-button";
import { AdBanner } from "@/components/ads/ad-banner";
import { Badge } from "@/components/ui/badge";
import { formatDateLong } from "@/lib/format";
import { getNewsBySlug, getRelatedNews, news } from "@/lib/mock";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  return { title: article ? `${article.title} · La Jornada` : "Noticia · La Jornada" };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = getRelatedNews(article, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Badge className="bg-brand-turquoise text-white">{article.category}</Badge>
      <h1 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-4xl">{article.title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{article.excerpt}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border py-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><User className="size-3.5" /> {article.author}</span>
        <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" /> {formatDateLong(article.date)}</span>
        <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {article.readTime} min de lectura</span>
        <ShareButton title={article.title} />
      </div>

      <NewsImage hue={article.hue} className="mt-6 aspect-[16/9] w-full rounded-xl" iconClassName="size-12" />

      <div className="prose-content mt-6 space-y-4 text-base leading-relaxed text-foreground">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <AdBanner variant="horizontal" sponsor="Publicidad" />
      </div>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 font-heading text-lg font-bold">Noticias relacionadas</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
          </div>
        </section>
      )}

      <Link href="/noticias" className="mt-8 inline-block text-sm font-medium text-brand-turquoise hover:underline">
        ← Volver a noticias
      </Link>
    </article>
  );
}
