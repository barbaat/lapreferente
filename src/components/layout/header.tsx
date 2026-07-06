"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { TerritorySelector } from "@/components/layout/territory-selector";
import { SearchDialog } from "@/components/layout/search-dialog";
import { SidebarMenu } from "@/components/layout/sidebar-menu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/partidos", label: "Partidos" },
  { href: "/competiciones", label: "Competiciones" },
  { href: "/clasificaciones", label: "Clasificaciones" },
  { href: "/noticias", label: "Noticias" },
  { href: "/equipos", label: "Equipos" },
];

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/80">
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-1 text-xs sm:px-6">
          <span className="hidden sm:inline text-white/70">
            Fútbol regional y aficionado · {NAV_LINKS.length} secciones
          </span>
          <span className="font-medium tracking-wide text-brand-turquoise">
            Demo visual · Datos ficticios
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="size-5" />
        </Button>

        <Logo />

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                  active ? "text-brand-navy font-semibold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <TerritorySelector className="hidden lg:flex w-44" />
          <Button
            variant="outline"
            className="hidden sm:flex w-56 justify-start text-muted-foreground font-normal"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-4" />
            Buscar…
            <kbd className="ml-auto rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-mono">
              ⌘K
            </kbd>
          </Button>
          <Button variant="outline" size="icon" className="sm:hidden" aria-label="Buscar" onClick={() => setSearchOpen(true)}>
            <Search className="size-4" />
          </Button>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <SidebarMenu open={sidebarOpen} onOpenChange={setSidebarOpen} />
    </header>
  );
}
