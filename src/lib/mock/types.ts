export type Position = "Portero" | "Defensa" | "Centrocampista" | "Delantero";

export type MatchStatus = "jugado" | "en_juego" | "programado" | "aplazado";

export type ZoneType = "ascenso" | "playoff" | "permanencia" | "descenso";

export interface Community {
  id: string;
  name: string;
  slug: string;
}

export interface Province {
  id: string;
  name: string;
  slug: string;
  communityId: string;
}

export interface Stadium {
  name: string;
  city: string;
  capacity: number;
  surface: string;
}

export interface Coach {
  name: string;
  age: number;
  nationality: string;
}

export interface Sponsor {
  name: string;
  tagline: string;
}

export interface Competition {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  provinceId: string;
  communityId: string;
  season: string;
  group: string;
  totalTeams: number;
  currentMatchday: number;
  totalMatchdays: number;
  sponsor: Sponsor;
  description: string;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  provinceId: string;
  competitionId: string;
  founded: number;
  stadium: Stadium;
  coach: Coach;
  colors: { primary: string; secondary: string };
  sponsor: Sponsor;
  description: string;
}

export interface Player {
  id: string;
  slug: string;
  name: string;
  teamId: string;
  number: number;
  position: Position;
  age: number;
  nationality: string;
  height: number;
  foot: "Diestro" | "Zurdo" | "Ambidiestro";
  matches: number;
  minutes: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  form: ("V" | "E" | "D" | "-")[];
  bio: string;
  avatarHue: number;
}

export interface MatchEvent {
  minute: number;
  type: "gol" | "amarilla" | "roja" | "doble_amarilla" | "cambio";
  teamId: string;
  playerId: string;
  detail?: string;
  assistPlayerId?: string;
  playerOutId?: string;
}

export interface MatchStat {
  label: string;
  home: number;
  away: number;
}

export interface Match {
  id: string;
  competitionId: string;
  matchday: number;
  date: string;
  time: string;
  status: MatchStatus;
  venue: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number | null;
  awayScore: number | null;
  events: MatchEvent[];
  stats: MatchStat[];
  homeLineup: string[];
  awayLineup: string[];
}

export interface StandingRow {
  position: number;
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  zone: ZoneType;
  form: ("V" | "E" | "D")[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  date: string;
  tags: string[];
  competitionId?: string;
  teamId?: string;
  featured: boolean;
  readTime: number;
  views: number;
  hue: number;
}

export interface TopScorer {
  playerId: string;
  goals: number;
  matches: number;
}
