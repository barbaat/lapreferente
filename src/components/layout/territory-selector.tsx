"use client";

import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { communities, provinces } from "@/lib/mock";

export function TerritorySelector({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Select onValueChange={(value) => router.push(value === "all" ? "/competiciones" : `/competiciones?provincia=${value}`)}>
      <SelectTrigger className={className} size="sm">
        <MapPin className="size-4 text-muted-foreground" />
        <SelectValue placeholder="Territorio" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todo el territorio</SelectItem>
        {communities.map((community) => (
          <SelectGroup key={community.id}>
            <SelectLabel>{community.name}</SelectLabel>
            {provinces
              .filter((p) => p.communityId === community.id)
              .map((province) => (
                <SelectItem key={province.id} value={province.slug}>
                  {province.name}
                </SelectItem>
              ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
