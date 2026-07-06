"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MatchdayPicker({
  matchday,
  total,
  onChange,
}: {
  matchday: number;
  total: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
      <Button
        variant="ghost"
        size="icon"
        disabled={matchday <= 1}
        onClick={() => onChange(matchday - 1)}
        aria-label="Jornada anterior"
      >
        <ChevronLeft className="size-4" />
      </Button>
      <span className="font-heading text-sm font-semibold tabular-nums">
        Jornada {matchday} <span className="text-muted-foreground font-normal">/ {total}</span>
      </span>
      <Button
        variant="ghost"
        size="icon"
        disabled={matchday >= total}
        onClick={() => onChange(matchday + 1)}
        aria-label="Jornada siguiente"
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
