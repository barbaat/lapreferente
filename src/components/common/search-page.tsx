"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Shield, User, Trophy, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/common/empty-state";
import { searchAll, type SearchResult } from "@/lib/mock";

const ICONS: Record<SearchResult["type"], React.ElementType> = {
  equipo: Shield,
  jugador: User,
  competicion: Trophy,
  noticia: Newspaper,
};
const LABELS: Record<SearchResult["type"], string> = {
  equipo: "Equipos",
  jugador: "Jugadores",
  competicion: "Competiciones",
  noticia: "Noticias",
};

export function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const results = useMemo(() => searchAll(query), [query]);
  const grouped = useMemo(() => {
    const groups: Partial<Record<SearchResult["type"], SearchResult[]>> = {};
    for (const r of results) {
      groups[r.type] = [...(groups[r.type] ?? []), r];
    }
    return groups;
  }, [results]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">Buscar</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          placeholder="Buscar equipos, jugadores, competiciones, noticias…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9 h-11 text-base"
        />
      </div>

      {!query && (
        <p className="mt-4 text-sm text-muted-foreground">
          Empieza a escribir para buscar en todo el contenido de La Jornada.
        </p>
      )}

      {query && results.length === 0 && (
        <div className="mt-8">
          <EmptyState icon={Search} title="Sin resultados" description={`No hemos encontrado nada para "${query}".`} />
        </div>
      )}

      <div className="mt-6 space-y-6">
        {(Object.keys(grouped) as SearchResult["type"][]).map((type) => {
          const Icon = ICONS[type];
          return (
            <section key={type}>
              <h2 className="mb-2 text-sm font-semibold text-muted-foreground">{LABELS[type]}</h2>
              <div className="divide-y divide-border rounded-lg border border-border bg-card">
                {grouped[type]!.map((r) => (
                  <Link key={`${r.type}-${r.id}`} href={r.href} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50">
                    <Icon className="size-4 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{r.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{r.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
