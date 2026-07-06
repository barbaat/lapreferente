import { cn } from "@/lib/utils";

const SIZES = {
  sm: "h-9 w-9 text-[10px]",
  md: "h-12 w-12 text-xs",
  lg: "h-20 w-20 text-lg",
  xl: "h-32 w-32 text-3xl",
};

export function PlayerAvatar({
  name,
  hue,
  size = "md",
  className,
}: {
  name: string;
  hue: number;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        SIZES[size],
        "flex shrink-0 items-center justify-center rounded-full font-heading font-semibold text-white ring-2 ring-white",
        className
      )}
      style={{
        background: `linear-gradient(145deg, hsl(${hue} 55% 32%), hsl(${(hue + 40) % 360} 60% 22%))`,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
