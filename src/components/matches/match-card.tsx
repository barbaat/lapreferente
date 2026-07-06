import Link from "next/link";
import { MapPin, Radio } from "lucide-react";
import { TeamBadge } from "@/components/brand/team-badge";
import { getCompetitionById, getTeamById, type Match } from "@/lib/mock";
import { formatDateShort, STATUS_LABEL } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function MatchCard({ match, showCompetition = false }: { match: Match; showCompetition?: boolean }) {
  const home = getTeamById(match.homeTeamId)!;
  const away = getTeamById(match.awayTeamId)!;
  const competition = getCompetitionById(match.competitionId);
  const played = match.status === "jugado" || match.status === "en_juego";

  return (
    <Link
      href={`/partidos/${match.id}`}
      className="group block rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand-turquoise/50 hover:bg-secondary/40"
    >
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {showCompetition && competition ? `${competition.shortName} · ` : ""}
          Jornada {match.matchday}
        </span>
        {match.status === "en_juego" ? (
          <Badge className="gap-1 bg-brand-red text-white">
            <Radio className="size-3" /> {STATUS_LABEL[match.status]}
          </Badge>
        ) : (
          <span>{formatDateShort(match.date)}</span>
        )}
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="flex min-w-0 items-center gap-2 justify-end text-right">
          <span className="truncate text-sm font-medium">{home.shortName}</span>
          <TeamBadge name={home.name} colors={home.colors} size="sm" />
        </div>

        <div className="flex min-w-[64px] flex-col items-center">
          {played ? (
            <span className={cn("font-heading text-lg font-bold", match.status === "en_juego" && "text-brand-red")}>
              {match.homeScore} - {match.awayScore}
            </span>
          ) : (
            <span className="font-heading text-sm font-semibold text-muted-foreground">{match.time}</span>
          )}
        </div>

        <div className="flex min-w-0 items-center gap-2">
          <TeamBadge name={away.name} colors={away.colors} size="sm" />
          <span className="truncate text-sm font-medium">{away.shortName}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1 text-[11px] text-muted-foreground">
        <MapPin className="size-3" />
        <span className="truncate">{match.venue}</span>
      </div>
    </Link>
  );
}
