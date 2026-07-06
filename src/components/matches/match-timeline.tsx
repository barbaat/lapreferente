import { Goal, Square, RectangleVertical } from "lucide-react";
import { getPlayerById, getTeamById, type Match, type MatchEvent } from "@/lib/mock";
import { EmptyState } from "@/components/common/empty-state";
import { cn } from "@/lib/utils";

function EventIcon({ type }: { type: MatchEvent["type"] }) {
  if (type === "gol") return <Goal className="size-4 shrink-0 text-brand-turquoise" />;
  if (type === "roja" || type === "doble_amarilla")
    return <RectangleVertical className="size-3.5 shrink-0 fill-brand-red text-brand-red" />;
  return <RectangleVertical className="size-3.5 shrink-0 fill-brand-amber text-brand-amber" />;
}

function EventLabel({ event }: { event: MatchEvent }) {
  const player = getPlayerById(event.playerId);
  if (event.type === "gol") {
    const assist = event.assistPlayerId ? getPlayerById(event.assistPlayerId) : undefined;
    return (
      <span>
        <span className="font-medium">{player?.name}</span>
        {assist && assist.id !== player?.id && (
          <span className="text-muted-foreground"> · asist. {assist.name}</span>
        )}
      </span>
    );
  }
  return <span className="font-medium">{player?.name}</span>;
}

export function MatchTimeline({ match }: { match: Match }) {
  if (match.events.length === 0) {
    return <EmptyState icon={Square} title="Sin incidencias" description="Este partido todavía no se ha disputado." />;
  }

  return (
    <ol className="space-y-2 sm:relative sm:space-y-3 sm:before:absolute sm:before:inset-y-0 sm:before:left-1/2 sm:before:w-px sm:before:-translate-x-1/2 sm:before:bg-border">
      {match.events.map((event, i) => {
        const isHome = event.teamId === match.homeTeamId;
        const team = getTeamById(event.teamId);
        return (
          <li key={i}>
            {/* Mobile: single-column row */}
            <div className="flex items-center gap-2.5 sm:hidden">
              <span className="flex h-6 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-semibold tabular-nums">
                {event.minute}&apos;
              </span>
              <EventIcon type={event.type} />
              <span className="min-w-0 flex-1 truncate text-sm">
                <EventLabel event={event} />
              </span>
              <span className="shrink-0 text-[11px] text-muted-foreground">{team?.shortName}</span>
            </div>

            {/* Desktop: centered two-column timeline */}
            <div className="relative hidden grid-cols-[1fr_auto_1fr] items-center gap-3 sm:grid">
              <div className={cn("flex items-center justify-end gap-2 text-right", !isHome && "invisible")}>
                <EventLabel event={event} />
                <EventIcon type={event.type} />
              </div>
              <span className="z-10 flex h-6 w-10 items-center justify-center rounded-full border border-border bg-background text-[11px] font-semibold tabular-nums">
                {event.minute}&apos;
              </span>
              <div className={cn("flex items-center gap-2", isHome && "invisible")}>
                <EventIcon type={event.type} />
                <EventLabel event={event} />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
