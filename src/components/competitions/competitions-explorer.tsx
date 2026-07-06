"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CompetitionCard } from "@/components/competitions/competition-card";
import { EmptyState } from "@/components/common/empty-state";
import { FilterDrawer } from "@/components/common/filter-drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { communities, competitions, provinces } from "@/lib/mock";
import { Trophy } from "lucide-react";

const CATEGORIES = Array.from(new Set(competitions.map((c) => c.category)));
const SEASONS = Array.from(new Set(competitions.map((c) => c.season)));

export function CompetitionsExplorer() {
  const searchParams = useSearchParams();
  const provinciaParam = searchParams.get("provincia") ?? "all";

  const [community, setCommunity] = useState("all");
  const [province, setProvince] = useState(provinciaParam);
  const [category, setCategory] = useState("all");
  const [season, setSeason] = useState("all");

  const availableProvinces = useMemo(
    () => (community === "all" ? provinces : provinces.filter((p) => p.communityId === community)),
    [community]
  );

  const filtered = useMemo(() => {
    return competitions.filter((c) => {
      if (province !== "all") {
        const prov = provinces.find((p) => p.slug === province);
        if (prov && c.provinceId !== prov.id) return false;
        if (!prov && c.provinceId !== province) return false;
      }
      if (community !== "all" && c.communityId !== community) return false;
      if (category !== "all" && c.category !== category) return false;
      if (season !== "all" && c.season !== season) return false;
      return true;
    });
  }, [community, province, category, season]);

  const activeCount = [community, province, category, season].filter((v) => v !== "all" && v !== provinciaParam).length;

  const filters = (
    <>
      <div className="w-full space-y-1.5 sm:w-40">
        <label className="text-xs font-medium text-muted-foreground">Comunidad</label>
        <Select
          value={community}
          onValueChange={(v) => {
            setCommunity(v ?? "all");
            setProvince("all");
          }}
        >
          <SelectTrigger className="w-full"><SelectValue placeholder="Comunidad" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {communities.map((c) => (
              <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full space-y-1.5 sm:w-40">
        <label className="text-xs font-medium text-muted-foreground">Provincia</label>
        <Select value={province} onValueChange={(v) => setProvince(v ?? "all")}>
          <SelectTrigger className="w-full"><SelectValue placeholder="Provincia" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {availableProvinces.map((p) => (
              <SelectItem key={p.id} value={p.slug}>{p.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full space-y-1.5 sm:w-40">
        <label className="text-xs font-medium text-muted-foreground">Categoría</label>
        <Select value={category} onValueChange={(v) => setCategory(v ?? "all")}>
          <SelectTrigger className="w-full"><SelectValue placeholder="Categoría" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full space-y-1.5 sm:w-40">
        <label className="text-xs font-medium text-muted-foreground">Temporada</label>
        <Select value={season} onValueChange={(v) => setSeason(v ?? "all")}>
          <SelectTrigger className="w-full"><SelectValue placeholder="Temporada" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {SEASONS.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="hidden flex-wrap gap-3 sm:flex">{filters}</div>
        <FilterDrawer activeCount={activeCount}>{filters}</FilterDrawer>
        <span className="ml-auto hidden text-sm text-muted-foreground sm:block">
          {filtered.length} competiciones
        </span>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Trophy} title="Sin competiciones" description="No hay competiciones que coincidan con los filtros seleccionados." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c) => (
            <CompetitionCard key={c.id} competition={c} />
          ))}
        </div>
      )}
    </div>
  );
}
