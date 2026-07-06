import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Globe, MessageCircle, Share2, Camera } from "lucide-react";

const COLUMNS = [
  {
    title: "Competición",
    links: [
      { href: "/competiciones", label: "Competiciones" },
      { href: "/clasificaciones", label: "Clasificaciones" },
      { href: "/partidos", label: "Calendario" },
      { href: "/noticias", label: "Goleadores" },
    ],
  },
  {
    title: "Contenido",
    links: [
      { href: "/noticias", label: "Noticias" },
      { href: "/equipos", label: "Equipos" },
      { href: "/buscar", label: "Buscador" },
      { href: "/siguiendo", label: "Siguiendo" },
    ],
  },
  {
    title: "La Jornada",
    links: [
      { href: "/", label: "Quiénes somos" },
      { href: "/", label: "Publicidad" },
      { href: "/", label: "Contacto" },
      { href: "/", label: "Aviso legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hidden border-t border-border bg-brand-navy text-white md:block">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo className="[&_span]:text-white" />
            <p className="mt-3 max-w-xs text-sm text-white/60">
              La actualidad del fútbol regional y aficionado: noticias, resultados, calendarios y
              clasificaciones de tu territorio.
            </p>
            <div className="mt-4 flex gap-3">
              {[Globe, Camera, MessageCircle, Share2].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/70"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-turquoise">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 La Jornada. Demo visual · Datos ficticios.</p>
          <p>Proyecto de demostración frontend, sin conexión a datos reales.</p>
        </div>
      </div>
    </footer>
  );
}
