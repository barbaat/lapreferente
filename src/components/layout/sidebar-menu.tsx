"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { TerritorySelector } from "@/components/layout/territory-selector";
import {
  Home,
  CalendarDays,
  Trophy,
  ListOrdered,
  Newspaper,
  Shield,
  Heart,
  Search,
} from "lucide-react";

const LINKS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/partidos", label: "Partidos", icon: CalendarDays },
  { href: "/competiciones", label: "Competiciones", icon: Trophy },
  { href: "/clasificaciones", label: "Clasificaciones", icon: ListOrdered },
  { href: "/noticias", label: "Noticias", icon: Newspaper },
  { href: "/equipos", label: "Equipos", icon: Shield },
  { href: "/siguiendo", label: "Siguiendo", icon: Heart },
  { href: "/buscar", label: "Buscador", icon: Search },
];

export function SidebarMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <link.icon className="size-4 text-brand-turquoise" />
              {link.label}
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">Territorio</p>
          <TerritorySelector className="w-full" />
          <p className="px-1 pt-2 text-[11px] text-muted-foreground">
            Demo visual · Datos ficticios
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
