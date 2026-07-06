"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchCard } from "@/components/matches/match-card";
import { StandingsTable } from "@/components/competitions/standings-table";
import { PlayerCard } from "@/components/players/player-card";
import { PlayerAvatar } from "@/components/brand/player-avatar";
import { NewsCard } from "@/components/news/news-card";
import { EmptyState } from "@/components/common/empty-state";
import { CalendarDays, Newspaper, Target, Users2 } from "lucide-react";
import type {
  Match,
  NewsArticle,
  Player,
  StandingRow,
  Team,
} from "@/lib/mock";

const POSITION_LABELS: Record<string, string> = {
  Portero: "Porteros",
  Defensa: "Defensas",
  Centrocampista: "Centrocampistas",
  Delantero: "Delanteros",
};

export function TeamTabs({
  team,
  squad,
  matches,
  standings,
  news,
  topScorers,
}: {
  team: Team;
  squad: { position: string; players: Player[] }[];
  matches: Match[];
  standings: StandingRow[];
  news: NewsArticle[];
  topScorers: Player[];
}) {
  const upcoming = matches.filter((m) => m.status === "programado").slice(0, 3);
  const recent = matches.filter((m) => m.status === "jugado").slice(-3).reverse();

  return (
    <Tabs defaultValue="resumen" className="gap-6">
      <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="plantilla">Plantilla</TabsTrigger>
        <TabsTrigger value="partidos">Partidos</TabsTrigger>
        <TabsTrigger value="clasificacion">Clasificación</TabsTrigger>
        <TabsTrigger value="noticias">Noticias</TabsTrigger>
        <TabsTrigger value="informacion">Información</TabsTrigger>
      </TabsList>

      <TabsContent value="resumen" className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Próximos partidos</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {upcoming.length ? upcoming.map((m) => <MatchCard key={m.id} match={m} />) : (
                  <EmptyState icon={CalendarDays} title="Sin próximos partidos" />
                )}
              </div>
            </section>
            <section>
              <h2 className="mb-3 font-heading text-lg font-bold">Últimos resultados</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {recent.map((m) => <MatchCard key={m.id} match={m} />)}
              </div>
            </section>
          </div>
          <section>
            <h2 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold">
              <Target className="size-4 text-brand-turquoise" /> Goleadores del equipo
            </h2>
            <ol className="divide-y divide-border rounded-lg border border-border bg-card">
              {topScorers.map((player, i) => (
                <li key={player.id} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="w-4 text-sm font-bold text-muted-foreground">{i + 1}</span>
                  <PlayerAvatar name={player.name} hue={player.avatarHue} size="sm" />
                  <span className="flex-1 truncate text-sm font-medium">{player.name}</span>
                  <span className="font-heading text-base font-bold text-brand-navy">{player.goals}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="plantilla" className="space-y-8">
        {squad.map((group) => (
          <section key={group.position}>
            <h2 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold">
              <Users2 className="size-4 text-brand-turquoise" /> {POSITION_LABELS[group.position]}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.players.map((p) => <PlayerCard key={p.id} player={p} />)}
            </div>
          </section>
        ))}
      </TabsContent>

      <TabsContent value="partidos" className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {matches.slice().reverse().map((m) => <MatchCard key={m.id} match={m} />)}
        </div>
      </TabsContent>

      <TabsContent value="clasificacion">
        <StandingsTable rows={standings} highlightTeamId={team.id} />
      </TabsContent>

      <TabsContent value="noticias">
        {news.length === 0 ? (
          <EmptyState icon={Newspaper} title="Sin noticias del equipo" />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {news.map((n) => <NewsCard key={n.id} article={n} />)}
          </div>
        )}
      </TabsContent>

      <TabsContent value="informacion">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Datos del club
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Fundado</dt><dd className="font-medium">{team.founded}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Ciudad</dt><dd className="font-medium">{team.city}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Entrenador</dt><dd className="font-medium">{team.coach.name}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Patrocinador</dt><dd className="font-medium">{team.sponsor.name}</dd></div>
            </dl>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Estadio
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Nombre</dt><dd className="font-medium">{team.stadium.name}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Aforo</dt><dd className="font-medium">{team.stadium.capacity.toLocaleString("es-ES")}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Superficie</dt><dd className="font-medium">{team.stadium.surface}</dd></div>
            </dl>
          </div>
          <p className="sm:col-span-2 text-sm leading-relaxed text-muted-foreground">{team.description}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
