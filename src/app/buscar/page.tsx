import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchPage } from "@/components/common/search-page";

export const metadata: Metadata = { title: "Buscar · La Jornada" };

export default function Page() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
