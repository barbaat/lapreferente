import type { Metadata } from "next";
import { MatchesExplorer } from "@/components/matches/matches-explorer";

export const metadata: Metadata = { title: "Partidos · La Jornada" };

export default function MatchesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Partidos</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Resultados y calendario jornada a jornada de todas las competiciones.
        </p>
      </div>
      <MatchesExplorer />
    </div>
  );
}
