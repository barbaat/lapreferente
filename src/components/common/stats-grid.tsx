import { cn } from "@/lib/utils";

export interface StatItem {
  label: string;
  value: string | number;
  icon?: React.ElementType;
}

export function StatsGrid({ items, className }: { items: StatItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4", className)}>
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center justify-center gap-1 bg-card px-3 py-4 text-center">
          {item.icon && <item.icon className="size-4 text-brand-turquoise" />}
          <span className="font-heading text-2xl font-bold tabular-nums">{item.value}</span>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
