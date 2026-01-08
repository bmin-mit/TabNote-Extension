import { create } from "zustand";

export type NoteVisibilityStore = {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  toggleVisibility: () => void;
};

export const useNoteVisibility = create<NoteVisibilityStore>((set) => ({
  visibility: false,

  setVisibility: (value: boolean) => set({ visibility: value }),
  toggleVisibility: () => set((state) => ({ visibility: !state.visibility })),
}));
