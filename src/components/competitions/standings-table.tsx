import Link from "next/link";
import { TeamBadge } from "@/components/brand/team-badge";
import { getTeamById, type StandingRow } from "@/lib/mock";
import { cn } from "@/lib/utils";
import { ZONE_DOT_CLASS, ZONE_LABEL } from "@/lib/format";

function FormDot({ result }: { result: "V" | "E" | "D" }) {
  return (
    <span
      className={cn(
        "flex size-5 items-center justify-center rounded-full text-[10px] font-bold text-white",
        result === "V" && "bg-brand-green",
        result === "E" && "bg-brand-amber",
        result === "D" && "bg-brand-red"
      )}
    >
      {result}
    </span>
  );
}

export function StandingsTable({
  rows,
  highlightTeamId,
  compact = false,
}: {
  rows: StandingRow[];
  highlightTeamId?: string;
  compact?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60 text-left text-xs text-muted-foreground">
              <th className="w-10 py-2 pl-3 font-medium">#</th>
              <th className="py-2 pl-1 font-medium">Equipo</th>
              <th className="w-10 py-2 text-center font-medium">PJ</th>
              <th className="w-10 py-2 text-center font-medium">G</th>
              <th className="w-10 py-2 text-center font-medium">E</th>
              <th className="w-10 py-2 text-center font-medium">P</th>
              <th className="w-14 py-2 text-center font-medium">GF-GC</th>
              <th className="w-10 py-2 text-center font-medium">DG</th>
              <th className="w-10 py-2 text-center font-medium">Pts</th>
              {!compact && <th className="w-32 py-2 pr-3 text-center font-medium">Forma</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const team = getTeamById(row.teamId)!;
              const gd = row.goalsFor - row.goalsAgainst;
              return (
                <tr
                  key={row.teamId}
                  className={cn(
                    "border-b border-border last:border-0 hover:bg-secondary/40",
                    highlightTeamId === row.teamId && "bg-brand-turquoise/5"
                  )}
                >
                  <td className="py-2 pl-3">
                    <div className="flex items-center gap-1.5">
                      <span className={cn("h-4 w-1 rounded-full", ZONE_DOT_CLASS[row.zone])} title={ZONE_LABEL[row.zone]} />
                      <span className="tabular-nums">{row.position}</span>
                    </div>
                  </td>
                  <td className="py-2 pl-1">
                    <Link href={`/equipos/${team.slug}`} className="flex items-center gap-2 hover:text-brand-turquoise">
                      <TeamBadge name={team.name} colors={team.colors} size="xs" />
                      <span className="truncate font-medium">{compact ? team.shortName : team.name}</span>
                    </Link>
                  </td>
                  <td className="py-2 text-center tabular-nums text-muted-foreground">{row.played}</td>
                  <td className="py-2 text-center tabular-nums text-muted-foreground">{row.won}</td>
                  <td className="py-2 text-center tabular-nums text-muted-foreground">{row.drawn}</td>
                  <td className="py-2 text-center tabular-nums text-muted-foreground">{row.lost}</td>
                  <td className="py-2 text-center tabular-nums text-muted-foreground">
                    {row.goalsFor}-{row.goalsAgainst}
                  </td>
                  <td className="py-2 text-center tabular-nums">{gd > 0 ? `+${gd}` : gd}</td>
                  <td className="py-2 text-center font-heading font-bold tabular-nums">{row.points}</td>
                  {!compact && (
                    <td className="py-2 pr-3">
                      <div className="flex justify-center gap-1">
                        {row.form.map((r, i) => (
                          <FormDot key={i} result={r} />
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border bg-secondary/40 px-3 py-2 text-[11px] text-muted-foreground">
        {(["ascenso", "playoff", "descenso"] as const).map((zone) => (
          <span key={zone} className="flex items-center gap-1.5">
            <span className={cn("h-2.5 w-2.5 rounded-full", ZONE_DOT_CLASS[zone])} />
            {ZONE_LABEL[zone]}
          </span>
        ))}
      </div>
    </div>
  );
}
