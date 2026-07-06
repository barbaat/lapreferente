import {
  communities,
  provinces,
  competitions,
  teams,
  players,
  matches,
  standings,
  topScorers,
  news,
} from "./seed-data";
import type { Match, NewsArticle, Player, StandingRow } from "./types";

export * from "./types";
export {
  communities,
  provinces,
  competitions,
  teams,
  players,
  matches,
  standings,
  topScorers,
  news,
};

// ---------- lookups ----------
export const getCommunityBySlug = (slug: string) => communities.find((c) => c.slug === slug);
export const getProvinceBySlug = (slug: string) => provinces.find((p) => p.slug === slug);
export const getProvincesByCommunity = (communityId: string) =>
  provinces.filter((p) => p.communityId === communityId);

export const getCompetitionBySlug = (slug: string) => competitions.find((c) => c.slug === slug);
export const getCompetitionById = (id?: string) => competitions.find((c) => c.id === id);
export const getCompetitionsByProvince = (provinceId: string) =>
  competitions.filter((c) => c.provinceId === provinceId);

export const getTeamBySlug = (slug: string) => teams.find((t) => t.slug === slug);
export const getTeamById = (id?: string) => teams.find((t) => t.id === id);
export const getTeamsByCompetition = (competitionId: string) =>
  teams.filter((t) => t.competitionId === competitionId);

export const getPlayerBySlug = (slug: string) => players.find((p) => p.slug === slug);
export const getPlayerById = (id?: string) => players.find((p) => p.id === id);
export const getPlayersByTeam = (teamId: string) =>
  players.filter((p) => p.teamId === teamId).sort((a, b) => a.number - b.number);

const POSITION_ORDER = ["Portero", "Defensa", "Centrocampista", "Delantero"];
export function getSquadGroupedByPosition(teamId: string) {
  const squad = getPlayersByTeam(teamId);
  return POSITION_ORDER.map((position) => ({
    position,
    players: squad.filter((p) => p.position === position),
  }));
}

export const getMatchById = (id?: string) => matches.find((m) => m.id === id);
export const getMatchesByCompetition = (competitionId: string) =>
  matches.filter((m) => m.competitionId === competitionId).sort((a, b) => a.matchday - b.matchday);
export const getMatchesByMatchday = (competitionId: string, matchday: number) =>
  matches.filter((m) => m.competitionId === competitionId && m.matchday === matchday);
export const getMatchesByTeam = (teamId: string) =>
  matches
    .filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
    .sort((a, b) => a.matchday - b.matchday);

export function getRecentResults(limit = 8): Match[] {
  return matches
    .filter((m) => m.status === "jugado")
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function getTodayMatches(): Match[] {
  return matches.filter((m) => m.status === "en_juego");
}

export function getUpcomingMatches(limit = 8): Match[] {
  return matches
    .filter((m) => m.status === "programado")
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .slice(0, limit);
}

export const getStandingsByCompetition = (competitionId: string): StandingRow[] =>
  standings[competitionId] ?? [];

export function getTeamForm(teamId: string): ("V" | "E" | "D")[] {
  for (const rows of Object.values(standings)) {
    const row = rows.find((r) => r.teamId === teamId);
    if (row) return row.form;
  }
  return [];
}

export function getTeamPosition(teamId: string): StandingRow | undefined {
  for (const rows of Object.values(standings)) {
    const row = rows.find((r) => r.teamId === teamId);
    if (row) return row;
  }
  return undefined;
}

export const getNewsBySlug = (slug: string) => news.find((n) => n.slug === slug);
export const getFeaturedNews = () => news.filter((n) => n.featured);
export const getLatestNews = (limit = 6): NewsArticle[] =>
  news.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
export const getMostReadNews = (limit = 5): NewsArticle[] =>
  news.slice().sort((a, b) => b.views - a.views).slice(0, limit);
export const getNewsByTeam = (teamId: string) => news.filter((n) => n.teamId === teamId);
export const getNewsByCompetition = (competitionId: string) =>
  news.filter((n) => n.competitionId === competitionId);
export const getRelatedNews = (article: NewsArticle, limit = 3): NewsArticle[] =>
  news
    .filter(
      (n) =>
        n.id !== article.id &&
        (n.category === article.category || n.teamId === article.teamId || n.competitionId === article.competitionId)
    )
    .slice(0, limit);

export const getTopScorersWithPlayers = (limit = 10) =>
  topScorers.slice(0, limit).map((ts) => ({ ...ts, player: getPlayerById(ts.playerId) as Player }));

export function getTeamTopScorers(teamId: string, limit = 5) {
  return players
    .filter((p) => p.teamId === teamId && p.goals > 0)
    .sort((a, b) => b.goals - a.goals)
    .slice(0, limit);
}

export function getCompetitionTopScorers(competitionId: string, limit = 10) {
  const compTeamIds = new Set(getTeamsByCompetition(competitionId).map((t) => t.id));
  return players
    .filter((p) => compTeamIds.has(p.teamId) && p.goals > 0)
    .sort((a, b) => b.goals - a.goals)
    .slice(0, limit);
}

export function getHeadToHead(teamAId: string, teamBId: string) {
  return matches
    .filter(
      (m) =>
        m.status === "jugado" &&
        ((m.homeTeamId === teamAId && m.awayTeamId === teamBId) ||
          (m.homeTeamId === teamBId && m.awayTeamId === teamAId))
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ---------- search ----------
export interface SearchResult {
  type: "equipo" | "jugador" | "competicion" | "noticia";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

export function searchAll(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const results: SearchResult[] = [];

  for (const t of teams) {
    if (t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q)) {
      results.push({ type: "equipo", id: t.id, title: t.name, subtitle: t.city, href: `/equipos/${t.slug}` });
    }
  }
  for (const p of players) {
    if (p.name.toLowerCase().includes(q)) {
      const team = getTeamById(p.teamId);
      results.push({ type: "jugador", id: p.id, title: p.name, subtitle: team ? `${team.name} · ${p.position}` : p.position, href: `/jugadores/${p.slug}` });
    }
  }
  for (const c of competitions) {
    if (c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) {
      results.push({ type: "competicion", id: c.id, title: c.name, subtitle: c.category, href: `/competiciones/${c.slug}` });
    }
  }
  for (const n of news) {
    if (n.title.toLowerCase().includes(q) || n.tags.some((tag) => tag.toLowerCase().includes(q))) {
      results.push({ type: "noticia", id: n.id, title: n.title, subtitle: n.category, href: `/noticias/${n.slug}` });
    }
  }
  return results.slice(0, 30);
}
