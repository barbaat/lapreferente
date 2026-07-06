// AUTO-GENERATED FILE — do not edit by hand.
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

export const communities: Community[] = [
  {
    "id": "com-madrid",
    "name": "Comunidad de Madrid",
    "slug": "madrid"
  },
  {
    "id": "com-andalucia",
    "name": "Andalucía",
    "slug": "andalucia"
  },
  {
    "id": "com-valencia",
    "name": "Comunitat Valenciana",
    "slug": "comunitat-valenciana"
  }
];

export const provinces: Province[] = [
  {
    "id": "prov-madrid",
    "name": "Madrid",
    "slug": "madrid",
    "communityId": "com-madrid"
  },
  {
    "id": "prov-sevilla",
    "name": "Sevilla",
    "slug": "sevilla",
    "communityId": "com-andalucia"
  },
  {
    "id": "prov-malaga",
    "name": "Málaga",
    "slug": "malaga",
    "communityId": "com-andalucia"
  },
  {
    "id": "prov-valencia",
    "name": "Valencia",
    "slug": "valencia",
    "communityId": "com-valencia"
  }
];

export const competitions: Competition[] = [
  {
    "id": "comp-preferente-madrid",
    "slug": "preferente-madrid-grupo-centro",
    "name": "Preferente Madrid · Grupo Centro",
    "shortName": "Preferente Centro",
    "category": "Preferente",
    "provinceId": "prov-madrid",
    "communityId": "com-madrid",
    "season": "2025/2026",
    "group": "Grupo Centro",
    "totalTeams": 8,
    "sponsor": {
      "name": "Construcciones Vegalba",
      "tagline": "Patrocinador oficial de la competición"
    },
    "description": "La categoría reina del fútbol regional madrileño, antesala de Tercera RFEF, con derbis muy disputados entre clubes históricos de la región.",
    "totalMatchdays": 14,
    "currentMatchday": 10
  },
  {
    "id": "comp-tercera-sur",
    "slug": "tercera-rfef-grupo-sur",
    "name": "Tercera RFEF · Grupo Sur",
    "shortName": "Tercera Sur",
    "category": "Tercera RFEF",
    "provinceId": "prov-sevilla",
    "communityId": "com-andalucia",
    "season": "2025/2026",
    "group": "Grupo Sur",
    "totalTeams": 6,
    "sponsor": {
      "name": "Aceites Brisamar",
      "tagline": "Patrocinador oficial de la competición"
    },
    "description": "Competición semiprofesional andaluza con presupuestos crecientes y aspirantes claros al ascenso a Segunda RFEF.",
    "totalMatchdays": 10,
    "currentMatchday": 7
  },
  {
    "id": "comp-regional-valencia",
    "slug": "regional-preferente-valencia",
    "name": "Regional Preferente · Comunitat Valenciana",
    "shortName": "Regional Preferente",
    "category": "Regional Preferente",
    "provinceId": "prov-valencia",
    "communityId": "com-valencia",
    "season": "2025/2026",
    "group": "Grupo Único",
    "totalTeams": 6,
    "sponsor": {
      "name": "Cítricos Altavista",
      "tagline": "Patrocinador oficial de la competición"
    },
    "description": "El máximo nivel autonómico valenciano, escaparate de la cantera y trampolín hacia el fútbol nacional.",
    "totalMatchdays": 10,
    "currentMatchday": 7
  }
];

