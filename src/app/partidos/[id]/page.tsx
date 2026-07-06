import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Goal, Square, Users } from "lucide-react";
import { Scoreboard } from "@/components/matches/scoreboard";
import { MatchTimeline } from "@/components/matches/match-timeline";
import { MatchStats } from "@/components/matches/match-stats";
import { MatchLineups } from "@/components/matches/match-lineups";
import { MatchCard } from "@/components/matches/match-card";
import { StatsGrid } from "@/components/common/stats-grid";
import { EmptyState } from "@/components/common/empty-state";
import { AdBanner } from "@/components/ads/ad-banner";
import {
  getHeadToHead,
  getMatchById,
  getTeamById,
  matches as allMatches,
} from "@/lib/mock";

export function generateStaticParams() {
  return allMatches.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const match = getMatchById(id);
  if (!match) return { title: "Partido · La Jornada" };
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  return { title: `${home?.name} vs ${away?.name} · La Jornada` };
}

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const match = getMatchById(id);
  if (!match) notFound();

  const home = getTeamById(match.homeTeamId)!;
  const away = getTeamById(match.awayTeamId)!;
  const played = match.status === "jugado" || match.status === "en_juego";
  const headToHead = getHeadToHead(match.homeTeamId, match.awayTeamId).filter((m) => m.id !== match.id);

  const goals = match.events.filter((e) => e.type === "gol").length;
  const cards = match.events.filter((e) => e.type !== "gol").length;

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 sm:px-6">
      <Scoreboard match={match} />

      {played && (
        <StatsGrid
          items={[
            { label: "Goles", value: goals, icon: Goal },
            { label: "Tarjetas", value: cards, icon: Square },
            { label: "Posesión local", value: `${match.stats[0]?.home ?? 50}%`, icon: Users },
            { label: "Jornada", value: match.matchday },
          ]}
        />
      )}

      <section>
        <h2 className="mb-3 font-heading text-lg font-bold">Cronología</h2>
        <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
          <MatchTimeline match={match} />
        </div>
      </section>

      {played && match.stats.length > 0 && (
        <section>
          <h2 className="mb-3 font-heading text-lg font-bold">Estadísticas del partido</h2>
          <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
            <MatchStats stats={match.stats} />
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 font-heading text-lg font-bold">Alineaciones</h2>
        <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
          <MatchLineups match={match} />
        </div>
      </section>

      <AdBanner variant="horizontal" sponsor={home.sponsor.name} />

      <section>
        <h2 className="mb-3 font-heading text-lg font-bold">
          Últimos enfrentamientos: {home.shortName} vs {away.shortName}
        </h2>
        {headToHead.length === 0 ? (
          <EmptyState icon={Goal} title="Sin enfrentamientos previos" description="Estos equipos no se han enfrentado anteriormente en La Jornada." />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {headToHead.slice(0, 4).map((m) => (
              <MatchCard key={m.id} match={m} showCompetition />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
