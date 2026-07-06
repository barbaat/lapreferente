import { cn } from "@/lib/utils";
import { Newspaper } from "lucide-react";

export function NewsImage({
  hue,
  className,
  iconClassName,
}: {
  hue: number;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 45% 24%), hsl(${(hue + 60) % 360} 55% 14%))`,
      }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 14px)",
        }}
      />
      <Newspaper className={cn("relative h-8 w-8 text-white/70", iconClassName)} strokeWidth={1.5} />
    </div>
  );
}
