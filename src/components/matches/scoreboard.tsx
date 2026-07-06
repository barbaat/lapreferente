import Link from "next/link";
import { CalendarDays, Clock, MapPin, Radio, Trophy } from "lucide-react";
import { TeamBadge } from "@/components/brand/team-badge";
import { Badge } from "@/components/ui/badge";
import { getCompetitionById, getTeamById, type Match } from "@/lib/mock";
import { formatDateLong, STATUS_LABEL } from "@/lib/format";

export function Scoreboard({ match }: { match: Match }) {
  const home = getTeamById(match.homeTeamId)!;
  const away = getTeamById(match.awayTeamId)!;
  const competition = getCompetitionById(match.competitionId)!;
  const played = match.status === "jugado" || match.status === "en_juego";

  return (
    <div className="rounded-xl border border-border bg-brand-navy text-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-5 py-3 text-xs text-white/70">
        <Link href={`/competiciones/${competition.slug}`} className="flex items-center gap-1.5 hover:text-white">
          <Trophy className="size-3.5 text-brand-turquoise" />
          {competition.name} · Jornada {match.matchday}
        </Link>
        {match.status === "en_juego" ? (
          <Badge className="gap-1 bg-brand-red text-white">
            <Radio className="size-3" /> En directo
          </Badge>
        ) : (
          <span>{STATUS_LABEL[match.status]}</span>
        )}
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-8 sm:gap-6 sm:px-10">
        <Link href={`/equipos/${home.slug}`} className="flex flex-col items-center gap-3 text-center hover:opacity-90">
          <TeamBadge name={home.name} colors={home.colors} size="xl" />
          <span className="font-heading text-sm font-semibold sm:text-base">{home.name}</span>
        </Link>

        <div className="flex flex-col items-center gap-2">
          {played ? (
            <span className="font-heading text-4xl font-bold tabular-nums sm:text-6xl">
              {match.homeScore}-{match.awayScore}
            </span>
          ) : (
            <span className="font-heading text-3xl font-bold sm:text-5xl">{match.time}</span>
          )}
          {!played && <span className="text-xs text-white/60">Aún no se ha jugado</span>}
        </div>

        <Link href={`/equipos/${away.slug}`} className="flex flex-col items-center gap-3 text-center hover:opacity-90">
          <TeamBadge name={away.name} colors={away.colors} size="xl" />
          <span className="font-heading text-sm font-semibold sm:text-base">{away.name}</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 px-5 py-3 text-xs text-white/70">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="size-3.5" /> {formatDateLong(match.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" /> {match.time}h
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5" /> {match.venue}
        </span>
      </div>
    </div>
  );
}
