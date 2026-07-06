"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, Trophy, Newspaper, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/partidos", label: "Partidos", icon: CalendarDays },
  { href: "/competiciones", label: "Competiciones", icon: Trophy },
  { href: "/noticias", label: "Noticias", icon: Newspaper },
  { href: "/siguiendo", label: "Siguiendo", icon: Heart },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-stretch border-t border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/80 md:hidden">
      {LINKS.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-0.5 text-[11px] font-medium",
              active ? "text-brand-turquoise" : "text-muted-foreground"
            )}
          >
            <link.icon className={cn("size-5", active && "fill-brand-turquoise/15")} />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
