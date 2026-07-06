"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ShareButton({ title }: { title: string }) {
  function onShare() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${title} · ${window.location.href}`).catch(() => {});
    }
    toast.success("Enlace copiado al portapapeles");
  }

  return (
    <Button variant="outline" size="sm" onClick={onShare} className="gap-1.5">
      <Share2 className="size-3.5" /> Compartir
    </Button>
  );
}
