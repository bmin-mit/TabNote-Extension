import { Collaboration } from "@tiptap/extension-collaboration";
import { Extension } from "@tiptap/react";
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from "yjs";

export const IndexedDbSync = Extension.create(() => {
  return {
    name: "indexeddb-sync",

    addOptions() {
      return { noteName: "default-note" };
    },

    addExtensions() {
      const ydoc = new Y.Doc();
      new IndexeddbPersistence(this.options.noteName, ydoc);

      return [
        Collaboration.configure({
          document: ydoc,
        }),
      ];
    },
  };
});
