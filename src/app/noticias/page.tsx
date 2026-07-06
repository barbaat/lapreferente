import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsExplorer } from "@/components/news/news-explorer";
import { NewsCard } from "@/components/news/news-card";
import { AdBanner } from "@/components/ads/ad-banner";
import { getFeaturedNews, getLatestNews, getMostReadNews } from "@/lib/mock";

export const metadata: Metadata = { title: "Noticias · La Jornada" };

export default function NewsPage() {
  const featured = getFeaturedNews()[0] ?? getLatestNews(1)[0];
  const mostRead = getMostReadNews(5);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">
      <div>
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Noticias</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Toda la actualidad del fútbol regional y aficionado.
        </p>
      </div>

      <FeaturedNews article={featured} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <NewsExplorer excludeId={featured.id} />
        </div>
        <aside className="space-y-6">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="size-4 text-brand-turquoise" />
              <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Más leídas
              </h2>
            </div>
            <div className="space-y-3">
              {mostRead.map((article) => (
                <NewsCard key={article.id} article={article} orientation="horizontal" />
              ))}
            </div>
          </section>
          <AdBanner variant="sidebar" sponsor="Cítricos Altavista" />
        </aside>
      </div>
    </div>
  );
}
