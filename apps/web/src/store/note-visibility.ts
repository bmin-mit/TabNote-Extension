import { createContext, useContext } from "react";
import { createStore, useStore } from "zustand";
import { persist } from "zustand/middleware";
import { NoteVisibilityMediator } from "@/lib/broadcast/note-visibility-mediator.ts";

export type NoteVisibilityState = {
  visibility: boolean;

  setVisibility: (visibility: boolean) => void;
  toggleVisibility: () => void;
};

export type NoteVisibilityStore = ReturnType<typeof createNoteVisibilityStore>;

export const NoteVisibilityContext = createContext<NoteVisibilityStore | null>(
  null,
);

export function useNoteVisibilityContext<T>(
  selector: (state: NoteVisibilityState) => T,
): T {
  const store = useContext(NoteVisibilityContext);
  if (!store)
    throw new Error(
      "useNoteVisibilityContext must be used within NoteVisibilityContext.Provider",
    );

  return useStore(store, selector);
}

export function createNoteVisibilityStore() {
  const mediator = new NoteVisibilityMediator();

  const store = createStore<NoteVisibilityState>()(
    persist(
      (set) => ({
        visibility: true,

        setVisibility: (value: boolean) => {
          mediator.updateValue(value);
          set({ visibility: value });
        },

        toggleVisibility: () =>
          set((state) => {
            const newValue = !state.visibility;
            mediator.updateValue(newValue);

            return { visibility: newValue };
          }),
      }),
      {
        name: "note-visibility",
      },
    ),
  );

  const updateCb = (event: MessageEvent) => {
    store.setState({ visibility: event.data });
  };

  mediator.onUpdate(updateCb);

  return store;
}
