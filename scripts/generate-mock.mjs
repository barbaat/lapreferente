// Deterministic mock-data generator for the "La Jornada" demo.
// Run with: node scripts/generate-mock.mjs
// Produces src/lib/mock/seed-data.ts as static literal data (no runtime randomness,
// so server and client render identical content and hydration never mismatches).

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "src", "lib", "mock", "seed-data.ts");

// ---------- seeded PRNG (mulberry32) ----------
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(20260630);
const randInt = (max, min = 0) => Math.floor(rng() * (max - min + 1)) + min;
const pick = (arr) => arr[randInt(arr.length - 1)];
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
function poissonish(lambda) {
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= rng();
  } while (p > L);
  return Math.min(k - 1, 6);
}
const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ---------- base geography ----------
const communities = [
  { id: "com-madrid", name: "Comunidad de Madrid", slug: "madrid" },
  { id: "com-andalucia", name: "Andalucía", slug: "andalucia" },
  { id: "com-valencia", name: "Comunitat Valenciana", slug: "comunitat-valenciana" },
];
const provinces = [
  { id: "prov-madrid", name: "Madrid", slug: "madrid", communityId: "com-madrid" },
  { id: "prov-sevilla", name: "Sevilla", slug: "sevilla", communityId: "com-andalucia" },
  { id: "prov-malaga", name: "Málaga", slug: "malaga", communityId: "com-andalucia" },
  { id: "prov-valencia", name: "Valencia", slug: "valencia", communityId: "com-valencia" },
];

// ---------- competitions ----------
const competitionsBase = [
  {
    id: "comp-preferente-madrid",
    slug: "preferente-madrid-grupo-centro",
    name: "Preferente Madrid · Grupo Centro",
    shortName: "Preferente Centro",
    category: "Preferente",
    provinceId: "prov-madrid",
    communityId: "com-madrid",
    season: "2025/2026",
    group: "Grupo Centro",
    totalTeams: 8,
    sponsor: { name: "Construcciones Vegalba", tagline: "Patrocinador oficial de la competición" },
    description:
      "La categoría reina del fútbol regional madrileño, antesala de Tercera RFEF, con derbis muy disputados entre clubes históricos de la región.",
  },
  {
    id: "comp-tercera-sur",
    slug: "tercera-rfef-grupo-sur",
    name: "Tercera RFEF · Grupo Sur",
    shortName: "Tercera Sur",
    category: "Tercera RFEF",
    provinceId: "prov-sevilla",
    communityId: "com-andalucia",
    season: "2025/2026",
    group: "Grupo Sur",
    totalTeams: 6,
    sponsor: { name: "Aceites Brisamar", tagline: "Patrocinador oficial de la competición" },
    description:
      "Competición semiprofesional andaluza con presupuestos crecientes y aspirantes claros al ascenso a Segunda RFEF.",
  },
  {
    id: "comp-regional-valencia",
    slug: "regional-preferente-valencia",
    name: "Regional Preferente · Comunitat Valenciana",
    shortName: "Regional Preferente",
    category: "Regional Preferente",
    provinceId: "prov-valencia",
    communityId: "com-valencia",
    season: "2025/2026",
    group: "Grupo Único",
    totalTeams: 6,
    sponsor: { name: "Cítricos Altavista", tagline: "Patrocinador oficial de la competición" },
    description:
      "El máximo nivel autonómico valenciano, escaparate de la cantera y trampolín hacia el fútbol nacional.",
  },
];

