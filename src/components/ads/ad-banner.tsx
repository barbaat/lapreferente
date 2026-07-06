import { Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  horizontal: "h-20 sm:h-24 w-full",
  square: "aspect-square w-full",
  sidebar: "h-64 w-full",
  inline: "h-16 w-full",
};

export function AdBanner({
  variant = "horizontal",
  label = "Publicidad",
  sponsor,
  className,
}: {
  variant?: keyof typeof VARIANTS;
  label?: string;
  sponsor?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border bg-secondary/50 text-center",
        VARIANTS[variant],
        className
      )}
    >
      <div className="flex items-center gap-1.5 text-muted-foreground/70">
        <Megaphone className="size-3.5" />
        <span className="text-[10px] font-semibold uppercase tracking-widest">{label}</span>
      </div>
      {sponsor && <span className="text-sm font-medium text-muted-foreground">{sponsor}</span>}
    </div>
  );
}

export function SponsorStrip({ name, tagline }: { name: string; tagline: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-border bg-secondary/40 px-4 py-2.5 text-xs">
      <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wide text-muted-foreground/70">
        <Megaphone className="size-3.5" /> Contenido patrocinado
      </span>
      <span className="font-medium text-foreground">{name}</span>
      <span className="hidden text-muted-foreground sm:inline">{tagline}</span>
    </div>
  );
}
