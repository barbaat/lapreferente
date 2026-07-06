export function formatDateShort(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short" }).format(d).replace(".", "");
}

export function formatDateLong(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(d);
}

export function formatDateMedium(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "long" }).format(d);
}

export const ZONE_LABEL: Record<string, string> = {
  ascenso: "Ascenso",
  playoff: "Playoff",
  permanencia: "Permanencia",
  descenso: "Descenso",
};

export const ZONE_DOT_CLASS: Record<string, string> = {
  ascenso: "bg-brand-green",
  playoff: "bg-brand-amber",
  permanencia: "bg-transparent",
  descenso: "bg-brand-red",
};

export const STATUS_LABEL: Record<string, string> = {
  jugado: "Finalizado",
  en_juego: "En directo",
  programado: "Programado",
  aplazado: "Aplazado",
};
