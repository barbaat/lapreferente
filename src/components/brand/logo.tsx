import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0">
        <rect width="40" height="40" rx="9" fill="#0b2545" />
        <path
          d="M20 8 L30 14 V26 L20 32 L10 26 V14 Z"
          fill="none"
          stroke="#0fb5ae"
          strokeWidth="2.4"
        />
        <circle cx="20" cy="20" r="4.2" fill="#0fb5ae" />
      </svg>
      <span className="font-heading text-xl font-bold tracking-tight text-brand-navy">
        La Jornada
      </span>
    </Link>
  );
}
