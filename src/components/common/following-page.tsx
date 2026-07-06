"use client";

import Link from "next/link";
import { Heart, Shield, Trophy } from "lucide-react";
import { TeamCard } from "@/components/teams/team-card";
import { CompetitionCard } from "@/components/competitions/competition-card";
import { MatchCard } from "@/components/matches/match-card";
import { NewsCard } from "@/components/news/news-card";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/store/favorites-store";
import { useHasMounted } from "@/lib/use-has-mounted";
import {
  getCompetitionById,
  getNewsByCompetition,
  getNewsByTeam,
  getTeamById,
  matches as allMatches,
} from "@/lib/mock";

export function FollowingPage() {
  const mounted = useHasMounted();
  const teamIds = useFavoritesStore((s) => s.teamIds);
  const competitionIds = useFavoritesStore((s) => s.competitionIds);

  if (!mounted) return null;

  const teams = teamIds.map((id) => getTeamById(id)).filter((t): t is NonNullable<typeof t> => Boolean(t));
  const followedCompetitions = competitionIds
    .map((id) => getCompetitionById(id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const relatedMatches = allMatches
    .filter((m) => m.status === "programado" && (teamIds.includes(m.homeTeamId) || teamIds.includes(m.awayTeamId)))
    .slice(0, 6);

  const relatedNews = [
    ...teamIds.flatMap((id) => getNewsByTeam(id)),
    ...competitionIds.flatMap((id) => getNewsByCompetition(id)),
  ]
    .filter((n, i, arr) => arr.findIndex((x) => x.id === n.id) === i)
    .slice(0, 6);

  const isEmpty = teams.length === 0 && followedCompetitions.length === 0;

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6">
      <div>
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Siguiendo</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Tus equipos y competiciones favoritos, guardados en este dispositivo.
        </p>
      </div>

      {isEmpty ? (
        <EmptyState
          icon={Heart}
          title="Todavía no sigues nada"
          description="Pulsa “Seguir” en cualquier equipo o competición para verlo aquí."
          className="py-20"
        />
      ) : (
        <>
          {teams.length > 0 && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold">
                <Shield className="size-4 text-brand-turquoise" /> Equipos favoritos
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {teams.map((t) => <TeamCard key={t.id} team={t} />)}
              </div>
            </section>
          )}

          {followedCompetitions.length > 0 && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold">
                <Trophy className="size-4 text-brand-turquoise" /> Competiciones favoritas
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {followedCompetitions.map((c) => <CompetitionCard key={c.id} competition={c} />)}
              </div>
            </section>
          )}

          {relatedMatches.length > 0 && (
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Próximos partidos</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {relatedMatches.map((m) => <MatchCard key={m.id} match={m} showCompetition />)}
              </div>
            </section>
          )}

          {relatedNews.length > 0 && (
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Noticias relacionadas</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {relatedNews.map((n) => <NewsCard key={n.id} article={n} />)}
              </div>
            </section>
          )}
        </>
      )}

      <div className="flex justify-center">
        <Button variant="outline" render={<Link href="/equipos" />}>
          Explorar equipos
        </Button>
      </div>
    </div>
  );
}
