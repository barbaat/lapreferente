import { MapPin, Shield, Users, Trophy } from "lucide-react";
import { FollowButton } from "@/components/common/follow-button";
import { provinces, type Competition } from "@/lib/mock";

export function CompetitionHeader({ competition }: { competition: Competition }) {
  const province = provinces.find((p) => p.id === competition.provinceId);

  return (
    <div className="border-b border-border bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-turquoise">
              <Trophy className="size-3.5" />
              <span>{competition.category}</span>
              <span className="text-white/40">·</span>
              <span>{competition.group}</span>
            </div>
            <h1 className="mt-1 font-heading text-2xl font-bold sm:text-3xl">{competition.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {province?.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="size-3.5" /> {competition.totalTeams} equipos
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="size-3.5" /> Temporada {competition.season}
              </span>
            </div>
          </div>
          <FollowButton id={competition.id} type="competition" className="bg-white/10 text-white hover:bg-white/20 border-white/20" />
        </div>
        <p className="mt-4 max-w-2xl text-sm text-white/70">{competition.description}</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
          Jornada actual: <span className="font-semibold text-brand-turquoise">{competition.currentMatchday}</span> / {competition.totalMatchdays}
        </div>
      </div>
    </div>
  );
}
