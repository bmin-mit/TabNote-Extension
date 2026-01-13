import Collaboration from "@tiptap/extension-collaboration";
import { Extension } from "@tiptap/react";
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from "yjs";
import { NoteContentMediator } from "@/lib/broadcast/note-content-mediator.ts";
import { toaster } from "../toaster";

const OfflineExtension = Extension.create({
  name: "offline",

  addExtensions() {
    const ydoc = new Y.Doc();

    new IndexeddbPersistence(this.options.dbName, ydoc);

    try {
      if (typeof BroadcastChannel !== "undefined") {
        const mediator = new NoteContentMediator(this.options.dbName);

        mediator.onUpdate((event) => {
          Y.applyUpdate(ydoc, new Uint8Array(event.data));
        });

        ydoc.on("update", (update) => {
          mediator.updateValue(update);
        });
      }
    } catch {
      toaster.warning({
        title: "BroadcastChannel not supported",
        description:
          "Your browser does not support BroadcastChannel API, real-time sync across tabs will not work. Update your browser or consider using a modern browser like Chrome, Firefox, or Edge.",
      });
    }

    return [
      Collaboration.configure({
        document: ydoc,
      }),
    ];
  },

  addOptions() {
    return {
      dbName: "tabnote-default-db-name",
    };
  },
});

export default OfflineExtension;
