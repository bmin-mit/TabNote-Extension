import { create } from "zustand";

export type OpeningNoteStore = {
  keepFocus: boolean;
  noteDbName: string | null;

  toggleKeepFocus: () => void;
};

export const useOpeningNoteStore = create<OpeningNoteStore>((set) => ({
  keepFocus: true,
  noteDbName: null,

  toggleKeepFocus: () => set((state) => ({ keepFocus: !state.keepFocus })),

  setNoteDbName: (noteDbName: string) => {
    localStorage.setItem("currentNoteName", noteDbName);
    set({ noteDbName });
  },

  loadFromCache: () => {
    const value = localStorage.getItem("currentNoteName");
    set({ noteDbName: value });
  },
}));
