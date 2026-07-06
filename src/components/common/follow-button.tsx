"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/store/favorites-store";
import { useHasMounted } from "@/lib/use-has-mounted";
import { cn } from "@/lib/utils";

export function FollowButton({
  id,
  type,
  label,
  className,
  size = "default",
}: {
  id: string;
  type: "team" | "competition";
  label?: string;
  className?: string;
  size?: "default" | "sm";
}) {
  const mounted = useHasMounted();
  const teamIds = useFavoritesStore((s) => s.teamIds);
  const competitionIds = useFavoritesStore((s) => s.competitionIds);
  const toggleTeam = useFavoritesStore((s) => s.toggleTeam);
  const toggleCompetition = useFavoritesStore((s) => s.toggleCompetition);

  const followed = mounted && (type === "team" ? teamIds.includes(id) : competitionIds.includes(id));

  return (
    <Button
      type="button"
      variant={followed ? "default" : "outline"}
      size={size}
      className={cn(followed && "bg-brand-turquoise hover:bg-brand-turquoise/90 text-white", className)}
      onClick={() => (type === "team" ? toggleTeam(id) : toggleCompetition(id))}
    >
      <Heart className={cn("size-4", followed && "fill-current")} />
      {label ?? (followed ? "Siguiendo" : "Seguir")}
    </Button>
  );
}
