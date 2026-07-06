import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { StandingsTable } from "@/components/competitions/standings-table";
import { competitions, getStandingsByCompetition } from "@/lib/mock";

export const metadata: Metadata = { title: "Clasificaciones · La Jornada" };

export default function StandingsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-8 sm:px-6">
      <div>
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Clasificaciones</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Las tablas actualizadas de todas las competiciones de La Jornada.
        </p>
      </div>

      {competitions.map((competition) => (
        <section key={competition.id}>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-bold">{competition.name}</h2>
              <p className="text-xs text-muted-foreground">
                {competition.category} · Jornada {competition.currentMatchday}/{competition.totalMatchdays}
              </p>
            </div>
            <Link
              href={`/competiciones/${competition.slug}`}
              className="flex items-center gap-1 text-sm font-medium text-brand-turquoise hover:underline"
            >
              Ver competición <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <StandingsTable rows={getStandingsByCompetition(competition.id)} />
        </section>
      ))}
    </div>
  );
}
