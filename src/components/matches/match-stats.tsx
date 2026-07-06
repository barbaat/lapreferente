import type { MatchStat } from "@/lib/mock";

export function MatchStats({ stats }: { stats: MatchStat[] }) {
  if (stats.length === 0) return null;
  return (
    <div className="space-y-4">
      {stats.map((stat) => {
        const total = stat.home + stat.away || 1;
        const homePct = (stat.home / total) * 100;
        return (
          <div key={stat.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm font-medium tabular-nums">
              <span>{stat.home}</span>
              <span className="text-xs font-normal text-muted-foreground">{stat.label}</span>
              <span>{stat.away}</span>
            </div>
            <div className="flex h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="bg-brand-navy" style={{ width: `${homePct}%` }} />
              <div className="bg-brand-turquoise" style={{ width: `${100 - homePct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
