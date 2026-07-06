"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchdayPicker } from "@/components/matches/matchday-picker";
import { MatchCard } from "@/components/matches/match-card";
import { EmptyState } from "@/components/common/empty-state";
import { CalendarX2 } from "lucide-react";
import { competitions, matches as allMatches } from "@/lib/mock";

export function MatchesExplorer() {
  const [competitionId, setCompetitionId] = useState(competitions[0].id);
  const competition = competitions.find((c) => c.id === competitionId)!;
  const [matchday, setMatchday] = useState(competition.currentMatchday);

  function onCompetitionChange(id: string) {
    const comp = competitions.find((c) => c.id === id)!;
    setCompetitionId(id);
    setMatchday(comp.currentMatchday);
  }

  const matchdayMatches = allMatches
    .filter((m) => m.competitionId === competitionId && m.matchday === matchday)
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="space-y-5">
      <Tabs value={competitionId} onValueChange={(v) => v && onCompetitionChange(v)}>
        <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
          {competitions.map((c) => (
            <TabsTrigger key={c.id} value={c.id}>{c.shortName}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <MatchdayPicker matchday={matchday} total={competition.totalMatchdays} onChange={setMatchday} />

      {matchdayMatches.length === 0 ? (
        <EmptyState icon={CalendarX2} title="Sin partidos" description="No hay partidos programados para esta jornada." />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {matchdayMatches.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      )}
    </div>
  );
}
