"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchCard } from "@/components/matches/match-card";
import { MatchdayPicker } from "@/components/matches/matchday-picker";
import { StandingsTable } from "@/components/competitions/standings-table";
import { TeamCard } from "@/components/teams/team-card";
import { NewsCard } from "@/components/news/news-card";
import { PlayerAvatar } from "@/components/brand/player-avatar";
import { TeamBadge } from "@/components/brand/team-badge";
import { EmptyState } from "@/components/common/empty-state";
import { Newspaper, Target } from "lucide-react";
import {
  getTeamById,
  type Competition,
  type Match,
  type NewsArticle,
  type Player,
  type StandingRow,
  type Team,
} from "@/lib/mock";

export function CompetitionTabs({
  competition,
  standings,
  matches,
  teams,
  topScorers,
  news,
}: {
  competition: Competition;
  standings: StandingRow[];
  matches: Match[];
  teams: Team[];
  topScorers: Player[];
  news: NewsArticle[];
}) {
  const [matchday, setMatchday] = useState(competition.currentMatchday);
  const matchdayMatches = matches.filter((m) => m.matchday === matchday);

  const lastResults = matches.filter((m) => m.status === "jugado").slice(-3).reverse();
  const nextMatches = matches.filter((m) => m.status === "programado").slice(0, 3);

  return (
    <Tabs defaultValue="resumen" className="gap-6">
      <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="partidos">Partidos</TabsTrigger>
        <TabsTrigger value="clasificacion">Clasificación</TabsTrigger>
        <TabsTrigger value="calendario">Calendario</TabsTrigger>
        <TabsTrigger value="equipos">Equipos</TabsTrigger>
        <TabsTrigger value="goleadores">Goleadores</TabsTrigger>
        <TabsTrigger value="noticias">Noticias</TabsTrigger>
      </TabsList>

      <TabsContent value="resumen" className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Últimos resultados</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {lastResults.map((m) => <MatchCard key={m.id} match={m} />)}
              </div>
            </section>
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Próximos partidos</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {nextMatches.map((m) => <MatchCard key={m.id} match={m} />)}
              </div>
            </section>
          </div>
          <div>
            <h2 className="mb-3 font-heading text-lg font-bold">Clasificación</h2>
            <StandingsTable rows={standings.slice(0, 6)} compact />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="partidos" className="space-y-6">
        {Array.from({ length: competition.totalMatchdays }, (_, i) => i + 1)
          .slice()
          .reverse()
          .map((jd) => {
            const jdMatches = matches.filter((m) => m.matchday === jd);
            if (jdMatches.length === 0) return null;
            return (
              <section key={jd}>
                <h3 className="mb-2 text-sm font-semibold text-muted-foreground">Jornada {jd}</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {jdMatches.map((m) => <MatchCard key={m.id} match={m} />)}
                </div>
              </section>
            );
          })}
      </TabsContent>

      <TabsContent value="clasificacion">
        <StandingsTable rows={standings} />
      </TabsContent>

      <TabsContent value="calendario" className="space-y-4">
        <MatchdayPicker matchday={matchday} total={competition.totalMatchdays} onChange={setMatchday} />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {matchdayMatches.map((m) => <MatchCard key={m.id} match={m} />)}
        </div>
      </TabsContent>

      <TabsContent value="equipos">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => <TeamCard key={t.id} team={t} />)}
        </div>
      </TabsContent>

      <TabsContent value="goleadores">
        {topScorers.length === 0 ? (
          <EmptyState icon={Target} title="Sin goleadores todavía" />
        ) : (
          <ol className="divide-y divide-border rounded-lg border border-border bg-card">
            {topScorers.map((player, i) => {
              const team = getTeamById(player.teamId)!;
              return (
                <li key={player.id}>
                  <Link href={`/jugadores/${player.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50">
                    <span className="w-5 text-sm font-bold text-muted-foreground">{i + 1}</span>
                    <PlayerAvatar name={player.name} hue={player.avatarHue} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{player.name}</p>
                      <p className="flex items-center gap-1 truncate text-[11px] text-muted-foreground">
                        <TeamBadge name={team.name} colors={team.colors} size="xs" /> {team.shortName}
                      </p>
                    </div>
                    <span className="font-heading text-lg font-bold text-brand-navy">{player.goals}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </TabsContent>

      <TabsContent value="noticias">
        {news.length === 0 ? (
          <EmptyState icon={Newspaper} title="Sin noticias relacionadas" />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {news.map((n) => <NewsCard key={n.id} article={n} />)}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
