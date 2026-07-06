import Link from "next/link";
import { Flag, Ruler, Footprints } from "lucide-react";
import { PlayerAvatar } from "@/components/brand/player-avatar";
import { TeamBadge } from "@/components/brand/team-badge";
import { getTeamById, type Player } from "@/lib/mock";

export function PlayerHeader({ player }: { player: Player }) {
  const team = getTeamById(player.teamId)!;

  return (
    <div className="border-b border-border bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:text-left sm:px-6">
        <div className="relative">
          <PlayerAvatar name={player.name} hue={player.avatarHue} size="xl" />
          <span className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-full bg-brand-turquoise text-sm font-bold ring-4 ring-brand-navy">
            {player.number}
          </span>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-turquoise">{player.position}</span>
          <h1 className="mt-1 font-heading text-2xl font-bold sm:text-3xl">{player.name}</h1>
          <Link href={`/equipos/${team.slug}`} className="mt-2 flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white sm:justify-start">
            <TeamBadge name={team.name} colors={team.colors} size="xs" />
            {team.name}
          </Link>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/70 sm:justify-start">
            <span className="flex items-center gap-1.5">
              <Flag className="size-3.5" /> {player.nationality}
            </span>
            <span>{player.age} años</span>
            <span className="flex items-center gap-1.5">
              <Ruler className="size-3.5" /> {player.height} cm
            </span>
            <span className="flex items-center gap-1.5">
              <Footprints className="size-3.5" /> {player.foot}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
