import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompetitionHeader } from "@/components/competitions/competition-header";
import { CompetitionTabs } from "@/components/competitions/competition-tabs";
import { SponsorStrip } from "@/components/ads/ad-banner";
import {
  competitions,
  getCompetitionBySlug,
  getCompetitionTopScorers,
  getMatchesByCompetition,
  getNewsByCompetition,
  getStandingsByCompetition,
  getTeamsByCompetition,
} from "@/lib/mock";

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);
  return { title: competition ? `${competition.name} · La Jornada` : "Competición · La Jornada" };
}

export default async function CompetitionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);
  if (!competition) notFound();

  const standings = getStandingsByCompetition(competition.id);
  const matches = getMatchesByCompetition(competition.id);
  const teams = getTeamsByCompetition(competition.id);
  const topScorers = getCompetitionTopScorers(competition.id);
  const news = getNewsByCompetition(competition.id);

  return (
    <div>
      <CompetitionHeader competition={competition} />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        <SponsorStrip name={competition.sponsor.name} tagline={competition.sponsor.tagline} />
        <CompetitionTabs
          competition={competition}
          standings={standings}
          matches={matches}
          teams={teams}
          topScorers={topScorers}
          news={news}
        />
      </div>
    </div>
  );
}
