import Link from "next/link";
import { getPlayerById, getTeamById, type Match } from "@/lib/mock";

function LineupList({ teamId, playerIds, align }: { teamId: string; playerIds: string[]; align: "left" | "right" }) {
  const team = getTeamById(teamId)!;
  return (
    <div>
      <p className={`mb-2 text-xs font-medium text-muted-foreground ${align === "right" ? "text-right" : ""}`}>
        {team.name} · {team.coach.name}
      </p>
      <ul className="space-y-1.5">
        {playerIds.map((id) => {
          const player = getPlayerById(id);
          if (!player) return null;
          return (
            <li key={id} className={`flex items-center gap-2 text-sm ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold tabular-nums">
                {player.number}
              </span>
              <Link href={`/jugadores/${player.slug}`} className="truncate hover:text-brand-turquoise">
                {player.name}
              </Link>
              <span className="shrink-0 text-[11px] text-muted-foreground">{player.position.slice(0, 3)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MatchLineups({ match }: { match: Match }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <LineupList teamId={match.homeTeamId} playerIds={match.homeLineup} align="left" />
      <LineupList teamId={match.awayTeamId} playerIds={match.awayLineup} align="right" />
    </div>
  );
}
