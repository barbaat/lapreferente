"use client";

import { useMemo, useState } from "react";
import { TeamCard } from "@/components/teams/team-card";
import { EmptyState } from "@/components/common/empty-state";
import { FilterDrawer } from "@/components/common/filter-drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Shield, Search } from "lucide-react";
import { competitions, teams } from "@/lib/mock";

export function TeamsExplorer() {
  const [competitionId, setCompetitionId] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return teams.filter((t) => {
      if (competitionId !== "all" && t.competitionId !== competitionId) return false;
      if (query && !`${t.name} ${t.city}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [competitionId, query]);

  const filters = (
    <div className="w-full space-y-1.5 sm:w-56">
      <label className="text-xs font-medium text-muted-foreground">Competición</label>
      <Select value={competitionId} onValueChange={(v) => setCompetitionId(v ?? "all")}>
        <SelectTrigger className="w-full"><SelectValue placeholder="Competición" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {competitions.map((c) => (
            <SelectItem key={c.id} value={c.id}>{c.shortName}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end gap-3">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar equipo o ciudad…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="hidden sm:block">{filters}</div>
        <FilterDrawer activeCount={competitionId !== "all" ? 1 : 0}>{filters}</FilterDrawer>
        <span className="ml-auto hidden text-sm text-muted-foreground sm:block">{filtered.length} equipos</span>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Shield} title="Sin equipos" description="No hay equipos que coincidan con tu búsqueda." />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TeamCard key={t.id} team={t} />
          ))}
        </div>
      )}
    </div>
  );
}
