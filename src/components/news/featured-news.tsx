import Link from "next/link";
import { Clock } from "lucide-react";
import { NewsImage } from "@/components/brand/news-image";
import { formatDateMedium } from "@/lib/format";
import type { NewsArticle } from "@/lib/mock";

export function FeaturedNews({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/noticias/${article.slug}`}
      className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl border border-border"
    >
      <NewsImage hue={article.hue} className="absolute inset-0 h-full w-full" iconClassName="size-12" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="relative p-6 text-white">
        <span className="rounded-full bg-brand-turquoise px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
          {article.category}
        </span>
        <h2 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">{article.title}</h2>
        <p className="mt-2 line-clamp-2 max-w-xl text-sm text-white/80">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-white/70">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatDateMedium(article.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" /> {article.readTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}
