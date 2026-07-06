import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Goal, Handshake, RectangleVertical, ShieldCheck, Trophy } from "lucide-react";
import { PlayerHeader } from "@/components/players/player-header";
import { StatsGrid } from "@/components/common/stats-grid";
import { MatchCard } from "@/components/matches/match-card";
import { EmptyState } from "@/components/common/empty-state";
import {
  getMatchesByTeam,
  getPlayerBySlug,
  getTeamById,
  players,
} from "@/lib/mock";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  return { title: player ? `${player.name} · La Jornada` : "Jugador · La Jornada" };
}

export default async function PlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const player = getPlayerBySlug(slug);
  if (!player) notFound();

  const team = getTeamById(player.teamId)!;
  const teamMatches = getMatchesByTeam(team.id).filter((m) => m.status === "jugado");
  const playerMatches = teamMatches
    .filter((m) => m.homeLineup.includes(player.id) || m.awayLineup.includes(player.id))
    .slice(-5)
    .reverse();

  const seniorYears = Math.max(1, player.age - 17);
  const debutSeason = 2026 - seniorYears;

  return (
    <div>
      <PlayerHeader player={player} />
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 sm:px-6">
        <section>
          <h2 className="mb-3 font-heading text-lg font-bold">Estadísticas de la temporada</h2>
          <StatsGrid
            items={[
              { label: "Partidos", value: player.matches, icon: ShieldCheck },
              { label: "Minutos", value: player.minutes, icon: Clock },
              { label: "Goles", value: player.goals, icon: Goal },
              { label: "Asistencias", value: player.assists, icon: Handshake },
              { label: "Tarjetas amarillas", value: player.yellowCards, icon: RectangleVertical },
              { label: "Tarjetas rojas", value: player.redCards, icon: RectangleVertical },
            ]}
          />
        </section>

        <section>
          <h2 className="mb-3 font-heading text-lg font-bold">Forma reciente</h2>
          <div className="flex gap-2">
            {player.form.map((r, i) => (
              <span
                key={i}
                className={cn(
                  "flex size-8 items-center justify-center rounded-full text-xs font-bold text-white",
                  r === "V" && "bg-brand-green",
                  r === "E" && "bg-brand-amber",
                  r === "D" && "bg-brand-red"
                )}
              >
                {r}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold">
            <Trophy className="size-4 text-brand-turquoise" /> Trayectoria
          </h2>
          <ol className="space-y-3 border-l-2 border-border pl-4">
            <li>
              <p className="text-sm font-semibold">{debutSeason}/{debutSeason + 1} — {team.name}</p>
              <p className="text-sm text-muted-foreground">
                Debut con el primer equipo tras formarse en las categorías inferiores del club.
              </p>
            </li>
            <li>
              <p className="text-sm font-semibold">2025/2026 — {team.name}</p>
              <p className="text-sm text-muted-foreground">
                Temporada actual, consolidado como pieza habitual de {team.coach.name} en {player.position.toLowerCase()}.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-lg font-bold">Últimos partidos</h2>
          {playerMatches.length === 0 ? (
            <EmptyState icon={ShieldCheck} title="Sin partidos registrados" />
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {playerMatches.map((m) => <MatchCard key={m.id} match={m} showCompetition />)}
            </div>
          )}
        </section>

        <p className="rounded-lg border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
          {player.bio}
        </p>
      </div>
    </div>
  );
}
