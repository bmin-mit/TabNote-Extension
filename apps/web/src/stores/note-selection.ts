import { liveQuery } from "dexie";
import { createContext, useContext } from "react";
import { createStore, type StoreApi, useStore } from "zustand";
import { persist } from "zustand/middleware";
import { NoteSelectionMediator } from "@/lib/broadcast/note-selection-mediator.ts";
import { TabFocusMediator } from "@/lib/broadcast/tab-focus-mediator.ts";
import type { Note } from "@/lib/models/note.ts";
import { db } from "@/lib/repositories/db.ts";

export type NoteSelectionState = {
  selection: string | null;
  sync: boolean;
  notes: Note[];

  init: () => Promise<void>;

  setSelection: (selection: string) => void;
  setSelectionByIdx: (idx: number) => void;
  setSync: (sync: boolean) => void;
  toggleSync: () => void;
};

export type NoteSelectionStore = StoreApi<NoteSelectionState>;

export const NoteSelectionContext = createContext<NoteSelectionStore | null>(
  null,
);

export function useNoteSelectionContext<T>(
  selector: (state: NoteSelectionState) => T,
): T {
  const store = useContext(NoteSelectionContext);
  if (!store)
    throw new Error(
      "useNoteVisibilityContext must be used within NoteVisibilityContext.Provider",
    );

  return useStore(store, selector);
}

export function createNoteSelectionStore() {
  const selectionMediator = new NoteSelectionMediator();
  const focusMediator = new TabFocusMediator();

  let dbSubscription: { unsubscribe(): void } | null = null;

  const store = createStore<NoteSelectionState>()(
    persist(
      (set, get) => ({
        selection: null,
        sync: false,
        notes: [],

        init: async () => {
          if (dbSubscription) return;

          dbSubscription = liveQuery(() => db.notes.toArray()).subscribe({
            next: (notes) => {
              set({ notes });
              if (get().selection === null)
                set({ selection: notes[0].databaseName ?? null });
            },
            error: (err) => console.error(err),
          });
        },

        setSelection: (selection: string) => {
          selectionMediator.updateValue(selection);
          set({ selection });
        },

        setSelectionByIdx: (idx: number) => {
          if (idx < get().notes.length) {
            const selection = get().notes[idx].databaseName;
            selectionMediator.updateValue(selection);
            set({ selection });
          }
        },

        setSync: (sync: boolean) => {
          focusMediator.updateValue(sync);
          selectionMediator.updateValue(get().selection);
          set({ sync });
        },

        toggleSync: () => {
          const newValue = !get().sync;
          focusMediator.updateValue(newValue);
          set({ sync: newValue });
          if (newValue) selectionMediator.updateValue(get().selection);
        },
      }),
      { name: "tab-selection" },
    ),
  );

  selectionMediator.onUpdate((event: MessageEvent) => {
    if (store.getState().sync) store.setState({ selection: event.data });
  });

  focusMediator.onUpdate((event: MessageEvent) => {
    store.setState({ sync: event.data });
  });
  return store;
}
