import Link from "next/link";
import { MapPin, Shield, UserCircle2 } from "lucide-react";
import { TeamBadge } from "@/components/brand/team-badge";
import { FollowButton } from "@/components/common/follow-button";
import { getCompetitionById, getTeamForm, getTeamPosition, type Team } from "@/lib/mock";
import { cn } from "@/lib/utils";

export function TeamHeader({ team }: { team: Team }) {
  const competition = getCompetitionById(team.competitionId);
  const standing = getTeamPosition(team.id);
  const form = getTeamForm(team.id);

  return (
    <div className="border-b border-border bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <TeamBadge name={team.name} colors={team.colors} size="xl" />
          <div>
            <h1 className="font-heading text-2xl font-bold sm:text-3xl">{team.name}</h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-white/70 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {team.city}
              </span>
              {competition && (
                <Link href={`/competiciones/${competition.slug}`} className="flex items-center gap-1.5 hover:text-white">
                  <Shield className="size-3.5" /> {competition.shortName}
                </Link>
              )}
              <span className="flex items-center gap-1.5">
                <UserCircle2 className="size-3.5" /> {team.coach.name}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <FollowButton id={team.id} type="team" className="bg-white/10 text-white hover:bg-white/20 border-white/20" />
          {standing && (
            <div className="flex items-center gap-3 text-sm">
              <span className="font-heading text-2xl font-bold text-brand-turquoise">{standing.position}.º</span>
              <div className="flex gap-1">
                {form.map((r, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex size-5 items-center justify-center rounded-full text-[10px] font-bold",
                      r === "V" && "bg-brand-green",
                      r === "E" && "bg-brand-amber",
                      r === "D" && "bg-brand-red"
                    )}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
