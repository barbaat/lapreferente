import Link from "next/link";
import { PlayerAvatar } from "@/components/brand/player-avatar";
import type { Player } from "@/lib/mock";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <Link
      href={`/jugadores/${player.slug}`}
      className="group flex flex-col items-center rounded-lg border border-border bg-card p-4 text-center transition-colors hover:border-brand-turquoise/50 hover:bg-secondary/40"
    >
      <div className="relative">
        <PlayerAvatar name={player.name} hue={player.avatarHue} size="lg" />
        <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-brand-navy text-[10px] font-bold text-white ring-2 ring-card">
          {player.number}
        </span>
      </div>
      <p className="mt-3 line-clamp-1 text-sm font-semibold group-hover:text-brand-turquoise">{player.name}</p>
      <p className="text-xs text-muted-foreground">{player.position}</p>
      <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
        <span>{player.age} años</span>
        <span>{player.matches} PJ</span>
        <span>{player.goals} G</span>
      </div>
    </Link>
  );
}
