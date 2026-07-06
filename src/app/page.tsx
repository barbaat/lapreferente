import Link from "next/link";
import { ArrowRight, Target, Radio } from "lucide-react";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsCard } from "@/components/news/news-card";
import { MatchCard } from "@/components/matches/match-card";
import { StandingsTable } from "@/components/competitions/standings-table";
import { CompetitionCard } from "@/components/competitions/competition-card";
import { TeamCard } from "@/components/teams/team-card";
import { TeamBadge } from "@/components/brand/team-badge";
import { PlayerAvatar } from "@/components/brand/player-avatar";
import { AdBanner } from "@/components/ads/ad-banner";
import { Badge } from "@/components/ui/badge";
import {
  competitions,
  getFeaturedNews,
  getLatestNews,
  getRecentResults,
  getStandingsByCompetition,
  getTeamById,
  getTeamsByCompetition,
  getTodayMatches,
  getTopScorersWithPlayers,
  getUpcomingMatches,
} from "@/lib/mock";

export default function HomePage() {
  const featured = getFeaturedNews()[0] ?? getLatestNews(1)[0];
  const sideNews = getLatestNews(4).filter((n) => n.id !== featured.id).slice(0, 3);
  const latest = getLatestNews(7).filter((n) => n.id !== featured.id).slice(0, 6);

  const todayMatches = getTodayMatches();
  const upcoming = getUpcomingMatches(6);
  const results = getRecentResults(6);

  const mainCompetition = competitions[0];
  const standings = getStandingsByCompetition(mainCompetition.id).slice(0, 6);
  const topScorers = getTopScorersWithPlayers(6);

  const featuredTeams = getTeamsByCompetition(mainCompetition.id).slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 sm:px-6 sm:py-8">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <FeaturedNews article={featured} />
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Destacadas
          </h2>
          {sideNews.map((article) => (
            <NewsCard key={article.id} article={article} orientation="horizontal" />
          ))}
        </div>
      </section>

      <AdBanner variant="horizontal" sponsor="Construcciones Vegalba" />

      {todayMatches.length > 0 && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <Radio className="size-4 text-brand-red" />
            <h2 className="font-heading text-lg font-bold">Partidos de hoy</h2>
            <Badge className="bg-brand-red text-white">En directo</Badge>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {todayMatches.map((m) => (
              <MatchCard key={m.id} match={m} showCompetition />
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Resultados recientes</h2>
              <Link href="/partidos" className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline">
                Ver todos <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {results.map((m) => (
                <MatchCard key={m.id} match={m} showCompetition />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Próximos partidos</h2>
              <Link href="/partidos" className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline">
                Ver calendario <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {upcoming.map((m) => (
                <MatchCard key={m.id} match={m} showCompetition />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Últimas noticias</h2>
              <Link href="/noticias" className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline">
                Ver todas <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {latest.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Competiciones destacadas</h2>
              <Link href="/competiciones" className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline">
                Ver todas <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {competitions.map((c) => (
                <CompetitionCard key={c.id} competition={c} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold">Equipos destacados</h2>
              <Link href="/equipos" className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline">
                Ver todos <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {featuredTeams.map((t) => (
                <TeamCard key={t.id} team={t} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Clasificación · {mainCompetition.shortName}
              </h2>
            </div>
            <StandingsTable rows={standings} compact />
            <Link
              href={`/competiciones/${mainCompetition.slug}`}
              className="mt-2 flex items-center justify-center gap-1 text-sm font-medium text-brand-turquoise hover:underline"
            >
              Ver clasificación completa <ArrowRight className="size-3.5" />
            </Link>
          </section>

          <AdBanner variant="sidebar" sponsor="Aceites Brisamar" />

          <section>
            <div className="mb-3 flex items-center gap-2">
              <Target className="size-4 text-brand-turquoise" />
              <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
                Goleadores
              </h2>
            </div>
            <ol className="divide-y divide-border rounded-lg border border-border bg-card">
              {topScorers.map((entry, i) => {
                const team = getTeamById(entry.player.teamId)!;
                return (
                  <li key={entry.playerId}>
                    <Link href={`/jugadores/${entry.player.slug}`} className="flex items-center gap-3 px-3 py-2.5 hover:bg-secondary/50">
                      <span className="w-4 text-sm font-bold text-muted-foreground">{i + 1}</span>
                      <PlayerAvatar name={entry.player.name} hue={entry.player.avatarHue} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{entry.player.name}</p>
                        <p className="flex items-center gap-1 truncate text-[11px] text-muted-foreground">
                          <TeamBadge name={team.name} colors={team.colors} size="xs" />
                          {team.shortName}
                        </p>
                      </div>
                      <span className="font-heading text-lg font-bold text-brand-navy">{entry.goals}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        </aside>
      </div>
    </div>
  );
}
