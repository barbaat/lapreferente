import type { Metadata } from "next";
import { TeamsExplorer } from "@/components/teams/teams-explorer";

export const metadata: Metadata = { title: "Equipos · La Jornada" };

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Equipos</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Todos los clubes que compiten esta temporada en La Jornada.
        </p>
      </div>
      <TeamsExplorer />
    </div>
  );
}
