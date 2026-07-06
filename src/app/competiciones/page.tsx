import { Suspense } from "react";
import type { Metadata } from "next";
import { CompetitionsExplorer } from "@/components/competitions/competitions-explorer";

export const metadata: Metadata = { title: "Competiciones · La Jornada" };

export default function CompetitionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold sm:text-3xl">Competiciones</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Explora el fútbol regional y aficionado por comunidad, provincia y categoría.
        </p>
      </div>
      <Suspense>
        <CompetitionsExplorer />
      </Suspense>
    </div>
  );
}
