"use client";

import { Fragment, useMemo, useState } from "react";
import { NewsCard } from "@/components/news/news-card";
import { AdBanner } from "@/components/ads/ad-banner";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import { news as allNews } from "@/lib/mock";
import { cn } from "@/lib/utils";

const CATEGORIES = Array.from(new Set(allNews.map((n) => n.category)));

export function NewsExplorer({ excludeId }: { excludeId?: string }) {
  const [category, setCategory] = useState("Todas");

  const filtered = useMemo(() => {
    return allNews
      .filter((n) => n.id !== excludeId)
      .filter((n) => category === "Todas" || n.category === category)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [category, excludeId]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {["Todas", ...CATEGORIES].map((c) => (
          <Button
            key={c}
            size="sm"
            variant={category === c ? "default" : "outline"}
            className={cn(category === c && "bg-brand-navy hover:bg-brand-navy/90")}
            onClick={() => setCategory(c)}
          >
            {c}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Newspaper} title="Sin noticias" description="No hay noticias en esta categoría todavía." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((article, i) => (
            <Fragment key={article.id}>
              <NewsCard article={article} />
              {i === 2 && (
                <div className="sm:col-span-2 xl:col-span-1">
                  <AdBanner variant="square" sponsor="Publicidad entre noticias" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
