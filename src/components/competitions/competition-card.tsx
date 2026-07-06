import Link from "next/link";
import { ArrowRight, MapPin, Shield, Users } from "lucide-react";
import type { Competition } from "@/lib/mock";
import { provinces } from "@/lib/mock";

export function CompetitionCard({ competition }: { competition: Competition }) {
  const province = provinces.find((p) => p.id === competition.provinceId);

  return (
    <Link
      href={`/competiciones/${competition.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand-turquoise/50 hover:bg-secondary/40"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-brand-navy px-2.5 py-0.5 text-[11px] font-semibold text-white">
          {competition.category}
        </span>
        <span className="text-xs text-muted-foreground">{competition.season}</span>
      </div>

      <h3 className="font-heading text-lg font-bold leading-tight text-foreground group-hover:text-brand-turquoise">
        {competition.name}
      </h3>
      <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
        <MapPin className="size-3.5" /> {province?.name}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="size-3.5" /> {competition.totalTeams} equipos
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Shield className="size-3.5" /> Jornada {competition.currentMatchday}
        </span>
      </div>

      <span className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-turquoise">
        Ver clasificación y resultados
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
