import { liveQuery } from "dexie";
import { create } from "zustand";
import type { Note } from "@/lib/models/note.ts";
import { db } from "@/lib/repositories/db.ts";

export type NotesState = {
  notes: Note[];
};

export const useNotesStore = create<NotesState>((set) => {
  let subscription: { unsubscribe(): void } | null = null;

  return {
    notes: [],

    init: () => {
      if (subscription) return;

      subscription = liveQuery(() => db.notes.toArray()).subscribe({
        next: (notes) => set({ notes }),
        error: (err) => console.error(err),
      });
    },

    cleanup: () => {
      subscription?.unsubscribe();
      subscription = null;
    },
  };
});
