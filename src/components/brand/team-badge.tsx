import { cn } from "@/lib/utils";

function initialsFromName(name: string) {
  const cleaned = name.replace(/^(CD|UD|CF|AD|Real|Atlético)\s/, "");
  const parts = cleaned.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

const SIZES = {
  xs: "h-6 w-6 text-[9px]",
  sm: "h-8 w-8 text-[10px]",
  md: "h-11 w-11 text-xs",
  lg: "h-16 w-16 text-base",
  xl: "h-24 w-24 text-2xl",
};

export function TeamBadge({
  name,
  colors,
  size = "md",
  className,
}: {
  name: string;
  colors: { primary: string; secondary: string };
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const initials = initialsFromName(name);
  return (
    <svg
      viewBox="0 0 100 110"
      className={cn(SIZES[size], "shrink-0 drop-shadow-sm", className)}
      role="img"
      aria-label={name}
    >
      <path
        d="M50 2 L96 18 V52 C96 80 76 100 50 108 C24 100 4 80 4 52 V18 Z"
        fill={colors.primary}
        stroke={colors.secondary}
        strokeWidth="3"
      />
      <path
        d="M50 14 L86 26 V52 C86 73 70 89 50 96 C30 89 14 73 14 52 V26 Z"
        fill={colors.secondary}
        opacity="0.12"
      />
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="var(--font-heading-oswald), sans-serif"
        fontWeight="700"
        fontSize="34"
        fill={colors.secondary}
      >
        {initials}
      </text>
    </svg>
  );
}