export const teams: Team[] = [
  {
    "id": "team-cd-robledo",
    "slug": "cd-robledo",
    "name": "CD Robledo",
    "shortName": "Robledo",
    "city": "Robledo de la Sierra",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1925,
    "stadium": {
      "name": "Campo Municipal de Robledo de la Sierra",
      "city": "Robledo de la Sierra",
      "capacity": 3000,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Daniel Lara",
      "age": 40,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Supermercados Robledo",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1945, el CD Robledo es uno de los clubes con más arraigo de Robledo de la Sierra, conocido por la entrega de su cantera y el ambiente de su afición en Campo Municipal de Robledo de la Sierra."
  },
  {
    "id": "team-ud-vallarena",
    "slug": "ud-vallarena",
    "name": "UD Vallarena",
    "shortName": "Vallarena",
    "city": "Vallarena del Tajo",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1982,
    "stadium": {
      "name": "Campo Municipal de Vallarena del Tajo",
      "city": "Vallarena del Tajo",
      "capacity": 2600,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Sergio Bustos",
      "age": 59,
      "nationality": "España"
    },
    "colors": {
      "primary": "#d6304a",
      "secondary": "#0b2545"
    },
    "sponsor": {
      "name": "Inmobiliaria Vallarena",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1990, el UD Vallarena es uno de los clubes con más arraigo de Vallarena del Tajo, conocido por la entrega de su cantera y el ambiente de su afición en Campo Municipal de Vallarena del Tajo."
  },
  {
    "id": "team-atletico-pinarejo",
    "slug": "atletico-pinarejo",
    "name": "Atlético Pinarejo",
    "shortName": "Pinarejo",
    "city": "Pinarejo Alto",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1923,
    "stadium": {
      "name": "Municipal Pinarejo Alto",
      "city": "Pinarejo Alto",
      "capacity": 1600,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Raúl Gallego",
      "age": 59,
      "nationality": "España"
    },
    "colors": {
      "primary": "#2f9e5e",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Talleres Pinarejo",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1953, el Atlético Pinarejo es uno de los clubes con más arraigo de Pinarejo Alto, conocido por la entrega de su cantera y el ambiente de su afición en Municipal Pinarejo Alto."
  },
  {
    "id": "team-cf-cantosol",
    "slug": "cf-cantosol",
    "name": "CF Cantosol",
    "shortName": "Cantosol",
    "city": "Cantosol de Henares",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1967,
    "stadium": {
      "name": "Municipal Cantosol de Henares",
      "city": "Cantosol de Henares",
      "capacity": 1800,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Vicente Lara",
      "age": 60,
      "nationality": "España"
    },
    "colors": {
      "primary": "#f2a93c",
      "secondary": "#0b2545"
    },
    "sponsor": {
      "name": "Talleres Cantosol",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1924, el CF Cantosol es uno de los clubes con más arraigo de Cantosol de Henares, conocido por la entrega de su cantera y el ambiente de su afición en Municipal Cantosol de Henares."
  },
  {
    "id": "team-real-almenara",
    "slug": "real-almenara",
    "name": "Real Almenara",
    "shortName": "Almenara",
    "city": "Almenara del Monte",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1922,
    "stadium": {
      "name": "Ciudad de Almenara del Monte",
      "city": "Almenara del Monte",
      "capacity": 1000,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Gonzalo Iglesias",
      "age": 50,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0fb5ae",
      "secondary": "#0b2545"
    },
    "sponsor": {
      "name": "Talleres Almenara",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1951, el Real Almenara es uno de los clubes con más arraigo de Almenara del Monte, conocido por la entrega de su cantera y el ambiente de su afición en Ciudad de Almenara del Monte."
  },
  {
    "id": "team-cd-riofrio",
    "slug": "cd-riofrio",
    "name": "CD Riofrío",
    "shortName": "Riofrío",
    "city": "Riofrío de Guadarrama",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1982,
    "stadium": {
      "name": "Estadio Riofrío de Guadarrama",
      "city": "Riofrío de Guadarrama",
      "capacity": 1000,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Sergio Serrano",
      "age": 39,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#0fb5ae"
    },
    "sponsor": {
      "name": "Construcciones Riofrío",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1942, el CD Riofrío es uno de los clubes con más arraigo de Riofrío de Guadarrama, conocido por la entrega de su cantera y el ambiente de su afición en Estadio Riofrío de Guadarrama."
  },
  {
    "id": "team-ud-vegalba",
    "slug": "ud-vegalba",
    "name": "UD Vegalba",
    "shortName": "Vegalba",
    "city": "Vegalba de Arriba",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1965,
    "stadium": {
      "name": "Ciudad de Vegalba de Arriba",
      "city": "Vegalba de Arriba",
      "capacity": 2200,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Rubén Cervera",
      "age": 41,
      "nationality": "España"
    },
    "colors": {
      "primary": "#5b2a86",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Bar Vegalba",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1934, el UD Vegalba es uno de los clubes con más arraigo de Vegalba de Arriba, conocido por la entrega de su cantera y el ambiente de su afición en Ciudad de Vegalba de Arriba."
  },
  {
    "id": "team-ad-montereal",
    "slug": "ad-montereal",
    "name": "AD Montereal",
    "shortName": "Montereal",
    "city": "Montereal Bajo",
    "provinceId": "prov-madrid",
    "competitionId": "comp-preferente-madrid",
    "founded": 1942,
    "stadium": {
      "name": "Campo Municipal de Montereal Bajo",
      "city": "Montereal Bajo",
      "capacity": 1800,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Javier Marín",
      "age": 41,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#d6304a"
    },
    "sponsor": {
      "name": "Construcciones Montereal",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1969, el AD Montereal es uno de los clubes con más arraigo de Montereal Bajo, conocido por la entrega de su cantera y el ambiente de su afición en Campo Municipal de Montereal Bajo."
  },
  {
    "id": "team-cd-sotoverde",
    "slug": "cd-sotoverde",
    "name": "CD Sotoverde",
    "shortName": "Sotoverde",
    "city": "Sotoverde",
    "provinceId": "prov-sevilla",
    "competitionId": "comp-tercera-sur",
    "founded": 1966,
    "stadium": {
      "name": "Polideportivo Sotoverde",
      "city": "Sotoverde",
      "capacity": 2800,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Gonzalo Cano",
      "age": 55,
      "nationality": "España"
    },
    "colors": {
      "primary": "#2f9e5e",
      "secondary": "#0b2545"
    },
    "sponsor": {
      "name": "Talleres Sotoverde",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1928, el CD Sotoverde es uno de los clubes con más arraigo de Sotoverde, conocido por la entrega de su cantera y el ambiente de su afición en Polideportivo Sotoverde."
  },
  {
    "id": "team-ud-lagunilla",
    "slug": "ud-lagunilla",
    "name": "UD Lagunilla",
    "shortName": "Lagunilla",
    "city": "Lagunilla del Río",
    "provinceId": "prov-sevilla",
    "competitionId": "comp-tercera-sur",
    "founded": 1929,
    "stadium": {
      "name": "Municipal Lagunilla del Río",
      "city": "Lagunilla del Río",
      "capacity": 1200,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Javier Bravo",
      "age": 50,
      "nationality": "España"
    },
    "colors": {
      "primary": "#f2a93c",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Panadería Lagunilla",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1954, el UD Lagunilla es uno de los clubes con más arraigo de Lagunilla del Río, conocido por la entrega de su cantera y el ambiente de su afición en Municipal Lagunilla del Río."
  },
  {
    "id": "team-cf-brisamar",
    "slug": "cf-brisamar",
    "name": "CF Brisamar",
    "shortName": "Brisamar",
    "city": "Brisamar",
    "provinceId": "prov-malaga",
    "competitionId": "comp-tercera-sur",
    "founded": 1970,
    "stadium": {
      "name": "Polideportivo Brisamar",
      "city": "Brisamar",
      "capacity": 2800,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Fernando Iglesias",
      "age": 42,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0fb5ae",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Bar Brisamar",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1958, el CF Brisamar es uno de los clubes con más arraigo de Brisamar, conocido por la entrega de su cantera y el ambiente de su afición en Polideportivo Brisamar."
  },
  {
    "id": "team-real-castelnuevo",
    "slug": "real-castelnuevo",
    "name": "Real Castelnuevo",
    "shortName": "Castelnuevo",
    "city": "Castelnuevo de la Costa",
    "provinceId": "prov-malaga",
    "competitionId": "comp-tercera-sur",
    "founded": 1992,
    "stadium": {
      "name": "Campo Municipal de Castelnuevo de la Costa",
      "city": "Castelnuevo de la Costa",
      "capacity": 2400,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Manuel Cano",
      "age": 56,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#f2a93c"
    },
    "sponsor": {
      "name": "Talleres Castelnuevo",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1986, el Real Castelnuevo es uno de los clubes con más arraigo de Castelnuevo de la Costa, conocido por la entrega de su cantera y el ambiente de su afición en Campo Municipal de Castelnuevo de la Costa."
  },
  {
    "id": "team-cd-penablanca",
    "slug": "cd-penablanca",
    "name": "CD Peñablanca",
    "shortName": "Peñablanca",
    "city": "Peñablanca",
    "provinceId": "prov-sevilla",
    "competitionId": "comp-tercera-sur",
    "founded": 1998,
    "stadium": {
      "name": "Estadio Peñablanca",
      "city": "Peñablanca",
      "capacity": 2600,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Daniel Cuesta",
      "age": 48,
      "nationality": "España"
    },
    "colors": {
      "primary": "#d6304a",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Construcciones Peñablanca",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1931, el CD Peñablanca es uno de los clubes con más arraigo de Peñablanca, conocido por la entrega de su cantera y el ambiente de su afición en Estadio Peñablanca."
  },
  {
    "id": "team-atletico-serranova",
    "slug": "atletico-serranova",
    "name": "Atlético Serranova",
    "shortName": "Serranova",
    "city": "Serranova",
    "provinceId": "prov-malaga",
    "competitionId": "comp-tercera-sur",
    "founded": 1998,
    "stadium": {
      "name": "Ciudad de Serranova",
      "city": "Serranova",
      "capacity": 3000,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Daniel Esteban",
      "age": 41,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#2f9e5e"
    },
    "sponsor": {
      "name": "Supermercados Serranova",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1955, el Atlético Serranova es uno de los clubes con más arraigo de Serranova, conocido por la entrega de su cantera y el ambiente de su afición en Ciudad de Serranova."
  },
  {
    "id": "team-ud-fuenllana",
    "slug": "ud-fuenllana",
    "name": "UD Fuenllana",
    "shortName": "Fuenllana",
    "city": "Fuenllana",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1922,
    "stadium": {
      "name": "Ciudad de Fuenllana",
      "city": "Fuenllana",
      "capacity": 1000,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Iván Sastre",
      "age": 40,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Talleres Fuenllana",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1941, el UD Fuenllana es uno de los clubes con más arraigo de Fuenllana, conocido por la entrega de su cantera y el ambiente de su afición en Ciudad de Fuenllana."
  },
  {
    "id": "team-cd-arroyomar",
    "slug": "cd-arroyomar",
    "name": "CD Arroyomar",
    "shortName": "Arroyomar",
    "city": "Arroyomar",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1929,
    "stadium": {
      "name": "Estadio Arroyomar",
      "city": "Arroyomar",
      "capacity": 3000,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Rubén Gallego",
      "age": 45,
      "nationality": "España"
    },
    "colors": {
      "primary": "#f2a93c",
      "secondary": "#0b2545"
    },
    "sponsor": {
      "name": "Bar Arroyomar",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1941, el CD Arroyomar es uno de los clubes con más arraigo de Arroyomar, conocido por la entrega de su cantera y el ambiente de su afición en Estadio Arroyomar."
  },
  {
    "id": "team-cf-altavista",
    "slug": "cf-altavista",
    "name": "CF Altavista",
    "shortName": "Altavista",
    "city": "Altavista del Túria",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1994,
    "stadium": {
      "name": "Estadio Altavista del Túria",
      "city": "Altavista del Túria",
      "capacity": 1400,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Fernando Pascual",
      "age": 54,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0fb5ae",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Bar Altavista",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1946, el CF Altavista es uno de los clubes con más arraigo de Altavista del Túria, conocido por la entrega de su cantera y el ambiente de su afición en Estadio Altavista del Túria."
  },
  {
    "id": "team-ad-pozonegro",
    "slug": "ad-pozonegro",
    "name": "AD Pozonegro",
    "shortName": "Pozonegro",
    "city": "Pozonegro",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1969,
    "stadium": {
      "name": "Municipal Pozonegro",
      "city": "Pozonegro",
      "capacity": 1600,
      "surface": "Césped artificial"
    },
    "coach": {
      "name": "Rubén Cano",
      "age": 56,
      "nationality": "España"
    },
    "colors": {
      "primary": "#0b2545",
      "secondary": "#d6304a"
    },
    "sponsor": {
      "name": "Bar Pozonegro",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1977, el AD Pozonegro es uno de los clubes con más arraigo de Pozonegro, conocido por la entrega de su cantera y el ambiente de su afición en Municipal Pozonegro."
  },
  {
    "id": "team-real-cabodoro",
    "slug": "real-cabodoro",
    "name": "Real Cabodoro",
    "shortName": "Cabodoro",
    "city": "Cabodoro de Mar",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1990,
    "stadium": {
      "name": "Estadio Cabodoro de Mar",
      "city": "Cabodoro de Mar",
      "capacity": 1800,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Sergio Cano",
      "age": 44,
      "nationality": "España"
    },
    "colors": {
      "primary": "#2f9e5e",
      "secondary": "#ffffff"
    },
    "sponsor": {
      "name": "Inmobiliaria Cabodoro",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1953, el Real Cabodoro es uno de los clubes con más arraigo de Cabodoro de Mar, conocido por la entrega de su cantera y el ambiente de su afición en Estadio Cabodoro de Mar."
  },
  {
    "id": "team-ud-espinares",
    "slug": "ud-espinares",
    "name": "UD Espinares",
    "shortName": "Espinares",
    "city": "Espinares",
    "provinceId": "prov-valencia",
    "competitionId": "comp-regional-valencia",
    "founded": 1963,
    "stadium": {
      "name": "Ciudad de Espinares",
      "city": "Espinares",
      "capacity": 2400,
      "surface": "Césped natural"
    },
    "coach": {
      "name": "Pablo Serrano",
      "age": 56,
      "nationality": "España"
    },
    "colors": {
      "primary": "#5b2a86",
      "secondary": "#f2a93c"
    },
    "sponsor": {
      "name": "Construcciones Espinares",
      "tagline": "Patrocinador del club"
    },
    "description": "Fundado en 1945, el UD Espinares es uno de los clubes con más arraigo de Espinares, conocido por la entrega de su cantera y el ambiente de su afición en Ciudad de Espinares."
  }
];

export const players: Player[] = [
  {
    "id": "player-izan-popescu-cd-robledo",
    "slug": "izan-popescu-cd-robledo",
    "name": "Izan Popescu",
    "teamId": "team-cd-robledo",
    "number": 1,
    "position": "Portero",
    "age": 26,
    "nationality": "Senegal",
    "height": 176,
    "foot": "Ambidiestro",
    "matches": 7,
    "minutes": 455,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Izan Popescu se ha convertido en una referencia bajo los palos del CD Robledo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 227
  },
  {
    "id": "player-joel-romero-cd-robledo",
    "slug": "joel-romero-cd-robledo",
    "name": "Joel Romero",
    "teamId": "team-cd-robledo",
    "number": 13,
    "position": "Portero",
    "age": 21,
    "nationality": "Marruecos",
    "height": 187,
    "foot": "Diestro",
    "matches": 9,
    "minutes": 648,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Joel Romero se ha convertido en una referencia bajo los palos del CD Robledo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 75
  },
  {
    "id": "player-lucas-serrano-cd-robledo",
    "slug": "lucas-serrano-cd-robledo",
    "name": "Lucas Serrano",
    "teamId": "team-cd-robledo",
    "number": 2,
    "position": "Defensa",
    "age": 25,
    "nationality": "Francia",
    "height": 196,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 60,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Lucas Serrano aporta solidez a la zaga del CD Robledo y no rehúye el envite físico.",
    "avatarHue": 124
  },
  {
    "id": "player-souleymane-prieto-cd-robledo",
    "slug": "souleymane-prieto-cd-robledo",
    "name": "Souleymane Prieto",
    "teamId": "team-cd-robledo",
    "number": 3,
    "position": "Defensa",
    "age": 27,
    "nationality": "Rumanía",
    "height": 192,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 204,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Souleymane Prieto aporta solidez a la zaga del CD Robledo y no rehúye el envite físico.",
    "avatarHue": 80
  },
  {
    "id": "player-moussa-prieto-cd-robledo",
    "slug": "moussa-prieto-cd-robledo",
    "name": "Moussa Prieto",
    "teamId": "team-cd-robledo",
    "number": 4,
    "position": "Defensa",
    "age": 19,
    "nationality": "Marruecos",
    "height": 175,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 260,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Moussa Prieto aporta solidez a la zaga del CD Robledo y no rehúye el envite físico.",
    "avatarHue": 3
  },
  {
    "id": "player-diego-delgado-cd-robledo",
    "slug": "diego-delgado-cd-robledo",
    "name": "Diego Delgado",
    "teamId": "team-cd-robledo",
    "number": 5,
    "position": "Defensa",
    "age": 24,
    "nationality": "Rumanía",
    "height": 181,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 258,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 1,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Diego Delgado aporta solidez a la zaga del CD Robledo y no rehúye el envite físico.",
    "avatarHue": 274
  },
  {
    "id": "player-wesley-gil-cd-robledo",
    "slug": "wesley-gil-cd-robledo",
    "name": "Wesley Gil",
    "teamId": "team-cd-robledo",
    "number": 6,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "Francia",
    "height": 194,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 267,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "E",
      "E"
    ],
    "bio": "Motor del centro del campo, Wesley Gil reparte juego y recupera balones para sostener el ritmo del CD Robledo.",
    "avatarHue": 138
  },
  {
    "id": "player-rafael-martinez-cd-robledo",
    "slug": "rafael-martinez-cd-robledo",
    "name": "Rafael Martínez",
    "teamId": "team-cd-robledo",
    "number": 8,
    "position": "Centrocampista",
    "age": 19,
    "nationality": "España",
    "height": 177,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 154,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "E",
      "E"
    ],
    "bio": "Motor del centro del campo, Rafael Martínez reparte juego y recupera balones para sostener el ritmo del CD Robledo.",
    "avatarHue": 45
  },
  {
    "id": "player-marcos-pena-cd-robledo",
    "slug": "marcos-pena-cd-robledo",
    "name": "Marcos Peña",
    "teamId": "team-cd-robledo",
    "number": 10,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "España",
    "height": 196,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 534,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Marcos Peña reparte juego y recupera balones para sostener el ritmo del CD Robledo.",
    "avatarHue": 352
  },
  {
    "id": "player-raul-lopez-cd-robledo",
    "slug": "raul-lopez-cd-robledo",
    "name": "Raúl López",
    "teamId": "team-cd-robledo",
    "number": 16,
    "position": "Centrocampista",
    "age": 18,
    "nationality": "Colombia",
    "height": 172,
    "foot": "Ambidiestro",
    "matches": 8,
    "minutes": 704,
    "goals": 2,
    "assists": 2,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Raúl López reparte juego y recupera balones para sostener el ritmo del CD Robledo.",
    "avatarHue": 182
  },
  {
    "id": "player-sergio-gil-cd-robledo",
    "slug": "sergio-gil-cd-robledo",
    "name": "Sergio Gil",
    "teamId": "team-cd-robledo",
    "number": 7,
    "position": "Delantero",
    "age": 31,
    "nationality": "España",
    "height": 178,
    "foot": "Diestro",
    "matches": 7,
    "minutes": 434,
    "goals": 4,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 1,
    "form": [
      "V",
      "D",
      "E",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Robledo, Sergio Gil combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 3
  },
  {
    "id": "player-souleymane-nunez-cd-robledo",
    "slug": "souleymane-nunez-cd-robledo",
    "name": "Souleymane Núñez",
    "teamId": "team-cd-robledo",
    "number": 9,
    "position": "Delantero",
    "age": 34,
    "nationality": "España",
    "height": 192,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 414,
    "goals": 2,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Robledo, Souleymane Núñez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 26
  },
  {
    "id": "player-lucas-lozano-cd-robledo",
    "slug": "lucas-lozano-cd-robledo",
    "name": "Lucas Lozano",
    "teamId": "team-cd-robledo",
    "number": 11,
    "position": "Delantero",
    "age": 25,
    "nationality": "España",
    "height": 187,
    "foot": "Zurdo",
    "matches": 9,
    "minutes": 657,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Robledo, Lucas Lozano combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 312
  },
  {
    "id": "player-aitor-gomez-ud-vallarena",
    "slug": "aitor-gomez-ud-vallarena",
    "name": "Aitor Gómez",
    "teamId": "team-ud-vallarena",
    "number": 1,
    "position": "Portero",
    "age": 28,
    "nationality": "España",
    "height": 188,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 64,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Aitor Gómez se ha convertido en una referencia bajo los palos del UD Vallarena, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 195
  },
  {
    "id": "player-lucas-flores-ud-vallarena",
    "slug": "lucas-flores-ud-vallarena",
    "name": "Lucas Flores",
    "teamId": "team-ud-vallarena",
    "number": 13,
    "position": "Portero",
    "age": 23,
    "nationality": "España",
    "height": 196,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 355,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Lucas Flores se ha convertido en una referencia bajo los palos del UD Vallarena, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 237
  },
  {
    "id": "player-samuel-ruiz-ud-vallarena",
    "slug": "samuel-ruiz-ud-vallarena",
    "name": "Samuel Ruiz",
    "teamId": "team-ud-vallarena",
    "number": 2,
    "position": "Defensa",
    "age": 28,
    "nationality": "Senegal",
    "height": 184,
    "foot": "Zurdo",
    "matches": 7,
    "minutes": 630,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Samuel Ruiz aporta solidez a la zaga del UD Vallarena y no rehúye el envite físico.",
    "avatarHue": 271
  },
  {
    "id": "player-jorge-cisse-ud-vallarena",
    "slug": "jorge-cisse-ud-vallarena",
    "name": "Jorge Cissé",
    "teamId": "team-ud-vallarena",
    "number": 3,
    "position": "Defensa",
    "age": 20,
    "nationality": "España",
    "height": 194,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 231,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Jorge Cissé aporta solidez a la zaga del UD Vallarena y no rehúye el envite físico.",
    "avatarHue": 265
  },
  {
    "id": "player-karim-herrera-ud-vallarena",
    "slug": "karim-herrera-ud-vallarena",
    "name": "Karim Herrera",
    "teamId": "team-ud-vallarena",
    "number": 4,
    "position": "Defensa",
    "age": 19,
    "nationality": "España",
    "height": 185,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 320,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Karim Herrera aporta solidez a la zaga del UD Vallarena y no rehúye el envite físico.",
    "avatarHue": 151
  },
  {
    "id": "player-jorge-mendez-ud-vallarena",
    "slug": "jorge-mendez-ud-vallarena",
    "name": "Jorge Méndez",
    "teamId": "team-ud-vallarena",
    "number": 5,
    "position": "Defensa",
    "age": 22,
    "nationality": "Francia",
    "height": 180,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 178,
    "goals": 0,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Jorge Méndez aporta solidez a la zaga del UD Vallarena y no rehúye el envite físico.",
    "avatarHue": 337
  },
  {
    "id": "player-yeray-delgado-ud-vallarena",
    "slug": "yeray-delgado-ud-vallarena",
    "name": "Yeray Delgado",
    "teamId": "team-ud-vallarena",
    "number": 6,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "España",
    "height": 179,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 536,
    "goals": 1,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Yeray Delgado reparte juego y recupera balones para sostener el ritmo del UD Vallarena.",
    "avatarHue": 77
  },
  {
    "id": "player-tomas-ruiz-ud-vallarena",
    "slug": "tomas-ruiz-ud-vallarena",
    "name": "Tomás Ruiz",
    "teamId": "team-ud-vallarena",
    "number": 8,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "España",
    "height": 173,
    "foot": "Zurdo",
    "matches": 7,
    "minutes": 483,
    "goals": 1,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Tomás Ruiz reparte juego y recupera balones para sostener el ritmo del UD Vallarena.",
    "avatarHue": 355
  },
  {
    "id": "player-petru-sanchez-ud-vallarena",
    "slug": "petru-sanchez-ud-vallarena",
    "name": "Petru Sánchez",
    "teamId": "team-ud-vallarena",
    "number": 10,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "España",
    "height": 183,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 316,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Petru Sánchez reparte juego y recupera balones para sostener el ritmo del UD Vallarena.",
    "avatarHue": 292
  },
  {
    "id": "player-gonzalo-perez-ud-vallarena",
    "slug": "gonzalo-perez-ud-vallarena",
    "name": "Gonzalo Pérez",
    "teamId": "team-ud-vallarena",
    "number": 16,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "España",
    "height": 176,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 267,
    "goals": 1,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Gonzalo Pérez reparte juego y recupera balones para sostener el ritmo del UD Vallarena.",
    "avatarHue": 219
  },
  {
    "id": "player-moussa-herrera-ud-vallarena",
    "slug": "moussa-herrera-ud-vallarena",
    "name": "Moussa Herrera",
    "teamId": "team-ud-vallarena",
    "number": 7,
    "position": "Delantero",
    "age": 33,
    "nationality": "España",
    "height": 173,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 288,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Vallarena, Moussa Herrera combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 299
  },
  {
    "id": "player-rodrigo-blanco-ud-vallarena",
    "slug": "rodrigo-blanco-ud-vallarena",
    "name": "Rodrigo Blanco",
    "teamId": "team-ud-vallarena",
    "number": 9,
    "position": "Delantero",
    "age": 28,
    "nationality": "España",
    "height": 174,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 366,
    "goals": 1,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "E"
    ],
    "bio": "Referencia ofensiva del UD Vallarena, Rodrigo Blanco combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 67
  },
  {
    "id": "player-nico-rubio-ud-vallarena",
    "slug": "nico-rubio-ud-vallarena",
    "name": "Nico Rubio",
    "teamId": "team-ud-vallarena",
    "number": 11,
    "position": "Delantero",
    "age": 32,
    "nationality": "Colombia",
    "height": 189,
    "foot": "Zurdo",
    "matches": 7,
    "minutes": 504,
    "goals": 1,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "D",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del UD Vallarena, Nico Rubio combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 15
  },
  {
    "id": "player-ibrahim-delgado-atletico-pinarejo",
    "slug": "ibrahim-delgado-atletico-pinarejo",
    "name": "Ibrahim Delgado",
    "teamId": "team-atletico-pinarejo",
    "number": 1,
    "position": "Portero",
    "age": 33,
    "nationality": "Argentina",
    "height": 183,
    "foot": "Diestro",
    "matches": 7,
    "minutes": 469,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 1,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Ibrahim Delgado se ha convertido en una referencia bajo los palos del Atlético Pinarejo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 72
  },
  {
    "id": "player-jorge-gomez-atletico-pinarejo",
    "slug": "jorge-gomez-atletico-pinarejo",
    "name": "Jorge Gómez",
    "teamId": "team-atletico-pinarejo",
    "number": 13,
    "position": "Portero",
    "age": 32,
    "nationality": "Argentina",
    "height": 176,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 420,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Jorge Gómez se ha convertido en una referencia bajo los palos del Atlético Pinarejo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 46
  },
  {
    "id": "player-rafael-serrano-atletico-pinarejo",
    "slug": "rafael-serrano-atletico-pinarejo",
    "name": "Rafael Serrano",
    "teamId": "team-atletico-pinarejo",
    "number": 2,
    "position": "Defensa",
    "age": 28,
    "nationality": "España",
    "height": 173,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 348,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Rafael Serrano aporta solidez a la zaga del Atlético Pinarejo y no rehúye el envite físico.",
    "avatarHue": 295
  },
  {
    "id": "player-mateo-mendes-atletico-pinarejo",
    "slug": "mateo-mendes-atletico-pinarejo",
    "name": "Mateo Mendes",
    "teamId": "team-atletico-pinarejo",
    "number": 3,
    "position": "Defensa",
    "age": 23,
    "nationality": "España",
    "height": 192,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 228,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 1,
    "form": [
      "V",
      "E",
      "E",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Mateo Mendes aporta solidez a la zaga del Atlético Pinarejo y no rehúye el envite físico.",
    "avatarHue": 181
  },
  {
    "id": "player-rodrigo-castro-atletico-pinarejo",
    "slug": "rodrigo-castro-atletico-pinarejo",
    "name": "Rodrigo Castro",
    "teamId": "team-atletico-pinarejo",
    "number": 4,
    "position": "Defensa",
    "age": 17,
    "nationality": "España",
    "height": 186,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 300,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Castro aporta solidez a la zaga del Atlético Pinarejo y no rehúye el envite físico.",
    "avatarHue": 132
  },
  {
    "id": "player-vitor-ivanov-atletico-pinarejo",
    "slug": "vitor-ivanov-atletico-pinarejo",
    "name": "Vítor Ivanov",
    "teamId": "team-atletico-pinarejo",
    "number": 5,
    "position": "Defensa",
    "age": 23,
    "nationality": "Francia",
    "height": 172,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 258,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Vítor Ivanov aporta solidez a la zaga del Atlético Pinarejo y no rehúye el envite físico.",
    "avatarHue": 265
  },
  {
    "id": "player-ignacio-pena-atletico-pinarejo",
    "slug": "ignacio-pena-atletico-pinarejo",
    "name": "Ignacio Peña",
    "teamId": "team-atletico-pinarejo",
    "number": 6,
    "position": "Centrocampista",
    "age": 19,
    "nationality": "España",
    "height": 175,
    "foot": "Ambidiestro",
    "matches": 7,
    "minutes": 581,
    "goals": 1,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Ignacio Peña reparte juego y recupera balones para sostener el ritmo del Atlético Pinarejo.",
    "avatarHue": 86
  },
  {
    "id": "player-tomas-gomez-atletico-pinarejo",
    "slug": "tomas-gomez-atletico-pinarejo",
    "name": "Tomás Gómez",
    "teamId": "team-atletico-pinarejo",
    "number": 8,
    "position": "Centrocampista",
    "age": 21,
    "nationality": "España",
    "height": 184,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 201,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Tomás Gómez reparte juego y recupera balones para sostener el ritmo del Atlético Pinarejo.",
    "avatarHue": 315
  },
  {
    "id": "player-adrian-perez-atletico-pinarejo",
    "slug": "adrian-perez-atletico-pinarejo",
    "name": "Adrián Pérez",
    "teamId": "team-atletico-pinarejo",
    "number": 10,
    "position": "Centrocampista",
    "age": 21,
    "nationality": "España",
    "height": 176,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 330,
    "goals": 1,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Adrián Pérez reparte juego y recupera balones para sostener el ritmo del Atlético Pinarejo.",
    "avatarHue": 330
  },
  {
    "id": "player-pablo-blanco-atletico-pinarejo",
    "slug": "pablo-blanco-atletico-pinarejo",
    "name": "Pablo Blanco",
    "teamId": "team-atletico-pinarejo",
    "number": 16,
    "position": "Centrocampista",
    "age": 19,
    "nationality": "Argentina",
    "height": 169,
    "foot": "Ambidiestro",
    "matches": 7,
    "minutes": 546,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "D",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Pablo Blanco reparte juego y recupera balones para sostener el ritmo del Atlético Pinarejo.",
    "avatarHue": 329
  },
  {
    "id": "player-thiago-iglesias-atletico-pinarejo",
    "slug": "thiago-iglesias-atletico-pinarejo",
    "name": "Thiago Iglesias",
    "teamId": "team-atletico-pinarejo",
    "number": 7,
    "position": "Delantero",
    "age": 19,
    "nationality": "Marruecos",
    "height": 170,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 240,
    "goals": 1,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del Atlético Pinarejo, Thiago Iglesias combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 122
  },
  {
    "id": "player-petru-marin-atletico-pinarejo",
    "slug": "petru-marin-atletico-pinarejo",
    "name": "Petru Marín",
    "teamId": "team-atletico-pinarejo",
    "number": 9,
    "position": "Delantero",
    "age": 28,
    "nationality": "España",
    "height": 184,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 430,
    "goals": 2,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del Atlético Pinarejo, Petru Marín combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 104
  },
  {
    "id": "player-adrian-ivanov-atletico-pinarejo",
    "slug": "adrian-ivanov-atletico-pinarejo",
    "name": "Adrián Ivanov",
    "teamId": "team-atletico-pinarejo",
    "number": 11,
    "position": "Delantero",
    "age": 18,
    "nationality": "Rumanía",
    "height": 172,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 435,
    "goals": 2,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "E"
    ],
    "bio": "Referencia ofensiva del Atlético Pinarejo, Adrián Ivanov combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 28
  },
  {
    "id": "player-bilal-iglesias-cf-cantosol",
    "slug": "bilal-iglesias-cf-cantosol",
    "name": "Bilal Iglesias",
    "teamId": "team-cf-cantosol",
    "number": 1,
    "position": "Portero",
    "age": 33,
    "nationality": "Colombia",
    "height": 186,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 252,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 1,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Bilal Iglesias se ha convertido en una referencia bajo los palos del CF Cantosol, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 32
  },
  {
    "id": "player-moussa-leon-cf-cantosol",
    "slug": "moussa-leon-cf-cantosol",
    "name": "Moussa León",
    "teamId": "team-cf-cantosol",
    "number": 13,
    "position": "Portero",
    "age": 24,
    "nationality": "Portugal",
    "height": 177,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 237,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Moussa León se ha convertido en una referencia bajo los palos del CF Cantosol, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 142
  },
  {
    "id": "player-wesley-traore-cf-cantosol",
    "slug": "wesley-traore-cf-cantosol",
    "name": "Wesley Traoré",
    "teamId": "team-cf-cantosol",
    "number": 2,
    "position": "Defensa",
    "age": 20,
    "nationality": "España",
    "height": 182,
    "foot": "Zurdo",
    "matches": 9,
    "minutes": 693,
    "goals": 1,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Wesley Traoré aporta solidez a la zaga del CF Cantosol y no rehúye el envite físico.",
    "avatarHue": 152
  },
  {
    "id": "player-pablo-leon-cf-cantosol",
    "slug": "pablo-leon-cf-cantosol",
    "name": "Pablo León",
    "teamId": "team-cf-cantosol",
    "number": 3,
    "position": "Defensa",
    "age": 30,
    "nationality": "España",
    "height": 191,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 592,
    "goals": 1,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Pablo León aporta solidez a la zaga del CF Cantosol y no rehúye el envite físico.",
    "avatarHue": 114
  },
  {
    "id": "player-mateo-herrera-cf-cantosol",
    "slug": "mateo-herrera-cf-cantosol",
    "name": "Mateo Herrera",
    "teamId": "team-cf-cantosol",
    "number": 4,
    "position": "Defensa",
    "age": 31,
    "nationality": "Portugal",
    "height": 171,
    "foot": "Zurdo",
    "matches": 8,
    "minutes": 600,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "V",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Mateo Herrera aporta solidez a la zaga del CF Cantosol y no rehúye el envite físico.",
    "avatarHue": 352
  },
  {
    "id": "player-lucas-romero-cf-cantosol",
    "slug": "lucas-romero-cf-cantosol",
    "name": "Lucas Romero",
    "teamId": "team-cf-cantosol",
    "number": 5,
    "position": "Defensa",
    "age": 32,
    "nationality": "Senegal",
    "height": 173,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 76,
    "goals": 0,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Lucas Romero aporta solidez a la zaga del CF Cantosol y no rehúye el envite físico.",
    "avatarHue": 233
  },
  {
    "id": "player-nuno-traore-cf-cantosol",
    "slug": "nuno-traore-cf-cantosol",
    "name": "Nuno Traoré",
    "teamId": "team-cf-cantosol",
    "number": 6,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "Brasil",
    "height": 178,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 180,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Nuno Traoré reparte juego y recupera balones para sostener el ritmo del CF Cantosol.",
    "avatarHue": 244
  },
  {
    "id": "player-hugo-silva-cf-cantosol",
    "slug": "hugo-silva-cf-cantosol",
    "name": "Hugo Silva",
    "teamId": "team-cf-cantosol",
    "number": 8,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "Argentina",
    "height": 171,
    "foot": "Zurdo",
    "matches": 9,
    "minutes": 702,
    "goals": 1,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Hugo Silva reparte juego y recupera balones para sostener el ritmo del CF Cantosol.",
    "avatarHue": 76
  },
  {
    "id": "player-thiago-suarez-cf-cantosol",
    "slug": "thiago-suarez-cf-cantosol",
    "name": "Thiago Suárez",
    "teamId": "team-cf-cantosol",
    "number": 10,
    "position": "Centrocampista",
    "age": 33,
    "nationality": "Portugal",
    "height": 196,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 498,
    "goals": 1,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Thiago Suárez reparte juego y recupera balones para sostener el ritmo del CF Cantosol.",
    "avatarHue": 323
  },
  {
    "id": "player-mario-lozano-cf-cantosol",
    "slug": "mario-lozano-cf-cantosol",
    "name": "Mario Lozano",
    "teamId": "team-cf-cantosol",
    "number": 16,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "España",
    "height": 178,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 178,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Mario Lozano reparte juego y recupera balones para sostener el ritmo del CF Cantosol.",
    "avatarHue": 104
  },
  {
    "id": "player-tomas-martinez-cf-cantosol",
    "slug": "tomas-martinez-cf-cantosol",
    "name": "Tomás Martínez",
    "teamId": "team-cf-cantosol",
    "number": 7,
    "position": "Delantero",
    "age": 19,
    "nationality": "Portugal",
    "height": 176,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 486,
    "goals": 3,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del CF Cantosol, Tomás Martínez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 321
  },
  {
    "id": "player-cristian-perez-cf-cantosol",
    "slug": "cristian-perez-cf-cantosol",
    "name": "Cristian Pérez",
    "teamId": "team-cf-cantosol",
    "number": 9,
    "position": "Delantero",
    "age": 26,
    "nationality": "Rumanía",
    "height": 189,
    "foot": "Ambidiestro",
    "matches": 7,
    "minutes": 525,
    "goals": 1,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del CF Cantosol, Cristian Pérez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 207
  },
  {
    "id": "player-omar-silva-cf-cantosol",
    "slug": "omar-silva-cf-cantosol",
    "name": "Omar Silva",
    "teamId": "team-cf-cantosol",
    "number": 11,
    "position": "Delantero",
    "age": 31,
    "nationality": "España",
    "height": 194,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 345,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "E"
    ],
    "bio": "Referencia ofensiva del CF Cantosol, Omar Silva combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 34
  },
  {
    "id": "player-marc-medina-real-almenara",
    "slug": "marc-medina-real-almenara",
    "name": "Marc Medina",
    "teamId": "team-real-almenara",
    "number": 1,
    "position": "Portero",
    "age": 27,
    "nationality": "España",
    "height": 193,
    "foot": "Zurdo",
    "matches": 8,
    "minutes": 696,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Marc Medina se ha convertido en una referencia bajo los palos del Real Almenara, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 229
  },
  {
    "id": "player-rafael-delgado-real-almenara",
    "slug": "rafael-delgado-real-almenara",
    "name": "Rafael Delgado",
    "teamId": "team-real-almenara",
    "number": 13,
    "position": "Portero",
    "age": 28,
    "nationality": "Rumanía",
    "height": 186,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 468,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "E",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Rafael Delgado se ha convertido en una referencia bajo los palos del Real Almenara, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 58
  },
  {
    "id": "player-rodrigo-medina-real-almenara",
    "slug": "rodrigo-medina-real-almenara",
    "name": "Rodrigo Medina",
    "teamId": "team-real-almenara",
    "number": 2,
    "position": "Defensa",
    "age": 27,
    "nationality": "España",
    "height": 191,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 632,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Medina aporta solidez a la zaga del Real Almenara y no rehúye el envite físico.",
    "avatarHue": 168
  },
  {
    "id": "player-marcos-popescu-real-almenara",
    "slug": "marcos-popescu-real-almenara",
    "name": "Marcos Popescu",
    "teamId": "team-real-almenara",
    "number": 3,
    "position": "Defensa",
    "age": 28,
    "nationality": "Brasil",
    "height": 173,
    "foot": "Diestro",
    "matches": 9,
    "minutes": 702,
    "goals": 0,
    "assists": 2,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Marcos Popescu aporta solidez a la zaga del Real Almenara y no rehúye el envite físico.",
    "avatarHue": 295
  },
  {
    "id": "player-gonzalo-ortega-real-almenara",
    "slug": "gonzalo-ortega-real-almenara",
    "name": "Gonzalo Ortega",
    "teamId": "team-real-almenara",
    "number": 4,
    "position": "Defensa",
    "age": 28,
    "nationality": "Marruecos",
    "height": 188,
    "foot": "Diestro",
    "matches": 7,
    "minutes": 595,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Gonzalo Ortega aporta solidez a la zaga del Real Almenara y no rehúye el envite físico.",
    "avatarHue": 183
  },
  {
    "id": "player-dragan-iglesias-real-almenara",
    "slug": "dragan-iglesias-real-almenara",
    "name": "Dragan Iglesias",
    "teamId": "team-real-almenara",
    "number": 5,
    "position": "Defensa",
    "age": 21,
    "nationality": "Rumanía",
    "height": 171,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 168,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Dragan Iglesias aporta solidez a la zaga del Real Almenara y no rehúye el envite físico.",
    "avatarHue": 252
  },
  {
    "id": "player-iker-serrano-real-almenara",
    "slug": "iker-serrano-real-almenara",
    "name": "Iker Serrano",
    "teamId": "team-real-almenara",
    "number": 6,
    "position": "Centrocampista",
    "age": 30,
    "nationality": "España",
    "height": 189,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 248,
    "goals": 1,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Iker Serrano reparte juego y recupera balones para sostener el ritmo del Real Almenara.",
    "avatarHue": 51
  },
  {
    "id": "player-souleymane-lopez-real-almenara",
    "slug": "souleymane-lopez-real-almenara",
    "name": "Souleymane López",
    "teamId": "team-real-almenara",
    "number": 8,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "Argentina",
    "height": 182,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 174,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Souleymane López reparte juego y recupera balones para sostener el ritmo del Real Almenara.",
    "avatarHue": 218
  },
  {
    "id": "player-iker-garcia-real-almenara",
    "slug": "iker-garcia-real-almenara",
    "name": "Iker García",
    "teamId": "team-real-almenara",
    "number": 10,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "Brasil",
    "height": 172,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 375,
    "goals": 0,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Iker García reparte juego y recupera balones para sostener el ritmo del Real Almenara.",
    "avatarHue": 325
  },
  {
    "id": "player-kwame-ruiz-real-almenara",
    "slug": "kwame-ruiz-real-almenara",
    "name": "Kwame Ruiz",
    "teamId": "team-real-almenara",
    "number": 16,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "Senegal",
    "height": 170,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 260,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "E",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Kwame Ruiz reparte juego y recupera balones para sostener el ritmo del Real Almenara.",
    "avatarHue": 318
  },
  {
    "id": "player-petru-castro-real-almenara",
    "slug": "petru-castro-real-almenara",
    "name": "Petru Castro",
    "teamId": "team-real-almenara",
    "number": 7,
    "position": "Delantero",
    "age": 28,
    "nationality": "España",
    "height": 176,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 195,
    "goals": 1,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "E"
    ],
    "bio": "Referencia ofensiva del Real Almenara, Petru Castro combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 267
  },
  {
    "id": "player-kwame-marin-real-almenara",
    "slug": "kwame-marin-real-almenara",
    "name": "Kwame Marín",
    "teamId": "team-real-almenara",
    "number": 9,
    "position": "Delantero",
    "age": 24,
    "nationality": "España",
    "height": 190,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 156,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Almenara, Kwame Marín combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 5
  },
  {
    "id": "player-rafael-silva-real-almenara",
    "slug": "rafael-silva-real-almenara",
    "name": "Rafael Silva",
    "teamId": "team-real-almenara",
    "number": 11,
    "position": "Delantero",
    "age": 25,
    "nationality": "Argentina",
    "height": 170,
    "foot": "Ambidiestro",
    "matches": 8,
    "minutes": 496,
    "goals": 2,
    "assists": 2,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Almenara, Rafael Silva combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 172
  },
  {
    "id": "player-enzo-ruiz-cd-riofrio",
    "slug": "enzo-ruiz-cd-riofrio",
    "name": "Enzo Ruiz",
    "teamId": "team-cd-riofrio",
    "number": 1,
    "position": "Portero",
    "age": 35,
    "nationality": "España",
    "height": 185,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 158,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Enzo Ruiz se ha convertido en una referencia bajo los palos del CD Riofrío, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 355
  },
  {
    "id": "player-yusuf-medina-cd-riofrio",
    "slug": "yusuf-medina-cd-riofrio",
    "name": "Yusuf Medina",
    "teamId": "team-cd-riofrio",
    "number": 13,
    "position": "Portero",
    "age": 28,
    "nationality": "España",
    "height": 190,
    "foot": "Diestro",
    "matches": 9,
    "minutes": 792,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "E",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Yusuf Medina se ha convertido en una referencia bajo los palos del CD Riofrío, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 236
  },
  {
    "id": "player-thiago-rubio-cd-riofrio",
    "slug": "thiago-rubio-cd-riofrio",
    "name": "Thiago Rubio",
    "teamId": "team-cd-riofrio",
    "number": 2,
    "position": "Defensa",
    "age": 30,
    "nationality": "España",
    "height": 184,
    "foot": "Ambidiestro",
    "matches": 8,
    "minutes": 712,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 1,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Thiago Rubio aporta solidez a la zaga del CD Riofrío y no rehúye el envite físico.",
    "avatarHue": 269
  },
  {
    "id": "player-sergio-cortes-cd-riofrio",
    "slug": "sergio-cortes-cd-riofrio",
    "name": "Sergio Cortés",
    "teamId": "team-cd-riofrio",
    "number": 3,
    "position": "Defensa",
    "age": 22,
    "nationality": "España",
    "height": 168,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 438,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Sergio Cortés aporta solidez a la zaga del CD Riofrío y no rehúye el envite físico.",
    "avatarHue": 73
  },
  {
    "id": "player-omar-romero-cd-riofrio",
    "slug": "omar-romero-cd-riofrio",
    "name": "Omar Romero",
    "teamId": "team-cd-riofrio",
    "number": 4,
    "position": "Defensa",
    "age": 24,
    "nationality": "España",
    "height": 180,
    "foot": "Diestro",
    "matches": 9,
    "minutes": 747,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Omar Romero aporta solidez a la zaga del CD Riofrío y no rehúye el envite físico.",
    "avatarHue": 294
  },
  {
    "id": "player-hugo-marin-cd-riofrio",
    "slug": "hugo-marin-cd-riofrio",
    "name": "Hugo Marín",
    "teamId": "team-cd-riofrio",
    "number": 5,
    "position": "Defensa",
    "age": 34,
    "nationality": "Colombia",
    "height": 172,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 174,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "E",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Hugo Marín aporta solidez a la zaga del CD Riofrío y no rehúye el envite físico.",
    "avatarHue": 128
  },
  {
    "id": "player-samuel-sanchez-cd-riofrio",
    "slug": "samuel-sanchez-cd-riofrio",
    "name": "Samuel Sánchez",
    "teamId": "team-cd-riofrio",
    "number": 6,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "Colombia",
    "height": 188,
    "foot": "Diestro",
    "matches": 7,
    "minutes": 427,
    "goals": 1,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Samuel Sánchez reparte juego y recupera balones para sostener el ritmo del CD Riofrío.",
    "avatarHue": 327
  },
  {
    "id": "player-rafael-pena-cd-riofrio",
    "slug": "rafael-pena-cd-riofrio",
    "name": "Rafael Peña",
    "teamId": "team-cd-riofrio",
    "number": 8,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "España",
    "height": 183,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 356,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Rafael Peña reparte juego y recupera balones para sostener el ritmo del CD Riofrío.",
    "avatarHue": 71
  },
  {
    "id": "player-raul-nunez-cd-riofrio",
    "slug": "raul-nunez-cd-riofrio",
    "name": "Raúl Núñez",
    "teamId": "team-cd-riofrio",
    "number": 10,
    "position": "Centrocampista",
    "age": 26,
    "nationality": "Brasil",
    "height": 170,
    "foot": "Zurdo",
    "matches": 8,
    "minutes": 512,
    "goals": 1,
    "assists": 2,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Raúl Núñez reparte juego y recupera balones para sostener el ritmo del CD Riofrío.",
    "avatarHue": 96
  },
  {
    "id": "player-marc-cisse-cd-riofrio",
    "slug": "marc-cisse-cd-riofrio",
    "name": "Marc Cissé",
    "teamId": "team-cd-riofrio",
    "number": 16,
    "position": "Centrocampista",
    "age": 19,
    "nationality": "España",
    "height": 192,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 136,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Marc Cissé reparte juego y recupera balones para sostener el ritmo del CD Riofrío.",
    "avatarHue": 297
  },
  {
    "id": "player-adrian-molina-cd-riofrio",
    "slug": "adrian-molina-cd-riofrio",
    "name": "Adrián Molina",
    "teamId": "team-cd-riofrio",
    "number": 7,
    "position": "Delantero",
    "age": 18,
    "nationality": "Portugal",
    "height": 187,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 324,
    "goals": 2,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Riofrío, Adrián Molina combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 59
  },
  {
    "id": "player-aitor-cruz-cd-riofrio",
    "slug": "aitor-cruz-cd-riofrio",
    "name": "Aitor Cruz",
    "teamId": "team-cd-riofrio",
    "number": 9,
    "position": "Delantero",
    "age": 19,
    "nationality": "Francia",
    "height": 185,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 234,
    "goals": 1,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Riofrío, Aitor Cruz combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 244
  },
  {
    "id": "player-karim-ruiz-cd-riofrio",
    "slug": "karim-ruiz-cd-riofrio",
    "name": "Karim Ruiz",
    "teamId": "team-cd-riofrio",
    "number": 11,
    "position": "Delantero",
    "age": 23,
    "nationality": "Argentina",
    "height": 194,
    "foot": "Ambidiestro",
    "matches": 9,
    "minutes": 558,
    "goals": 4,
    "assists": 2,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "V",
      "E"
    ],
    "bio": "Referencia ofensiva del CD Riofrío, Karim Ruiz combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 136
  },
  {
    "id": "player-thiago-cano-ud-vegalba",
    "slug": "thiago-cano-ud-vegalba",
    "name": "Thiago Cano",
    "teamId": "team-ud-vegalba",
    "number": 1,
    "position": "Portero",
    "age": 23,
    "nationality": "España",
    "height": 178,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 656,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Thiago Cano se ha convertido en una referencia bajo los palos del UD Vegalba, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 115
  },
  {
    "id": "player-izan-molina-ud-vegalba",
    "slug": "izan-molina-ud-vegalba",
    "name": "Izan Molina",
    "teamId": "team-ud-vegalba",
    "number": 13,
    "position": "Portero",
    "age": 29,
    "nationality": "España",
    "height": 170,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 176,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "E",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Izan Molina se ha convertido en una referencia bajo los palos del UD Vegalba, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 237
  },
  {
    "id": "player-mihai-navarro-ud-vegalba",
    "slug": "mihai-navarro-ud-vegalba",
    "name": "Mihai Navarro",
    "teamId": "team-ud-vegalba",
    "number": 2,
    "position": "Defensa",
    "age": 17,
    "nationality": "España",
    "height": 181,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 402,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "E",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Mihai Navarro aporta solidez a la zaga del UD Vegalba y no rehúye el envite físico.",
    "avatarHue": 146
  },
  {
    "id": "player-joel-sanchez-ud-vegalba",
    "slug": "joel-sanchez-ud-vegalba",
    "name": "Joel Sánchez",
    "teamId": "team-ud-vegalba",
    "number": 3,
    "position": "Defensa",
    "age": 21,
    "nationality": "Portugal",
    "height": 194,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 210,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Joel Sánchez aporta solidez a la zaga del UD Vegalba y no rehúye el envite físico.",
    "avatarHue": 83
  },
  {
    "id": "player-rafael-gil-ud-vegalba",
    "slug": "rafael-gil-ud-vegalba",
    "name": "Rafael Gil",
    "teamId": "team-ud-vegalba",
    "number": 4,
    "position": "Defensa",
    "age": 20,
    "nationality": "Francia",
    "height": 194,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 240,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Rafael Gil aporta solidez a la zaga del UD Vegalba y no rehúye el envite físico.",
    "avatarHue": 329
  },
  {
    "id": "player-anderson-diallo-ud-vegalba",
    "slug": "anderson-diallo-ud-vegalba",
    "name": "Anderson Diallo",
    "teamId": "team-ud-vegalba",
    "number": 5,
    "position": "Defensa",
    "age": 29,
    "nationality": "Marruecos",
    "height": 178,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 85,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Anderson Diallo aporta solidez a la zaga del UD Vegalba y no rehúye el envite físico.",
    "avatarHue": 282
  },
  {
    "id": "player-alvaro-prieto-ud-vegalba",
    "slug": "alvaro-prieto-ud-vegalba",
    "name": "Álvaro Prieto",
    "teamId": "team-ud-vegalba",
    "number": 6,
    "position": "Centrocampista",
    "age": 21,
    "nationality": "España",
    "height": 179,
    "foot": "Zurdo",
    "matches": 7,
    "minutes": 609,
    "goals": 1,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Álvaro Prieto reparte juego y recupera balones para sostener el ritmo del UD Vegalba.",
    "avatarHue": 132
  },
  {
    "id": "player-cristiano-cruz-ud-vegalba",
    "slug": "cristiano-cruz-ud-vegalba",
    "name": "Cristiano Cruz",
    "teamId": "team-ud-vegalba",
    "number": 8,
    "position": "Centrocampista",
    "age": 25,
    "nationality": "España",
    "height": 170,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 528,
    "goals": 1,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Cristiano Cruz reparte juego y recupera balones para sostener el ritmo del UD Vegalba.",
    "avatarHue": 37
  },
  {
    "id": "player-moussa-konate-ud-vegalba",
    "slug": "moussa-konate-ud-vegalba",
    "name": "Moussa Konaté",
    "teamId": "team-ud-vegalba",
    "number": 10,
    "position": "Centrocampista",
    "age": 18,
    "nationality": "Rumanía",
    "height": 188,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 70,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Moussa Konaté reparte juego y recupera balones para sostener el ritmo del UD Vegalba.",
    "avatarHue": 139
  },
  {
    "id": "player-adrian-leon-ud-vegalba",
    "slug": "adrian-leon-ud-vegalba",
    "name": "Adrián León",
    "teamId": "team-ud-vegalba",
    "number": 16,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "Rumanía",
    "height": 196,
    "foot": "Ambidiestro",
    "matches": 9,
    "minutes": 567,
    "goals": 1,
    "assists": 2,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Adrián León reparte juego y recupera balones para sostener el ritmo del UD Vegalba.",
    "avatarHue": 155
  },
  {
    "id": "player-adrian-cano-ud-vegalba",
    "slug": "adrian-cano-ud-vegalba",
    "name": "Adrián Cano",
    "teamId": "team-ud-vegalba",
    "number": 7,
    "position": "Delantero",
    "age": 22,
    "nationality": "España",
    "height": 193,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 136,
    "goals": 1,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del UD Vegalba, Adrián Cano combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 96
  },
  {
    "id": "player-souleymane-cisse-ud-vegalba",
    "slug": "souleymane-cisse-ud-vegalba",
    "name": "Souleymane Cissé",
    "teamId": "team-ud-vegalba",
    "number": 9,
    "position": "Delantero",
    "age": 31,
    "nationality": "Senegal",
    "height": 180,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 231,
    "goals": 2,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Vegalba, Souleymane Cissé combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 166
  },
  {
    "id": "player-gabriel-molina-ud-vegalba",
    "slug": "gabriel-molina-ud-vegalba",
    "name": "Gabriel Molina",
    "teamId": "team-ud-vegalba",
    "number": 11,
    "position": "Delantero",
    "age": 23,
    "nationality": "Colombia",
    "height": 190,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 166,
    "goals": 1,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "V",
      "E"
    ],
    "bio": "Referencia ofensiva del UD Vegalba, Gabriel Molina combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 71
  },
  {
    "id": "player-aitor-perez-ad-montereal",
    "slug": "aitor-perez-ad-montereal",
    "name": "Aitor Pérez",
    "teamId": "team-ad-montereal",
    "number": 1,
    "position": "Portero",
    "age": 26,
    "nationality": "España",
    "height": 181,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 260,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "V",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Aitor Pérez se ha convertido en una referencia bajo los palos del AD Montereal, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 99
  },
  {
    "id": "player-cristiano-vazquez-ad-montereal",
    "slug": "cristiano-vazquez-ad-montereal",
    "name": "Cristiano Vázquez",
    "teamId": "team-ad-montereal",
    "number": 13,
    "position": "Portero",
    "age": 30,
    "nationality": "España",
    "height": 195,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 126,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Cristiano Vázquez se ha convertido en una referencia bajo los palos del AD Montereal, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 179
  },
  {
    "id": "player-leo-ramos-ad-montereal",
    "slug": "leo-ramos-ad-montereal",
    "name": "Leo Ramos",
    "teamId": "team-ad-montereal",
    "number": 2,
    "position": "Defensa",
    "age": 33,
    "nationality": "España",
    "height": 179,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 79,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Leo Ramos aporta solidez a la zaga del AD Montereal y no rehúye el envite físico.",
    "avatarHue": 15
  },
  {
    "id": "player-alvaro-torres-ad-montereal",
    "slug": "alvaro-torres-ad-montereal",
    "name": "Álvaro Torres",
    "teamId": "team-ad-montereal",
    "number": 3,
    "position": "Defensa",
    "age": 31,
    "nationality": "Portugal",
    "height": 184,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 178,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 1,
    "form": [
      "D",
      "E",
      "E",
      "D",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Álvaro Torres aporta solidez a la zaga del AD Montereal y no rehúye el envite físico.",
    "avatarHue": 18
  },
  {
    "id": "player-ignacio-sanz-ad-montereal",
    "slug": "ignacio-sanz-ad-montereal",
    "name": "Ignacio Sanz",
    "teamId": "team-ad-montereal",
    "number": 4,
    "position": "Defensa",
    "age": 21,
    "nationality": "España",
    "height": 178,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 536,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Ignacio Sanz aporta solidez a la zaga del AD Montereal y no rehúye el envite físico.",
    "avatarHue": 159
  },
  {
    "id": "player-lucas-diaz-ad-montereal",
    "slug": "lucas-diaz-ad-montereal",
    "name": "Lucas Díaz",
    "teamId": "team-ad-montereal",
    "number": 5,
    "position": "Defensa",
    "age": 25,
    "nationality": "España",
    "height": 188,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 435,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Lucas Díaz aporta solidez a la zaga del AD Montereal y no rehúye el envite físico.",
    "avatarHue": 112
  },
  {
    "id": "player-yeray-martinez-ad-montereal",
    "slug": "yeray-martinez-ad-montereal",
    "name": "Yeray Martínez",
    "teamId": "team-ad-montereal",
    "number": 6,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Francia",
    "height": 195,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 315,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Yeray Martínez reparte juego y recupera balones para sostener el ritmo del AD Montereal.",
    "avatarHue": 153
  },
  {
    "id": "player-eric-fernandez-ad-montereal",
    "slug": "eric-fernandez-ad-montereal",
    "name": "Eric Fernández",
    "teamId": "team-ad-montereal",
    "number": 8,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "Marruecos",
    "height": 178,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 166,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Eric Fernández reparte juego y recupera balones para sostener el ritmo del AD Montereal.",
    "avatarHue": 88
  },
  {
    "id": "player-enzo-lopez-ad-montereal",
    "slug": "enzo-lopez-ad-montereal",
    "name": "Enzo López",
    "teamId": "team-ad-montereal",
    "number": 10,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Brasil",
    "height": 193,
    "foot": "Zurdo",
    "matches": 8,
    "minutes": 544,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Enzo López reparte juego y recupera balones para sostener el ritmo del AD Montereal.",
    "avatarHue": 13
  },
  {
    "id": "player-eric-ivanov-ad-montereal",
    "slug": "eric-ivanov-ad-montereal",
    "name": "Eric Ivanov",
    "teamId": "team-ad-montereal",
    "number": 16,
    "position": "Centrocampista",
    "age": 33,
    "nationality": "España",
    "height": 186,
    "foot": "Diestro",
    "matches": 7,
    "minutes": 511,
    "goals": 2,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Eric Ivanov reparte juego y recupera balones para sostener el ritmo del AD Montereal.",
    "avatarHue": 160
  },
  {
    "id": "player-nico-iglesias-ad-montereal",
    "slug": "nico-iglesias-ad-montereal",
    "name": "Nico Iglesias",
    "teamId": "team-ad-montereal",
    "number": 7,
    "position": "Delantero",
    "age": 20,
    "nationality": "España",
    "height": 183,
    "foot": "Diestro",
    "matches": 8,
    "minutes": 592,
    "goals": 3,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "E",
      "E"
    ],
    "bio": "Referencia ofensiva del AD Montereal, Nico Iglesias combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 228
  },
  {
    "id": "player-thiago-leon-ad-montereal",
    "slug": "thiago-leon-ad-montereal",
    "name": "Thiago León",
    "teamId": "team-ad-montereal",
    "number": 9,
    "position": "Delantero",
    "age": 30,
    "nationality": "España",
    "height": 173,
    "foot": "Zurdo",
    "matches": 8,
    "minutes": 656,
    "goals": 4,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del AD Montereal, Thiago León combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 85
  },
  {
    "id": "player-leo-diaz-ad-montereal",
    "slug": "leo-diaz-ad-montereal",
    "name": "Leo Díaz",
    "teamId": "team-ad-montereal",
    "number": 11,
    "position": "Delantero",
    "age": 30,
    "nationality": "Rumanía",
    "height": 171,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 152,
    "goals": 1,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "E"
    ],
    "bio": "Referencia ofensiva del AD Montereal, Leo Díaz combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 263
  },
  {
    "id": "player-gabriel-cruz-cd-sotoverde",
    "slug": "gabriel-cruz-cd-sotoverde",
    "name": "Gabriel Cruz",
    "teamId": "team-cd-sotoverde",
    "number": 1,
    "position": "Portero",
    "age": 23,
    "nationality": "Marruecos",
    "height": 177,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 243,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Gabriel Cruz se ha convertido en una referencia bajo los palos del CD Sotoverde, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 327
  },
  {
    "id": "player-tomas-sanchez-cd-sotoverde",
    "slug": "tomas-sanchez-cd-sotoverde",
    "name": "Tomás Sánchez",
    "teamId": "team-cd-sotoverde",
    "number": 13,
    "position": "Portero",
    "age": 29,
    "nationality": "Portugal",
    "height": 185,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 252,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Tomás Sánchez se ha convertido en una referencia bajo los palos del CD Sotoverde, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 164
  },
  {
    "id": "player-lucas-garcia-cd-sotoverde",
    "slug": "lucas-garcia-cd-sotoverde",
    "name": "Lucas García",
    "teamId": "team-cd-sotoverde",
    "number": 2,
    "position": "Defensa",
    "age": 23,
    "nationality": "Francia",
    "height": 193,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 360,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Lucas García aporta solidez a la zaga del CD Sotoverde y no rehúye el envite físico.",
    "avatarHue": 337
  },
  {
    "id": "player-wesley-sanchez-cd-sotoverde",
    "slug": "wesley-sanchez-cd-sotoverde",
    "name": "Wesley Sánchez",
    "teamId": "team-cd-sotoverde",
    "number": 3,
    "position": "Defensa",
    "age": 32,
    "nationality": "Senegal",
    "height": 186,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 320,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Wesley Sánchez aporta solidez a la zaga del CD Sotoverde y no rehúye el envite físico.",
    "avatarHue": 103
  },
  {
    "id": "player-jorge-popescu-cd-sotoverde",
    "slug": "jorge-popescu-cd-sotoverde",
    "name": "Jorge Popescu",
    "teamId": "team-cd-sotoverde",
    "number": 4,
    "position": "Defensa",
    "age": 20,
    "nationality": "Marruecos",
    "height": 193,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 522,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Jorge Popescu aporta solidez a la zaga del CD Sotoverde y no rehúye el envite físico.",
    "avatarHue": 188
  },
  {
    "id": "player-wesley-prieto-cd-sotoverde",
    "slug": "wesley-prieto-cd-sotoverde",
    "name": "Wesley Prieto",
    "teamId": "team-cd-sotoverde",
    "number": 5,
    "position": "Defensa",
    "age": 28,
    "nationality": "España",
    "height": 195,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 144,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Wesley Prieto aporta solidez a la zaga del CD Sotoverde y no rehúye el envite físico.",
    "avatarHue": 205
  },
  {
    "id": "player-izan-prieto-cd-sotoverde",
    "slug": "izan-prieto-cd-sotoverde",
    "name": "Izan Prieto",
    "teamId": "team-cd-sotoverde",
    "number": 6,
    "position": "Centrocampista",
    "age": 20,
    "nationality": "España",
    "height": 170,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 426,
    "goals": 1,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Izan Prieto reparte juego y recupera balones para sostener el ritmo del CD Sotoverde.",
    "avatarHue": 265
  },
  {
    "id": "player-izan-herrera-cd-sotoverde",
    "slug": "izan-herrera-cd-sotoverde",
    "name": "Izan Herrera",
    "teamId": "team-cd-sotoverde",
    "number": 8,
    "position": "Centrocampista",
    "age": 22,
    "nationality": "Marruecos",
    "height": 180,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 134,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 1,
    "form": [
      "E",
      "D",
      "V",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Izan Herrera reparte juego y recupera balones para sostener el ritmo del CD Sotoverde.",
    "avatarHue": 219
  },
  {
    "id": "player-adrian-serrano-cd-sotoverde",
    "slug": "adrian-serrano-cd-sotoverde",
    "name": "Adrián Serrano",
    "teamId": "team-cd-sotoverde",
    "number": 10,
    "position": "Centrocampista",
    "age": 33,
    "nationality": "España",
    "height": 188,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 426,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "E",
      "E"
    ],
    "bio": "Motor del centro del campo, Adrián Serrano reparte juego y recupera balones para sostener el ritmo del CD Sotoverde.",
    "avatarHue": 271
  },
  {
    "id": "player-marc-nunez-cd-sotoverde",
    "slug": "marc-nunez-cd-sotoverde",
    "name": "Marc Núñez",
    "teamId": "team-cd-sotoverde",
    "number": 16,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "Francia",
    "height": 174,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 310,
    "goals": 1,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Marc Núñez reparte juego y recupera balones para sostener el ritmo del CD Sotoverde.",
    "avatarHue": 38
  },
  {
    "id": "player-dragan-navarro-cd-sotoverde",
    "slug": "dragan-navarro-cd-sotoverde",
    "name": "Dragan Navarro",
    "teamId": "team-cd-sotoverde",
    "number": 7,
    "position": "Delantero",
    "age": 30,
    "nationality": "Colombia",
    "height": 179,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 186,
    "goals": 1,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Sotoverde, Dragan Navarro combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 260
  },
  {
    "id": "player-hugo-romero-cd-sotoverde",
    "slug": "hugo-romero-cd-sotoverde",
    "name": "Hugo Romero",
    "teamId": "team-cd-sotoverde",
    "number": 9,
    "position": "Delantero",
    "age": 26,
    "nationality": "España",
    "height": 168,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 201,
    "goals": 1,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Sotoverde, Hugo Romero combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 200
  },
  {
    "id": "player-joel-lopez-cd-sotoverde",
    "slug": "joel-lopez-cd-sotoverde",
    "name": "Joel López",
    "teamId": "team-cd-sotoverde",
    "number": 11,
    "position": "Delantero",
    "age": 32,
    "nationality": "Argentina",
    "height": 188,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 320,
    "goals": 3,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Sotoverde, Joel López combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 141
  },
  {
    "id": "player-eric-serrano-ud-lagunilla",
    "slug": "eric-serrano-ud-lagunilla",
    "name": "Eric Serrano",
    "teamId": "team-ud-lagunilla",
    "number": 1,
    "position": "Portero",
    "age": 25,
    "nationality": "Rumanía",
    "height": 174,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 192,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "V",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Eric Serrano se ha convertido en una referencia bajo los palos del UD Lagunilla, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 279
  },
  {
    "id": "player-enzo-flores-ud-lagunilla",
    "slug": "enzo-flores-ud-lagunilla",
    "name": "Enzo Flores",
    "teamId": "team-ud-lagunilla",
    "number": 13,
    "position": "Portero",
    "age": 32,
    "nationality": "España",
    "height": 191,
    "foot": "Ambidiestro",
    "matches": 6,
    "minutes": 462,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Enzo Flores se ha convertido en una referencia bajo los palos del UD Lagunilla, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 248
  },
  {
    "id": "player-moussa-cano-ud-lagunilla",
    "slug": "moussa-cano-ud-lagunilla",
    "name": "Moussa Cano",
    "teamId": "team-ud-lagunilla",
    "number": 2,
    "position": "Defensa",
    "age": 27,
    "nationality": "Argentina",
    "height": 170,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 300,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Moussa Cano aporta solidez a la zaga del UD Lagunilla y no rehúye el envite físico.",
    "avatarHue": 101
  },
  {
    "id": "player-sergio-sanchez-ud-lagunilla",
    "slug": "sergio-sanchez-ud-lagunilla",
    "name": "Sergio Sánchez",
    "teamId": "team-ud-lagunilla",
    "number": 3,
    "position": "Defensa",
    "age": 22,
    "nationality": "España",
    "height": 194,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 486,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Sergio Sánchez aporta solidez a la zaga del UD Lagunilla y no rehúye el envite físico.",
    "avatarHue": 353
  },
  {
    "id": "player-bilal-mendes-ud-lagunilla",
    "slug": "bilal-mendes-ud-lagunilla",
    "name": "Bilal Mendes",
    "teamId": "team-ud-lagunilla",
    "number": 4,
    "position": "Defensa",
    "age": 23,
    "nationality": "España",
    "height": 168,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 192,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Bilal Mendes aporta solidez a la zaga del UD Lagunilla y no rehúye el envite físico.",
    "avatarHue": 242
  },
  {
    "id": "player-cristian-ortiz-ud-lagunilla",
    "slug": "cristian-ortiz-ud-lagunilla",
    "name": "Cristian Ortiz",
    "teamId": "team-ud-lagunilla",
    "number": 5,
    "position": "Defensa",
    "age": 30,
    "nationality": "Portugal",
    "height": 183,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 261,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Cristian Ortiz aporta solidez a la zaga del UD Lagunilla y no rehúye el envite físico.",
    "avatarHue": 87
  },
  {
    "id": "player-alvaro-gil-ud-lagunilla",
    "slug": "alvaro-gil-ud-lagunilla",
    "name": "Álvaro Gil",
    "teamId": "team-ud-lagunilla",
    "number": 6,
    "position": "Centrocampista",
    "age": 19,
    "nationality": "Brasil",
    "height": 181,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 128,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 1,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Álvaro Gil reparte juego y recupera balones para sostener el ritmo del UD Lagunilla.",
    "avatarHue": 350
  },
  {
    "id": "player-gonzalo-romero-ud-lagunilla",
    "slug": "gonzalo-romero-ud-lagunilla",
    "name": "Gonzalo Romero",
    "teamId": "team-ud-lagunilla",
    "number": 8,
    "position": "Centrocampista",
    "age": 26,
    "nationality": "Senegal",
    "height": 175,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 316,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Gonzalo Romero reparte juego y recupera balones para sostener el ritmo del UD Lagunilla.",
    "avatarHue": 308
  },
  {
    "id": "player-lucas-sanz-ud-lagunilla",
    "slug": "lucas-sanz-ud-lagunilla",
    "name": "Lucas Sanz",
    "teamId": "team-ud-lagunilla",
    "number": 10,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "España",
    "height": 192,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 340,
    "goals": 1,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Lucas Sanz reparte juego y recupera balones para sostener el ritmo del UD Lagunilla.",
    "avatarHue": 201
  },
  {
    "id": "player-lucas-cortes-ud-lagunilla",
    "slug": "lucas-cortes-ud-lagunilla",
    "name": "Lucas Cortés",
    "teamId": "team-ud-lagunilla",
    "number": 16,
    "position": "Centrocampista",
    "age": 20,
    "nationality": "Marruecos",
    "height": 179,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 284,
    "goals": 1,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Lucas Cortés reparte juego y recupera balones para sostener el ritmo del UD Lagunilla.",
    "avatarHue": 181
  },
  {
    "id": "player-izan-romero-ud-lagunilla",
    "slug": "izan-romero-ud-lagunilla",
    "name": "Izan Romero",
    "teamId": "team-ud-lagunilla",
    "number": 7,
    "position": "Delantero",
    "age": 20,
    "nationality": "España",
    "height": 189,
    "foot": "Ambidiestro",
    "matches": 5,
    "minutes": 335,
    "goals": 1,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Lagunilla, Izan Romero combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 90
  },
  {
    "id": "player-hugo-leon-ud-lagunilla",
    "slug": "hugo-leon-ud-lagunilla",
    "name": "Hugo León",
    "teamId": "team-ud-lagunilla",
    "number": 9,
    "position": "Delantero",
    "age": 28,
    "nationality": "Marruecos",
    "height": 193,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 305,
    "goals": 2,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Lagunilla, Hugo León combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 201
  },
  {
    "id": "player-yeray-blanco-ud-lagunilla",
    "slug": "yeray-blanco-ud-lagunilla",
    "name": "Yeray Blanco",
    "teamId": "team-ud-lagunilla",
    "number": 11,
    "position": "Delantero",
    "age": 24,
    "nationality": "Argentina",
    "height": 168,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 384,
    "goals": 3,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 1,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Lagunilla, Yeray Blanco combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 250
  },
  {
    "id": "player-dragan-diaz-cf-brisamar",
    "slug": "dragan-diaz-cf-brisamar",
    "name": "Dragan Díaz",
    "teamId": "team-cf-brisamar",
    "number": 1,
    "position": "Portero",
    "age": 30,
    "nationality": "España",
    "height": 184,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 219,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Dragan Díaz se ha convertido en una referencia bajo los palos del CF Brisamar, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 89
  },
  {
    "id": "player-petru-mendes-cf-brisamar",
    "slug": "petru-mendes-cf-brisamar",
    "name": "Petru Mendes",
    "teamId": "team-cf-brisamar",
    "number": 13,
    "position": "Portero",
    "age": 33,
    "nationality": "España",
    "height": 185,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 225,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Petru Mendes se ha convertido en una referencia bajo los palos del CF Brisamar, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 287
  },
  {
    "id": "player-marc-ivanov-cf-brisamar",
    "slug": "marc-ivanov-cf-brisamar",
    "name": "Marc Ivanov",
    "teamId": "team-cf-brisamar",
    "number": 2,
    "position": "Defensa",
    "age": 26,
    "nationality": "España",
    "height": 191,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 405,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Marc Ivanov aporta solidez a la zaga del CF Brisamar y no rehúye el envite físico.",
    "avatarHue": 359
  },
  {
    "id": "player-sergio-medina-cf-brisamar",
    "slug": "sergio-medina-cf-brisamar",
    "name": "Sergio Medina",
    "teamId": "team-cf-brisamar",
    "number": 3,
    "position": "Defensa",
    "age": 20,
    "nationality": "España",
    "height": 186,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 330,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Sergio Medina aporta solidez a la zaga del CF Brisamar y no rehúye el envite físico.",
    "avatarHue": 169
  },
  {
    "id": "player-anderson-romero-cf-brisamar",
    "slug": "anderson-romero-cf-brisamar",
    "name": "Anderson Romero",
    "teamId": "team-cf-brisamar",
    "number": 4,
    "position": "Defensa",
    "age": 29,
    "nationality": "Francia",
    "height": 181,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 80,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Anderson Romero aporta solidez a la zaga del CF Brisamar y no rehúye el envite físico.",
    "avatarHue": 29
  },
  {
    "id": "player-eric-pena-cf-brisamar",
    "slug": "eric-pena-cf-brisamar",
    "name": "Eric Peña",
    "teamId": "team-cf-brisamar",
    "number": 5,
    "position": "Defensa",
    "age": 30,
    "nationality": "Senegal",
    "height": 194,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 408,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Eric Peña aporta solidez a la zaga del CF Brisamar y no rehúye el envite físico.",
    "avatarHue": 128
  },
  {
    "id": "player-asier-ivanov-cf-brisamar",
    "slug": "asier-ivanov-cf-brisamar",
    "name": "Asier Ivanov",
    "teamId": "team-cf-brisamar",
    "number": 6,
    "position": "Centrocampista",
    "age": 25,
    "nationality": "España",
    "height": 187,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 249,
    "goals": 1,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Asier Ivanov reparte juego y recupera balones para sostener el ritmo del CF Brisamar.",
    "avatarHue": 253
  },
  {
    "id": "player-sergio-molina-cf-brisamar",
    "slug": "sergio-molina-cf-brisamar",
    "name": "Sergio Molina",
    "teamId": "team-cf-brisamar",
    "number": 8,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Francia",
    "height": 196,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 64,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Sergio Molina reparte juego y recupera balones para sostener el ritmo del CF Brisamar.",
    "avatarHue": 333
  },
  {
    "id": "player-rafael-flores-cf-brisamar",
    "slug": "rafael-flores-cf-brisamar",
    "name": "Rafael Flores",
    "teamId": "team-cf-brisamar",
    "number": 10,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "España",
    "height": 183,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 312,
    "goals": 1,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Rafael Flores reparte juego y recupera balones para sostener el ritmo del CF Brisamar.",
    "avatarHue": 159
  },
  {
    "id": "player-aitor-ortega-cf-brisamar",
    "slug": "aitor-ortega-cf-brisamar",
    "name": "Aitor Ortega",
    "teamId": "team-cf-brisamar",
    "number": 16,
    "position": "Centrocampista",
    "age": 30,
    "nationality": "España",
    "height": 186,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 528,
    "goals": 1,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Aitor Ortega reparte juego y recupera balones para sostener el ritmo del CF Brisamar.",
    "avatarHue": 263
  },
  {
    "id": "player-thiago-popescu-cf-brisamar",
    "slug": "thiago-popescu-cf-brisamar",
    "name": "Thiago Popescu",
    "teamId": "team-cf-brisamar",
    "number": 7,
    "position": "Delantero",
    "age": 19,
    "nationality": "España",
    "height": 173,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 252,
    "goals": 1,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del CF Brisamar, Thiago Popescu combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 330
  },
  {
    "id": "player-aitor-rubio-cf-brisamar",
    "slug": "aitor-rubio-cf-brisamar",
    "name": "Aitor Rubio",
    "teamId": "team-cf-brisamar",
    "number": 9,
    "position": "Delantero",
    "age": 27,
    "nationality": "España",
    "height": 175,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 261,
    "goals": 1,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del CF Brisamar, Aitor Rubio combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 184
  },
  {
    "id": "player-gonzalo-cortes-cf-brisamar",
    "slug": "gonzalo-cortes-cf-brisamar",
    "name": "Gonzalo Cortés",
    "teamId": "team-cf-brisamar",
    "number": 11,
    "position": "Delantero",
    "age": 33,
    "nationality": "España",
    "height": 174,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 415,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del CF Brisamar, Gonzalo Cortés combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 22
  },
  {
    "id": "player-marcos-ruiz-real-castelnuevo",
    "slug": "marcos-ruiz-real-castelnuevo",
    "name": "Marcos Ruiz",
    "teamId": "team-real-castelnuevo",
    "number": 1,
    "position": "Portero",
    "age": 25,
    "nationality": "España",
    "height": 192,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 378,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Marcos Ruiz se ha convertido en una referencia bajo los palos del Real Castelnuevo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 80
  },
  {
    "id": "player-souleymane-diaz-real-castelnuevo",
    "slug": "souleymane-diaz-real-castelnuevo",
    "name": "Souleymane Díaz",
    "teamId": "team-real-castelnuevo",
    "number": 13,
    "position": "Portero",
    "age": 24,
    "nationality": "Colombia",
    "height": 176,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 390,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 1,
    "form": [
      "E",
      "D",
      "E",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Souleymane Díaz se ha convertido en una referencia bajo los palos del Real Castelnuevo, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 206
  },
  {
    "id": "player-amine-leon-real-castelnuevo",
    "slug": "amine-leon-real-castelnuevo",
    "name": "Amine León",
    "teamId": "team-real-castelnuevo",
    "number": 2,
    "position": "Defensa",
    "age": 29,
    "nationality": "Francia",
    "height": 194,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 261,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Amine León aporta solidez a la zaga del Real Castelnuevo y no rehúye el envite físico.",
    "avatarHue": 91
  },
  {
    "id": "player-iker-sanz-real-castelnuevo",
    "slug": "iker-sanz-real-castelnuevo",
    "name": "Iker Sanz",
    "teamId": "team-real-castelnuevo",
    "number": 3,
    "position": "Defensa",
    "age": 22,
    "nationality": "España",
    "height": 186,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 152,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "E",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Iker Sanz aporta solidez a la zaga del Real Castelnuevo y no rehúye el envite físico.",
    "avatarHue": 262
  },
  {
    "id": "player-izan-serrano-real-castelnuevo",
    "slug": "izan-serrano-real-castelnuevo",
    "name": "Izan Serrano",
    "teamId": "team-real-castelnuevo",
    "number": 4,
    "position": "Defensa",
    "age": 30,
    "nationality": "Marruecos",
    "height": 193,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 77,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Izan Serrano aporta solidez a la zaga del Real Castelnuevo y no rehúye el envite físico.",
    "avatarHue": 337
  },
  {
    "id": "player-aitor-dominguez-real-castelnuevo",
    "slug": "aitor-dominguez-real-castelnuevo",
    "name": "Aitor Domínguez",
    "teamId": "team-real-castelnuevo",
    "number": 5,
    "position": "Defensa",
    "age": 31,
    "nationality": "Francia",
    "height": 195,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 172,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Aitor Domínguez aporta solidez a la zaga del Real Castelnuevo y no rehúye el envite físico.",
    "avatarHue": 56
  },
  {
    "id": "player-cristiano-lopez-real-castelnuevo",
    "slug": "cristiano-lopez-real-castelnuevo",
    "name": "Cristiano López",
    "teamId": "team-real-castelnuevo",
    "number": 6,
    "position": "Centrocampista",
    "age": 30,
    "nationality": "Rumanía",
    "height": 168,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 166,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Cristiano López reparte juego y recupera balones para sostener el ritmo del Real Castelnuevo.",
    "avatarHue": 99
  },
  {
    "id": "player-cristian-ortega-real-castelnuevo",
    "slug": "cristian-ortega-real-castelnuevo",
    "name": "Cristian Ortega",
    "teamId": "team-real-castelnuevo",
    "number": 8,
    "position": "Centrocampista",
    "age": 34,
    "nationality": "España",
    "height": 183,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 64,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Cristian Ortega reparte juego y recupera balones para sostener el ritmo del Real Castelnuevo.",
    "avatarHue": 184
  },
  {
    "id": "player-jorge-molina-real-castelnuevo",
    "slug": "jorge-molina-real-castelnuevo",
    "name": "Jorge Molina",
    "teamId": "team-real-castelnuevo",
    "number": 10,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "España",
    "height": 175,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 204,
    "goals": 1,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Jorge Molina reparte juego y recupera balones para sostener el ritmo del Real Castelnuevo.",
    "avatarHue": 243
  },
  {
    "id": "player-pablo-konate-real-castelnuevo",
    "slug": "pablo-konate-real-castelnuevo",
    "name": "Pablo Konaté",
    "teamId": "team-real-castelnuevo",
    "number": 16,
    "position": "Centrocampista",
    "age": 25,
    "nationality": "Francia",
    "height": 185,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 252,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "E",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Pablo Konaté reparte juego y recupera balones para sostener el ritmo del Real Castelnuevo.",
    "avatarHue": 92
  },
  {
    "id": "player-gonzalo-serrano-real-castelnuevo",
    "slug": "gonzalo-serrano-real-castelnuevo",
    "name": "Gonzalo Serrano",
    "teamId": "team-real-castelnuevo",
    "number": 7,
    "position": "Delantero",
    "age": 34,
    "nationality": "Argentina",
    "height": 193,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 396,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del Real Castelnuevo, Gonzalo Serrano combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 154
  },
  {
    "id": "player-jorge-navarro-real-castelnuevo",
    "slug": "jorge-navarro-real-castelnuevo",
    "name": "Jorge Navarro",
    "teamId": "team-real-castelnuevo",
    "number": 9,
    "position": "Delantero",
    "age": 28,
    "nationality": "Francia",
    "height": 188,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 420,
    "goals": 2,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Castelnuevo, Jorge Navarro combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 88
  },
  {
    "id": "player-izan-garcia-real-castelnuevo",
    "slug": "izan-garcia-real-castelnuevo",
    "name": "Izan García",
    "teamId": "team-real-castelnuevo",
    "number": 11,
    "position": "Delantero",
    "age": 30,
    "nationality": "Portugal",
    "height": 169,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 219,
    "goals": 1,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "E",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Castelnuevo, Izan García combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 41
  },
  {
    "id": "player-cristiano-lozano-cd-penablanca",
    "slug": "cristiano-lozano-cd-penablanca",
    "name": "Cristiano Lozano",
    "teamId": "team-cd-penablanca",
    "number": 1,
    "position": "Portero",
    "age": 34,
    "nationality": "España",
    "height": 191,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 360,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Cristiano Lozano se ha convertido en una referencia bajo los palos del CD Peñablanca, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 30
  },
  {
    "id": "player-adrian-prieto-cd-penablanca",
    "slug": "adrian-prieto-cd-penablanca",
    "name": "Adrián Prieto",
    "teamId": "team-cd-penablanca",
    "number": 13,
    "position": "Portero",
    "age": 36,
    "nationality": "Colombia",
    "height": 186,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 63,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Adrián Prieto se ha convertido en una referencia bajo los palos del CD Peñablanca, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 84
  },
  {
    "id": "player-izan-castro-cd-penablanca",
    "slug": "izan-castro-cd-penablanca",
    "name": "Izan Castro",
    "teamId": "team-cd-penablanca",
    "number": 2,
    "position": "Defensa",
    "age": 27,
    "nationality": "Colombia",
    "height": 190,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 75,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Izan Castro aporta solidez a la zaga del CD Peñablanca y no rehúye el envite físico.",
    "avatarHue": 14
  },
  {
    "id": "player-kwame-diaz-cd-penablanca",
    "slug": "kwame-diaz-cd-penablanca",
    "name": "Kwame Díaz",
    "teamId": "team-cd-penablanca",
    "number": 3,
    "position": "Defensa",
    "age": 25,
    "nationality": "Senegal",
    "height": 176,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 258,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Kwame Díaz aporta solidez a la zaga del CD Peñablanca y no rehúye el envite físico.",
    "avatarHue": 144
  },
  {
    "id": "player-enzo-garcia-cd-penablanca",
    "slug": "enzo-garcia-cd-penablanca",
    "name": "Enzo García",
    "teamId": "team-cd-penablanca",
    "number": 4,
    "position": "Defensa",
    "age": 33,
    "nationality": "Brasil",
    "height": 175,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 385,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "E",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Enzo García aporta solidez a la zaga del CD Peñablanca y no rehúye el envite físico.",
    "avatarHue": 63
  },
  {
    "id": "player-nico-ortega-cd-penablanca",
    "slug": "nico-ortega-cd-penablanca",
    "name": "Nico Ortega",
    "teamId": "team-cd-penablanca",
    "number": 5,
    "position": "Defensa",
    "age": 32,
    "nationality": "Colombia",
    "height": 195,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 134,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Nico Ortega aporta solidez a la zaga del CD Peñablanca y no rehúye el envite físico.",
    "avatarHue": 359
  },
  {
    "id": "player-adrian-medina-cd-penablanca",
    "slug": "adrian-medina-cd-penablanca",
    "name": "Adrián Medina",
    "teamId": "team-cd-penablanca",
    "number": 6,
    "position": "Centrocampista",
    "age": 18,
    "nationality": "Francia",
    "height": 180,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 516,
    "goals": 1,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 1,
    "form": [
      "E",
      "V",
      "E",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Adrián Medina reparte juego y recupera balones para sostener el ritmo del CD Peñablanca.",
    "avatarHue": 242
  },
  {
    "id": "player-vitor-ortiz-cd-penablanca",
    "slug": "vitor-ortiz-cd-penablanca",
    "name": "Vítor Ortiz",
    "teamId": "team-cd-penablanca",
    "number": 8,
    "position": "Centrocampista",
    "age": 22,
    "nationality": "Portugal",
    "height": 191,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 128,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Vítor Ortiz reparte juego y recupera balones para sostener el ritmo del CD Peñablanca.",
    "avatarHue": 5
  },
  {
    "id": "player-moussa-sanchez-cd-penablanca",
    "slug": "moussa-sanchez-cd-penablanca",
    "name": "Moussa Sánchez",
    "teamId": "team-cd-penablanca",
    "number": 10,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "Portugal",
    "height": 181,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 252,
    "goals": 0,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Moussa Sánchez reparte juego y recupera balones para sostener el ritmo del CD Peñablanca.",
    "avatarHue": 230
  },
  {
    "id": "player-lucas-martinez-cd-penablanca",
    "slug": "lucas-martinez-cd-penablanca",
    "name": "Lucas Martínez",
    "teamId": "team-cd-penablanca",
    "number": 16,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Marruecos",
    "height": 191,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 130,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Lucas Martínez reparte juego y recupera balones para sostener el ritmo del CD Peñablanca.",
    "avatarHue": 146
  },
  {
    "id": "player-leo-navarro-cd-penablanca",
    "slug": "leo-navarro-cd-penablanca",
    "name": "Leo Navarro",
    "teamId": "team-cd-penablanca",
    "number": 7,
    "position": "Delantero",
    "age": 26,
    "nationality": "Portugal",
    "height": 174,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 222,
    "goals": 1,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Peñablanca, Leo Navarro combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 265
  },
  {
    "id": "player-gonzalo-prieto-cd-penablanca",
    "slug": "gonzalo-prieto-cd-penablanca",
    "name": "Gonzalo Prieto",
    "teamId": "team-cd-penablanca",
    "number": 9,
    "position": "Delantero",
    "age": 29,
    "nationality": "España",
    "height": 172,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 126,
    "goals": 1,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Peñablanca, Gonzalo Prieto combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 266
  },
  {
    "id": "player-yusuf-prieto-cd-penablanca",
    "slug": "yusuf-prieto-cd-penablanca",
    "name": "Yusuf Prieto",
    "teamId": "team-cd-penablanca",
    "number": 11,
    "position": "Delantero",
    "age": 34,
    "nationality": "Colombia",
    "height": 169,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 195,
    "goals": 2,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Peñablanca, Yusuf Prieto combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 200
  },
  {
    "id": "player-yusuf-diaz-atletico-serranova",
    "slug": "yusuf-diaz-atletico-serranova",
    "name": "Yusuf Díaz",
    "teamId": "team-atletico-serranova",
    "number": 1,
    "position": "Portero",
    "age": 31,
    "nationality": "España",
    "height": 169,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 267,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Yusuf Díaz se ha convertido en una referencia bajo los palos del Atlético Serranova, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 356
  },
  {
    "id": "player-amine-fernandez-atletico-serranova",
    "slug": "amine-fernandez-atletico-serranova",
    "name": "Amine Fernández",
    "teamId": "team-atletico-serranova",
    "number": 13,
    "position": "Portero",
    "age": 26,
    "nationality": "Rumanía",
    "height": 178,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 270,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Amine Fernández se ha convertido en una referencia bajo los palos del Atlético Serranova, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 322
  },
  {
    "id": "player-gabriel-traore-atletico-serranova",
    "slug": "gabriel-traore-atletico-serranova",
    "name": "Gabriel Traoré",
    "teamId": "team-atletico-serranova",
    "number": 2,
    "position": "Defensa",
    "age": 34,
    "nationality": "España",
    "height": 169,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 82,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Gabriel Traoré aporta solidez a la zaga del Atlético Serranova y no rehúye el envite físico.",
    "avatarHue": 213
  },
  {
    "id": "player-rodrigo-rubio-atletico-serranova",
    "slug": "rodrigo-rubio-atletico-serranova",
    "name": "Rodrigo Rubio",
    "teamId": "team-atletico-serranova",
    "number": 3,
    "position": "Defensa",
    "age": 19,
    "nationality": "Colombia",
    "height": 173,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 264,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Rubio aporta solidez a la zaga del Atlético Serranova y no rehúye el envite físico.",
    "avatarHue": 324
  },
  {
    "id": "player-rodrigo-traore-atletico-serranova",
    "slug": "rodrigo-traore-atletico-serranova",
    "name": "Rodrigo Traoré",
    "teamId": "team-atletico-serranova",
    "number": 4,
    "position": "Defensa",
    "age": 23,
    "nationality": "Brasil",
    "height": 192,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 270,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "D",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Traoré aporta solidez a la zaga del Atlético Serranova y no rehúye el envite físico.",
    "avatarHue": 85
  },
  {
    "id": "player-yeray-ruiz-atletico-serranova",
    "slug": "yeray-ruiz-atletico-serranova",
    "name": "Yeray Ruiz",
    "teamId": "team-atletico-serranova",
    "number": 5,
    "position": "Defensa",
    "age": 28,
    "nationality": "Marruecos",
    "height": 191,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 365,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Yeray Ruiz aporta solidez a la zaga del Atlético Serranova y no rehúye el envite físico.",
    "avatarHue": 335
  },
  {
    "id": "player-eric-navarro-atletico-serranova",
    "slug": "eric-navarro-atletico-serranova",
    "name": "Eric Navarro",
    "teamId": "team-atletico-serranova",
    "number": 6,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "Senegal",
    "height": 186,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 252,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Eric Navarro reparte juego y recupera balones para sostener el ritmo del Atlético Serranova.",
    "avatarHue": 66
  },
  {
    "id": "player-kwame-herrera-atletico-serranova",
    "slug": "kwame-herrera-atletico-serranova",
    "name": "Kwame Herrera",
    "teamId": "team-atletico-serranova",
    "number": 8,
    "position": "Centrocampista",
    "age": 31,
    "nationality": "Colombia",
    "height": 188,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 248,
    "goals": 1,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 1,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Kwame Herrera reparte juego y recupera balones para sostener el ritmo del Atlético Serranova.",
    "avatarHue": 206
  },
  {
    "id": "player-gabriel-leon-atletico-serranova",
    "slug": "gabriel-leon-atletico-serranova",
    "name": "Gabriel León",
    "teamId": "team-atletico-serranova",
    "number": 10,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Portugal",
    "height": 180,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 152,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Gabriel León reparte juego y recupera balones para sostener el ritmo del Atlético Serranova.",
    "avatarHue": 303
  },
  {
    "id": "player-dragan-ivanov-atletico-serranova",
    "slug": "dragan-ivanov-atletico-serranova",
    "name": "Dragan Ivanov",
    "teamId": "team-atletico-serranova",
    "number": 16,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "España",
    "height": 175,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 360,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Dragan Ivanov reparte juego y recupera balones para sostener el ritmo del Atlético Serranova.",
    "avatarHue": 15
  },
  {
    "id": "player-alvaro-herrera-atletico-serranova",
    "slug": "alvaro-herrera-atletico-serranova",
    "name": "Álvaro Herrera",
    "teamId": "team-atletico-serranova",
    "number": 7,
    "position": "Delantero",
    "age": 17,
    "nationality": "Argentina",
    "height": 177,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 420,
    "goals": 2,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del Atlético Serranova, Álvaro Herrera combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 66
  },
  {
    "id": "player-pablo-traore-atletico-serranova",
    "slug": "pablo-traore-atletico-serranova",
    "name": "Pablo Traoré",
    "teamId": "team-atletico-serranova",
    "number": 9,
    "position": "Delantero",
    "age": 29,
    "nationality": "Portugal",
    "height": 189,
    "foot": "Ambidiestro",
    "matches": 6,
    "minutes": 504,
    "goals": 3,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 1,
    "form": [
      "D",
      "E",
      "V",
      "V",
      "E"
    ],
    "bio": "Referencia ofensiva del Atlético Serranova, Pablo Traoré combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 1
  },
  {
    "id": "player-amine-cisse-atletico-serranova",
    "slug": "amine-cisse-atletico-serranova",
    "name": "Amine Cissé",
    "teamId": "team-atletico-serranova",
    "number": 11,
    "position": "Delantero",
    "age": 17,
    "nationality": "Argentina",
    "height": 185,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 219,
    "goals": 1,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del Atlético Serranova, Amine Cissé combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 97
  },
  {
    "id": "player-cristian-gil-ud-fuenllana",
    "slug": "cristian-gil-ud-fuenllana",
    "name": "Cristian Gil",
    "teamId": "team-ud-fuenllana",
    "number": 1,
    "position": "Portero",
    "age": 35,
    "nationality": "Francia",
    "height": 194,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 340,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "V",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Cristian Gil se ha convertido en una referencia bajo los palos del UD Fuenllana, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 131
  },
  {
    "id": "player-marcos-sanz-ud-fuenllana",
    "slug": "marcos-sanz-ud-fuenllana",
    "name": "Marcos Sanz",
    "teamId": "team-ud-fuenllana",
    "number": 13,
    "position": "Portero",
    "age": 25,
    "nationality": "España",
    "height": 169,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 272,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 1,
    "form": [
      "D",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Marcos Sanz se ha convertido en una referencia bajo los palos del UD Fuenllana, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 119
  },
  {
    "id": "player-cristiano-cortes-ud-fuenllana",
    "slug": "cristiano-cortes-ud-fuenllana",
    "name": "Cristiano Cortés",
    "teamId": "team-ud-fuenllana",
    "number": 2,
    "position": "Defensa",
    "age": 21,
    "nationality": "España",
    "height": 192,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 420,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Cristiano Cortés aporta solidez a la zaga del UD Fuenllana y no rehúye el envite físico.",
    "avatarHue": 39
  },
  {
    "id": "player-sergio-silva-ud-fuenllana",
    "slug": "sergio-silva-ud-fuenllana",
    "name": "Sergio Silva",
    "teamId": "team-ud-fuenllana",
    "number": 3,
    "position": "Defensa",
    "age": 26,
    "nationality": "España",
    "height": 179,
    "foot": "Ambidiestro",
    "matches": 1,
    "minutes": 83,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Sergio Silva aporta solidez a la zaga del UD Fuenllana y no rehúye el envite físico.",
    "avatarHue": 130
  },
  {
    "id": "player-samuel-romero-ud-fuenllana",
    "slug": "samuel-romero-ud-fuenllana",
    "name": "Samuel Romero",
    "teamId": "team-ud-fuenllana",
    "number": 4,
    "position": "Defensa",
    "age": 24,
    "nationality": "España",
    "height": 187,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 330,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Samuel Romero aporta solidez a la zaga del UD Fuenllana y no rehúye el envite físico.",
    "avatarHue": 180
  },
  {
    "id": "player-amine-castro-ud-fuenllana",
    "slug": "amine-castro-ud-fuenllana",
    "name": "Amine Castro",
    "teamId": "team-ud-fuenllana",
    "number": 5,
    "position": "Defensa",
    "age": 32,
    "nationality": "Argentina",
    "height": 180,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 148,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Amine Castro aporta solidez a la zaga del UD Fuenllana y no rehúye el envite físico.",
    "avatarHue": 245
  },
  {
    "id": "player-ibrahim-molina-ud-fuenllana",
    "slug": "ibrahim-molina-ud-fuenllana",
    "name": "Ibrahim Molina",
    "teamId": "team-ud-fuenllana",
    "number": 6,
    "position": "Centrocampista",
    "age": 23,
    "nationality": "Rumanía",
    "height": 173,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 249,
    "goals": 1,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Ibrahim Molina reparte juego y recupera balones para sostener el ritmo del UD Fuenllana.",
    "avatarHue": 185
  },
  {
    "id": "player-mihai-delgado-ud-fuenllana",
    "slug": "mihai-delgado-ud-fuenllana",
    "name": "Mihai Delgado",
    "teamId": "team-ud-fuenllana",
    "number": 8,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "España",
    "height": 170,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 356,
    "goals": 1,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "V",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Mihai Delgado reparte juego y recupera balones para sostener el ritmo del UD Fuenllana.",
    "avatarHue": 190
  },
  {
    "id": "player-marcos-flores-ud-fuenllana",
    "slug": "marcos-flores-ud-fuenllana",
    "name": "Marcos Flores",
    "teamId": "team-ud-fuenllana",
    "number": 10,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "Colombia",
    "height": 193,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 270,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "E",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Marcos Flores reparte juego y recupera balones para sostener el ritmo del UD Fuenllana.",
    "avatarHue": 230
  },
  {
    "id": "player-marc-lopez-ud-fuenllana",
    "slug": "marc-lopez-ud-fuenllana",
    "name": "Marc López",
    "teamId": "team-ud-fuenllana",
    "number": 16,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "España",
    "height": 172,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 348,
    "goals": 1,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Marc López reparte juego y recupera balones para sostener el ritmo del UD Fuenllana.",
    "avatarHue": 301
  },
  {
    "id": "player-moussa-blanco-ud-fuenllana",
    "slug": "moussa-blanco-ud-fuenllana",
    "name": "Moussa Blanco",
    "teamId": "team-ud-fuenllana",
    "number": 7,
    "position": "Delantero",
    "age": 20,
    "nationality": "Rumanía",
    "height": 171,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 248,
    "goals": 1,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Fuenllana, Moussa Blanco combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 7
  },
  {
    "id": "player-petru-torres-ud-fuenllana",
    "slug": "petru-torres-ud-fuenllana",
    "name": "Petru Torres",
    "teamId": "team-ud-fuenllana",
    "number": 9,
    "position": "Delantero",
    "age": 34,
    "nationality": "Marruecos",
    "height": 188,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 348,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del UD Fuenllana, Petru Torres combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 277
  },
  {
    "id": "player-marcos-vazquez-ud-fuenllana",
    "slug": "marcos-vazquez-ud-fuenllana",
    "name": "Marcos Vázquez",
    "teamId": "team-ud-fuenllana",
    "number": 11,
    "position": "Delantero",
    "age": 25,
    "nationality": "España",
    "height": 194,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 243,
    "goals": 2,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "E",
      "E"
    ],
    "bio": "Referencia ofensiva del UD Fuenllana, Marcos Vázquez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 81
  },
  {
    "id": "player-amine-silva-cd-arroyomar",
    "slug": "amine-silva-cd-arroyomar",
    "name": "Amine Silva",
    "teamId": "team-cd-arroyomar",
    "number": 1,
    "position": "Portero",
    "age": 34,
    "nationality": "Marruecos",
    "height": 188,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 219,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "D",
      "E"
    ],
    "bio": "Guardameta de reflejos seguros, Amine Silva se ha convertido en una referencia bajo los palos del CD Arroyomar, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 322
  },
  {
    "id": "player-leo-cruz-cd-arroyomar",
    "slug": "leo-cruz-cd-arroyomar",
    "name": "Leo Cruz",
    "teamId": "team-cd-arroyomar",
    "number": 13,
    "position": "Portero",
    "age": 32,
    "nationality": "España",
    "height": 179,
    "foot": "Ambidiestro",
    "matches": 6,
    "minutes": 372,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Leo Cruz se ha convertido en una referencia bajo los palos del CD Arroyomar, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 311
  },
  {
    "id": "player-aitor-castro-cd-arroyomar",
    "slug": "aitor-castro-cd-arroyomar",
    "name": "Aitor Castro",
    "teamId": "team-cd-arroyomar",
    "number": 2,
    "position": "Defensa",
    "age": 20,
    "nationality": "Marruecos",
    "height": 187,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 380,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Aitor Castro aporta solidez a la zaga del CD Arroyomar y no rehúye el envite físico.",
    "avatarHue": 324
  },
  {
    "id": "player-adrian-ruiz-cd-arroyomar",
    "slug": "adrian-ruiz-cd-arroyomar",
    "name": "Adrián Ruiz",
    "teamId": "team-cd-arroyomar",
    "number": 3,
    "position": "Defensa",
    "age": 30,
    "nationality": "España",
    "height": 188,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 360,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Adrián Ruiz aporta solidez a la zaga del CD Arroyomar y no rehúye el envite físico.",
    "avatarHue": 272
  },
  {
    "id": "player-vitor-castro-cd-arroyomar",
    "slug": "vitor-castro-cd-arroyomar",
    "name": "Vítor Castro",
    "teamId": "team-cd-arroyomar",
    "number": 4,
    "position": "Defensa",
    "age": 23,
    "nationality": "Rumanía",
    "height": 180,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 356,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Vítor Castro aporta solidez a la zaga del CD Arroyomar y no rehúye el envite físico.",
    "avatarHue": 230
  },
  {
    "id": "player-rodrigo-torres-cd-arroyomar",
    "slug": "rodrigo-torres-cd-arroyomar",
    "name": "Rodrigo Torres",
    "teamId": "team-cd-arroyomar",
    "number": 5,
    "position": "Defensa",
    "age": 26,
    "nationality": "Francia",
    "height": 170,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 440,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "E"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Torres aporta solidez a la zaga del CD Arroyomar y no rehúye el envite físico.",
    "avatarHue": 0
  },
  {
    "id": "player-omar-castro-cd-arroyomar",
    "slug": "omar-castro-cd-arroyomar",
    "name": "Omar Castro",
    "teamId": "team-cd-arroyomar",
    "number": 6,
    "position": "Centrocampista",
    "age": 29,
    "nationality": "España",
    "height": 170,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 315,
    "goals": 1,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Omar Castro reparte juego y recupera balones para sostener el ritmo del CD Arroyomar.",
    "avatarHue": 14
  },
  {
    "id": "player-anderson-mendez-cd-arroyomar",
    "slug": "anderson-mendez-cd-arroyomar",
    "name": "Anderson Méndez",
    "teamId": "team-cd-arroyomar",
    "number": 8,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "Brasil",
    "height": 181,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 504,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Anderson Méndez reparte juego y recupera balones para sostener el ritmo del CD Arroyomar.",
    "avatarHue": 264
  },
  {
    "id": "player-dragan-flores-cd-arroyomar",
    "slug": "dragan-flores-cd-arroyomar",
    "name": "Dragan Flores",
    "teamId": "team-cd-arroyomar",
    "number": 10,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "Portugal",
    "height": 172,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 360,
    "goals": 1,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Dragan Flores reparte juego y recupera balones para sostener el ritmo del CD Arroyomar.",
    "avatarHue": 295
  },
  {
    "id": "player-joel-lozano-cd-arroyomar",
    "slug": "joel-lozano-cd-arroyomar",
    "name": "Joel Lozano",
    "teamId": "team-cd-arroyomar",
    "number": 16,
    "position": "Centrocampista",
    "age": 29,
    "nationality": "España",
    "height": 174,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 62,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Joel Lozano reparte juego y recupera balones para sostener el ritmo del CD Arroyomar.",
    "avatarHue": 29
  },
  {
    "id": "player-leo-prieto-cd-arroyomar",
    "slug": "leo-prieto-cd-arroyomar",
    "name": "Leo Prieto",
    "teamId": "team-cd-arroyomar",
    "number": 7,
    "position": "Delantero",
    "age": 24,
    "nationality": "España",
    "height": 171,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 219,
    "goals": 1,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del CD Arroyomar, Leo Prieto combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 132
  },
  {
    "id": "player-dragan-cortes-cd-arroyomar",
    "slug": "dragan-cortes-cd-arroyomar",
    "name": "Dragan Cortés",
    "teamId": "team-cd-arroyomar",
    "number": 9,
    "position": "Delantero",
    "age": 32,
    "nationality": "Argentina",
    "height": 194,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 158,
    "goals": 1,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "E"
    ],
    "bio": "Referencia ofensiva del CD Arroyomar, Dragan Cortés combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 88
  },
  {
    "id": "player-leo-gil-cd-arroyomar",
    "slug": "leo-gil-cd-arroyomar",
    "name": "Leo Gil",
    "teamId": "team-cd-arroyomar",
    "number": 11,
    "position": "Delantero",
    "age": 31,
    "nationality": "Rumanía",
    "height": 169,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 148,
    "goals": 1,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del CD Arroyomar, Leo Gil combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 9
  },
  {
    "id": "player-nico-medina-cf-altavista",
    "slug": "nico-medina-cf-altavista",
    "name": "Nico Medina",
    "teamId": "team-cf-altavista",
    "number": 1,
    "position": "Portero",
    "age": 32,
    "nationality": "Brasil",
    "height": 175,
    "foot": "Diestro",
    "matches": 4,
    "minutes": 292,
    "goals": 0,
    "assists": 0,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "V",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Nico Medina se ha convertido en una referencia bajo los palos del CF Altavista, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 333
  },
  {
    "id": "player-diego-ortega-cf-altavista",
    "slug": "diego-ortega-cf-altavista",
    "name": "Diego Ortega",
    "teamId": "team-cf-altavista",
    "number": 13,
    "position": "Portero",
    "age": 32,
    "nationality": "España",
    "height": 182,
    "foot": "Ambidiestro",
    "matches": 1,
    "minutes": 64,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Diego Ortega se ha convertido en una referencia bajo los palos del CF Altavista, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 188
  },
  {
    "id": "player-joel-rubio-cf-altavista",
    "slug": "joel-rubio-cf-altavista",
    "name": "Joel Rubio",
    "teamId": "team-cf-altavista",
    "number": 2,
    "position": "Defensa",
    "age": 29,
    "nationality": "Brasil",
    "height": 174,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 174,
    "goals": 0,
    "assists": 1,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Joel Rubio aporta solidez a la zaga del CF Altavista y no rehúye el envite físico.",
    "avatarHue": 184
  },
  {
    "id": "player-omar-konate-cf-altavista",
    "slug": "omar-konate-cf-altavista",
    "name": "Omar Konaté",
    "teamId": "team-cf-altavista",
    "number": 3,
    "position": "Defensa",
    "age": 27,
    "nationality": "Colombia",
    "height": 169,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 168,
    "goals": 0,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Omar Konaté aporta solidez a la zaga del CF Altavista y no rehúye el envite físico.",
    "avatarHue": 201
  },
  {
    "id": "player-vitor-leon-cf-altavista",
    "slug": "vitor-leon-cf-altavista",
    "name": "Vítor León",
    "teamId": "team-cf-altavista",
    "number": 4,
    "position": "Defensa",
    "age": 28,
    "nationality": "España",
    "height": 184,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 162,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "E",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Vítor León aporta solidez a la zaga del CF Altavista y no rehúye el envite físico.",
    "avatarHue": 224
  },
  {
    "id": "player-nico-ivanov-cf-altavista",
    "slug": "nico-ivanov-cf-altavista",
    "name": "Nico Ivanov",
    "teamId": "team-cf-altavista",
    "number": 5,
    "position": "Defensa",
    "age": 20,
    "nationality": "Senegal",
    "height": 187,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 201,
    "goals": 0,
    "assists": 1,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Nico Ivanov aporta solidez a la zaga del CF Altavista y no rehúye el envite físico.",
    "avatarHue": 326
  },
  {
    "id": "player-bruno-martinez-cf-altavista",
    "slug": "bruno-martinez-cf-altavista",
    "name": "Bruno Martínez",
    "teamId": "team-cf-altavista",
    "number": 6,
    "position": "Centrocampista",
    "age": 27,
    "nationality": "Marruecos",
    "height": 181,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 75,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Bruno Martínez reparte juego y recupera balones para sostener el ritmo del CF Altavista.",
    "avatarHue": 156
  },
  {
    "id": "player-kwame-nunez-cf-altavista",
    "slug": "kwame-nunez-cf-altavista",
    "name": "Kwame Núñez",
    "teamId": "team-cf-altavista",
    "number": 8,
    "position": "Centrocampista",
    "age": 29,
    "nationality": "Portugal",
    "height": 193,
    "foot": "Ambidiestro",
    "matches": 1,
    "minutes": 67,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 1,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Kwame Núñez reparte juego y recupera balones para sostener el ritmo del CF Altavista.",
    "avatarHue": 354
  },
  {
    "id": "player-jorge-flores-cf-altavista",
    "slug": "jorge-flores-cf-altavista",
    "name": "Jorge Flores",
    "teamId": "team-cf-altavista",
    "number": 10,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "Francia",
    "height": 188,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 243,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Jorge Flores reparte juego y recupera balones para sostener el ritmo del CF Altavista.",
    "avatarHue": 183
  },
  {
    "id": "player-wesley-romero-cf-altavista",
    "slug": "wesley-romero-cf-altavista",
    "name": "Wesley Romero",
    "teamId": "team-cf-altavista",
    "number": 16,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "España",
    "height": 196,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 150,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Wesley Romero reparte juego y recupera balones para sostener el ritmo del CF Altavista.",
    "avatarHue": 162
  },
  {
    "id": "player-mario-herrera-cf-altavista",
    "slug": "mario-herrera-cf-altavista",
    "name": "Mario Herrera",
    "teamId": "team-cf-altavista",
    "number": 7,
    "position": "Delantero",
    "age": 30,
    "nationality": "Argentina",
    "height": 188,
    "foot": "Zurdo",
    "matches": 5,
    "minutes": 400,
    "goals": 1,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del CF Altavista, Mario Herrera combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 358
  },
  {
    "id": "player-omar-serrano-cf-altavista",
    "slug": "omar-serrano-cf-altavista",
    "name": "Omar Serrano",
    "teamId": "team-cf-altavista",
    "number": 9,
    "position": "Delantero",
    "age": 24,
    "nationality": "España",
    "height": 195,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 438,
    "goals": 2,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del CF Altavista, Omar Serrano combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 180
  },
  {
    "id": "player-sergio-martinez-cf-altavista",
    "slug": "sergio-martinez-cf-altavista",
    "name": "Sergio Martínez",
    "teamId": "team-cf-altavista",
    "number": 11,
    "position": "Delantero",
    "age": 25,
    "nationality": "Argentina",
    "height": 171,
    "foot": "Ambidiestro",
    "matches": 5,
    "minutes": 445,
    "goals": 3,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del CF Altavista, Sergio Martínez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 309
  },
  {
    "id": "player-anderson-pena-ad-pozonegro",
    "slug": "anderson-pena-ad-pozonegro",
    "name": "Anderson Peña",
    "teamId": "team-ad-pozonegro",
    "number": 1,
    "position": "Portero",
    "age": 32,
    "nationality": "Brasil",
    "height": 175,
    "foot": "Zurdo",
    "matches": 3,
    "minutes": 270,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Anderson Peña se ha convertido en una referencia bajo los palos del AD Pozonegro, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 248
  },
  {
    "id": "player-raul-flores-ad-pozonegro",
    "slug": "raul-flores-ad-pozonegro",
    "name": "Raúl Flores",
    "teamId": "team-ad-pozonegro",
    "number": 13,
    "position": "Portero",
    "age": 33,
    "nationality": "Brasil",
    "height": 183,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 292,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "D",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Raúl Flores se ha convertido en una referencia bajo los palos del AD Pozonegro, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 131
  },
  {
    "id": "player-rodrigo-fernandez-ad-pozonegro",
    "slug": "rodrigo-fernandez-ad-pozonegro",
    "name": "Rodrigo Fernández",
    "teamId": "team-ad-pozonegro",
    "number": 2,
    "position": "Defensa",
    "age": 18,
    "nationality": "España",
    "height": 185,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 540,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Rodrigo Fernández aporta solidez a la zaga del AD Pozonegro y no rehúye el envite físico.",
    "avatarHue": 78
  },
  {
    "id": "player-anderson-iglesias-ad-pozonegro",
    "slug": "anderson-iglesias-ad-pozonegro",
    "name": "Anderson Iglesias",
    "teamId": "team-ad-pozonegro",
    "number": 3,
    "position": "Defensa",
    "age": 25,
    "nationality": "Brasil",
    "height": 184,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 69,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Anderson Iglesias aporta solidez a la zaga del AD Pozonegro y no rehúye el envite físico.",
    "avatarHue": 34
  },
  {
    "id": "player-dragan-diallo-ad-pozonegro",
    "slug": "dragan-diallo-ad-pozonegro",
    "name": "Dragan Diallo",
    "teamId": "team-ad-pozonegro",
    "number": 4,
    "position": "Defensa",
    "age": 33,
    "nationality": "Argentina",
    "height": 192,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 61,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "V",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Dragan Diallo aporta solidez a la zaga del AD Pozonegro y no rehúye el envite físico.",
    "avatarHue": 160
  },
  {
    "id": "player-karim-cortes-ad-pozonegro",
    "slug": "karim-cortes-ad-pozonegro",
    "name": "Karim Cortés",
    "teamId": "team-ad-pozonegro",
    "number": 5,
    "position": "Defensa",
    "age": 34,
    "nationality": "Rumanía",
    "height": 186,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 425,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Karim Cortés aporta solidez a la zaga del AD Pozonegro y no rehúye el envite físico.",
    "avatarHue": 18
  },
  {
    "id": "player-cristiano-sanz-ad-pozonegro",
    "slug": "cristiano-sanz-ad-pozonegro",
    "name": "Cristiano Sanz",
    "teamId": "team-ad-pozonegro",
    "number": 6,
    "position": "Centrocampista",
    "age": 33,
    "nationality": "Brasil",
    "height": 169,
    "foot": "Diestro",
    "matches": 2,
    "minutes": 162,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Cristiano Sanz reparte juego y recupera balones para sostener el ritmo del AD Pozonegro.",
    "avatarHue": 96
  },
  {
    "id": "player-pablo-lopez-ad-pozonegro",
    "slug": "pablo-lopez-ad-pozonegro",
    "name": "Pablo López",
    "teamId": "team-ad-pozonegro",
    "number": 8,
    "position": "Centrocampista",
    "age": 25,
    "nationality": "España",
    "height": 172,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 440,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "D"
    ],
    "bio": "Motor del centro del campo, Pablo López reparte juego y recupera balones para sostener el ritmo del AD Pozonegro.",
    "avatarHue": 28
  },
  {
    "id": "player-mario-ortiz-ad-pozonegro",
    "slug": "mario-ortiz-ad-pozonegro",
    "name": "Mario Ortiz",
    "teamId": "team-ad-pozonegro",
    "number": 10,
    "position": "Centrocampista",
    "age": 32,
    "nationality": "Rumanía",
    "height": 192,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 134,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Mario Ortiz reparte juego y recupera balones para sostener el ritmo del AD Pozonegro.",
    "avatarHue": 305
  },
  {
    "id": "player-asier-ortiz-ad-pozonegro",
    "slug": "asier-ortiz-ad-pozonegro",
    "name": "Asier Ortiz",
    "teamId": "team-ad-pozonegro",
    "number": 16,
    "position": "Centrocampista",
    "age": 33,
    "nationality": "España",
    "height": 172,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 450,
    "goals": 1,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Motor del centro del campo, Asier Ortiz reparte juego y recupera balones para sostener el ritmo del AD Pozonegro.",
    "avatarHue": 86
  },
  {
    "id": "player-omar-vazquez-ad-pozonegro",
    "slug": "omar-vazquez-ad-pozonegro",
    "name": "Omar Vázquez",
    "teamId": "team-ad-pozonegro",
    "number": 7,
    "position": "Delantero",
    "age": 30,
    "nationality": "España",
    "height": 187,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 328,
    "goals": 2,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "D",
      "V",
      "D"
    ],
    "bio": "Referencia ofensiva del AD Pozonegro, Omar Vázquez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 238
  },
  {
    "id": "player-wesley-diaz-ad-pozonegro",
    "slug": "wesley-diaz-ad-pozonegro",
    "name": "Wesley Díaz",
    "teamId": "team-ad-pozonegro",
    "number": 9,
    "position": "Delantero",
    "age": 27,
    "nationality": "Argentina",
    "height": 169,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 60,
    "goals": 0,
    "assists": 1,
    "yellowCards": 7,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Referencia ofensiva del AD Pozonegro, Wesley Díaz combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 13
  },
  {
    "id": "player-dragan-gil-ad-pozonegro",
    "slug": "dragan-gil-ad-pozonegro",
    "name": "Dragan Gil",
    "teamId": "team-ad-pozonegro",
    "number": 11,
    "position": "Delantero",
    "age": 21,
    "nationality": "España",
    "height": 176,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 340,
    "goals": 2,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "E",
      "E"
    ],
    "bio": "Referencia ofensiva del AD Pozonegro, Dragan Gil combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 243
  },
  {
    "id": "player-alvaro-ivanov-real-cabodoro",
    "slug": "alvaro-ivanov-real-cabodoro",
    "name": "Álvaro Ivanov",
    "teamId": "team-real-cabodoro",
    "number": 1,
    "position": "Portero",
    "age": 34,
    "nationality": "España",
    "height": 180,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 366,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Álvaro Ivanov se ha convertido en una referencia bajo los palos del Real Cabodoro, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 121
  },
  {
    "id": "player-gabriel-diallo-real-cabodoro",
    "slug": "gabriel-diallo-real-cabodoro",
    "name": "Gabriel Diallo",
    "teamId": "team-real-cabodoro",
    "number": 13,
    "position": "Portero",
    "age": 31,
    "nationality": "Portugal",
    "height": 178,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 126,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "D",
      "V"
    ],
    "bio": "Guardameta de reflejos seguros, Gabriel Diallo se ha convertido en una referencia bajo los palos del Real Cabodoro, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 157
  },
  {
    "id": "player-ibrahim-ramos-real-cabodoro",
    "slug": "ibrahim-ramos-real-cabodoro",
    "name": "Ibrahim Ramos",
    "teamId": "team-real-cabodoro",
    "number": 2,
    "position": "Defensa",
    "age": 22,
    "nationality": "España",
    "height": 178,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 67,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "E",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Ibrahim Ramos aporta solidez a la zaga del Real Cabodoro y no rehúye el envite físico.",
    "avatarHue": 202
  },
  {
    "id": "player-marc-cruz-real-cabodoro",
    "slug": "marc-cruz-real-cabodoro",
    "name": "Marc Cruz",
    "teamId": "team-real-cabodoro",
    "number": 3,
    "position": "Defensa",
    "age": 32,
    "nationality": "España",
    "height": 186,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 69,
    "goals": 0,
    "assists": 1,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "E",
      "E",
      "E",
      "E",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Marc Cruz aporta solidez a la zaga del Real Cabodoro y no rehúye el envite físico.",
    "avatarHue": 297
  },
  {
    "id": "player-aitor-flores-real-cabodoro",
    "slug": "aitor-flores-real-cabodoro",
    "name": "Aitor Flores",
    "teamId": "team-real-cabodoro",
    "number": 4,
    "position": "Defensa",
    "age": 17,
    "nationality": "Colombia",
    "height": 195,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 138,
    "goals": 0,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "E",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Aitor Flores aporta solidez a la zaga del Real Cabodoro y no rehúye el envite físico.",
    "avatarHue": 85
  },
  {
    "id": "player-asier-herrera-real-cabodoro",
    "slug": "asier-herrera-real-cabodoro",
    "name": "Asier Herrera",
    "teamId": "team-real-cabodoro",
    "number": 5,
    "position": "Defensa",
    "age": 20,
    "nationality": "España",
    "height": 171,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 76,
    "goals": 0,
    "assists": 1,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "V",
      "V",
      "D",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Asier Herrera aporta solidez a la zaga del Real Cabodoro y no rehúye el envite físico.",
    "avatarHue": 73
  },
  {
    "id": "player-marcos-lopez-real-cabodoro",
    "slug": "marcos-lopez-real-cabodoro",
    "name": "Marcos López",
    "teamId": "team-real-cabodoro",
    "number": 6,
    "position": "Centrocampista",
    "age": 20,
    "nationality": "Marruecos",
    "height": 171,
    "foot": "Ambidiestro",
    "matches": 2,
    "minutes": 140,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "E",
      "V"
    ],
    "bio": "Motor del centro del campo, Marcos López reparte juego y recupera balones para sostener el ritmo del Real Cabodoro.",
    "avatarHue": 93
  },
  {
    "id": "player-joel-torres-real-cabodoro",
    "slug": "joel-torres-real-cabodoro",
    "name": "Joel Torres",
    "teamId": "team-real-cabodoro",
    "number": 8,
    "position": "Centrocampista",
    "age": 22,
    "nationality": "España",
    "height": 189,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 384,
    "goals": 0,
    "assists": 1,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Joel Torres reparte juego y recupera balones para sostener el ritmo del Real Cabodoro.",
    "avatarHue": 82
  },
  {
    "id": "player-hugo-ruiz-real-cabodoro",
    "slug": "hugo-ruiz-real-cabodoro",
    "name": "Hugo Ruiz",
    "teamId": "team-real-cabodoro",
    "number": 10,
    "position": "Centrocampista",
    "age": 17,
    "nationality": "España",
    "height": 170,
    "foot": "Ambidiestro",
    "matches": 4,
    "minutes": 272,
    "goals": 0,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "V",
      "V"
    ],
    "bio": "Motor del centro del campo, Hugo Ruiz reparte juego y recupera balones para sostener el ritmo del Real Cabodoro.",
    "avatarHue": 65
  },
  {
    "id": "player-adrian-konate-real-cabodoro",
    "slug": "adrian-konate-real-cabodoro",
    "name": "Adrián Konaté",
    "teamId": "team-real-cabodoro",
    "number": 16,
    "position": "Centrocampista",
    "age": 24,
    "nationality": "Colombia",
    "height": 183,
    "foot": "Zurdo",
    "matches": 2,
    "minutes": 170,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Adrián Konaté reparte juego y recupera balones para sostener el ritmo del Real Cabodoro.",
    "avatarHue": 163
  },
  {
    "id": "player-enzo-perez-real-cabodoro",
    "slug": "enzo-perez-real-cabodoro",
    "name": "Enzo Pérez",
    "teamId": "team-real-cabodoro",
    "number": 7,
    "position": "Delantero",
    "age": 29,
    "nationality": "España",
    "height": 182,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 504,
    "goals": 1,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Cabodoro, Enzo Pérez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 262
  },
  {
    "id": "player-alvaro-pena-real-cabodoro",
    "slug": "alvaro-pena-real-cabodoro",
    "name": "Álvaro Peña",
    "teamId": "team-real-cabodoro",
    "number": 9,
    "position": "Delantero",
    "age": 21,
    "nationality": "Argentina",
    "height": 170,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 267,
    "goals": 0,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "E",
      "D"
    ],
    "bio": "Referencia ofensiva del Real Cabodoro, Álvaro Peña combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 207
  },
  {
    "id": "player-anderson-garcia-real-cabodoro",
    "slug": "anderson-garcia-real-cabodoro",
    "name": "Anderson García",
    "teamId": "team-real-cabodoro",
    "number": 11,
    "position": "Delantero",
    "age": 18,
    "nationality": "España",
    "height": 178,
    "foot": "Zurdo",
    "matches": 6,
    "minutes": 540,
    "goals": 3,
    "assists": 0,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "D",
      "E",
      "V"
    ],
    "bio": "Referencia ofensiva del Real Cabodoro, Anderson García combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 209
  },
  {
    "id": "player-gabriel-romero-ud-espinares",
    "slug": "gabriel-romero-ud-espinares",
    "name": "Gabriel Romero",
    "teamId": "team-ud-espinares",
    "number": 1,
    "position": "Portero",
    "age": 25,
    "nationality": "España",
    "height": 179,
    "foot": "Ambidiestro",
    "matches": 5,
    "minutes": 370,
    "goals": 0,
    "assists": 0,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "D",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Gabriel Romero se ha convertido en una referencia bajo los palos del UD Espinares, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 281
  },
  {
    "id": "player-mario-popescu-ud-espinares",
    "slug": "mario-popescu-ud-espinares",
    "name": "Mario Popescu",
    "teamId": "team-ud-espinares",
    "number": 13,
    "position": "Portero",
    "age": 35,
    "nationality": "España",
    "height": 172,
    "foot": "Diestro",
    "matches": 1,
    "minutes": 70,
    "goals": 0,
    "assists": 0,
    "yellowCards": 8,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Guardameta de reflejos seguros, Mario Popescu se ha convertido en una referencia bajo los palos del UD Espinares, destacando por su salida de balón y su liderazgo en defensa.",
    "avatarHue": 241
  },
  {
    "id": "player-kwame-fernandez-ud-espinares",
    "slug": "kwame-fernandez-ud-espinares",
    "name": "Kwame Fernández",
    "teamId": "team-ud-espinares",
    "number": 2,
    "position": "Defensa",
    "age": 22,
    "nationality": "España",
    "height": 170,
    "foot": "Diestro",
    "matches": 5,
    "minutes": 430,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "E",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Kwame Fernández aporta solidez a la zaga del UD Espinares y no rehúye el envite físico.",
    "avatarHue": 142
  },
  {
    "id": "player-yeray-fernandez-ud-espinares",
    "slug": "yeray-fernandez-ud-espinares",
    "name": "Yeray Fernández",
    "teamId": "team-ud-espinares",
    "number": 3,
    "position": "Defensa",
    "age": 34,
    "nationality": "Argentina",
    "height": 188,
    "foot": "Zurdo",
    "matches": 4,
    "minutes": 312,
    "goals": 0,
    "assists": 0,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "E",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Yeray Fernández aporta solidez a la zaga del UD Espinares y no rehúye el envite físico.",
    "avatarHue": 137
  },
  {
    "id": "player-izan-flores-ud-espinares",
    "slug": "izan-flores-ud-espinares",
    "name": "Izan Flores",
    "teamId": "team-ud-espinares",
    "number": 4,
    "position": "Defensa",
    "age": 33,
    "nationality": "España",
    "height": 173,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 252,
    "goals": 0,
    "assists": 1,
    "yellowCards": 6,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "V",
      "V",
      "V"
    ],
    "bio": "Central contundente en el juego aéreo, Izan Flores aporta solidez a la zaga del UD Espinares y no rehúye el envite físico.",
    "avatarHue": 234
  },
  {
    "id": "player-souleymane-rubio-ud-espinares",
    "slug": "souleymane-rubio-ud-espinares",
    "name": "Souleymane Rubio",
    "teamId": "team-ud-espinares",
    "number": 5,
    "position": "Defensa",
    "age": 20,
    "nationality": "España",
    "height": 180,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 534,
    "goals": 0,
    "assists": 0,
    "yellowCards": 1,
    "redCards": 0,
    "form": [
      "D",
      "E",
      "D",
      "V",
      "D"
    ],
    "bio": "Central contundente en el juego aéreo, Souleymane Rubio aporta solidez a la zaga del UD Espinares y no rehúye el envite físico.",
    "avatarHue": 328
  },
  {
    "id": "player-jorge-nunez-ud-espinares",
    "slug": "jorge-nunez-ud-espinares",
    "name": "Jorge Núñez",
    "teamId": "team-ud-espinares",
    "number": 6,
    "position": "Centrocampista",
    "age": 28,
    "nationality": "Colombia",
    "height": 174,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 225,
    "goals": 0,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "V",
      "D",
      "V"
    ],
    "bio": "Motor del centro del campo, Jorge Núñez reparte juego y recupera balones para sostener el ritmo del UD Espinares.",
    "avatarHue": 247
  },
  {
    "id": "player-iker-mendez-ud-espinares",
    "slug": "iker-mendez-ud-espinares",
    "name": "Iker Méndez",
    "teamId": "team-ud-espinares",
    "number": 8,
    "position": "Centrocampista",
    "age": 22,
    "nationality": "España",
    "height": 171,
    "foot": "Zurdo",
    "matches": 1,
    "minutes": 64,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "E",
      "D"
    ],
    "bio": "Motor del centro del campo, Iker Méndez reparte juego y recupera balones para sostener el ritmo del UD Espinares.",
    "avatarHue": 127
  },
  {
    "id": "player-enzo-cano-ud-espinares",
    "slug": "enzo-cano-ud-espinares",
    "name": "Enzo Cano",
    "teamId": "team-ud-espinares",
    "number": 10,
    "position": "Centrocampista",
    "age": 29,
    "nationality": "España",
    "height": 173,
    "foot": "Ambidiestro",
    "matches": 3,
    "minutes": 246,
    "goals": 0,
    "assists": 1,
    "yellowCards": 2,
    "redCards": 0,
    "form": [
      "D",
      "D",
      "D",
      "D",
      "E"
    ],
    "bio": "Motor del centro del campo, Enzo Cano reparte juego y recupera balones para sostener el ritmo del UD Espinares.",
    "avatarHue": 284
  },
  {
    "id": "player-gabriel-herrera-ud-espinares",
    "slug": "gabriel-herrera-ud-espinares",
    "name": "Gabriel Herrera",
    "teamId": "team-ud-espinares",
    "number": 16,
    "position": "Centrocampista",
    "age": 18,
    "nationality": "Brasil",
    "height": 192,
    "foot": "Ambidiestro",
    "matches": 5,
    "minutes": 310,
    "goals": 0,
    "assists": 0,
    "yellowCards": 5,
    "redCards": 0,
    "form": [
      "V",
      "V",
      "V",
      "V",
      "E"
    ],
    "bio": "Motor del centro del campo, Gabriel Herrera reparte juego y recupera balones para sostener el ritmo del UD Espinares.",
    "avatarHue": 247
  },
  {
    "id": "player-omar-martinez-ud-espinares",
    "slug": "omar-martinez-ud-espinares",
    "name": "Omar Martínez",
    "teamId": "team-ud-espinares",
    "number": 7,
    "position": "Delantero",
    "age": 21,
    "nationality": "Argentina",
    "height": 190,
    "foot": "Ambidiestro",
    "matches": 5,
    "minutes": 315,
    "goals": 1,
    "assists": 0,
    "yellowCards": 0,
    "redCards": 1,
    "form": [
      "E",
      "E",
      "D",
      "E",
      "E"
    ],
    "bio": "Referencia ofensiva del UD Espinares, Omar Martínez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 15
  },
  {
    "id": "player-cristian-ramos-ud-espinares",
    "slug": "cristian-ramos-ud-espinares",
    "name": "Cristian Ramos",
    "teamId": "team-ud-espinares",
    "number": 9,
    "position": "Delantero",
    "age": 22,
    "nationality": "España",
    "height": 170,
    "foot": "Diestro",
    "matches": 6,
    "minutes": 540,
    "goals": 2,
    "assists": 1,
    "yellowCards": 3,
    "redCards": 0,
    "form": [
      "V",
      "E",
      "D",
      "V",
      "E"
    ],
    "bio": "Referencia ofensiva del UD Espinares, Cristian Ramos combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 138
  },
  {
    "id": "player-hugo-perez-ud-espinares",
    "slug": "hugo-perez-ud-espinares",
    "name": "Hugo Pérez",
    "teamId": "team-ud-espinares",
    "number": 11,
    "position": "Delantero",
    "age": 28,
    "nationality": "Brasil",
    "height": 176,
    "foot": "Diestro",
    "matches": 3,
    "minutes": 216,
    "goals": 1,
    "assists": 0,
    "yellowCards": 4,
    "redCards": 0,
    "form": [
      "V",
      "D",
      "D",
      "V",
      "V"
    ],
    "bio": "Referencia ofensiva del UD Espinares, Hugo Pérez combina movilidad y definición para mantenerse entre los máximos goleadores del grupo.",
    "avatarHue": 288
  }
];

export const matches: Match[] = [
  {
    "id": "match-comp-preferente-madrid-j1-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "16:00",
    "status": "jugado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-ad-montereal",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 11,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-alvaro-torres-ad-montereal"
      },
      {
        "minute": 16,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-nunez-cd-robledo"
      },
      {
        "minute": 39,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-nunez-cd-robledo",
        "assistPlayerId": "player-souleymane-prieto-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 55,
        "away": 45
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-rafael-martinez-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-marcos-pena-cd-robledo"
    ],
    "awayLineup": [
      "player-thiago-leon-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-alvaro-torres-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-enzo-lopez-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j1-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "16:00",
    "status": "jugado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-yeray-delgado-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 7,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-jorge-mendez-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-jorge-cisse-ud-vallarena"
    ],
    "awayLineup": [
      "player-joel-sanchez-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-moussa-konate-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j1-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "17:30",
    "status": "jugado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 2,
    "awayScore": 2,
    "events": [
      {
        "minute": 16,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-samuel-sanchez-cd-riofrio"
      },
      {
        "minute": 19,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-petru-marin-atletico-pinarejo"
      },
      {
        "minute": 29,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-adrian-ivanov-atletico-pinarejo",
        "assistPlayerId": "player-rafael-serrano-atletico-pinarejo"
      },
      {
        "minute": 37,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-aitor-cruz-cd-riofrio",
        "assistPlayerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 57,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-mateo-mendes-atletico-pinarejo",
        "assistPlayerId": "player-rafael-serrano-atletico-pinarejo"
      },
      {
        "minute": 77,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-rafael-pena-cd-riofrio"
      },
      {
        "minute": 88,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-rafael-pena-cd-riofrio",
        "assistPlayerId": "player-adrian-molina-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 54,
        "away": 46
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 2
      },
      {
        "label": "Córners",
        "home": 1,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-rodrigo-castro-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-enzo-ruiz-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-omar-romero-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j1-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "16:00",
    "status": "jugado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-real-almenara",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 10,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-dragan-iglesias-real-almenara"
      },
      {
        "minute": 14,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-rafael-silva-real-almenara",
        "assistPlayerId": "player-kwame-ruiz-real-almenara"
      },
      {
        "minute": 43,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-dragan-iglesias-real-almenara"
      },
      {
        "minute": 90,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-iker-serrano-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 39,
        "away": 61
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-wesley-traore-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-cristian-perez-cf-cantosol"
    ],
    "awayLineup": [
      "player-iker-serrano-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-petru-castro-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-marc-medina-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-kwame-marin-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j2-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-cd-robledo",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 14,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-alvaro-prieto-ud-vegalba"
      },
      {
        "minute": 38,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-souleymane-cisse-ud-vegalba",
        "assistPlayerId": "player-alvaro-prieto-ud-vegalba"
      },
      {
        "minute": 40,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-raul-lopez-cd-robledo"
      },
      {
        "minute": 54,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-lucas-lozano-cd-robledo"
      },
      {
        "minute": 59,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-leon-ud-vegalba",
        "assistPlayerId": "player-cristiano-cruz-ud-vegalba"
      },
      {
        "minute": 72,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-moussa-prieto-cd-robledo",
        "assistPlayerId": "player-moussa-prieto-cd-robledo"
      },
      {
        "minute": 89,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-prieto-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-gabriel-molina-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-moussa-konate-ud-vegalba"
    ],
    "awayLineup": [
      "player-lucas-serrano-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-moussa-prieto-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j2-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "16:00",
    "status": "jugado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-ad-montereal",
    "homeScore": 4,
    "awayScore": 0,
    "events": [
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-hugo-marin-cd-riofrio",
        "assistPlayerId": "player-samuel-sanchez-cd-riofrio"
      },
      {
        "minute": 19,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 20,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-marc-cisse-cd-riofrio",
        "assistPlayerId": "player-adrian-molina-cd-riofrio"
      },
      {
        "minute": 77,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-hugo-marin-cd-riofrio",
        "assistPlayerId": "player-karim-ruiz-cd-riofrio"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-samuel-sanchez-cd-riofrio",
        "assistPlayerId": "player-sergio-cortes-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 38,
        "away": 62
      },
      {
        "label": "Tiros a puerta",
        "home": 4,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-samuel-sanchez-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-hugo-marin-cd-riofrio"
    ],
    "awayLineup": [
      "player-leo-diaz-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-enzo-lopez-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j2-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "17:30",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 37,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-lucas-flores-ud-vallarena"
      },
      {
        "minute": 59,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-moussa-herrera-ud-vallarena",
        "assistPlayerId": "player-gonzalo-perez-ud-vallarena"
      },
      {
        "minute": 59,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-moussa-herrera-ud-vallarena"
      },
      {
        "minute": 85,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-petru-castro-real-almenara"
      },
      {
        "minute": 86,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-lucas-flores-ud-vallarena"
      },
      {
        "minute": 88,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-souleymane-lopez-real-almenara",
        "assistPlayerId": "player-marcos-popescu-real-almenara"
      },
      {
        "minute": 88,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-iker-garcia-real-almenara",
        "assistPlayerId": "player-rafael-silva-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 61,
        "away": 39
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-rafael-silva-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-petru-castro-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-gonzalo-ortega-real-almenara"
    ],
    "awayLineup": [
      "player-rodrigo-blanco-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-lucas-flores-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j2-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "17:30",
    "status": "jugado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 49,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-wesley-traore-cf-cantosol",
        "assistPlayerId": "player-nuno-traore-cf-cantosol"
      },
      {
        "minute": 58,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-nuno-traore-cf-cantosol",
        "assistPlayerId": "player-hugo-silva-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 53,
        "away": 47
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 0,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-mateo-herrera-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-hugo-silva-cf-cantosol"
    ],
    "awayLineup": [
      "player-rafael-serrano-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j3-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "12:00",
    "status": "jugado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 14,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-rafael-martinez-cd-robledo"
      },
      {
        "minute": 28,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-rafael-martinez-cd-robledo",
        "assistPlayerId": "player-lucas-lozano-cd-robledo"
      },
      {
        "minute": 54,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-prieto-cd-robledo"
      },
      {
        "minute": 60,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-sergio-gil-cd-robledo",
        "assistPlayerId": "player-moussa-prieto-cd-robledo"
      },
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-moussa-prieto-cd-robledo",
        "assistPlayerId": "player-lucas-lozano-cd-robledo"
      },
      {
        "minute": 89,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-izan-popescu-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-souleymane-nunez-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-izan-popescu-cd-robledo"
    ],
    "awayLineup": [
      "player-raul-nunez-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-aitor-cruz-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j3-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "18:00",
    "status": "jugado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-real-almenara",
    "homeScore": 1,
    "awayScore": 4,
    "events": [
      {
        "minute": 6,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-gonzalo-ortega-real-almenara",
        "assistPlayerId": "player-dragan-iglesias-real-almenara"
      },
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-dragan-iglesias-real-almenara",
        "assistPlayerId": "player-kwame-marin-real-almenara"
      },
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-gabriel-molina-ud-vegalba",
        "assistPlayerId": "player-joel-sanchez-ud-vegalba"
      },
      {
        "minute": 18,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-rodrigo-medina-real-almenara",
        "assistPlayerId": "player-iker-serrano-real-almenara"
      },
      {
        "minute": 72,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-rafael-silva-real-almenara",
        "assistPlayerId": "player-rodrigo-medina-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 58,
        "away": 42
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-thiago-cano-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-anderson-diallo-ud-vegalba"
    ],
    "awayLineup": [
      "player-iker-serrano-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-marc-medina-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-petru-castro-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-marcos-popescu-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j3-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "16:30",
    "status": "jugado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 30,
        "type": "amarilla",
        "teamId": "team-cf-cantosol",
        "playerId": "player-cristian-perez-cf-cantosol"
      },
      {
        "minute": 53,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-eric-ivanov-ad-montereal"
      },
      {
        "minute": 61,
        "type": "amarilla",
        "teamId": "team-cf-cantosol",
        "playerId": "player-mario-lozano-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 38,
        "away": 62
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-cristiano-vazquez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-leo-diaz-ad-montereal"
    ],
    "awayLineup": [
      "player-moussa-leon-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-mario-lozano-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j3-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "17:30",
    "status": "jugado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 10,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-thiago-iglesias-atletico-pinarejo"
      },
      {
        "minute": 25,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-mateo-mendes-atletico-pinarejo",
        "assistPlayerId": "player-vitor-ivanov-atletico-pinarejo"
      },
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-petru-sanchez-ud-vallarena",
        "assistPlayerId": "player-nico-rubio-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 50,
        "away": 50
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-moussa-herrera-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-yeray-delgado-ud-vallarena"
    ],
    "awayLineup": [
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j4-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "12:00",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-cd-robledo",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 18,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-moussa-prieto-cd-robledo",
        "assistPlayerId": "player-marcos-pena-cd-robledo"
      },
      {
        "minute": 28,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-kwame-ruiz-real-almenara"
      },
      {
        "minute": 39,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-wesley-gil-cd-robledo"
      },
      {
        "minute": 50,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-kwame-marin-real-almenara"
      },
      {
        "minute": 77,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-rodrigo-medina-real-almenara",
        "assistPlayerId": "player-kwame-ruiz-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 55,
        "away": 45
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-kwame-marin-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-petru-castro-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-marc-medina-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-rodrigo-medina-real-almenara"
    ],
    "awayLineup": [
      "player-izan-popescu-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-lucas-serrano-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j4-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "16:00",
    "status": "jugado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 37,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-cristian-perez-cf-cantosol",
        "assistPlayerId": "player-wesley-traore-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-pablo-leon-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-omar-silva-cf-cantosol"
    ],
    "awayLineup": [
      "player-samuel-sanchez-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-sergio-cortes-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j4-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "16:00",
    "status": "jugado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 32,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-thiago-iglesias-atletico-pinarejo",
        "assistPlayerId": "player-petru-marin-atletico-pinarejo"
      },
      {
        "minute": 35,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-pablo-blanco-atletico-pinarejo"
      },
      {
        "minute": 39,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-rafael-gil-ud-vegalba"
      },
      {
        "minute": 44,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-tomas-gomez-atletico-pinarejo",
        "assistPlayerId": "player-adrian-perez-atletico-pinarejo"
      },
      {
        "minute": 47,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-pablo-blanco-atletico-pinarejo"
      },
      {
        "minute": 73,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-vitor-ivanov-atletico-pinarejo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 40,
        "away": 60
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 7
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-adrian-perez-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-adrian-leon-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j4-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "18:00",
    "status": "jugado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-ad-montereal",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 18,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-jorge-mendez-ud-vallarena"
      },
      {
        "minute": 38,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-lucas-flores-ud-vallarena"
      },
      {
        "minute": 65,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-enzo-lopez-ad-montereal"
      },
      {
        "minute": 74,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-gonzalo-perez-ud-vallarena"
      },
      {
        "minute": 77,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-jorge-mendez-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 55,
        "away": 45
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 2
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 8,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-yeray-delgado-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-moussa-herrera-ud-vallarena"
    ],
    "awayLineup": [
      "player-nico-iglesias-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-ignacio-sanz-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j5-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "17:00",
    "status": "jugado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 37,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-lucas-serrano-cd-robledo"
      },
      {
        "minute": 74,
        "type": "amarilla",
        "teamId": "team-cf-cantosol",
        "playerId": "player-thiago-suarez-cf-cantosol"
      },
      {
        "minute": 81,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-moussa-prieto-cd-robledo",
        "assistPlayerId": "player-souleymane-prieto-cd-robledo"
      },
      {
        "minute": 81,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-lucas-romero-cf-cantosol",
        "assistPlayerId": "player-thiago-suarez-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 13
      }
    ],
    "homeLineup": [
      "player-souleymane-prieto-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-souleymane-nunez-cd-robledo"
    ],
    "awayLineup": [
      "player-bilal-iglesias-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-pablo-leon-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j5-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "19:30",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 25,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-marcos-popescu-real-almenara",
        "assistPlayerId": "player-kwame-marin-real-almenara"
      },
      {
        "minute": 75,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-kwame-ruiz-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 53,
        "away": 47
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-kwame-ruiz-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-marc-medina-real-almenara"
    ],
    "awayLineup": [
      "player-petru-marin-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j5-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "17:00",
    "status": "jugado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": 1,
    "awayScore": 3,
    "events": [
      {
        "minute": 20,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-thiago-rubio-cd-riofrio",
        "assistPlayerId": "player-karim-ruiz-cd-riofrio"
      },
      {
        "minute": 29,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 49,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-aitor-gomez-ud-vallarena"
      },
      {
        "minute": 52,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-karim-herrera-ud-vallarena"
      },
      {
        "minute": 75,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-jorge-mendez-ud-vallarena"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-jorge-mendez-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 38,
        "away": 62
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 8,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-samuel-sanchez-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-karim-ruiz-cd-riofrio"
    ],
    "awayLineup": [
      "player-samuel-ruiz-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j5-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "19:30",
    "status": "jugado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-ad-montereal",
    "homeScore": 3,
    "awayScore": 1,
    "events": [
      {
        "minute": 14,
        "type": "gol",
        "teamId": "team-ad-montereal",
        "playerId": "player-yeray-martinez-ad-montereal",
        "assistPlayerId": "player-eric-fernandez-ad-montereal"
      },
      {
        "minute": 47,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-alvaro-prieto-ud-vegalba",
        "assistPlayerId": "player-adrian-cano-ud-vegalba"
      },
      {
        "minute": 50,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-mihai-navarro-ud-vegalba"
      },
      {
        "minute": 53,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-cano-ud-vegalba",
        "assistPlayerId": "player-alvaro-prieto-ud-vegalba"
      },
      {
        "minute": 85,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-joel-sanchez-ud-vegalba",
        "assistPlayerId": "player-joel-sanchez-ud-vegalba"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 47,
        "away": 53
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-adrian-leon-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-mihai-navarro-ud-vegalba"
    ],
    "awayLineup": [
      "player-leo-diaz-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-aitor-perez-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j6-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "16:00",
    "status": "jugado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-cd-robledo",
    "homeScore": 3,
    "awayScore": 1,
    "events": [
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-adrian-ivanov-atletico-pinarejo",
        "assistPlayerId": "player-rafael-serrano-atletico-pinarejo"
      },
      {
        "minute": 12,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-jorge-gomez-atletico-pinarejo"
      },
      {
        "minute": 29,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-diego-delgado-cd-robledo"
      },
      {
        "minute": 35,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-ignacio-pena-atletico-pinarejo",
        "assistPlayerId": "player-rafael-serrano-atletico-pinarejo"
      },
      {
        "minute": 63,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-vitor-ivanov-atletico-pinarejo",
        "assistPlayerId": "player-rodrigo-castro-atletico-pinarejo"
      },
      {
        "minute": 79,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-lucas-lozano-cd-robledo",
        "assistPlayerId": "player-souleymane-nunez-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 59,
        "away": 41
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-wesley-gil-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-sergio-gil-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j6-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "16:30",
    "status": "jugado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 35,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-cristian-perez-cf-cantosol",
        "assistPlayerId": "player-wesley-traore-cf-cantosol"
      },
      {
        "minute": 62,
        "type": "amarilla",
        "teamId": "team-cf-cantosol",
        "playerId": "player-mario-lozano-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 42,
        "away": 58
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-gonzalo-perez-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena"
    ],
    "awayLineup": [
      "player-pablo-leon-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-mateo-herrera-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j6-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "17:00",
    "status": "jugado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-real-almenara",
    "homeScore": 3,
    "awayScore": 3,
    "events": [
      {
        "minute": 25,
        "type": "gol",
        "teamId": "team-ad-montereal",
        "playerId": "player-leo-diaz-ad-montereal",
        "assistPlayerId": "player-thiago-leon-ad-montereal"
      },
      {
        "minute": 34,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-gonzalo-ortega-real-almenara",
        "assistPlayerId": "player-souleymane-lopez-real-almenara"
      },
      {
        "minute": 35,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-nico-iglesias-ad-montereal"
      },
      {
        "minute": 56,
        "type": "gol",
        "teamId": "team-ad-montereal",
        "playerId": "player-leo-ramos-ad-montereal",
        "assistPlayerId": "player-nico-iglesias-ad-montereal"
      },
      {
        "minute": 61,
        "type": "gol",
        "teamId": "team-ad-montereal",
        "playerId": "player-leo-ramos-ad-montereal",
        "assistPlayerId": "player-ignacio-sanz-ad-montereal"
      },
      {
        "minute": 63,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-gonzalo-ortega-real-almenara"
      },
      {
        "minute": 68,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-leo-diaz-ad-montereal"
      },
      {
        "minute": 75,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-iker-serrano-real-almenara",
        "assistPlayerId": "player-iker-garcia-real-almenara"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-dragan-iglesias-real-almenara",
        "assistPlayerId": "player-gonzalo-ortega-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 52,
        "away": 48
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 13
      }
    ],
    "homeLineup": [
      "player-leo-diaz-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-alvaro-torres-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-nico-iglesias-ad-montereal"
    ],
    "awayLineup": [
      "player-kwame-marin-real-almenara",
      "player-petru-castro-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-marc-medina-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-iker-garcia-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j6-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 4,
    "awayScore": 3,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-rafael-pena-cd-riofrio",
        "assistPlayerId": "player-karim-ruiz-cd-riofrio"
      },
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-raul-nunez-cd-riofrio",
        "assistPlayerId": "player-raul-nunez-cd-riofrio"
      },
      {
        "minute": 17,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-leon-ud-vegalba"
      },
      {
        "minute": 18,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-samuel-sanchez-cd-riofrio"
      },
      {
        "minute": 24,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-souleymane-cisse-ud-vegalba",
        "assistPlayerId": "player-alvaro-prieto-ud-vegalba"
      },
      {
        "minute": 39,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-leon-ud-vegalba"
      },
      {
        "minute": 46,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-thiago-rubio-cd-riofrio"
      },
      {
        "minute": 56,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-thiago-rubio-cd-riofrio",
        "assistPlayerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 68,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-joel-sanchez-ud-vegalba",
        "assistPlayerId": "player-adrian-cano-ud-vegalba"
      },
      {
        "minute": 68,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-rafael-gil-ud-vegalba",
        "assistPlayerId": "player-adrian-cano-ud-vegalba"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-cano-ud-vegalba",
        "assistPlayerId": "player-gabriel-molina-ud-vegalba"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 47,
        "away": 53
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 0,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-moussa-konate-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-anderson-diallo-ud-vegalba"
    ],
    "awayLineup": [
      "player-rafael-pena-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j7-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "12:00",
    "status": "jugado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 61,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-gonzalo-perez-ud-vallarena",
        "assistPlayerId": "player-karim-herrera-ud-vallarena"
      },
      {
        "minute": 78,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-tomas-ruiz-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 57,
        "away": 43
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 8,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-moussa-prieto-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-rafael-martinez-cd-robledo"
    ],
    "awayLineup": [
      "player-rodrigo-blanco-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j7-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "17:00",
    "status": "jugado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-ad-montereal",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-ignacio-pena-atletico-pinarejo",
        "assistPlayerId": "player-vitor-ivanov-atletico-pinarejo"
      },
      {
        "minute": 17,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-rafael-serrano-atletico-pinarejo"
      },
      {
        "minute": 48,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-adrian-perez-atletico-pinarejo",
        "assistPlayerId": "player-mateo-mendes-atletico-pinarejo"
      },
      {
        "minute": 50,
        "type": "amarilla",
        "teamId": "team-ad-montereal",
        "playerId": "player-enzo-lopez-ad-montereal"
      },
      {
        "minute": 85,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-vitor-ivanov-atletico-pinarejo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-mateo-mendes-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-thiago-leon-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-alvaro-torres-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j7-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "17:30",
    "status": "jugado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 51,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-thiago-suarez-cf-cantosol",
        "assistPlayerId": "player-tomas-martinez-cf-cantosol"
      },
      {
        "minute": 54,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-thiago-suarez-cf-cantosol",
        "assistPlayerId": "player-mario-lozano-cf-cantosol"
      },
      {
        "minute": 69,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-thiago-suarez-cf-cantosol",
        "assistPlayerId": "player-mateo-herrera-cf-cantosol"
      },
      {
        "minute": 89,
        "type": "amarilla",
        "teamId": "team-cf-cantosol",
        "playerId": "player-hugo-silva-cf-cantosol"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 42,
        "away": 58
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-cristian-perez-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-hugo-silva-cf-cantosol"
    ],
    "awayLineup": [
      "player-izan-molina-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-joel-sanchez-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j7-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "19:30",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 1,
    "awayScore": 2,
    "events": [
      {
        "minute": 14,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-rafael-pena-cd-riofrio"
      },
      {
        "minute": 31,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-dragan-iglesias-real-almenara",
        "assistPlayerId": "player-dragan-iglesias-real-almenara"
      },
      {
        "minute": 62,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-adrian-molina-cd-riofrio",
        "assistPlayerId": "player-adrian-molina-cd-riofrio"
      },
      {
        "minute": 68,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-thiago-rubio-cd-riofrio",
        "assistPlayerId": "player-marc-cisse-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 59,
        "away": 41
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-rafael-silva-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-petru-castro-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-rodrigo-medina-real-almenara"
    ],
    "awayLineup": [
      "player-hugo-marin-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-adrian-molina-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j8-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "12:00",
    "status": "jugado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-cd-robledo",
    "homeScore": 0,
    "awayScore": 2,
    "events": [
      {
        "minute": 20,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-lucas-serrano-cd-robledo",
        "assistPlayerId": "player-sergio-gil-cd-robledo"
      },
      {
        "minute": 38,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-sergio-gil-cd-robledo",
        "assistPlayerId": "player-souleymane-nunez-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 2,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-aitor-perez-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-lucas-diaz-ad-montereal"
    ],
    "awayLineup": [
      "player-lucas-serrano-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-lucas-lozano-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j8-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "18:00",
    "status": "jugado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": 1,
    "awayScore": 2,
    "events": [
      {
        "minute": 42,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-gonzalo-perez-ud-vallarena"
      },
      {
        "minute": 44,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-nico-rubio-ud-vallarena",
        "assistPlayerId": "player-yeray-delgado-ud-vallarena"
      },
      {
        "minute": 75,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-gonzalo-perez-ud-vallarena"
      },
      {
        "minute": 78,
        "type": "gol",
        "teamId": "team-ud-vallarena",
        "playerId": "player-karim-herrera-ud-vallarena",
        "assistPlayerId": "player-jorge-mendez-ud-vallarena"
      },
      {
        "minute": 86,
        "type": "gol",
        "teamId": "team-ud-vegalba",
        "playerId": "player-anderson-diallo-ud-vegalba",
        "assistPlayerId": "player-joel-sanchez-ud-vegalba"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 42,
        "away": 58
      },
      {
        "label": "Tiros a puerta",
        "home": 4,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-izan-molina-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-moussa-konate-ud-vegalba"
    ],
    "awayLineup": [
      "player-jorge-cisse-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-jorge-mendez-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j8-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "19:30",
    "status": "jugado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 15,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-vitor-ivanov-atletico-pinarejo",
        "assistPlayerId": "player-pablo-blanco-atletico-pinarejo"
      },
      {
        "minute": 21,
        "type": "amarilla",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-pablo-blanco-atletico-pinarejo"
      },
      {
        "minute": 64,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-adrian-molina-cd-riofrio",
        "assistPlayerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 78,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-omar-romero-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 47,
        "away": 53
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-adrian-molina-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-aitor-cruz-cd-riofrio"
    ],
    "awayLineup": [
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j8-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "17:00",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 23,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-hugo-silva-cf-cantosol",
        "assistPlayerId": "player-thiago-suarez-cf-cantosol"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-gonzalo-ortega-real-almenara",
        "assistPlayerId": "player-souleymane-lopez-real-almenara"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 41,
        "away": 59
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 7
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-souleymane-lopez-real-almenara",
      "player-gonzalo-ortega-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-marc-medina-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-petru-castro-real-almenara",
      "player-rafael-silva-real-almenara"
    ],
    "awayLineup": [
      "player-omar-silva-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j9-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "17:30",
    "status": "jugado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 27,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-wesley-gil-cd-robledo",
        "assistPlayerId": "player-rafael-martinez-cd-robledo"
      },
      {
        "minute": 62,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-joel-romero-cd-robledo"
      },
      {
        "minute": 76,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-joel-sanchez-ud-vegalba"
      },
      {
        "minute": 80,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-raul-lopez-cd-robledo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 46,
        "away": 54
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 2
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-raul-lopez-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-souleymane-prieto-cd-robledo"
    ],
    "awayLineup": [
      "player-joel-sanchez-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j9-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "12:00",
    "status": "jugado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 22,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-karim-ruiz-cd-riofrio"
      },
      {
        "minute": 26,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-aitor-cruz-cd-riofrio"
      },
      {
        "minute": 85,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-omar-romero-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 13
      }
    ],
    "homeLineup": [
      "player-alvaro-torres-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-eric-fernandez-ad-montereal"
    ],
    "awayLineup": [
      "player-thiago-rubio-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-aitor-cruz-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j9-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "16:00",
    "status": "jugado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-real-almenara",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 23,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-samuel-ruiz-ud-vallarena"
      },
      {
        "minute": 36,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-jorge-mendez-ud-vallarena"
      },
      {
        "minute": 45,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-souleymane-lopez-real-almenara"
      },
      {
        "minute": 58,
        "type": "amarilla",
        "teamId": "team-ud-vallarena",
        "playerId": "player-samuel-ruiz-ud-vallarena"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 50,
        "away": 50
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-jorge-mendez-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-jorge-cisse-ud-vallarena"
    ],
    "awayLineup": [
      "player-kwame-marin-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-marc-medina-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-kwame-ruiz-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j9-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "12:00",
    "status": "jugado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": 2,
    "awayScore": 2,
    "events": [
      {
        "minute": 21,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-adrian-perez-atletico-pinarejo",
        "assistPlayerId": "player-vitor-ivanov-atletico-pinarejo"
      },
      {
        "minute": 31,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-mario-lozano-cf-cantosol",
        "assistPlayerId": "player-mateo-herrera-cf-cantosol"
      },
      {
        "minute": 35,
        "type": "gol",
        "teamId": "team-cf-cantosol",
        "playerId": "player-wesley-traore-cf-cantosol",
        "assistPlayerId": "player-wesley-traore-cf-cantosol"
      },
      {
        "minute": 43,
        "type": "gol",
        "teamId": "team-atletico-pinarejo",
        "playerId": "player-pablo-blanco-atletico-pinarejo",
        "assistPlayerId": "player-thiago-iglesias-atletico-pinarejo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 16,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-pablo-blanco-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-tomas-martinez-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-pablo-leon-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j10-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "16:30",
    "status": "en_juego",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-cd-robledo",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 25,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-marc-cisse-cd-riofrio",
        "assistPlayerId": "player-raul-nunez-cd-riofrio"
      },
      {
        "minute": 28,
        "type": "amarilla",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-nunez-cd-robledo"
      },
      {
        "minute": 40,
        "type": "gol",
        "teamId": "team-cd-riofrio",
        "playerId": "player-hugo-marin-cd-riofrio",
        "assistPlayerId": "player-marc-cisse-cd-riofrio"
      },
      {
        "minute": 65,
        "type": "gol",
        "teamId": "team-cd-robledo",
        "playerId": "player-souleymane-prieto-cd-robledo",
        "assistPlayerId": "player-raul-lopez-cd-robledo"
      },
      {
        "minute": 69,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-raul-nunez-cd-riofrio"
      },
      {
        "minute": 83,
        "type": "amarilla",
        "teamId": "team-cd-riofrio",
        "playerId": "player-thiago-rubio-cd-riofrio"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 50,
        "away": 50
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-marc-cisse-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio"
    ],
    "awayLineup": [
      "player-diego-delgado-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-wesley-gil-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j10-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "16:00",
    "status": "jugado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 10,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-cristiano-cruz-ud-vegalba"
      },
      {
        "minute": 17,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-kwame-ruiz-real-almenara",
        "assistPlayerId": "player-rodrigo-medina-real-almenara"
      },
      {
        "minute": 28,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-adrian-leon-ud-vegalba"
      },
      {
        "minute": 30,
        "type": "gol",
        "teamId": "team-real-almenara",
        "playerId": "player-kwame-ruiz-real-almenara",
        "assistPlayerId": "player-iker-garcia-real-almenara"
      },
      {
        "minute": 57,
        "type": "amarilla",
        "teamId": "team-real-almenara",
        "playerId": "player-rafael-delgado-real-almenara"
      },
      {
        "minute": 86,
        "type": "amarilla",
        "teamId": "team-ud-vegalba",
        "playerId": "player-mihai-navarro-ud-vegalba"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 53,
        "away": 47
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 1,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-petru-castro-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-marc-medina-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-souleymane-lopez-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-iker-garcia-real-almenara"
    ],
    "awayLineup": [
      "player-mihai-navarro-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-adrian-cano-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j10-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "19:30",
    "status": "programado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-ad-montereal",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-hugo-silva-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol"
    ],
    "awayLineup": [
      "player-enzo-lopez-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-ignacio-sanz-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j10-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "19:30",
    "status": "programado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-jorge-gomez-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-aitor-gomez-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-karim-herrera-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j11-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 11,
    "date": "2025-11-23",
    "time": "16:00",
    "status": "programado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-real-almenara",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-raul-lopez-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-wesley-gil-cd-robledo"
    ],
    "awayLineup": [
      "player-souleymane-lopez-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-marc-medina-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-gonzalo-ortega-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j11-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 11,
    "date": "2025-11-23",
    "time": "17:30",
    "status": "programado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-rafael-pena-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-sergio-cortes-cd-riofrio"
    ],
    "awayLineup": [
      "player-mario-lozano-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-nuno-traore-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j11-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 11,
    "date": "2025-11-23",
    "time": "17:30",
    "status": "programado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-cristiano-cruz-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-izan-molina-ud-vegalba"
    ],
    "awayLineup": [
      "player-adrian-perez-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rodrigo-castro-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j11-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 11,
    "date": "2025-11-23",
    "time": "16:30",
    "status": "programado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-eric-fernandez-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-eric-ivanov-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-alvaro-torres-ad-montereal"
    ],
    "awayLineup": [
      "player-lucas-flores-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-jorge-mendez-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j12-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 12,
    "date": "2025-11-30",
    "time": "16:00",
    "status": "programado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-cd-robledo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-mateo-herrera-cf-cantosol",
      "player-wesley-traore-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-hugo-silva-cf-cantosol"
    ],
    "awayLineup": [
      "player-wesley-gil-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-marcos-pena-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-raul-lopez-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j12-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 12,
    "date": "2025-11-30",
    "time": "17:30",
    "status": "programado",
    "venue": "Municipal Pinarejo Alto",
    "homeTeamId": "team-atletico-pinarejo",
    "awayTeamId": "team-real-almenara",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-pablo-blanco-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo"
    ],
    "awayLineup": [
      "player-gonzalo-ortega-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-marc-medina-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-souleymane-lopez-real-almenara"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j12-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 12,
    "date": "2025-11-30",
    "time": "16:00",
    "status": "programado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-cd-riofrio",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-jorge-mendez-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-jorge-cisse-ud-vallarena",
      "player-moussa-herrera-ud-vallarena"
    ],
    "awayLineup": [
      "player-thiago-rubio-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-enzo-ruiz-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-rafael-pena-cd-riofrio"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j12-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 12,
    "date": "2025-11-30",
    "time": "16:30",
    "status": "programado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-eric-fernandez-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-alvaro-torres-ad-montereal"
    ],
    "awayLineup": [
      "player-adrian-leon-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-mihai-navarro-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j13-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 13,
    "date": "2025-12-07",
    "time": "16:00",
    "status": "programado",
    "venue": "Campo Municipal de Robledo de la Sierra",
    "homeTeamId": "team-cd-robledo",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-raul-lopez-cd-robledo",
      "player-lucas-serrano-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-moussa-prieto-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-diego-delgado-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-sergio-gil-cd-robledo"
    ],
    "awayLineup": [
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-rafael-serrano-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j13-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 13,
    "date": "2025-12-07",
    "time": "12:00",
    "status": "programado",
    "venue": "Municipal Cantosol de Henares",
    "homeTeamId": "team-cf-cantosol",
    "awayTeamId": "team-ud-vallarena",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-thiago-suarez-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-nuno-traore-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-hugo-silva-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-bilal-iglesias-cf-cantosol",
      "player-wesley-traore-cf-cantosol"
    ],
    "awayLineup": [
      "player-tomas-ruiz-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-petru-sanchez-ud-vallarena",
      "player-moussa-herrera-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-yeray-delgado-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-nico-rubio-ud-vallarena"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j13-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 13,
    "date": "2025-12-07",
    "time": "18:00",
    "status": "programado",
    "venue": "Ciudad de Almenara del Monte",
    "homeTeamId": "team-real-almenara",
    "awayTeamId": "team-ad-montereal",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-souleymane-lopez-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-kwame-ruiz-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-marc-medina-real-almenara"
    ],
    "awayLineup": [
      "player-ignacio-sanz-ad-montereal",
      "player-lucas-diaz-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-nico-iglesias-ad-montereal",
      "player-aitor-perez-ad-montereal",
      "player-alvaro-torres-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-yeray-martinez-ad-montereal"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j13-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 13,
    "date": "2025-12-07",
    "time": "16:00",
    "status": "programado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-ud-vegalba",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-aitor-cruz-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-hugo-marin-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-omar-romero-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-raul-nunez-cd-riofrio",
      "player-sergio-cortes-cd-riofrio"
    ],
    "awayLineup": [
      "player-mihai-navarro-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-adrian-cano-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-moussa-konate-ud-vegalba",
      "player-joel-sanchez-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j14-0",
    "competitionId": "comp-preferente-madrid",
    "matchday": 14,
    "date": "2025-12-14",
    "time": "19:30",
    "status": "programado",
    "venue": "Campo Municipal de Vallarena del Tajo",
    "homeTeamId": "team-ud-vallarena",
    "awayTeamId": "team-cd-robledo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-moussa-herrera-ud-vallarena",
      "player-aitor-gomez-ud-vallarena",
      "player-jorge-mendez-ud-vallarena",
      "player-karim-herrera-ud-vallarena",
      "player-samuel-ruiz-ud-vallarena",
      "player-lucas-flores-ud-vallarena",
      "player-gonzalo-perez-ud-vallarena",
      "player-tomas-ruiz-ud-vallarena",
      "player-rodrigo-blanco-ud-vallarena",
      "player-nico-rubio-ud-vallarena",
      "player-jorge-cisse-ud-vallarena"
    ],
    "awayLineup": [
      "player-marcos-pena-cd-robledo",
      "player-raul-lopez-cd-robledo",
      "player-sergio-gil-cd-robledo",
      "player-rafael-martinez-cd-robledo",
      "player-souleymane-prieto-cd-robledo",
      "player-joel-romero-cd-robledo",
      "player-lucas-lozano-cd-robledo",
      "player-souleymane-nunez-cd-robledo",
      "player-wesley-gil-cd-robledo",
      "player-izan-popescu-cd-robledo",
      "player-diego-delgado-cd-robledo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j14-1",
    "competitionId": "comp-preferente-madrid",
    "matchday": 14,
    "date": "2025-12-14",
    "time": "18:00",
    "status": "programado",
    "venue": "Campo Municipal de Montereal Bajo",
    "homeTeamId": "team-ad-montereal",
    "awayTeamId": "team-atletico-pinarejo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-nico-iglesias-ad-montereal",
      "player-thiago-leon-ad-montereal",
      "player-alvaro-torres-ad-montereal",
      "player-enzo-lopez-ad-montereal",
      "player-cristiano-vazquez-ad-montereal",
      "player-eric-fernandez-ad-montereal",
      "player-yeray-martinez-ad-montereal",
      "player-ignacio-sanz-ad-montereal",
      "player-leo-diaz-ad-montereal",
      "player-leo-ramos-ad-montereal",
      "player-aitor-perez-ad-montereal"
    ],
    "awayLineup": [
      "player-rodrigo-castro-atletico-pinarejo",
      "player-adrian-ivanov-atletico-pinarejo",
      "player-tomas-gomez-atletico-pinarejo",
      "player-jorge-gomez-atletico-pinarejo",
      "player-mateo-mendes-atletico-pinarejo",
      "player-ibrahim-delgado-atletico-pinarejo",
      "player-adrian-perez-atletico-pinarejo",
      "player-thiago-iglesias-atletico-pinarejo",
      "player-petru-marin-atletico-pinarejo",
      "player-ignacio-pena-atletico-pinarejo",
      "player-vitor-ivanov-atletico-pinarejo"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j14-2",
    "competitionId": "comp-preferente-madrid",
    "matchday": 14,
    "date": "2025-12-14",
    "time": "17:30",
    "status": "programado",
    "venue": "Ciudad de Vegalba de Arriba",
    "homeTeamId": "team-ud-vegalba",
    "awayTeamId": "team-cf-cantosol",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-joel-sanchez-ud-vegalba",
      "player-izan-molina-ud-vegalba",
      "player-thiago-cano-ud-vegalba",
      "player-cristiano-cruz-ud-vegalba",
      "player-souleymane-cisse-ud-vegalba",
      "player-anderson-diallo-ud-vegalba",
      "player-rafael-gil-ud-vegalba",
      "player-gabriel-molina-ud-vegalba",
      "player-adrian-leon-ud-vegalba",
      "player-mihai-navarro-ud-vegalba",
      "player-alvaro-prieto-ud-vegalba"
    ],
    "awayLineup": [
      "player-wesley-traore-cf-cantosol",
      "player-mateo-herrera-cf-cantosol",
      "player-moussa-leon-cf-cantosol",
      "player-lucas-romero-cf-cantosol",
      "player-pablo-leon-cf-cantosol",
      "player-cristian-perez-cf-cantosol",
      "player-mario-lozano-cf-cantosol",
      "player-thiago-suarez-cf-cantosol",
      "player-omar-silva-cf-cantosol",
      "player-tomas-martinez-cf-cantosol",
      "player-nuno-traore-cf-cantosol"
    ]
  },
  {
    "id": "match-comp-preferente-madrid-j14-3",
    "competitionId": "comp-preferente-madrid",
    "matchday": 14,
    "date": "2025-12-14",
    "time": "17:00",
    "status": "programado",
    "venue": "Estadio Riofrío de Guadarrama",
    "homeTeamId": "team-cd-riofrio",
    "awayTeamId": "team-real-almenara",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-omar-romero-cd-riofrio",
      "player-karim-ruiz-cd-riofrio",
      "player-aitor-cruz-cd-riofrio",
      "player-sergio-cortes-cd-riofrio",
      "player-samuel-sanchez-cd-riofrio",
      "player-adrian-molina-cd-riofrio",
      "player-marc-cisse-cd-riofrio",
      "player-thiago-rubio-cd-riofrio",
      "player-rafael-pena-cd-riofrio",
      "player-yusuf-medina-cd-riofrio",
      "player-hugo-marin-cd-riofrio"
    ],
    "awayLineup": [
      "player-marc-medina-real-almenara",
      "player-marcos-popescu-real-almenara",
      "player-rodrigo-medina-real-almenara",
      "player-rafael-delgado-real-almenara",
      "player-rafael-silva-real-almenara",
      "player-iker-garcia-real-almenara",
      "player-iker-serrano-real-almenara",
      "player-kwame-marin-real-almenara",
      "player-dragan-iglesias-real-almenara",
      "player-petru-castro-real-almenara",
      "player-gonzalo-ortega-real-almenara"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j1-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "19:30",
    "status": "jugado",
    "venue": "Polideportivo Sotoverde",
    "homeTeamId": "team-cd-sotoverde",
    "awayTeamId": "team-atletico-serranova",
    "homeScore": 4,
    "awayScore": 0,
    "events": [
      {
        "minute": 12,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-dragan-navarro-cd-sotoverde"
      },
      {
        "minute": 22,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-izan-prieto-cd-sotoverde",
        "assistPlayerId": "player-izan-prieto-cd-sotoverde"
      },
      {
        "minute": 56,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-lucas-garcia-cd-sotoverde",
        "assistPlayerId": "player-wesley-sanchez-cd-sotoverde"
      },
      {
        "minute": 58,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-lucas-garcia-cd-sotoverde",
        "assistPlayerId": "player-izan-herrera-cd-sotoverde"
      },
      {
        "minute": 72,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-tomas-sanchez-cd-sotoverde"
      },
      {
        "minute": 80,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-joel-lopez-cd-sotoverde",
        "assistPlayerId": "player-joel-lopez-cd-sotoverde"
      },
      {
        "minute": 82,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-gabriel-cruz-cd-sotoverde"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 54,
        "away": 46
      },
      {
        "label": "Tiros a puerta",
        "home": 4,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-jorge-popescu-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde"
    ],
    "awayLineup": [
      "player-rodrigo-traore-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-amine-fernandez-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-eric-navarro-atletico-serranova"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j1-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "12:00",
    "status": "jugado",
    "venue": "Municipal Lagunilla del Río",
    "homeTeamId": "team-ud-lagunilla",
    "awayTeamId": "team-cd-penablanca",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 30,
        "type": "amarilla",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-lucas-cortes-ud-lagunilla"
      },
      {
        "minute": 42,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-izan-castro-cd-penablanca",
        "assistPlayerId": "player-leo-navarro-cd-penablanca"
      },
      {
        "minute": 66,
        "type": "gol",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-moussa-cano-ud-lagunilla",
        "assistPlayerId": "player-hugo-leon-ud-lagunilla"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 61,
        "away": 39
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 7
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-lucas-cortes-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla"
    ],
    "awayLineup": [
      "player-yusuf-prieto-cd-penablanca",
      "player-gonzalo-prieto-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-enzo-garcia-cd-penablanca"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j1-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "19:30",
    "status": "jugado",
    "venue": "Polideportivo Brisamar",
    "homeTeamId": "team-cf-brisamar",
    "awayTeamId": "team-real-castelnuevo",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 25,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-thiago-popescu-cf-brisamar"
      },
      {
        "minute": 47,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-sergio-molina-cf-brisamar"
      },
      {
        "minute": 77,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-gonzalo-cortes-cf-brisamar"
      },
      {
        "minute": 81,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-jorge-molina-real-castelnuevo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 50,
        "away": 50
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-asier-ivanov-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-rafael-flores-cf-brisamar"
    ],
    "awayLineup": [
      "player-cristian-ortega-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j2-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "16:30",
    "status": "jugado",
    "venue": "Estadio Peñablanca",
    "homeTeamId": "team-cd-penablanca",
    "awayTeamId": "team-cd-sotoverde",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 9,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-gonzalo-prieto-cd-penablanca",
        "assistPlayerId": "player-izan-castro-cd-penablanca"
      },
      {
        "minute": 30,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-wesley-prieto-cd-sotoverde",
        "assistPlayerId": "player-izan-prieto-cd-sotoverde"
      },
      {
        "minute": 34,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-izan-herrera-cd-sotoverde"
      },
      {
        "minute": 68,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-kwame-diaz-cd-penablanca"
      },
      {
        "minute": 75,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-kwame-diaz-cd-penablanca",
        "assistPlayerId": "player-vitor-ortiz-cd-penablanca"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 38,
        "away": 62
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 1,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-enzo-garcia-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-lucas-martinez-cd-penablanca"
    ],
    "awayLineup": [
      "player-izan-prieto-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-hugo-romero-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j2-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "19:30",
    "status": "jugado",
    "venue": "Campo Municipal de Castelnuevo de la Costa",
    "homeTeamId": "team-real-castelnuevo",
    "awayTeamId": "team-atletico-serranova",
    "homeScore": 4,
    "awayScore": 0,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-izan-garcia-real-castelnuevo",
        "assistPlayerId": "player-aitor-dominguez-real-castelnuevo"
      },
      {
        "minute": 35,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-jorge-molina-real-castelnuevo",
        "assistPlayerId": "player-cristian-ortega-real-castelnuevo"
      },
      {
        "minute": 48,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-iker-sanz-real-castelnuevo"
      },
      {
        "minute": 51,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-amine-leon-real-castelnuevo",
        "assistPlayerId": "player-izan-serrano-real-castelnuevo"
      },
      {
        "minute": 63,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-souleymane-diaz-real-castelnuevo"
      },
      {
        "minute": 68,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-iker-sanz-real-castelnuevo"
      },
      {
        "minute": 76,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-amine-cisse-atletico-serranova"
      },
      {
        "minute": 85,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-jorge-molina-real-castelnuevo",
        "assistPlayerId": "player-pablo-konate-real-castelnuevo"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 58,
        "away": 42
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 1,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-cristiano-lopez-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo"
    ],
    "awayLineup": [
      "player-gabriel-traore-atletico-serranova",
      "player-amine-fernandez-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j2-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "12:00",
    "status": "jugado",
    "venue": "Polideportivo Brisamar",
    "homeTeamId": "team-cf-brisamar",
    "awayTeamId": "team-ud-lagunilla",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-sergio-molina-cf-brisamar",
        "assistPlayerId": "player-gonzalo-cortes-cf-brisamar"
      },
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-izan-romero-ud-lagunilla",
        "assistPlayerId": "player-hugo-leon-ud-lagunilla"
      },
      {
        "minute": 16,
        "type": "amarilla",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-bilal-mendes-ud-lagunilla"
      },
      {
        "minute": 81,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-sergio-molina-cf-brisamar",
        "assistPlayerId": "player-aitor-rubio-cf-brisamar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 50,
        "away": 50
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-aitor-ortega-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-eric-pena-cf-brisamar"
    ],
    "awayLineup": [
      "player-yeray-blanco-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j3-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "19:30",
    "status": "jugado",
    "venue": "Polideportivo Sotoverde",
    "homeTeamId": "team-cd-sotoverde",
    "awayTeamId": "team-real-castelnuevo",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 59,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-marcos-ruiz-real-castelnuevo"
      },
      {
        "minute": 89,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-wesley-sanchez-cd-sotoverde"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 57,
        "away": 43
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-joel-lopez-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde"
    ],
    "awayLineup": [
      "player-cristiano-lopez-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-amine-leon-real-castelnuevo"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j3-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "17:00",
    "status": "jugado",
    "venue": "Estadio Peñablanca",
    "homeTeamId": "team-cd-penablanca",
    "awayTeamId": "team-cf-brisamar",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 30,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-nico-ortega-cd-penablanca",
        "assistPlayerId": "player-leo-navarro-cd-penablanca"
      },
      {
        "minute": 31,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-lucas-martinez-cd-penablanca"
      },
      {
        "minute": 34,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-vitor-ortiz-cd-penablanca",
        "assistPlayerId": "player-moussa-sanchez-cd-penablanca"
      },
      {
        "minute": 53,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-enzo-garcia-cd-penablanca"
      },
      {
        "minute": 60,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-thiago-popescu-cf-brisamar"
      },
      {
        "minute": 63,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-izan-castro-cd-penablanca",
        "assistPlayerId": "player-nico-ortega-cd-penablanca"
      },
      {
        "minute": 78,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-izan-castro-cd-penablanca"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 57,
        "away": 43
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-yusuf-prieto-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-adrian-medina-cd-penablanca"
    ],
    "awayLineup": [
      "player-gonzalo-cortes-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-eric-pena-cf-brisamar"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j3-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "19:30",
    "status": "jugado",
    "venue": "Ciudad de Serranova",
    "homeTeamId": "team-atletico-serranova",
    "awayTeamId": "team-ud-lagunilla",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 63,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-gabriel-traore-atletico-serranova"
      },
      {
        "minute": 72,
        "type": "gol",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-gonzalo-romero-ud-lagunilla",
        "assistPlayerId": "player-bilal-mendes-ud-lagunilla"
      },
      {
        "minute": 77,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-dragan-ivanov-atletico-serranova"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 47,
        "away": 53
      },
      {
        "label": "Tiros a puerta",
        "home": 4,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-pablo-traore-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-amine-fernandez-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova"
    ],
    "awayLineup": [
      "player-enzo-flores-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j4-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "16:30",
    "status": "jugado",
    "venue": "Polideportivo Brisamar",
    "homeTeamId": "team-cf-brisamar",
    "awayTeamId": "team-cd-sotoverde",
    "homeScore": 3,
    "awayScore": 2,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-gonzalo-cortes-cf-brisamar",
        "assistPlayerId": "player-rafael-flores-cf-brisamar"
      },
      {
        "minute": 31,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-jorge-popescu-cd-sotoverde",
        "assistPlayerId": "player-hugo-romero-cd-sotoverde"
      },
      {
        "minute": 34,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-eric-pena-cf-brisamar",
        "assistPlayerId": "player-asier-ivanov-cf-brisamar"
      },
      {
        "minute": 87,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-aitor-rubio-cf-brisamar",
        "assistPlayerId": "player-asier-ivanov-cf-brisamar"
      },
      {
        "minute": 87,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-izan-prieto-cd-sotoverde",
        "assistPlayerId": "player-joel-lopez-cd-sotoverde"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 40,
        "away": 60
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 8
      }
    ],
    "homeLineup": [
      "player-sergio-medina-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-eric-pena-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-gonzalo-cortes-cf-brisamar"
    ],
    "awayLineup": [
      "player-marc-nunez-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-hugo-romero-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j4-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "18:00",
    "status": "jugado",
    "venue": "Municipal Lagunilla del Río",
    "homeTeamId": "team-ud-lagunilla",
    "awayTeamId": "team-real-castelnuevo",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 49,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-pablo-konate-real-castelnuevo",
        "assistPlayerId": "player-izan-garcia-real-castelnuevo"
      },
      {
        "minute": 89,
        "type": "gol",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-bilal-mendes-ud-lagunilla",
        "assistPlayerId": "player-yeray-blanco-ud-lagunilla"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 61,
        "away": 39
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 16,
        "away": 13
      }
    ],
    "homeLineup": [
      "player-lucas-cortes-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla"
    ],
    "awayLineup": [
      "player-amine-leon-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j4-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Serranova",
    "homeTeamId": "team-atletico-serranova",
    "awayTeamId": "team-cd-penablanca",
    "homeScore": 2,
    "awayScore": 1,
    "events": [
      {
        "minute": 32,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-adrian-medina-cd-penablanca"
      },
      {
        "minute": 58,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-gabriel-traore-atletico-serranova"
      },
      {
        "minute": 62,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-leo-navarro-cd-penablanca",
        "assistPlayerId": "player-adrian-medina-cd-penablanca"
      },
      {
        "minute": 63,
        "type": "gol",
        "teamId": "team-atletico-serranova",
        "playerId": "player-yeray-ruiz-atletico-serranova",
        "assistPlayerId": "player-amine-cisse-atletico-serranova"
      },
      {
        "minute": 69,
        "type": "gol",
        "teamId": "team-atletico-serranova",
        "playerId": "player-rodrigo-traore-atletico-serranova",
        "assistPlayerId": "player-kwame-herrera-atletico-serranova"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 40,
        "away": 60
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-gabriel-traore-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova"
    ],
    "awayLineup": [
      "player-gonzalo-prieto-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j5-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "16:30",
    "status": "jugado",
    "venue": "Polideportivo Sotoverde",
    "homeTeamId": "team-cd-sotoverde",
    "awayTeamId": "team-ud-lagunilla",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 8,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-marc-nunez-cd-sotoverde",
        "assistPlayerId": "player-marc-nunez-cd-sotoverde"
      },
      {
        "minute": 11,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-jorge-popescu-cd-sotoverde"
      },
      {
        "minute": 13,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-izan-prieto-cd-sotoverde"
      },
      {
        "minute": 41,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-adrian-serrano-cd-sotoverde",
        "assistPlayerId": "player-jorge-popescu-cd-sotoverde"
      },
      {
        "minute": 46,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-tomas-sanchez-cd-sotoverde"
      },
      {
        "minute": 55,
        "type": "amarilla",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-hugo-leon-ud-lagunilla"
      },
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-izan-prieto-cd-sotoverde",
        "assistPlayerId": "player-dragan-navarro-cd-sotoverde"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-gabriel-cruz-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde"
    ],
    "awayLineup": [
      "player-sergio-sanchez-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j5-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "18:00",
    "status": "jugado",
    "venue": "Polideportivo Brisamar",
    "homeTeamId": "team-cf-brisamar",
    "awayTeamId": "team-atletico-serranova",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 26,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-marc-ivanov-cf-brisamar",
        "assistPlayerId": "player-rafael-flores-cf-brisamar"
      },
      {
        "minute": 31,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-yeray-ruiz-atletico-serranova"
      },
      {
        "minute": 33,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-aitor-ortega-cf-brisamar",
        "assistPlayerId": "player-gonzalo-cortes-cf-brisamar"
      },
      {
        "minute": 38,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-gonzalo-cortes-cf-brisamar"
      },
      {
        "minute": 41,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-sergio-medina-cf-brisamar"
      },
      {
        "minute": 46,
        "type": "amarilla",
        "teamId": "team-cf-brisamar",
        "playerId": "player-aitor-rubio-cf-brisamar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 60,
        "away": 40
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 7
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 7,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-petru-mendes-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-gonzalo-cortes-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-eric-pena-cf-brisamar",
      "player-marc-ivanov-cf-brisamar"
    ],
    "awayLineup": [
      "player-gabriel-traore-atletico-serranova",
      "player-amine-fernandez-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-kwame-herrera-atletico-serranova"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j5-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "17:00",
    "status": "jugado",
    "venue": "Campo Municipal de Castelnuevo de la Costa",
    "homeTeamId": "team-real-castelnuevo",
    "awayTeamId": "team-cd-penablanca",
    "homeScore": 0,
    "awayScore": 3,
    "events": [
      {
        "minute": 39,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-leo-navarro-cd-penablanca",
        "assistPlayerId": "player-moussa-sanchez-cd-penablanca"
      },
      {
        "minute": 55,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-izan-castro-cd-penablanca",
        "assistPlayerId": "player-gonzalo-prieto-cd-penablanca"
      },
      {
        "minute": 78,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-moussa-sanchez-cd-penablanca"
      },
      {
        "minute": 83,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-vitor-ortiz-cd-penablanca",
        "assistPlayerId": "player-enzo-garcia-cd-penablanca"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 52,
        "away": 48
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-cristian-ortega-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo"
    ],
    "awayLineup": [
      "player-gonzalo-prieto-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-enzo-garcia-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j6-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "17:30",
    "status": "jugado",
    "venue": "Ciudad de Serranova",
    "homeTeamId": "team-atletico-serranova",
    "awayTeamId": "team-cd-sotoverde",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 21,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-yeray-ruiz-atletico-serranova"
      },
      {
        "minute": 24,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-jorge-popescu-cd-sotoverde"
      },
      {
        "minute": 33,
        "type": "gol",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-marc-nunez-cd-sotoverde",
        "assistPlayerId": "player-dragan-navarro-cd-sotoverde"
      },
      {
        "minute": 38,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-yeray-ruiz-atletico-serranova"
      },
      {
        "minute": 66,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-yusuf-diaz-atletico-serranova"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 54,
        "away": 46
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 3
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-pablo-traore-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-amine-fernandez-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-gabriel-leon-atletico-serranova"
    ],
    "awayLineup": [
      "player-dragan-navarro-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-hugo-romero-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j6-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "18:00",
    "status": "jugado",
    "venue": "Estadio Peñablanca",
    "homeTeamId": "team-cd-penablanca",
    "awayTeamId": "team-ud-lagunilla",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 13,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-kwame-diaz-cd-penablanca",
        "assistPlayerId": "player-gonzalo-prieto-cd-penablanca"
      },
      {
        "minute": 45,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-kwame-diaz-cd-penablanca",
        "assistPlayerId": "player-nico-ortega-cd-penablanca"
      },
      {
        "minute": 49,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-yusuf-prieto-cd-penablanca"
      },
      {
        "minute": 51,
        "type": "gol",
        "teamId": "team-cd-penablanca",
        "playerId": "player-vitor-ortiz-cd-penablanca",
        "assistPlayerId": "player-adrian-medina-cd-penablanca"
      },
      {
        "minute": 61,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-enzo-garcia-cd-penablanca"
      },
      {
        "minute": 64,
        "type": "amarilla",
        "teamId": "team-cd-penablanca",
        "playerId": "player-nico-ortega-cd-penablanca"
      },
      {
        "minute": 66,
        "type": "amarilla",
        "teamId": "team-ud-lagunilla",
        "playerId": "player-bilal-mendes-ud-lagunilla"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-adrian-prieto-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-enzo-garcia-cd-penablanca",
      "player-gonzalo-prieto-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-nico-ortega-cd-penablanca"
    ],
    "awayLineup": [
      "player-moussa-cano-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j6-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "17:00",
    "status": "jugado",
    "venue": "Campo Municipal de Castelnuevo de la Costa",
    "homeTeamId": "team-real-castelnuevo",
    "awayTeamId": "team-cf-brisamar",
    "homeScore": 0,
    "awayScore": 4,
    "events": [
      {
        "minute": 17,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-anderson-romero-cf-brisamar",
        "assistPlayerId": "player-aitor-rubio-cf-brisamar"
      },
      {
        "minute": 19,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-izan-serrano-real-castelnuevo"
      },
      {
        "minute": 27,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-souleymane-diaz-real-castelnuevo"
      },
      {
        "minute": 38,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-eric-pena-cf-brisamar",
        "assistPlayerId": "player-marc-ivanov-cf-brisamar"
      },
      {
        "minute": 56,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-izan-serrano-real-castelnuevo"
      },
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-anderson-romero-cf-brisamar",
        "assistPlayerId": "player-sergio-medina-cf-brisamar"
      },
      {
        "minute": 89,
        "type": "gol",
        "teamId": "team-cf-brisamar",
        "playerId": "player-marc-ivanov-cf-brisamar",
        "assistPlayerId": "player-sergio-medina-cf-brisamar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 42,
        "away": 58
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 16
      }
    ],
    "homeLineup": [
      "player-aitor-dominguez-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo"
    ],
    "awayLineup": [
      "player-aitor-ortega-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-gonzalo-cortes-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-eric-pena-cf-brisamar",
      "player-rafael-flores-cf-brisamar"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j7-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "19:30",
    "status": "en_juego",
    "venue": "Polideportivo Sotoverde",
    "homeTeamId": "team-cd-sotoverde",
    "awayTeamId": "team-cd-penablanca",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 25,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-lucas-garcia-cd-sotoverde"
      },
      {
        "minute": 65,
        "type": "amarilla",
        "teamId": "team-cd-sotoverde",
        "playerId": "player-marc-nunez-cd-sotoverde"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 41,
        "away": 59
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 0,
        "away": 1
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-hugo-romero-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde"
    ],
    "awayLineup": [
      "player-nico-ortega-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-gonzalo-prieto-cd-penablanca",
      "player-enzo-garcia-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-adrian-prieto-cd-penablanca"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j7-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Serranova",
    "homeTeamId": "team-atletico-serranova",
    "awayTeamId": "team-real-castelnuevo",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 5,
        "type": "gol",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-aitor-dominguez-real-castelnuevo",
        "assistPlayerId": "player-cristiano-lopez-real-castelnuevo"
      },
      {
        "minute": 10,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-jorge-navarro-real-castelnuevo"
      },
      {
        "minute": 19,
        "type": "amarilla",
        "teamId": "team-atletico-serranova",
        "playerId": "player-pablo-traore-atletico-serranova"
      },
      {
        "minute": 25,
        "type": "amarilla",
        "teamId": "team-real-castelnuevo",
        "playerId": "player-izan-garcia-real-castelnuevo"
      },
      {
        "minute": 34,
        "type": "gol",
        "teamId": "team-atletico-serranova",
        "playerId": "player-rodrigo-rubio-atletico-serranova",
        "assistPlayerId": "player-rodrigo-traore-atletico-serranova"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 61,
        "away": 39
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-pablo-traore-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-amine-cisse-atletico-serranova"
    ],
    "awayLineup": [
      "player-cristian-ortega-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j7-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "16:00",
    "status": "programado",
    "venue": "Municipal Lagunilla del Río",
    "homeTeamId": "team-ud-lagunilla",
    "awayTeamId": "team-cf-brisamar",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-yeray-blanco-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla"
    ],
    "awayLineup": [
      "player-anderson-romero-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-gonzalo-cortes-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-eric-pena-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-marc-ivanov-cf-brisamar"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j8-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "17:30",
    "status": "programado",
    "venue": "Campo Municipal de Castelnuevo de la Costa",
    "homeTeamId": "team-real-castelnuevo",
    "awayTeamId": "team-cd-sotoverde",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-gonzalo-serrano-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-jorge-navarro-real-castelnuevo"
    ],
    "awayLineup": [
      "player-dragan-navarro-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j8-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "17:00",
    "status": "programado",
    "venue": "Polideportivo Brisamar",
    "homeTeamId": "team-cf-brisamar",
    "awayTeamId": "team-cd-penablanca",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-anderson-romero-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-sergio-medina-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-rafael-flores-cf-brisamar"
    ],
    "awayLineup": [
      "player-adrian-medina-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-gonzalo-prieto-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-leo-navarro-cd-penablanca"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j8-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "12:00",
    "status": "programado",
    "venue": "Municipal Lagunilla del Río",
    "homeTeamId": "team-ud-lagunilla",
    "awayTeamId": "team-atletico-serranova",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-lucas-cortes-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-gonzalo-romero-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla"
    ],
    "awayLineup": [
      "player-kwame-herrera-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j9-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "12:00",
    "status": "programado",
    "venue": "Polideportivo Sotoverde",
    "homeTeamId": "team-cd-sotoverde",
    "awayTeamId": "team-cf-brisamar",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-adrian-serrano-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-izan-herrera-cd-sotoverde",
      "player-izan-prieto-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-wesley-prieto-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde"
    ],
    "awayLineup": [
      "player-eric-pena-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-gonzalo-cortes-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-aitor-ortega-cf-brisamar",
      "player-aitor-rubio-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-sergio-medina-cf-brisamar"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j9-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "16:00",
    "status": "programado",
    "venue": "Campo Municipal de Castelnuevo de la Costa",
    "homeTeamId": "team-real-castelnuevo",
    "awayTeamId": "team-ud-lagunilla",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-souleymane-diaz-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-izan-garcia-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-aitor-dominguez-real-castelnuevo"
    ],
    "awayLineup": [
      "player-gonzalo-romero-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-lucas-cortes-ud-lagunilla",
      "player-lucas-sanz-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j9-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "17:00",
    "status": "programado",
    "venue": "Estadio Peñablanca",
    "homeTeamId": "team-cd-penablanca",
    "awayTeamId": "team-atletico-serranova",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-gonzalo-prieto-cd-penablanca",
      "player-enzo-garcia-cd-penablanca",
      "player-lucas-martinez-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-izan-castro-cd-penablanca",
      "player-yusuf-prieto-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-adrian-medina-cd-penablanca"
    ],
    "awayLineup": [
      "player-gabriel-leon-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-amine-cisse-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-pablo-traore-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-rodrigo-traore-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j10-0",
    "competitionId": "comp-tercera-sur",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "16:30",
    "status": "programado",
    "venue": "Municipal Lagunilla del Río",
    "homeTeamId": "team-ud-lagunilla",
    "awayTeamId": "team-cd-sotoverde",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-lucas-cortes-ud-lagunilla",
      "player-enzo-flores-ud-lagunilla",
      "player-alvaro-gil-ud-lagunilla",
      "player-hugo-leon-ud-lagunilla",
      "player-bilal-mendes-ud-lagunilla",
      "player-moussa-cano-ud-lagunilla",
      "player-yeray-blanco-ud-lagunilla",
      "player-sergio-sanchez-ud-lagunilla",
      "player-cristian-ortiz-ud-lagunilla",
      "player-izan-romero-ud-lagunilla",
      "player-eric-serrano-ud-lagunilla"
    ],
    "awayLineup": [
      "player-izan-herrera-cd-sotoverde",
      "player-jorge-popescu-cd-sotoverde",
      "player-joel-lopez-cd-sotoverde",
      "player-marc-nunez-cd-sotoverde",
      "player-gabriel-cruz-cd-sotoverde",
      "player-adrian-serrano-cd-sotoverde",
      "player-wesley-sanchez-cd-sotoverde",
      "player-lucas-garcia-cd-sotoverde",
      "player-hugo-romero-cd-sotoverde",
      "player-dragan-navarro-cd-sotoverde",
      "player-tomas-sanchez-cd-sotoverde"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j10-1",
    "competitionId": "comp-tercera-sur",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "16:00",
    "status": "programado",
    "venue": "Ciudad de Serranova",
    "homeTeamId": "team-atletico-serranova",
    "awayTeamId": "team-cf-brisamar",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-pablo-traore-atletico-serranova",
      "player-dragan-ivanov-atletico-serranova",
      "player-gabriel-traore-atletico-serranova",
      "player-kwame-herrera-atletico-serranova",
      "player-alvaro-herrera-atletico-serranova",
      "player-yusuf-diaz-atletico-serranova",
      "player-gabriel-leon-atletico-serranova",
      "player-rodrigo-rubio-atletico-serranova",
      "player-eric-navarro-atletico-serranova",
      "player-yeray-ruiz-atletico-serranova",
      "player-amine-fernandez-atletico-serranova"
    ],
    "awayLineup": [
      "player-sergio-medina-cf-brisamar",
      "player-sergio-molina-cf-brisamar",
      "player-eric-pena-cf-brisamar",
      "player-thiago-popescu-cf-brisamar",
      "player-petru-mendes-cf-brisamar",
      "player-asier-ivanov-cf-brisamar",
      "player-anderson-romero-cf-brisamar",
      "player-dragan-diaz-cf-brisamar",
      "player-marc-ivanov-cf-brisamar",
      "player-rafael-flores-cf-brisamar",
      "player-aitor-ortega-cf-brisamar"
    ]
  },
  {
    "id": "match-comp-tercera-sur-j10-2",
    "competitionId": "comp-tercera-sur",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "12:00",
    "status": "programado",
    "venue": "Estadio Peñablanca",
    "homeTeamId": "team-cd-penablanca",
    "awayTeamId": "team-real-castelnuevo",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-yusuf-prieto-cd-penablanca",
      "player-adrian-prieto-cd-penablanca",
      "player-kwame-diaz-cd-penablanca",
      "player-enzo-garcia-cd-penablanca",
      "player-vitor-ortiz-cd-penablanca",
      "player-leo-navarro-cd-penablanca",
      "player-moussa-sanchez-cd-penablanca",
      "player-gonzalo-prieto-cd-penablanca",
      "player-nico-ortega-cd-penablanca",
      "player-adrian-medina-cd-penablanca",
      "player-cristiano-lozano-cd-penablanca"
    ],
    "awayLineup": [
      "player-izan-garcia-real-castelnuevo",
      "player-cristian-ortega-real-castelnuevo",
      "player-jorge-molina-real-castelnuevo",
      "player-gonzalo-serrano-real-castelnuevo",
      "player-cristiano-lopez-real-castelnuevo",
      "player-iker-sanz-real-castelnuevo",
      "player-pablo-konate-real-castelnuevo",
      "player-amine-leon-real-castelnuevo",
      "player-souleymane-diaz-real-castelnuevo",
      "player-marcos-ruiz-real-castelnuevo",
      "player-izan-serrano-real-castelnuevo"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j1-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "19:30",
    "status": "jugado",
    "venue": "Ciudad de Fuenllana",
    "homeTeamId": "team-ud-fuenllana",
    "awayTeamId": "team-ud-espinares",
    "homeScore": 2,
    "awayScore": 0,
    "events": [
      {
        "minute": 13,
        "type": "amarilla",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marcos-sanz-ud-fuenllana"
      },
      {
        "minute": 52,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-mihai-delgado-ud-fuenllana",
        "assistPlayerId": "player-ibrahim-molina-ud-fuenllana"
      },
      {
        "minute": 61,
        "type": "amarilla",
        "teamId": "team-ud-espinares",
        "playerId": "player-yeray-fernandez-ud-espinares"
      },
      {
        "minute": 69,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-samuel-romero-ud-fuenllana",
        "assistPlayerId": "player-marcos-flores-ud-fuenllana"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 43,
        "away": 57
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-cristian-gil-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana"
    ],
    "awayLineup": [
      "player-enzo-cano-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-souleymane-rubio-ud-espinares",
      "player-mario-popescu-ud-espinares"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j1-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "12:00",
    "status": "jugado",
    "venue": "Estadio Arroyomar",
    "homeTeamId": "team-cd-arroyomar",
    "awayTeamId": "team-real-cabodoro",
    "homeScore": 1,
    "awayScore": 2,
    "events": [
      {
        "minute": 10,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-gabriel-diallo-real-cabodoro"
      },
      {
        "minute": 24,
        "type": "amarilla",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-adrian-ruiz-cd-arroyomar"
      },
      {
        "minute": 29,
        "type": "amarilla",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-leo-cruz-cd-arroyomar"
      },
      {
        "minute": 36,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-dragan-cortes-cd-arroyomar",
        "assistPlayerId": "player-dragan-cortes-cd-arroyomar"
      },
      {
        "minute": 70,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-adrian-konate-real-cabodoro",
        "assistPlayerId": "player-aitor-flores-real-cabodoro"
      },
      {
        "minute": 71,
        "type": "amarilla",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-amine-silva-cd-arroyomar"
      },
      {
        "minute": 89,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-anderson-garcia-real-cabodoro",
        "assistPlayerId": "player-marc-cruz-real-cabodoro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 43,
        "away": 57
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 1
      },
      {
        "label": "Córners",
        "home": 4,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-dragan-cortes-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-omar-castro-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-leo-gil-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar"
    ],
    "awayLineup": [
      "player-aitor-flores-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j1-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 1,
    "date": "2025-09-14",
    "time": "12:00",
    "status": "jugado",
    "venue": "Estadio Altavista del Túria",
    "homeTeamId": "team-cf-altavista",
    "awayTeamId": "team-ad-pozonegro",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 12,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-karim-cortes-ad-pozonegro"
      },
      {
        "minute": 16,
        "type": "gol",
        "teamId": "team-cf-altavista",
        "playerId": "player-mario-herrera-cf-altavista",
        "assistPlayerId": "player-wesley-romero-cf-altavista"
      },
      {
        "minute": 38,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-anderson-pena-ad-pozonegro"
      },
      {
        "minute": 46,
        "type": "amarilla",
        "teamId": "team-cf-altavista",
        "playerId": "player-joel-rubio-cf-altavista"
      },
      {
        "minute": 52,
        "type": "amarilla",
        "teamId": "team-cf-altavista",
        "playerId": "player-kwame-nunez-cf-altavista"
      },
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-dragan-gil-ad-pozonegro",
        "assistPlayerId": "player-asier-ortiz-ad-pozonegro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 42,
        "away": 58
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-diego-ortega-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-kwame-nunez-cf-altavista",
      "player-nico-ivanov-cf-altavista"
    ],
    "awayLineup": [
      "player-pablo-lopez-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-omar-vazquez-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j2-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "19:30",
    "status": "jugado",
    "venue": "Estadio Cabodoro de Mar",
    "homeTeamId": "team-real-cabodoro",
    "awayTeamId": "team-ud-fuenllana",
    "homeScore": 1,
    "awayScore": 2,
    "events": [
      {
        "minute": 33,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-mihai-delgado-ud-fuenllana",
        "assistPlayerId": "player-moussa-blanco-ud-fuenllana"
      },
      {
        "minute": 41,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-alvaro-ivanov-real-cabodoro"
      },
      {
        "minute": 50,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-anderson-garcia-real-cabodoro",
        "assistPlayerId": "player-hugo-ruiz-real-cabodoro"
      },
      {
        "minute": 66,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-hugo-ruiz-real-cabodoro"
      },
      {
        "minute": 77,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-marc-cruz-real-cabodoro"
      },
      {
        "minute": 80,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marc-lopez-ud-fuenllana",
        "assistPlayerId": "player-amine-castro-ud-fuenllana"
      },
      {
        "minute": 87,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-asier-herrera-real-cabodoro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-anderson-garcia-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-asier-herrera-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-marc-cruz-real-cabodoro"
    ],
    "awayLineup": [
      "player-mihai-delgado-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-marc-lopez-ud-fuenllana",
      "player-amine-castro-ud-fuenllana"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j2-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "17:00",
    "status": "jugado",
    "venue": "Municipal Pozonegro",
    "homeTeamId": "team-ad-pozonegro",
    "awayTeamId": "team-ud-espinares",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 66,
        "type": "amarilla",
        "teamId": "team-ud-espinares",
        "playerId": "player-kwame-fernandez-ud-espinares"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 53,
        "away": 47
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 8,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro"
    ],
    "awayLineup": [
      "player-enzo-cano-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-souleymane-rubio-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-iker-mendez-ud-espinares"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j2-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 2,
    "date": "2025-09-21",
    "time": "19:30",
    "status": "jugado",
    "venue": "Estadio Altavista del Túria",
    "homeTeamId": "team-cf-altavista",
    "awayTeamId": "team-cd-arroyomar",
    "homeScore": 0,
    "awayScore": 2,
    "events": [
      {
        "minute": 24,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-rodrigo-torres-cd-arroyomar",
        "assistPlayerId": "player-leo-gil-cd-arroyomar"
      },
      {
        "minute": 35,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-dragan-flores-cd-arroyomar",
        "assistPlayerId": "player-aitor-castro-cd-arroyomar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 2
      },
      {
        "label": "Faltas",
        "home": 6,
        "away": 13
      }
    ],
    "homeLineup": [
      "player-nico-medina-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-kwame-nunez-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-diego-ortega-cf-altavista"
    ],
    "awayLineup": [
      "player-aitor-castro-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-leo-gil-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j3-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "17:00",
    "status": "jugado",
    "venue": "Ciudad de Fuenllana",
    "homeTeamId": "team-ud-fuenllana",
    "awayTeamId": "team-ad-pozonegro",
    "homeScore": 3,
    "awayScore": 0,
    "events": [
      {
        "minute": 27,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marc-lopez-ud-fuenllana",
        "assistPlayerId": "player-amine-castro-ud-fuenllana"
      },
      {
        "minute": 27,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-samuel-romero-ud-fuenllana",
        "assistPlayerId": "player-petru-torres-ud-fuenllana"
      },
      {
        "minute": 41,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-rodrigo-fernandez-ad-pozonegro"
      },
      {
        "minute": 43,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-raul-flores-ad-pozonegro"
      },
      {
        "minute": 69,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marcos-vazquez-ud-fuenllana",
        "assistPlayerId": "player-amine-castro-ud-fuenllana"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 59,
        "away": 41
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 11,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-sergio-silva-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana"
    ],
    "awayLineup": [
      "player-mario-ortiz-ad-pozonegro",
      "player-omar-vazquez-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j3-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "18:00",
    "status": "jugado",
    "venue": "Estadio Cabodoro de Mar",
    "homeTeamId": "team-real-cabodoro",
    "awayTeamId": "team-cf-altavista",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 14,
        "type": "amarilla",
        "teamId": "team-cf-altavista",
        "playerId": "player-joel-rubio-cf-altavista"
      },
      {
        "minute": 18,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-aitor-flores-real-cabodoro"
      },
      {
        "minute": 30,
        "type": "gol",
        "teamId": "team-cf-altavista",
        "playerId": "player-jorge-flores-cf-altavista",
        "assistPlayerId": "player-wesley-romero-cf-altavista"
      },
      {
        "minute": 83,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-asier-herrera-real-cabodoro",
        "assistPlayerId": "player-enzo-perez-real-cabodoro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 52,
        "away": 48
      },
      {
        "label": "Tiros a puerta",
        "home": 2,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 0
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-asier-herrera-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-aitor-flores-real-cabodoro"
    ],
    "awayLineup": [
      "player-nico-medina-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-kwame-nunez-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-diego-ortega-cf-altavista"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j3-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 3,
    "date": "2025-09-28",
    "time": "17:00",
    "status": "jugado",
    "venue": "Ciudad de Espinares",
    "homeTeamId": "team-ud-espinares",
    "awayTeamId": "team-cd-arroyomar",
    "homeScore": 0,
    "awayScore": 0,
    "events": [
      {
        "minute": 31,
        "type": "amarilla",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-dragan-flores-cd-arroyomar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 58,
        "away": 42
      },
      {
        "label": "Tiros a puerta",
        "home": 2,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 10,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-izan-flores-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-mario-popescu-ud-espinares",
      "player-souleymane-rubio-ud-espinares"
    ],
    "awayLineup": [
      "player-leo-gil-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar",
      "player-omar-castro-cd-arroyomar"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j4-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "18:00",
    "status": "jugado",
    "venue": "Estadio Altavista del Túria",
    "homeTeamId": "team-cf-altavista",
    "awayTeamId": "team-ud-fuenllana",
    "homeScore": 0,
    "awayScore": 0,
    "events": [],
    "stats": [
      {
        "label": "Posesión",
        "home": 40,
        "away": 60
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 4
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-omar-serrano-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-nico-medina-cf-altavista"
    ],
    "awayLineup": [
      "player-cristian-gil-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j4-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "16:30",
    "status": "jugado",
    "venue": "Estadio Arroyomar",
    "homeTeamId": "team-cd-arroyomar",
    "awayTeamId": "team-ad-pozonegro",
    "homeScore": 2,
    "awayScore": 3,
    "events": [
      {
        "minute": 15,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-asier-ortiz-ad-pozonegro",
        "assistPlayerId": "player-anderson-iglesias-ad-pozonegro"
      },
      {
        "minute": 21,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-rodrigo-fernandez-ad-pozonegro",
        "assistPlayerId": "player-mario-ortiz-ad-pozonegro"
      },
      {
        "minute": 24,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-cristiano-sanz-ad-pozonegro"
      },
      {
        "minute": 28,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-cristiano-sanz-ad-pozonegro",
        "assistPlayerId": "player-rodrigo-fernandez-ad-pozonegro"
      },
      {
        "minute": 78,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-leo-prieto-cd-arroyomar",
        "assistPlayerId": "player-joel-lozano-cd-arroyomar"
      },
      {
        "minute": 81,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-anderson-mendez-cd-arroyomar",
        "assistPlayerId": "player-anderson-mendez-cd-arroyomar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 6,
        "away": 7
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 12
      }
    ],
    "homeLineup": [
      "player-amine-silva-cd-arroyomar",
      "player-omar-castro-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-leo-gil-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar"
    ],
    "awayLineup": [
      "player-wesley-diaz-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-omar-vazquez-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-raul-flores-ad-pozonegro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j4-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 4,
    "date": "2025-10-05",
    "time": "12:00",
    "status": "jugado",
    "venue": "Ciudad de Espinares",
    "homeTeamId": "team-ud-espinares",
    "awayTeamId": "team-real-cabodoro",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 76,
        "type": "gol",
        "teamId": "team-ud-espinares",
        "playerId": "player-yeray-fernandez-ud-espinares",
        "assistPlayerId": "player-cristian-ramos-ud-espinares"
      },
      {
        "minute": 85,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-enzo-perez-real-cabodoro",
        "assistPlayerId": "player-asier-herrera-real-cabodoro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 38,
        "away": 62
      },
      {
        "label": "Tiros a puerta",
        "home": 3,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 5,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 15
      }
    ],
    "homeLineup": [
      "player-souleymane-rubio-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-mario-popescu-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-izan-flores-ud-espinares"
    ],
    "awayLineup": [
      "player-enzo-perez-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-asier-herrera-real-cabodoro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j5-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Fuenllana",
    "homeTeamId": "team-ud-fuenllana",
    "awayTeamId": "team-cd-arroyomar",
    "homeScore": 3,
    "awayScore": 1,
    "events": [
      {
        "minute": 12,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-amine-castro-ud-fuenllana",
        "assistPlayerId": "player-marc-lopez-ud-fuenllana"
      },
      {
        "minute": 34,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-moussa-blanco-ud-fuenllana",
        "assistPlayerId": "player-petru-torres-ud-fuenllana"
      },
      {
        "minute": 44,
        "type": "amarilla",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-amine-castro-ud-fuenllana"
      },
      {
        "minute": 67,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-amine-castro-ud-fuenllana",
        "assistPlayerId": "player-cristiano-cortes-ud-fuenllana"
      },
      {
        "minute": 79,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-leo-prieto-cd-arroyomar",
        "assistPlayerId": "player-leo-prieto-cd-arroyomar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 54,
        "away": 46
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 5
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 7
      },
      {
        "label": "Faltas",
        "home": 14,
        "away": 7
      }
    ],
    "homeLineup": [
      "player-marcos-flores-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana"
    ],
    "awayLineup": [
      "player-leo-cruz-cd-arroyomar",
      "player-omar-castro-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-leo-gil-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j5-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "17:30",
    "status": "jugado",
    "venue": "Estadio Altavista del Túria",
    "homeTeamId": "team-cf-altavista",
    "awayTeamId": "team-ud-espinares",
    "homeScore": 1,
    "awayScore": 1,
    "events": [
      {
        "minute": 29,
        "type": "amarilla",
        "teamId": "team-ud-espinares",
        "playerId": "player-cristian-ramos-ud-espinares"
      },
      {
        "minute": 35,
        "type": "amarilla",
        "teamId": "team-cf-altavista",
        "playerId": "player-wesley-romero-cf-altavista"
      },
      {
        "minute": 61,
        "type": "amarilla",
        "teamId": "team-cf-altavista",
        "playerId": "player-nico-medina-cf-altavista"
      },
      {
        "minute": 63,
        "type": "gol",
        "teamId": "team-ud-espinares",
        "playerId": "player-hugo-perez-ud-espinares",
        "assistPlayerId": "player-souleymane-rubio-ud-espinares"
      },
      {
        "minute": 79,
        "type": "gol",
        "teamId": "team-cf-altavista",
        "playerId": "player-bruno-martinez-cf-altavista",
        "assistPlayerId": "player-nico-ivanov-cf-altavista"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 1,
        "away": 2
      },
      {
        "label": "Córners",
        "home": 3,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 13,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-bruno-martinez-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-kwame-nunez-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-wesley-romero-cf-altavista"
    ],
    "awayLineup": [
      "player-gabriel-romero-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-mario-popescu-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-enzo-cano-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-yeray-fernandez-ud-espinares"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j5-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 5,
    "date": "2025-10-12",
    "time": "17:30",
    "status": "jugado",
    "venue": "Municipal Pozonegro",
    "homeTeamId": "team-ad-pozonegro",
    "awayTeamId": "team-real-cabodoro",
    "homeScore": 0,
    "awayScore": 2,
    "events": [
      {
        "minute": 13,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-asier-herrera-real-cabodoro",
        "assistPlayerId": "player-marcos-lopez-real-cabodoro"
      },
      {
        "minute": 13,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-adrian-konate-real-cabodoro"
      },
      {
        "minute": 21,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-omar-vazquez-ad-pozonegro"
      },
      {
        "minute": 24,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-alvaro-pena-real-cabodoro"
      },
      {
        "minute": 45,
        "type": "gol",
        "teamId": "team-real-cabodoro",
        "playerId": "player-aitor-flores-real-cabodoro",
        "assistPlayerId": "player-enzo-perez-real-cabodoro"
      },
      {
        "minute": 79,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-joel-torres-real-cabodoro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 56,
        "away": 44
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 5
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-raul-flores-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro"
    ],
    "awayLineup": [
      "player-asier-herrera-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-anderson-garcia-real-cabodoro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j6-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "16:30",
    "status": "jugado",
    "venue": "Ciudad de Espinares",
    "homeTeamId": "team-ud-espinares",
    "awayTeamId": "team-ud-fuenllana",
    "homeScore": 0,
    "awayScore": 2,
    "events": [
      {
        "minute": 19,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marcos-vazquez-ud-fuenllana",
        "assistPlayerId": "player-sergio-silva-ud-fuenllana"
      },
      {
        "minute": 70,
        "type": "amarilla",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-samuel-romero-ud-fuenllana"
      },
      {
        "minute": 85,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-cristiano-cortes-ud-fuenllana",
        "assistPlayerId": "player-marcos-vazquez-ud-fuenllana"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 58,
        "away": 42
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 0,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 8,
        "away": 10
      }
    ],
    "homeLineup": [
      "player-souleymane-rubio-ud-espinares",
      "player-enzo-cano-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-hugo-perez-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-mario-popescu-ud-espinares",
      "player-iker-mendez-ud-espinares"
    ],
    "awayLineup": [
      "player-marcos-flores-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-amine-castro-ud-fuenllana"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j6-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "12:00",
    "status": "jugado",
    "venue": "Estadio Cabodoro de Mar",
    "homeTeamId": "team-real-cabodoro",
    "awayTeamId": "team-cd-arroyomar",
    "homeScore": 0,
    "awayScore": 1,
    "events": [
      {
        "minute": 46,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-hugo-ruiz-real-cabodoro"
      },
      {
        "minute": 51,
        "type": "gol",
        "teamId": "team-cd-arroyomar",
        "playerId": "player-dragan-cortes-cd-arroyomar",
        "assistPlayerId": "player-joel-lozano-cd-arroyomar"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 47,
        "away": 53
      },
      {
        "label": "Tiros a puerta",
        "home": 9,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 2,
        "away": 8
      },
      {
        "label": "Faltas",
        "home": 9,
        "away": 11
      }
    ],
    "homeLineup": [
      "player-hugo-ruiz-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-marcos-lopez-real-cabodoro"
    ],
    "awayLineup": [
      "player-leo-gil-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j6-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 6,
    "date": "2025-10-19",
    "time": "17:00",
    "status": "jugado",
    "venue": "Municipal Pozonegro",
    "homeTeamId": "team-ad-pozonegro",
    "awayTeamId": "team-cf-altavista",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 30,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-asier-ortiz-ad-pozonegro",
        "assistPlayerId": "player-karim-cortes-ad-pozonegro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 45,
        "away": 55
      },
      {
        "label": "Tiros a puerta",
        "home": 8,
        "away": 6
      },
      {
        "label": "Córners",
        "home": 8,
        "away": 4
      },
      {
        "label": "Faltas",
        "home": 12,
        "away": 14
      }
    ],
    "homeLineup": [
      "player-dragan-gil-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro"
    ],
    "awayLineup": [
      "player-joel-rubio-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-diego-ortega-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-kwame-nunez-cf-altavista"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j7-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "17:30",
    "status": "en_juego",
    "venue": "Ciudad de Fuenllana",
    "homeTeamId": "team-ud-fuenllana",
    "awayTeamId": "team-real-cabodoro",
    "homeScore": 1,
    "awayScore": 0,
    "events": [
      {
        "minute": 19,
        "type": "gol",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marc-lopez-ud-fuenllana",
        "assistPlayerId": "player-amine-castro-ud-fuenllana"
      },
      {
        "minute": 29,
        "type": "amarilla",
        "teamId": "team-real-cabodoro",
        "playerId": "player-ibrahim-ramos-real-cabodoro"
      },
      {
        "minute": 34,
        "type": "amarilla",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-cristiano-cortes-ud-fuenllana"
      },
      {
        "minute": 66,
        "type": "amarilla",
        "teamId": "team-ud-fuenllana",
        "playerId": "player-marcos-vazquez-ud-fuenllana"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 54,
        "away": 46
      },
      {
        "label": "Tiros a puerta",
        "home": 7,
        "away": 8
      },
      {
        "label": "Córners",
        "home": 6,
        "away": 3
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 9
      }
    ],
    "homeLineup": [
      "player-samuel-romero-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-marc-lopez-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana"
    ],
    "awayLineup": [
      "player-gabriel-diallo-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-asier-herrera-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-marcos-lopez-real-cabodoro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j7-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "12:00",
    "status": "jugado",
    "venue": "Ciudad de Espinares",
    "homeTeamId": "team-ud-espinares",
    "awayTeamId": "team-ad-pozonegro",
    "homeScore": 2,
    "awayScore": 3,
    "events": [
      {
        "minute": 7,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-rodrigo-fernandez-ad-pozonegro",
        "assistPlayerId": "player-karim-cortes-ad-pozonegro"
      },
      {
        "minute": 14,
        "type": "gol",
        "teamId": "team-ud-espinares",
        "playerId": "player-kwame-fernandez-ud-espinares",
        "assistPlayerId": "player-souleymane-rubio-ud-espinares"
      },
      {
        "minute": 15,
        "type": "gol",
        "teamId": "team-ud-espinares",
        "playerId": "player-enzo-cano-ud-espinares",
        "assistPlayerId": "player-hugo-perez-ud-espinares"
      },
      {
        "minute": 18,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-omar-vazquez-ad-pozonegro",
        "assistPlayerId": "player-anderson-iglesias-ad-pozonegro"
      },
      {
        "minute": 18,
        "type": "amarilla",
        "teamId": "team-ud-espinares",
        "playerId": "player-enzo-cano-ud-espinares"
      },
      {
        "minute": 72,
        "type": "amarilla",
        "teamId": "team-ud-espinares",
        "playerId": "player-jorge-nunez-ud-espinares"
      },
      {
        "minute": 81,
        "type": "amarilla",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-dragan-diallo-ad-pozonegro"
      },
      {
        "minute": 82,
        "type": "gol",
        "teamId": "team-ad-pozonegro",
        "playerId": "player-anderson-iglesias-ad-pozonegro",
        "assistPlayerId": "player-dragan-diallo-ad-pozonegro"
      }
    ],
    "stats": [
      {
        "label": "Posesión",
        "home": 48,
        "away": 52
      },
      {
        "label": "Tiros a puerta",
        "home": 5,
        "away": 9
      },
      {
        "label": "Córners",
        "home": 7,
        "away": 6
      },
      {
        "label": "Faltas",
        "home": 15,
        "away": 6
      }
    ],
    "homeLineup": [
      "player-hugo-perez-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-mario-popescu-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-enzo-cano-ud-espinares"
    ],
    "awayLineup": [
      "player-cristiano-sanz-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j7-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 7,
    "date": "2025-10-26",
    "time": "19:30",
    "status": "programado",
    "venue": "Estadio Arroyomar",
    "homeTeamId": "team-cd-arroyomar",
    "awayTeamId": "team-cf-altavista",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-leo-gil-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-vitor-castro-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar"
    ],
    "awayLineup": [
      "player-kwame-nunez-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-diego-ortega-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-omar-serrano-cf-altavista"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j8-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "19:30",
    "status": "programado",
    "venue": "Municipal Pozonegro",
    "homeTeamId": "team-ad-pozonegro",
    "awayTeamId": "team-ud-fuenllana",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-cristiano-sanz-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-omar-vazquez-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro"
    ],
    "awayLineup": [
      "player-amine-castro-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-marc-lopez-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j8-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "19:30",
    "status": "programado",
    "venue": "Estadio Altavista del Túria",
    "homeTeamId": "team-cf-altavista",
    "awayTeamId": "team-real-cabodoro",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-bruno-martinez-cf-altavista",
      "player-diego-ortega-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-kwame-nunez-cf-altavista"
    ],
    "awayLineup": [
      "player-marcos-lopez-real-cabodoro",
      "player-asier-herrera-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-joel-torres-real-cabodoro"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j8-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 8,
    "date": "2025-11-02",
    "time": "19:30",
    "status": "programado",
    "venue": "Estadio Arroyomar",
    "homeTeamId": "team-cd-arroyomar",
    "awayTeamId": "team-ud-espinares",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-leo-gil-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-omar-castro-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar"
    ],
    "awayLineup": [
      "player-hugo-perez-ud-espinares",
      "player-souleymane-rubio-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-enzo-cano-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-cristian-ramos-ud-espinares"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j9-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "18:00",
    "status": "programado",
    "venue": "Ciudad de Fuenllana",
    "homeTeamId": "team-ud-fuenllana",
    "awayTeamId": "team-cf-altavista",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-marc-lopez-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-moussa-blanco-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-petru-torres-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana"
    ],
    "awayLineup": [
      "player-bruno-martinez-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-wesley-romero-cf-altavista",
      "player-mario-herrera-cf-altavista",
      "player-omar-konate-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-kwame-nunez-cf-altavista",
      "player-joel-rubio-cf-altavista"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j9-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "12:00",
    "status": "programado",
    "venue": "Municipal Pozonegro",
    "homeTeamId": "team-ad-pozonegro",
    "awayTeamId": "team-cd-arroyomar",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-mario-ortiz-ad-pozonegro",
      "player-omar-vazquez-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-raul-flores-ad-pozonegro",
      "player-dragan-diallo-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro"
    ],
    "awayLineup": [
      "player-leo-gil-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-dragan-cortes-cd-arroyomar",
      "player-omar-castro-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j9-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 9,
    "date": "2025-11-09",
    "time": "18:00",
    "status": "programado",
    "venue": "Estadio Cabodoro de Mar",
    "homeTeamId": "team-real-cabodoro",
    "awayTeamId": "team-ud-espinares",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-hugo-ruiz-real-cabodoro",
      "player-adrian-konate-real-cabodoro",
      "player-anderson-garcia-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-asier-herrera-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-alvaro-pena-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-ibrahim-ramos-real-cabodoro"
    ],
    "awayLineup": [
      "player-enzo-cano-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-gabriel-herrera-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-izan-flores-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-souleymane-rubio-ud-espinares",
      "player-mario-popescu-ud-espinares"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j10-0",
    "competitionId": "comp-regional-valencia",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "17:30",
    "status": "programado",
    "venue": "Estadio Arroyomar",
    "homeTeamId": "team-cd-arroyomar",
    "awayTeamId": "team-ud-fuenllana",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-vitor-castro-cd-arroyomar",
      "player-joel-lozano-cd-arroyomar",
      "player-amine-silva-cd-arroyomar",
      "player-aitor-castro-cd-arroyomar",
      "player-rodrigo-torres-cd-arroyomar",
      "player-dragan-flores-cd-arroyomar",
      "player-adrian-ruiz-cd-arroyomar",
      "player-leo-prieto-cd-arroyomar",
      "player-leo-gil-cd-arroyomar",
      "player-anderson-mendez-cd-arroyomar",
      "player-leo-cruz-cd-arroyomar"
    ],
    "awayLineup": [
      "player-marc-lopez-ud-fuenllana",
      "player-samuel-romero-ud-fuenllana",
      "player-marcos-vazquez-ud-fuenllana",
      "player-ibrahim-molina-ud-fuenllana",
      "player-amine-castro-ud-fuenllana",
      "player-marcos-flores-ud-fuenllana",
      "player-marcos-sanz-ud-fuenllana",
      "player-mihai-delgado-ud-fuenllana",
      "player-cristiano-cortes-ud-fuenllana",
      "player-cristian-gil-ud-fuenllana",
      "player-sergio-silva-ud-fuenllana"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j10-1",
    "competitionId": "comp-regional-valencia",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "12:00",
    "status": "programado",
    "venue": "Ciudad de Espinares",
    "homeTeamId": "team-ud-espinares",
    "awayTeamId": "team-cf-altavista",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-mario-popescu-ud-espinares",
      "player-jorge-nunez-ud-espinares",
      "player-souleymane-rubio-ud-espinares",
      "player-gabriel-romero-ud-espinares",
      "player-enzo-cano-ud-espinares",
      "player-iker-mendez-ud-espinares",
      "player-yeray-fernandez-ud-espinares",
      "player-omar-martinez-ud-espinares",
      "player-kwame-fernandez-ud-espinares",
      "player-cristian-ramos-ud-espinares",
      "player-izan-flores-ud-espinares"
    ],
    "awayLineup": [
      "player-kwame-nunez-cf-altavista",
      "player-nico-medina-cf-altavista",
      "player-jorge-flores-cf-altavista",
      "player-omar-serrano-cf-altavista",
      "player-vitor-leon-cf-altavista",
      "player-joel-rubio-cf-altavista",
      "player-bruno-martinez-cf-altavista",
      "player-nico-ivanov-cf-altavista",
      "player-sergio-martinez-cf-altavista",
      "player-diego-ortega-cf-altavista",
      "player-omar-konate-cf-altavista"
    ]
  },
  {
    "id": "match-comp-regional-valencia-j10-2",
    "competitionId": "comp-regional-valencia",
    "matchday": 10,
    "date": "2025-11-16",
    "time": "19:30",
    "status": "programado",
    "venue": "Estadio Cabodoro de Mar",
    "homeTeamId": "team-real-cabodoro",
    "awayTeamId": "team-ad-pozonegro",
    "homeScore": null,
    "awayScore": null,
    "events": [],
    "stats": [],
    "homeLineup": [
      "player-adrian-konate-real-cabodoro",
      "player-marcos-lopez-real-cabodoro",
      "player-joel-torres-real-cabodoro",
      "player-alvaro-ivanov-real-cabodoro",
      "player-enzo-perez-real-cabodoro",
      "player-aitor-flores-real-cabodoro",
      "player-asier-herrera-real-cabodoro",
      "player-hugo-ruiz-real-cabodoro",
      "player-gabriel-diallo-real-cabodoro",
      "player-marc-cruz-real-cabodoro",
      "player-anderson-garcia-real-cabodoro"
    ],
    "awayLineup": [
      "player-omar-vazquez-ad-pozonegro",
      "player-pablo-lopez-ad-pozonegro",
      "player-anderson-iglesias-ad-pozonegro",
      "player-dragan-gil-ad-pozonegro",
      "player-rodrigo-fernandez-ad-pozonegro",
      "player-anderson-pena-ad-pozonegro",
      "player-wesley-diaz-ad-pozonegro",
      "player-mario-ortiz-ad-pozonegro",
      "player-asier-ortiz-ad-pozonegro",
      "player-karim-cortes-ad-pozonegro",
      "player-cristiano-sanz-ad-pozonegro"
    ]
  }
];

export const standings: Record<string, StandingRow[]> = {
  "comp-preferente-madrid": [
    {
      "position": 1,
      "teamId": "team-real-almenara",
      "played": 10,
      "won": 5,
      "drawn": 4,
      "lost": 1,
      "goalsFor": 16,
      "goalsAgainst": 9,
      "points": 19,
      "zone": "ascenso",
      "form": [
        "E",
        "D",
        "E",
        "E",
        "V"
      ]
    },
    {
      "position": 2,
      "teamId": "team-ud-vallarena",
      "played": 9,
      "won": 5,
      "drawn": 2,
      "lost": 2,
      "goalsFor": 10,
      "goalsAgainst": 6,
      "points": 17,
      "zone": "ascenso",
      "form": [
        "V",
        "D",
        "V",
        "V",
        "E"
      ]
    },
    {
      "position": 3,
      "teamId": "team-cf-cantosol",
      "played": 9,
      "won": 4,
      "drawn": 4,
      "lost": 1,
      "goalsFor": 11,
      "goalsAgainst": 5,
      "points": 16,
      "zone": "playoff",
      "form": [
        "E",
        "V",
        "V",
        "E",
        "E"
      ]
    },
    {
      "position": 4,
      "teamId": "team-cd-robledo",
      "played": 9,
      "won": 4,
      "drawn": 2,
      "lost": 3,
      "goalsFor": 11,
      "goalsAgainst": 8,
      "points": 14,
      "zone": "playoff",
      "form": [
        "E",
        "D",
        "D",
        "V",
        "V"
      ]
    },
    {
      "position": 5,
      "teamId": "team-atletico-pinarejo",
      "played": 9,
      "won": 3,
      "drawn": 4,
      "lost": 2,
      "goalsFor": 13,
      "goalsAgainst": 10,
      "points": 13,
      "zone": "permanencia",
      "form": [
        "D",
        "V",
        "V",
        "E",
        "E"
      ]
    },
    {
      "position": 6,
      "teamId": "team-cd-riofrio",
      "played": 9,
      "won": 2,
      "drawn": 3,
      "lost": 4,
      "goalsFor": 13,
      "goalsAgainst": 15,
      "points": 9,
      "zone": "permanencia",
      "form": [
        "D",
        "D",
        "V",
        "E",
        "E"
      ]
    },
    {
      "position": 7,
      "teamId": "team-ud-vegalba",
      "played": 10,
      "won": 3,
      "drawn": 0,
      "lost": 7,
      "goalsFor": 11,
      "goalsAgainst": 20,
      "points": 9,
      "zone": "descenso",
      "form": [
        "V",
        "D",
        "D",
        "D",
        "D"
      ]
    },
    {
      "position": 8,
      "teamId": "team-ad-montereal",
      "played": 9,
      "won": 0,
      "drawn": 3,
      "lost": 6,
      "goalsFor": 4,
      "goalsAgainst": 16,
      "points": 3,
      "zone": "descenso",
      "form": [
        "D",
        "E",
        "D",
        "D",
        "E"
      ]
    }
  ],
  "comp-tercera-sur": [
    {
      "position": 1,
      "teamId": "team-cd-penablanca",
      "played": 6,
      "won": 4,
      "drawn": 1,
      "lost": 1,
      "goalsFor": 13,
      "goalsAgainst": 4,
      "points": 13,
      "zone": "ascenso",
      "form": [
        "V",
        "V",
        "D",
        "V",
        "V"
      ]
    },
    {
      "position": 2,
      "teamId": "team-cf-brisamar",
      "played": 6,
      "won": 4,
      "drawn": 1,
      "lost": 1,
      "goalsFor": 11,
      "goalsAgainst": 6,
      "points": 13,
      "zone": "playoff",
      "form": [
        "V",
        "D",
        "V",
        "V",
        "V"
      ]
    },
    {
      "position": 3,
      "teamId": "team-cd-sotoverde",
      "played": 6,
      "won": 3,
      "drawn": 1,
      "lost": 2,
      "goalsFor": 11,
      "goalsAgainst": 5,
      "points": 10,
      "zone": "playoff",
      "form": [
        "D",
        "E",
        "D",
        "V",
        "V"
      ]
    },
    {
      "position": 4,
      "teamId": "team-real-castelnuevo",
      "played": 7,
      "won": 1,
      "drawn": 4,
      "lost": 2,
      "goalsFor": 6,
      "goalsAgainst": 9,
      "points": 7,
      "zone": "permanencia",
      "form": [
        "E",
        "E",
        "D",
        "D",
        "E"
      ]
    },
    {
      "position": 5,
      "teamId": "team-ud-lagunilla",
      "played": 6,
      "won": 1,
      "drawn": 2,
      "lost": 3,
      "goalsFor": 4,
      "goalsAgainst": 10,
      "points": 5,
      "zone": "permanencia",
      "form": [
        "D",
        "V",
        "E",
        "D",
        "D"
      ]
    },
    {
      "position": 6,
      "teamId": "team-atletico-serranova",
      "played": 7,
      "won": 1,
      "drawn": 1,
      "lost": 5,
      "goalsFor": 3,
      "goalsAgainst": 14,
      "points": 4,
      "zone": "descenso",
      "form": [
        "D",
        "V",
        "D",
        "D",
        "E"
      ]
    }
  ],
  "comp-regional-valencia": [
    {
      "position": 1,
      "teamId": "team-ud-fuenllana",
      "played": 6,
      "won": 5,
      "drawn": 1,
      "lost": 0,
      "goalsFor": 12,
      "goalsAgainst": 2,
      "points": 16,
      "zone": "ascenso",
      "form": [
        "V",
        "V",
        "E",
        "V",
        "V"
      ]
    },
    {
      "position": 2,
      "teamId": "team-ad-pozonegro",
      "played": 7,
      "won": 3,
      "drawn": 2,
      "lost": 2,
      "goalsFor": 8,
      "goalsAgainst": 10,
      "points": 11,
      "zone": "playoff",
      "form": [
        "D",
        "V",
        "D",
        "V",
        "V"
      ]
    },
    {
      "position": 3,
      "teamId": "team-real-cabodoro",
      "played": 6,
      "won": 2,
      "drawn": 2,
      "lost": 2,
      "goalsFor": 7,
      "goalsAgainst": 6,
      "points": 8,
      "zone": "playoff",
      "form": [
        "D",
        "E",
        "E",
        "V",
        "D"
      ]
    },
    {
      "position": 4,
      "teamId": "team-cd-arroyomar",
      "played": 6,
      "won": 2,
      "drawn": 1,
      "lost": 3,
      "goalsFor": 7,
      "goalsAgainst": 8,
      "points": 7,
      "zone": "permanencia",
      "form": [
        "V",
        "E",
        "D",
        "D",
        "V"
      ]
    },
    {
      "position": 5,
      "teamId": "team-cf-altavista",
      "played": 6,
      "won": 0,
      "drawn": 4,
      "lost": 2,
      "goalsFor": 3,
      "goalsAgainst": 6,
      "points": 4,
      "zone": "permanencia",
      "form": [
        "D",
        "E",
        "E",
        "E",
        "D"
      ]
    },
    {
      "position": 6,
      "teamId": "team-ud-espinares",
      "played": 7,
      "won": 0,
      "drawn": 4,
      "lost": 3,
      "goalsFor": 4,
      "goalsAgainst": 9,
      "points": 4,
      "zone": "descenso",
      "form": [
        "E",
        "E",
        "E",
        "D",
        "D"
      ]
    }
  ]
};

export const topScorers: TopScorer[] = [
  {
    "playerId": "player-sergio-gil-cd-robledo",
    "goals": 4,
    "matches": 7
  },
  {
    "playerId": "player-karim-ruiz-cd-riofrio",
    "goals": 4,
    "matches": 9
  },
  {
    "playerId": "player-thiago-leon-ad-montereal",
    "goals": 4,
    "matches": 8
  },
  {
    "playerId": "player-tomas-martinez-cf-cantosol",
    "goals": 3,
    "matches": 6
  },
  {
    "playerId": "player-nico-iglesias-ad-montereal",
    "goals": 3,
    "matches": 8
  },
  {
    "playerId": "player-joel-lopez-cd-sotoverde",
    "goals": 3,
    "matches": 5
  },
  {
    "playerId": "player-yeray-blanco-ud-lagunilla",
    "goals": 3,
    "matches": 6
  },
  {
    "playerId": "player-pablo-traore-atletico-serranova",
    "goals": 3,
    "matches": 6
  },
  {
    "playerId": "player-sergio-martinez-cf-altavista",
    "goals": 3,
    "matches": 5
  },
  {
    "playerId": "player-anderson-garcia-real-cabodoro",
    "goals": 3,
    "matches": 6
  }
];

export const news: NewsArticle[] = [
  {
    "id": "news-1",
    "slug": "real-almenara-firma-una-victoria-de-prestigio-ante-ud-vegalba-2-0",
    "title": "Real Almenara firma una victoria de prestigio ante UD Vegalba (2-0)",
    "excerpt": "Resumen de la jornada 10 de Preferente Madrid · Grupo Centro, disputada en Ciudad de Almenara del Monte.",
    "body": [
      "El Ciudad de Almenara del Monte fue testigo de un partido intenso entre Real Almenara y UD Vegalba correspondiente a la jornada 10 de Preferente Madrid · Grupo Centro.",
      "El marcador final, 2-0, refleja el equilibrio de fuerzas mostrado durante los noventa minutos, con ocasiones claras en ambas áreas.",
      "Real Almenara supo aprovechar mejor sus opciones y se lleva tres puntos que le permiten seguir escalando en la clasificación de Preferente Centro.",
      "Ambos técnicos coincidieron tras el encuentro en la importancia de seguir sumando minutos de competición de cara a las próximas jornadas."
    ],
    "category": "Crónica",
    "author": "Marta Iglesias",
    "date": "2026-05-24",
    "tags": [
      "Preferente Centro",
      "Almenara",
      "Vegalba"
    ],
    "competitionId": "comp-preferente-madrid",
    "teamId": "team-real-almenara",
    "featured": true,
    "readTime": 3,
    "views": 7605,
    "hue": 1
  },
  {
    "id": "news-2",
    "slug": "atletico-serranova-y-real-castelnuevo-reparten-puntos-en-un-duelo-igualado-1-1",
    "title": "Atlético Serranova y Real Castelnuevo reparten puntos en un duelo igualado (1-1)",
    "excerpt": "Resumen de la jornada 7 de Tercera RFEF · Grupo Sur, disputada en Ciudad de Serranova.",
    "body": [
      "El Ciudad de Serranova fue testigo de un partido intenso entre Atlético Serranova y Real Castelnuevo correspondiente a la jornada 7 de Tercera RFEF · Grupo Sur.",
      "El marcador final, 1-1, refleja el equilibrio de fuerzas mostrado durante los noventa minutos, con ocasiones claras en ambas áreas.",
      "El reparto de puntos deja sensaciones encontradas en ambos vestuarios, conscientes de que el calendario aprieta de cara al tramo final de la temporada.",
      "Ambos técnicos coincidieron tras el encuentro en la importancia de seguir sumando minutos de competición de cara a las próximas jornadas."
    ],
    "category": "Crónica",
    "author": "Carmen Vidal",
    "date": "2026-05-21",
    "tags": [
      "Tercera Sur",
      "Serranova",
      "Castelnuevo"
    ],
    "competitionId": "comp-tercera-sur",
    "teamId": "team-atletico-serranova",
    "featured": false,
    "readTime": 2,
    "views": 9372,
    "hue": 20
  },
  {
    "id": "news-3",
    "slug": "ad-pozonegro-firma-una-victoria-de-prestigio-ante-ud-espinares-2-3",
    "title": "AD Pozonegro firma una victoria de prestigio ante UD Espinares (2-3)",
    "excerpt": "Resumen de la jornada 7 de Regional Preferente · Comunitat Valenciana, disputada en Ciudad de Espinares.",
    "body": [
      "El Ciudad de Espinares fue testigo de un partido intenso entre UD Espinares y AD Pozonegro correspondiente a la jornada 7 de Regional Preferente · Comunitat Valenciana.",
      "El marcador final, 2-3, refleja el equilibrio de fuerzas mostrado durante los noventa minutos, con ocasiones claras en ambas áreas.",
      "AD Pozonegro supo aprovechar mejor sus opciones y se lleva tres puntos que le permiten seguir escalando en la clasificación de Regional Preferente.",
      "Ambos técnicos coincidieron tras el encuentro en la importancia de seguir sumando minutos de competición de cara a las próximas jornadas."
    ],
    "category": "Crónica",
    "author": "Pablo Soriano",
    "date": "2026-05-20",
    "tags": [
      "Regional Preferente",
      "Espinares",
      "Pozonegro"
    ],
    "competitionId": "comp-regional-valencia",
    "teamId": "team-ad-pozonegro",
    "featured": false,
    "readTime": 4,
    "views": 5890,
    "hue": 320
  },
  {
    "id": "news-4",
    "slug": "atletico-pinarejo-renueva-a-tomas-gomez-hasta-2027",
    "title": "Atlético Pinarejo renueva a Tomás Gómez hasta 2027",
    "excerpt": "El club asegura la continuidad de una de sus piezas clave ampliando su contrato dos temporadas más.",
    "body": [
      "El Atlético Pinarejo ha hecho oficial la renovación de Tomás Gómez, de 21 años, que ampliará su vinculación con la entidad hasta junio de 2027.",
      "El centrocampista suma esta temporada 3 partidos disputados, con 0 goles y 0 asistencias, consolidándose como una pieza importante en el esquema de Raúl Gallego.",
      "Desde el club destacan el compromiso mostrado por el jugador y su buena conexión con la afición de Pinarejo Alto, que lo ha convertido en uno de los favoritos en Municipal Pinarejo Alto."
    ],
    "category": "Fichajes",
    "author": "Pablo Soriano",
    "date": "2026-05-17",
    "tags": [
      "Preferente Centro",
      "Pinarejo",
      "Renovación"
    ],
    "competitionId": "comp-preferente-madrid",
    "teamId": "team-atletico-pinarejo",
    "featured": false,
    "readTime": 2,
    "views": 3229,
    "hue": 272
  },
  {
    "id": "news-5",
    "slug": "cd-penablanca-renueva-a-cristiano-lozano-hasta-2027",
    "title": "CD Peñablanca renueva a Cristiano Lozano hasta 2027",
    "excerpt": "El club asegura la continuidad de una de sus piezas clave ampliando su contrato dos temporadas más.",
    "body": [
      "El CD Peñablanca ha hecho oficial la renovación de Cristiano Lozano, de 34 años, que ampliará su vinculación con la entidad hasta junio de 2027.",
      "El portero suma esta temporada 4 partidos disputados, con 0 goles y 0 asistencias, consolidándose como una pieza importante en el esquema de Daniel Cuesta.",
      "Desde el club destacan el compromiso mostrado por el jugador y su buena conexión con la afición de Peñablanca, que lo ha convertido en uno de los favoritos en Estadio Peñablanca."
    ],
    "category": "Fichajes",
    "author": "Lucía Fernández",
    "date": "2026-05-14",
    "tags": [
      "Tercera Sur",
      "Peñablanca",
      "Renovación"
    ],
    "competitionId": "comp-tercera-sur",
    "teamId": "team-cd-penablanca",
    "featured": false,
    "readTime": 5,
    "views": 5535,
    "hue": 276
  },
  {
    "id": "news-6",
    "slug": "cf-altavista-renueva-a-kwame-nunez-hasta-2027",
    "title": "CF Altavista renueva a Kwame Núñez hasta 2027",
    "excerpt": "El club asegura la continuidad de una de sus piezas clave ampliando su contrato dos temporadas más.",
    "body": [
      "El CF Altavista ha hecho oficial la renovación de Kwame Núñez, de 29 años, que ampliará su vinculación con la entidad hasta junio de 2027.",
      "El centrocampista suma esta temporada 1 partidos disputados, con 0 goles y 1 asistencias, consolidándose como una pieza importante en el esquema de Fernando Pascual.",
      "Desde el club destacan el compromiso mostrado por el jugador y su buena conexión con la afición de Altavista del Túria, que lo ha convertido en uno de los favoritos en Estadio Altavista del Túria."
    ],
    "category": "Fichajes",
    "author": "Diego Andrade",
    "date": "2026-05-11",
    "tags": [
      "Regional Preferente",
      "Altavista",
      "Renovación"
    ],
    "competitionId": "comp-regional-valencia",
    "teamId": "team-cf-altavista",
    "featured": false,
    "readTime": 5,
    "views": 6965,
    "hue": 294
  },
  {
    "id": "news-7",
    "slug": "sergio-gil-el-gol-es-una-consecuencia-del-trabajo-del-equipo",
    "title": "Sergio Gil: \"El gol es una consecuencia del trabajo del equipo\"",
    "excerpt": "Hablamos con el máximo goleador de Preferente Centro sobre su gran temporada con el CD Robledo.",
    "body": [
      "Con 4 goles esta temporada, Sergio Gil se ha situado como una de las grandes referencias ofensivas de Preferente Madrid · Grupo Centro.",
      "\"Cada gol es fruto del trabajo colectivo, el equipo me pone en muy buenas condiciones para definir\", explica el delantero del CD Robledo.",
      "El jugador, de 31 años, reconoce que el objetivo del grupo es pelear por estar arriba en la tabla: \"Sabemos que el nivel de Preferente Centro es muy alto, pero tenemos plantilla para soñar con el ascenso\".",
      "Sobre su evolución personal, añade: \"He mejorado mucho en el juego sin balón, eso me permite aparecer más veces en zonas de finalización\"."
    ],
    "category": "Entrevista",
    "author": "Diego Andrade",
    "date": "2026-05-09",
    "tags": [
      "Preferente Centro",
      "Robledo",
      "Goleadores"
    ],
    "competitionId": "comp-preferente-madrid",
    "teamId": "team-cd-robledo",
    "featured": true,
    "readTime": 5,
    "views": 9001,
    "hue": 25
  },
  {
    "id": "news-8",
    "slug": "la-cantera-del-ud-vallarena-motor-de-futuro-en-vallarena-del-tajo",
    "title": "La cantera del UD Vallarena, motor de futuro en Vallarena del Tajo",
    "excerpt": "El club refuerza su apuesta por el fútbol base con nuevas categorías y más de cien jóvenes federados esta temporada.",
    "body": [
      "El proyecto de cantera del UD Vallarena continúa creciendo con la incorporación de dos nuevos equipos en categoría benjamín, hasta alcanzar las once categorías inferiores.",
      "\"Queremos que cualquier niño o niña de Vallarena del Tajo tenga la posibilidad de jugar al fútbol federado en nuestras instalaciones\", explica el coordinador de fútbol base del club.",
      "Varios canteranos ya han dado el salto al primer equipo esta temporada, una tendencia que el club quiere consolidar en los próximos años."
    ],
    "category": "Cantera",
    "author": "Lucía Fernández",
    "date": "2026-05-08",
    "tags": [
      "Vallarena",
      "Fútbol base"
    ],
    "teamId": "team-ud-vallarena",
    "featured": false,
    "readTime": 4,
    "views": 7933,
    "hue": 43
  },
  {
    "id": "news-9",
    "slug": "la-federacion-actualiza-el-protocolo-de-horarios-para-la-recta-final-de-temporad",
    "title": "La federación actualiza el protocolo de horarios para la recta final de temporada",
    "excerpt": "Los clubes deberán comunicar con 72 horas de antelación cualquier solicitud de cambio de horario o campo.",
    "body": [
      "Con el tramo decisivo de la competición a la vuelta de la esquina, el comité de competición ha recordado a los clubes el protocolo vigente para solicitar cambios de horario o de terreno de juego.",
      "La medida busca dar mayor estabilidad al calendario y facilitar la organización tanto a los equipos como a los aficionados que siguen los desplazamientos.",
      "Desde la organización se insiste en la importancia de la deportividad en una fase de la temporada en la que se deciden ascensos, playoffs y descensos."
    ],
    "category": "Actualidad",
    "author": "Pablo Soriano",
    "date": "2026-05-06",
    "tags": [
      "Federación",
      "Calendario"
    ],
    "featured": false,
    "readTime": 3,
    "views": 8142,
    "hue": 80
  },
  {
    "id": "news-10",
    "slug": "radiografia-del-derbi-real-almenara-cd-riofrio-la-rivalidad-que-paraliza-la-coma",
    "title": "Radiografía del derbi: Real Almenara - CD Riofrío, la rivalidad que paraliza la comarca",
    "excerpt": "Repasamos la historia reciente de un duelo que llena las gradas de Ciudad de Almenara del Monte cada temporada.",
    "body": [
      "Pocos partidos despiertan tanta expectación en Preferente Centro como el que enfrenta a Real Almenara y CD Riofrío, separados por apenas unos kilómetros.",
      "La rivalidad, alimentada durante décadas, convierte cada cita en un examen de carácter además de fútbol, con las gradas de Ciudad de Almenara del Monte habitualmente al límite de su aforo.",
      "Ambas aficiones coinciden en que, más allá del resultado, el derbi es una fiesta del fútbol regional que une a toda la comarca."
    ],
    "category": "Reportaje",
    "author": "Lucía Fernández",
    "date": "2026-05-04",
    "tags": [
      "Preferente Centro",
      "Almenara",
      "Riofrío",
      "Derbi"
    ],
    "competitionId": "comp-preferente-madrid",
    "teamId": "team-real-almenara",
    "featured": false,
    "readTime": 3,
    "views": 5236,
    "hue": 259
  },
  {
    "id": "news-11",
    "slug": "baja-sensible-en-el-cd-robledo-lucas-serrano-se-perdera-varias-semanas",
    "title": "Baja sensible en el CD Robledo: Lucas Serrano se perderá varias semanas",
    "excerpt": "El cuerpo técnico confirma una lesión muscular que apartará al jugador de los terrenos de juego en plena lucha por los objetivos.",
    "body": [
      "El CD Robledo ha confirmado que Lucas Serrano sufre una sobrecarga muscular que le obligará a parar varias semanas, justo en un momento decisivo de la temporada.",
      "El club no quiere precisar un plazo exacto de recuperación y prefiere \"no arriesgar\" con un jugador importante en la rotación de Daniel Lara.",
      "Mientras tanto, el resto de la plantilla deberá dar un paso adelante para suplir su ausencia en las próximas jornadas."
    ],
    "category": "Actualidad",
    "author": "Diego Andrade",
    "date": "2026-05-02",
    "tags": [
      "Robledo",
      "Lesiones"
    ],
    "teamId": "team-cd-robledo",
    "featured": false,
    "readTime": 5,
    "views": 1148,
    "hue": 280
  },
  {
    "id": "news-12",
    "slug": "previa-ud-lagunilla-recibe-a-cf-brisamar-en-un-duelo-directo-por-la-zona-alta",
    "title": "Previa: UD Lagunilla recibe a CF Brisamar en un duelo directo por la zona alta",
    "excerpt": "Cita destacada de la jornada 7 de Tercera Sur, con ambos equipos necesitados de puntos.",
    "body": [
      "El Municipal Lagunilla del Río acoge el 2025-10-26 (16:00h) un partido con mucho en juego entre UD Lagunilla y CF Brisamar.",
      "UD Lagunilla llega con la intención de aprovechar su condición de local para acercarse a las plazas de ascenso, mientras que CF Brisamar buscará dar la sorpresa lejos de casa.",
      "Se espera un ambiente notable en las gradas, en un encuentro que puede marcar el devenir de ambos clubes en la recta final de 2025/2026."
    ],
    "category": "Crónica",
    "author": "Pablo Soriano",
    "date": "2026-05-01",
    "tags": [
      "Tercera Sur",
      "Lagunilla",
      "Brisamar",
      "Previa"
    ],
    "competitionId": "comp-tercera-sur",
    "teamId": "team-ud-lagunilla",
    "featured": false,
    "readTime": 3,
    "views": 8790,
    "hue": 241
  }
];
