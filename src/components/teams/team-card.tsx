import Link from "next/link";
import { MapPin } from "lucide-react";
import { TeamBadge } from "@/components/brand/team-badge";
import { getCompetitionById, getTeamPosition, type Team } from "@/lib/mock";

export function TeamCard({ team }: { team: Team }) {
  const competition = getCompetitionById(team.competitionId);
  const standing = getTeamPosition(team.id);

  return (
    <Link
      href={`/equipos/${team.slug}`}
      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand-turquoise/50 hover:bg-secondary/40"
    >
      <TeamBadge name={team.name} colors={team.colors} size="lg" />
      <div className="min-w-0 flex-1">
        <p className="truncate font-heading text-sm font-bold group-hover:text-brand-turquoise">{team.name}</p>
        <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
          <MapPin className="size-3" /> {team.city}
        </p>
        {competition && <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{competition.shortName}</p>}
      </div>
      {standing && (
        <span className="shrink-0 font-heading text-lg font-bold text-brand-navy">{standing.position}.º</span>
      )}
    </Link>
  );
}
