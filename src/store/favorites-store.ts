"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  teamIds: string[];
  competitionIds: string[];
  toggleTeam: (id: string) => void;
  toggleCompetition: (id: string) => void;
  isTeamFollowed: (id: string) => boolean;
  isCompetitionFollowed: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      teamIds: [],
      competitionIds: [],
      toggleTeam: (id) =>
        set((state) => ({
          teamIds: state.teamIds.includes(id)
            ? state.teamIds.filter((t) => t !== id)
            : [...state.teamIds, id],
        })),
      toggleCompetition: (id) =>
        set((state) => ({
          competitionIds: state.competitionIds.includes(id)
            ? state.competitionIds.filter((c) => c !== id)
            : [...state.competitionIds, id],
        })),
      isTeamFollowed: (id) => get().teamIds.includes(id),
      isCompetitionFollowed: (id) => get().competitionIds.includes(id),
    }),
    { name: "la-jornada-favorites" }
  )
);
