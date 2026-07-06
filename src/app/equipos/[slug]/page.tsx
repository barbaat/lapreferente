import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamHeader } from "@/components/teams/team-header";
import { TeamTabs } from "@/components/teams/team-tabs";
import { SponsorStrip } from "@/components/ads/ad-banner";
import {
  getMatchesByTeam,
  getNewsByTeam,
  getSquadGroupedByPosition,
  getStandingsByCompetition,
  getTeamBySlug,
  getTeamTopScorers,
  teams,
} from "@/lib/mock";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  return { title: team ? `${team.name} · La Jornada` : "Equipo · La Jornada" };
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) notFound();

  const squad = getSquadGroupedByPosition(team.id);
  const matches = getMatchesByTeam(team.id);
  const standings = getStandingsByCompetition(team.competitionId);
  const news = getNewsByTeam(team.id);
  const topScorers = getTeamTopScorers(team.id);

  return (
    <div>
      <TeamHeader team={team} />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        <SponsorStrip name={team.sponsor.name} tagline={team.sponsor.tagline} />
        <TeamTabs team={team} squad={squad} matches={matches} standings={standings} news={news} topScorers={topScorers} />
      </div>
    </div>
  );
}