// ---------- teams ----------
const teamDefs = [
  // Madrid (8)
  { name: "CD Robledo", city: "Robledo de la Sierra", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#0b2545", "#ffffff"] },
  { name: "UD Vallarena", city: "Vallarena del Tajo", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#d6304a", "#0b2545"] },
  { name: "Atlético Pinarejo", city: "Pinarejo Alto", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#2f9e5e", "#ffffff"] },
  { name: "CF Cantosol", city: "Cantosol de Henares", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#f2a93c", "#0b2545"] },
  { name: "Real Almenara", city: "Almenara del Monte", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#0fb5ae", "#0b2545"] },
  { name: "CD Riofrío", city: "Riofrío de Guadarrama", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#0b2545", "#0fb5ae"] },
  { name: "UD Vegalba", city: "Vegalba de Arriba", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#5b2a86", "#ffffff"] },
  { name: "AD Montereal", city: "Montereal Bajo", comp: "comp-preferente-madrid", prov: "prov-madrid", colors: ["#0b2545", "#d6304a"] },
  // Andalucía (6)
  { name: "CD Sotoverde", city: "Sotoverde", comp: "comp-tercera-sur", prov: "prov-sevilla", colors: ["#2f9e5e", "#0b2545"] },
  { name: "UD Lagunilla", city: "Lagunilla del Río", comp: "comp-tercera-sur", prov: "prov-sevilla", colors: ["#f2a93c", "#ffffff"] },
  { name: "CF Brisamar", city: "Brisamar", comp: "comp-tercera-sur", prov: "prov-malaga", colors: ["#0fb5ae", "#ffffff"] },
  { name: "Real Castelnuevo", city: "Castelnuevo de la Costa", comp: "comp-tercera-sur", prov: "prov-malaga", colors: ["#0b2545", "#f2a93c"] },
  { name: "CD Peñablanca", city: "Peñablanca", comp: "comp-tercera-sur", prov: "prov-sevilla", colors: ["#d6304a", "#ffffff"] },
  { name: "Atlético Serranova", city: "Serranova", comp: "comp-tercera-sur", prov: "prov-malaga", colors: ["#0b2545", "#2f9e5e"] },
  // Valencia (6)
  { name: "UD Fuenllana", city: "Fuenllana", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#0b2545", "#ffffff"] },
  { name: "CD Arroyomar", city: "Arroyomar", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#f2a93c", "#0b2545"] },
  { name: "CF Altavista", city: "Altavista del Túria", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#0fb5ae", "#ffffff"] },
  { name: "AD Pozonegro", city: "Pozonegro", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#0b2545", "#d6304a"] },
  { name: "Real Cabodoro", city: "Cabodoro de Mar", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#2f9e5e", "#ffffff"] },
  { name: "UD Espinares", city: "Espinares", comp: "comp-regional-valencia", prov: "prov-valencia", colors: ["#5b2a86", "#f2a93c"] },
];

const coachFirst = ["Manuel", "Javier", "Antonio", "Fernando", "Carlos", "Raúl", "Sergio", "Pablo", "David", "Iván", "Alberto", "Rubén", "Daniel", "Óscar", "Vicente", "Jesús", "Mariano", "Joaquín", "Emilio", "Gonzalo"];
const coachLast = ["Serrano", "Domínguez", "Iglesias", "Pascual", "Cano", "Bravo", "Lozano", "Marín", "Gallego", "Cuesta", "Esteban", "Vidal", "Solana", "Reina", "Cervera", "Lara", "Bustos", "Mota", "Sastre", "Pina"];

const stadiumWords = ["Municipal", "Ciudad de", "Estadio", "Campo Municipal de", "Polideportivo"];

const teams = teamDefs.map((t, i) => {
  const slug = slugify(t.name);
  const coachName = `${pick(coachFirst)} ${pick(coachLast)}`;
  const stadiumName = `${pick(stadiumWords)} ${t.city}`;
  return {
    id: `team-${slug}`,
    slug,
    name: t.name,
    shortName: t.name.replace(/^(CD|UD|CF|AD|Real|Atlético)\s/, ""),
    city: t.city,
    provinceId: t.prov,
    competitionId: t.comp,
    founded: 1922 + randInt(78),
    stadium: {
      name: stadiumName,
      city: t.city,
      capacity: 800 + randInt(11) * 200,
      surface: pick(["Césped natural", "Césped artificial"]),
    },
    coach: { name: coachName, age: 38 + randInt(24), nationality: "España" },
    colors: { primary: t.colors[0], secondary: t.colors[1] },
    sponsor: { name: `${pick(["Construcciones", "Bar", "Talleres", "Supermercados", "Inmobiliaria", "Panadería"])} ${t.city.split(" ")[0]}`, tagline: "Patrocinador del club" },
    description: `Fundado en ${1922 + randInt(78)}, el ${t.name} es uno de los clubes con más arraigo de ${t.city}, conocido por la entrega de su cantera y el ambiente de su afición en ${stadiumName}.`,
    index: i,
  };
});

const competitions = competitionsBase.map((c) => {
  const totalMatchdays = (c.totalTeams - 1) * 2;
  return { ...c, totalMatchdays, currentMatchday: Math.round(totalMatchdays * 0.72) };
});

// ---------- players ----------
const firstNames = ["Álvaro", "Hugo", "Mario", "Pablo", "Diego", "Adrián", "Marcos", "Iker", "Bruno", "Nico", "Sergio", "Raúl", "Izan", "Leo", "Mateo", "Rodrigo", "Aitor", "Ignacio", "Eric", "Jorge", "Samuel", "Yeray", "Joel", "Asier", "Gonzalo", "Tomás", "Cristian", "Marc", "Lucas", "Enzo", "Souleymane", "Amine", "Karim", "Moussa", "Ibrahim", "Bilal", "Anderson", "Wesley", "Gabriel", "Thiago", "Rafael", "Vítor", "Nuno", "Cristiano", "Petru", "Mihai", "Dragan", "Kwame", "Yusuf", "Omar"];
const lastNames = ["García", "Martínez", "López", "Sánchez", "Pérez", "Gómez", "Fernández", "Ruiz", "Díaz", "Romero", "Navarro", "Torres", "Domínguez", "Vázquez", "Ramos", "Gil", "Serrano", "Blanco", "Suárez", "Molina", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marín", "Sanz", "Iglesias", "Núñez", "Medina", "Cortés", "Lozano", "Cano", "Prieto", "Méndez", "Cruz", "Flores", "Herrera", "Peña", "León", "Mendes", "Silva", "Traoré", "Diallo", "Cissé", "Konaté", "Popescu", "Ivanov"];

const positionsList = [
  ["Portero", "Portero"],
  ["Defensa", "Defensa", "Defensa", "Defensa"],
  ["Centrocampista", "Centrocampista", "Centrocampista", "Centrocampista"],
  ["Delantero", "Delantero", "Delantero"],
];
const jerseyByLine = {
  Portero: [1, 13],
  Defensa: [2, 3, 4, 5],
  Centrocampista: [6, 8, 10, 16],
  Delantero: [7, 9, 11],
};
const nationalities = ["España", "España", "España", "España", "España", "España", "Marruecos", "Argentina", "Colombia", "Brasil", "Portugal", "Rumanía", "Senegal", "Francia"];
const feet = ["Diestro", "Diestro", "Diestro", "Zurdo", "Zurdo", "Ambidiestro"];

const bioTemplates = {
  Portero: (n, t) => `Guardameta de reflejos seguros, ${n} se ha convertido en una referencia bajo los palos del ${t}, destacando por su salida de balón y su liderazgo en defensa.`,
  Defensa: (n, t) => `Central contundente en el juego aéreo, ${n} aporta solidez a la zaga del ${t} y no rehúye el envite físico.`,
  Centrocampista: (n, t) => `Motor del centro del campo, ${n} reparte juego y recupera balones para sostener el ritmo del ${t}.`,
  Delantero: (n, t) => `Referencia ofensiva del ${t}, ${n} combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.`,
};

let playerSeq = 0;
const usedNamesGlobal = new Set();
function makePlayerName() {
  for (let attempt = 0; attempt < 50; attempt++) {
    const name = `${pick(firstNames)} ${pick(lastNames)}`;
    if (!usedNamesGlobal.has(name)) {
      usedNamesGlobal.add(name);
      return name;
    }
  }
  playerSeq++;
  return `${pick(firstNames)} ${pick(lastNames)} ${playerSeq}`;
}

const players = [];
for (const team of teams) {
  const comp = competitions.find((c) => c.id === team.competitionId);
  const maxApps = comp.currentMatchday - 1;
  for (const line of positionsList) {
    for (const position of line) {
      const name = makePlayerName();
      const slug = `${slugify(name)}-${team.slug}`;
      const numbersPool = jerseyByLine[position];
      const usedNumbers = players.filter((p) => p.teamId === team.id).map((p) => p.number);
      const number = numbersPool.find((n) => !usedNumbers.includes(n)) ?? 18 + randInt(60, 1);
      const age = position === "Portero" ? 21 + randInt(15) : 17 + randInt(17);
      const matches = Math.max(1, Math.min(maxApps, randInt(maxApps, Math.max(1, maxApps - 8))));
      const minutes = matches * (60 + randInt(30));
      const goalFactor = position === "Delantero" ? 0.55 : position === "Centrocampista" ? 0.22 : position === "Defensa" ? 0.08 : 0;
      const goals = position === "Portero" ? 0 : Math.round(matches * goalFactor * rng());
      const assists = position === "Portero" ? 0 : randInt(Math.max(1, Math.round(matches * 0.2)));
      const yellowCards = randInt(8);
      const redCards = rng() > 0.92 ? 1 : 0;
      const form = Array.from({ length: 5 }, () => pick(["V", "V", "E", "D", "D"]));
      players.push({
        id: `player-${slug}`,
        slug,
        name,
        teamId: team.id,
        number,
        position,
        age,
        nationality: pick(nationalities),
        height: 168 + randInt(28),
        foot: pick(feet),
        matches,
        minutes,
        goals,
        assists,
        yellowCards,
        redCards,
        form,
        bio: bioTemplates[position](name, team.name),
        avatarHue: randInt(359),
      });
    }
  }
}

// ---------- schedule (double round robin) ----------
function roundRobinPairs(ids) {
  const n = ids.length;
  const arr = ids.slice();
  const rounds = [];
  for (let r = 0; r < n - 1; r++) {
    const round = [];
    for (let i = 0; i < n / 2; i++) {
      const home = arr[i];
      const away = arr[n - 1 - i];
      round.push(r % 2 === 0 ? [home, away] : [away, home]);
    }
    rounds.push(round);
    arr.splice(1, 0, arr.pop());
  }
  return rounds;
}

const kickoffTimes = ["12:00", "16:00", "16:30", "17:00", "17:30", "18:00", "19:30"];
const SEASON_START = new Date("2025-09-07T00:00:00Z");

function addDays(date, days) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

const matches = [];

for (const comp of competitions) {
  const compTeams = teams.filter((t) => t.competitionId === comp.id);
  const ids = compTeams.map((t) => t.id);
  const firstLeg = roundRobinPairs(ids);
  const secondLeg = firstLeg.map((round) => round.map(([h, a]) => [a, h]));
  const fullSchedule = [...firstLeg, ...secondLeg];
  const strengths = Object.fromEntries(ids.map((id) => [id, 3 + randInt(7)]));

  fullSchedule.forEach((round, idx) => {
    const matchday = idx + 1;
    const date = addDays(SEASON_START, matchday * 7);
    round.forEach(([homeId, awayId], gameIdx) => {
      const isPast = matchday < comp.currentMatchday;
      const isCurrent = matchday === comp.currentMatchday;
      let status = "programado";
      if (isPast) status = "jugado";
      else if (isCurrent) status = gameIdx === 0 ? "en_juego" : gameIdx === 1 ? "jugado" : "programado";

      let homeScore = null;
      let awayScore = null;
      if (status === "jugado" || status === "en_juego") {
        const sh = strengths[homeId];
        const sa = strengths[awayId];
        const intensity = status === "en_juego" ? 0.6 : 1;
        const lambdaHome = Math.max(0.3, (1.2 + (sh - sa) * 0.18 + 0.25) * intensity);
        const lambdaAway = Math.max(0.2, (1.0 + (sa - sh) * 0.18) * intensity);
        homeScore = poissonish(lambdaHome);
        awayScore = poissonish(lambdaAway);
      }

      const homeTeam = teams.find((t) => t.id === homeId);
      const matchId = `match-${comp.id}-j${matchday}-${gameIdx}`;
      const events = [];
      if (status === "jugado" || status === "en_juego") {
        const homeRoster = players.filter((p) => p.teamId === homeId && p.position !== "Portero");
        const awayRoster = players.filter((p) => p.teamId === awayId && p.position !== "Portero");
        for (let g = 0; g < (homeScore ?? 0); g++) {
          const scorer = pick(homeRoster);
          events.push({ minute: 5 + randInt(84), type: "gol", teamId: homeId, playerId: scorer.id, assistPlayerId: pick(homeRoster).id });
        }
        for (let g = 0; g < (awayScore ?? 0); g++) {
          const scorer = pick(awayRoster);
          events.push({ minute: 5 + randInt(84), type: "gol", teamId: awayId, playerId: scorer.id, assistPlayerId: pick(awayRoster).id });
        }
        const cardPool = [...homeRoster, ...awayRoster, ...players.filter((p) => p.teamId === homeId && p.position === "Portero"), ...players.filter((p) => p.teamId === awayId && p.position === "Portero")];
        const cardCount = randInt(4);
        for (let c = 0; c < cardCount; c++) {
          const player = pick(cardPool);
          events.push({ minute: 10 + randInt(80), type: "amarilla", teamId: player.teamId, playerId: player.id });
        }
        events.sort((a, b) => a.minute - b.minute);
      }

      const stats =
        status === "programado"
          ? []
          : [
              { label: "Posesión", home: 38 + randInt(24), away: 0 },
              { label: "Tiros a puerta", home: randInt(9, 1), away: randInt(9, 1) },
              { label: "Córners", home: randInt(8), away: randInt(8) },
              { label: "Faltas", home: 6 + randInt(10), away: 6 + randInt(10) },
            ];
      if (stats.length) stats[0].away = 100 - stats[0].home;

      matches.push({
        id: matchId,
        competitionId: comp.id,
        matchday,
        date,
        time: pick(kickoffTimes),
        status,
        venue: homeTeam.stadium.name,
        homeTeamId: homeId,
        awayTeamId: awayId,
        homeScore,
        awayScore,
        events,
        stats,
        homeLineup: shuffle(players.filter((p) => p.teamId === homeId).map((p) => p.id)).slice(0, 11),
        awayLineup: shuffle(players.filter((p) => p.teamId === awayId).map((p) => p.id)).slice(0, 11),
      });
    });
  });
}

// ---------- standings ----------
function buildStandings(compId) {
  const compTeams = teams.filter((t) => t.competitionId === compId);
  const table = Object.fromEntries(
    compTeams.map((t) => [t.id, { teamId: t.id, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0, formLog: [] }])
  );
  const played = matches
    .filter((m) => m.competitionId === compId && m.status === "jugado")
    .sort((a, b) => a.matchday - b.matchday);

  for (const m of played) {
    const home = table[m.homeTeamId];
    const away = table[m.awayTeamId];
    home.played++;
    away.played++;
    home.goalsFor += m.homeScore;
    home.goalsAgainst += m.awayScore;
    away.goalsFor += m.awayScore;
    away.goalsAgainst += m.homeScore;
    if (m.homeScore > m.awayScore) {
      home.won++;
      away.lost++;
      home.points += 3;
      home.formLog.push("V");
      away.formLog.push("D");
    } else if (m.homeScore < m.awayScore) {
      away.won++;
      home.lost++;
      away.points += 3;
      away.formLog.push("V");
      home.formLog.push("D");
    } else {
      home.drawn++;
      away.drawn++;
      home.points++;
      away.points++;
      home.formLog.push("E");
      away.formLog.push("E");
    }
  }

  const rows = Object.values(table).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    const gdA = a.goalsFor - a.goalsAgainst;
    const gdB = b.goalsFor - b.goalsAgainst;
    if (gdB !== gdA) return gdB - gdA;
    return b.goalsFor - a.goalsFor;
  });

  const n = rows.length;
  return rows.map((r, i) => {
    const position = i + 1;
    let zone = "permanencia";
    if (n === 8) {
      if (position <= 2) zone = "ascenso";
      else if (position <= 4) zone = "playoff";
      else if (position >= 7) zone = "descenso";
    } else {
      if (position === 1) zone = "ascenso";
      else if (position <= 3) zone = "playoff";
      else if (position === n) zone = "descenso";
    }
    return {
      position,
      teamId: r.teamId,
      played: r.played,
      won: r.won,
      drawn: r.drawn,
      lost: r.lost,
      goalsFor: r.goalsFor,
      goalsAgainst: r.goalsAgainst,
      points: r.points,
      zone,
      form: r.formLog.slice(-5),
    };
  });
}

const standings = Object.fromEntries(competitions.map((c) => [c.id, buildStandings(c.id)]));

// ---------- top scorers ----------
const topScorers = players
  .filter((p) => p.goals > 0)
  .sort((a, b) => b.goals - a.goals)
  .slice(0, 10)
  .map((p) => ({ playerId: p.id, goals: p.goals, matches: p.matches }));

// ---------- news ----------
function findTeam(id) {
  return teams.find((t) => t.id === id);
}
function topScorerOf(compId) {
  const compTeamIds = teams.filter((t) => t.competitionId === compId).map((t) => t.id);
  return players.filter((p) => compTeamIds.includes(p.teamId)).sort((a, b) => b.goals - a.goals)[0];
}

const newsAuthors = ["Marta Iglesias", "Rubén Casado", "Lucía Fernández", "Pablo Soriano", "Carmen Vidal", "Diego Andrade"];

const newsDefs = [];
let newsDate = new Date("2026-05-24T08:00:00Z");
function nextNewsDate() {
  const d = newsDate.toISOString().slice(0, 10);
  newsDate = new Date(newsDate.getTime() - 86400000 * (1 + randInt(2)));
  return d;
}

// 1-3: crónicas de la última jornada jugada por competición
for (const comp of competitions) {
  const lastPlayed = matches
    .filter((m) => m.competitionId === comp.id && m.status === "jugado")
    .sort((a, b) => b.matchday - a.matchday)[0];
  const home = findTeam(lastPlayed.homeTeamId);
  const away = findTeam(lastPlayed.awayTeamId);
  const winner = lastPlayed.homeScore > lastPlayed.awayScore ? home : lastPlayed.awayScore > lastPlayed.homeScore ? away : null;
  const title = winner
    ? `${winner.name} firma una victoria de prestigio ante ${winner === home ? away.name : home.name} (${lastPlayed.homeScore}-${lastPlayed.awayScore})`
    : `${home.name} y ${away.name} reparten puntos en un duelo igualado (${lastPlayed.homeScore}-${lastPlayed.awayScore})`;
  newsDefs.push({
    title,
    excerpt: `Resumen de la jornada ${lastPlayed.matchday} de ${comp.name}, disputada en ${lastPlayed.venue}.`,
    body: [
      `El ${lastPlayed.venue} fue testigo de un partido intenso entre ${home.name} y ${away.name} correspondiente a la jornada ${lastPlayed.matchday} de ${comp.name}.`,
      `El marcador final, ${lastPlayed.homeScore}-${lastPlayed.awayScore}, refleja el equilibrio de fuerzas mostrado durante los noventa minutos, con ocasiones claras en ambas áreas.`,
      winner
        ? `${winner.name} supo aprovechar mejor sus opciones y se lleva tres puntos que le permiten seguir escalando en la clasificación de ${comp.shortName}.`
        : `El reparto de puntos deja sensaciones encontradas en ambos vestuarios, conscientes de que el calendario aprieta de cara al tramo final de la temporada.`,
      `Ambos técnicos coincidieron tras el encuentro en la importancia de seguir sumando minutos de competición de cara a las próximas jornadas.`,
    ],
    category: "Crónica",
    tags: [comp.shortName, home.shortName, away.shortName],
    competitionId: comp.id,
    teamId: winner ? winner.id : home.id,
    featured: comp.id === "comp-preferente-madrid",
  });
}

// 4-6: fichaje / cantera por competición usando un jugador real generado
for (const comp of competitions) {
  const compTeams = teams.filter((t) => t.competitionId === comp.id);
  const team = pick(compTeams);
  const player = pick(players.filter((p) => p.teamId === team.id));
  newsDefs.push({
    title: `${team.name} renueva a ${player.name} hasta 2027`,
    excerpt: `El club ${player.position === "Delantero" ? "blinda a su referencia ofensiva" : "asegura la continuidad de una de sus piezas clave"} ampliando su contrato dos temporadas más.`,
    body: [
      `El ${team.name} ha hecho oficial la renovación de ${player.name}, de ${player.age} años, que ampliará su vinculación con la entidad hasta junio de 2027.`,
      `El ${player.position.toLowerCase()} suma esta temporada ${player.matches} partidos disputados, con ${player.goals} goles y ${player.assists} asistencias, consolidándose como una pieza importante en el esquema de ${team.coach.name}.`,
      `Desde el club destacan el compromiso mostrado por el jugador y su buena conexión con la afición de ${team.city}, que lo ha convertido en uno de los favoritos en ${team.stadium.name}.`,
    ],
    category: "Fichajes",
    tags: [comp.shortName, team.shortName, "Renovación"],
    competitionId: comp.id,
    teamId: team.id,
    featured: false,
  });
}

// 7: entrevista al pichichi de Preferente Madrid
{
  const comp = competitions[0];
  const scorer = topScorerOf(comp.id);
  const team = findTeam(scorer.teamId);
  newsDefs.push({
    title: `${scorer.name}: "El gol es una consecuencia del trabajo del equipo"`,
    excerpt: `Hablamos con el máximo goleador de ${comp.shortName} sobre su gran temporada con el ${team.name}.`,
    body: [
      `Con ${scorer.goals} goles esta temporada, ${scorer.name} se ha situado como una de las grandes referencias ofensivas de ${comp.name}.`,
      `"Cada gol es fruto del trabajo colectivo, el equipo me pone en muy buenas condiciones para definir", explica el delantero del ${team.name}.`,
      `El jugador, de ${scorer.age} años, reconoce que el objetivo del grupo es pelear por estar arriba en la tabla: "Sabemos que el nivel de ${comp.shortName} es muy alto, pero tenemos plantilla para soñar con el ascenso".`,
      `Sobre su evolución personal, añade: "He mejorado mucho en el juego sin balón, eso me permite aparecer más veces en zonas de finalización".`,
    ],
    category: "Entrevista",
    tags: [comp.shortName, team.shortName, "Goleadores"],
    competitionId: comp.id,
    teamId: team.id,
    featured: true,
  });
}

// 8: cantera
{
  const team = pick(teams);
  newsDefs.push({
    title: `La cantera del ${team.name}, motor de futuro en ${team.city}`,
    excerpt: `El club refuerza su apuesta por el fútbol base con nuevas categorías y más de cien jóvenes federados esta temporada.`,
    body: [
      `El proyecto de cantera del ${team.name} continúa creciendo con la incorporación de dos nuevos equipos en categoría benjamín, hasta alcanzar las once categorías inferiores.`,
      `"Queremos que cualquier niño o niña de ${team.city} tenga la posibilidad de jugar al fútbol federado en nuestras instalaciones", explica el coordinador de fútbol base del club.`,
      `Varios canteranos ya han dado el salto al primer equipo esta temporada, una tendencia que el club quiere consolidar en los próximos años.`,
    ],
    category: "Cantera",
    tags: [team.shortName, "Fútbol base"],
    teamId: team.id,
    featured: false,
  });
}

// 9: actualidad institucional / arbitraje
newsDefs.push({
  title: "La federación actualiza el protocolo de horarios para la recta final de temporada",
  excerpt: "Los clubes deberán comunicar con 72 horas de antelación cualquier solicitud de cambio de horario o campo.",
  body: [
    "Con el tramo decisivo de la competición a la vuelta de la esquina, el comité de competición ha recordado a los clubes el protocolo vigente para solicitar cambios de horario o de terreno de juego.",
    "La medida busca dar mayor estabilidad al calendario y facilitar la organización tanto a los equipos como a los aficionados que siguen los desplazamientos.",
    "Desde la organización se insiste en la importancia de la deportividad en una fase de la temporada en la que se deciden ascensos, playoffs y descensos.",
  ],
  category: "Actualidad",
  tags: ["Federación", "Calendario"],
  featured: false,
});

// 10: reportaje derbi
{
  const comp = competitions[0];
  const compTeams = teams.filter((t) => t.competitionId === comp.id);
  const [a, b] = shuffle(compTeams).slice(0, 2);
  newsDefs.push({
    title: `Radiografía del derbi: ${a.name} - ${b.name}, la rivalidad que paraliza la comarca`,
    excerpt: `Repasamos la historia reciente de un duelo que llena las gradas de ${a.stadium.name} cada temporada.`,
    body: [
      `Pocos partidos despiertan tanta expectación en ${comp.shortName} como el que enfrenta a ${a.name} y ${b.name}, separados por apenas unos kilómetros.`,
      `La rivalidad, alimentada durante décadas, convierte cada cita en un examen de carácter además de fútbol, con las gradas de ${a.stadium.name} habitualmente al límite de su aforo.`,
      `Ambas aficiones coinciden en que, más allá del resultado, el derbi es una fiesta del fútbol regional que une a toda la comarca.`,
    ],
    category: "Reportaje",
    tags: [comp.shortName, a.shortName, b.shortName, "Derbi"],
    competitionId: comp.id,
    teamId: a.id,
    featured: false,
  });
}

// 11: lesión / baja
{
  const team = pick(teams);
  const player = pick(players.filter((p) => p.teamId === team.id && p.position !== "Portero"));
  newsDefs.push({
    title: `Baja sensible en el ${team.name}: ${player.name} se perderá varias semanas`,
    excerpt: `El cuerpo técnico confirma una lesión muscular que apartará al jugador de los terrenos de juego en plena lucha por los objetivos.`,
    body: [
      `El ${team.name} ha confirmado que ${player.name} sufre una sobrecarga muscular que le obligará a parar varias semanas, justo en un momento decisivo de la temporada.`,
      `El club no quiere precisar un plazo exacto de recuperación y prefiere "no arriesgar" con un jugador importante en la rotación de ${team.coach.name}.`,
      `Mientras tanto, el resto de la plantilla deberá dar un paso adelante para suplir su ausencia en las próximas jornadas.`,
    ],
    category: "Actualidad",
    tags: [team.shortName, "Lesiones"],
    teamId: team.id,
    featured: false,
  });
}

// 12: previa jornada siguiente liga 2
{
  const comp = competitions[1];
  const next = matches
    .filter((m) => m.competitionId === comp.id && m.status === "programado")
    .sort((a, b) => a.matchday - b.matchday)[0];
  const home = findTeam(next.homeTeamId);
  const away = findTeam(next.awayTeamId);
  newsDefs.push({
    title: `Previa: ${home.name} recibe a ${away.name} en un duelo directo por la zona alta`,
    excerpt: `Cita destacada de la jornada ${next.matchday} de ${comp.shortName}, con ambos equipos necesitados de puntos.`,
    body: [
      `El ${home.stadium.name} acoge el ${next.date} (${next.time}h) un partido con mucho en juego entre ${home.name} y ${away.name}.`,
      `${home.name} llega con la intención de aprovechar su condición de local para acercarse a las plazas de ascenso, mientras que ${away.name} buscará dar la sorpresa lejos de casa.`,
      `Se espera un ambiente notable en las gradas, en un encuentro que puede marcar el devenir de ambos clubes en la recta final de ${comp.season}.`,
    ],
    category: "Crónica",
    tags: [comp.shortName, home.shortName, away.shortName, "Previa"],
    competitionId: comp.id,
    teamId: home.id,
    featured: false,
  });
}

const news = newsDefs.map((n, i) => ({
  id: `news-${i + 1}`,
  slug: slugify(n.title).slice(0, 80),
  title: n.title,
  excerpt: n.excerpt,
  body: n.body,
  category: n.category,
  author: pick(newsAuthors),
  date: nextNewsDate(),
  tags: n.tags,
  competitionId: n.competitionId,
  teamId: n.teamId,
  featured: n.featured,
  readTime: 2 + randInt(3),
  views: 400 + randInt(9000),
  hue: randInt(359),
}));

// ---------- output ----------
function ts(value) {
  return JSON.stringify(value, null, 2);
}

const header = `// AUTO-GENERATED FILE — do not edit by hand.
// Regenerate with: node scripts/generate-mock.mjs
import type {
  Community,
  Province,
  Competition,
  Team,
  Player,
  Match,
  StandingRow,
  NewsArticle,
  TopScorer,
} from "./types";
`;

const body = `
export const communities: Community[] = ${ts(communities)};

export const provinces: Province[] = ${ts(provinces)};

export const competitions: Competition[] = ${ts(competitions.map(({ ...c }) => c))};

export const teams: Team[] = ${ts(teams.map(({ index: _index, ...t }) => t))};

export const players: Player[] = ${ts(players)};

export const matches: Match[] = ${ts(matches)};

export const standings: Record<string, StandingRow[]> = ${ts(standings)};

export const topScorers: TopScorer[] = ${ts(topScorers)};

export const news: NewsArticle[] = ${ts(news)};
`;

writeFileSync(OUT, header + body, "utf-8");
console.log(`Generated ${OUT}`);
console.log(`teams=${teams.length} players=${players.length} matches=${matches.length} news=${news.length} topScorers=${topScorers.length}`);
