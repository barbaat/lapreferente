import Link from "next/link";
import { Clock } from "lucide-react";
import { NewsImage } from "@/components/brand/news-image";
import { formatDateMedium } from "@/lib/format";
import type { NewsArticle } from "@/lib/mock";
import { cn } from "@/lib/utils";

export function NewsCard({
  article,
  orientation = "vertical",
  className,
}: {
  article: NewsArticle;
  orientation?: "vertical" | "horizontal";
  className?: string;
}) {
  const horizontal = orientation === "horizontal";
  return (
    <Link
      href={`/noticias/${article.slug}`}
      className={cn(
        "group flex overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-brand-turquoise/50",
        horizontal ? "flex-row items-stretch" : "flex-col",
        className
      )}
    >
      <NewsImage hue={article.hue} className={horizontal ? "w-28 shrink-0 sm:w-36" : "aspect-[16/9] w-full"} />
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-turquoise">
          {article.category}
        </span>
        <h3 className={cn("font-heading font-bold leading-snug group-hover:text-brand-turquoise", horizontal ? "text-sm" : "text-base")}>
          {article.title}
        </h3>
        {!horizontal && <p className="line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>}
        <div className="mt-auto flex items-center gap-2 pt-1 text-[11px] text-muted-foreground">
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
