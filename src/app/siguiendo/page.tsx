import type { Metadata } from "next";
import { FollowingPage } from "@/components/common/following-page";

export const metadata: Metadata = { title: "Siguiendo · La Jornada" };

export default function Page() {
  return <FollowingPage />;
}
