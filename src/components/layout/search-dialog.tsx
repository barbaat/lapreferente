"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchAll, type SearchResult } from "@/lib/mock";
import { Shield, User, Trophy, Newspaper } from "lucide-react";

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

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) setQuery("");
  }

  const results = useMemo(() => searchAll(query), [query]);
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const r of results) {
      groups[r.type] = groups[r.type] ? [...groups[r.type], r] : [r];
    }
    return groups;
  }, [results]);

  const onSelect = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title="Buscar"
      description="Busca equipos, jugadores, competiciones y noticias"
    >
      <CommandInput
        placeholder="Buscar equipos, jugadores, competiciones, noticias…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          {query ? "Sin resultados." : "Escribe para buscar en La Jornada."}
        </CommandEmpty>
        {(Object.keys(grouped) as SearchResult["type"][]).map((type) => (
          <CommandGroup key={type} heading={LABELS[type]}>
            {grouped[type].map((r) => {
              const Icon = ICONS[r.type];
              return (
                <CommandItem key={`${r.type}-${r.id}`} value={`${r.title} ${r.subtitle}`} onSelect={() => onSelect(r.href)}>
                  <Icon className="size-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span>{r.title}</span>
                    <span className="text-xs text-muted-foreground">{r.subtitle}</span>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
