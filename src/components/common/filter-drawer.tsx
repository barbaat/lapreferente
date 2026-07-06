"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function FilterDrawer({
  children,
  activeCount = 0,
}: {
  children: React.ReactNode;
  activeCount?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2 sm:hidden">
          <SlidersHorizontal className="size-4" />
          Filtros
          {activeCount > 0 && (
            <span className="flex size-4 items-center justify-center rounded-full bg-brand-turquoise text-[10px] font-bold text-white">
              {activeCount}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtros</DrawerTitle>
        </DrawerHeader>
        <div className="space-y-4 px-4 pb-2">{children}</div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="bg-brand-navy hover:bg-brand-navy/90">Ver resultados</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
