import { Extension } from "@tiptap/core";
import { Collaboration } from "@tiptap/extension-collaboration";
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from "yjs";
import { toaster } from "../ui/toaster";

export const IndexedDbSync = Extension.create(() => {
  const ydoc = new Y.Doc();

  return {
    name: "indexeddb-sync",

    onBeforeCreate() {
      new IndexeddbPersistence(this.options.noteName, ydoc);

      try {
        if (typeof BroadcastChannel !== "undefined") {
          const channel = new BroadcastChannel(this.options.noteName);
          channel.onmessage = (event) => {
            Y.applyUpdate(ydoc, new Uint8Array(event.data));
          };
          ydoc.on("update", (update) => {
            channel.postMessage(update);
          });
        }
      } catch {
        toaster.warning({
          title: "BroadcastChannel not supported",
          description:
            "Your browser does not support BroadcastChannel API, real-time sync across tabs will not work. Update your browser or consider using a modern browser like Chrome, Firefox, or Edge.",
        });
      }
    },

    addOptions() {
      return { noteName: "default-note" };
    },

    addExtensions() {
      return [
        Collaboration.configure({
          document: ydoc,
        }),
      ];
    },
  };
});
