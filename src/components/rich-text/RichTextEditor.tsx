"use client";

import { Prose } from "@/components/ui/prose";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import type { HTMLChakraProps } from "@chakra-ui/react";
import type { Extension } from "@tiptap/core";
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from "yjs";
import { toaster } from "../ui/toaster";

export default function RichTextEditor({
  dbName,
  ...props
}: {
  dbName: string;
  extensions?: Extension[];
} & HTMLChakraProps<"div">) {
  var ydoc = new Y.Doc();
  var provider = new IndexeddbPersistence(dbName, ydoc);

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: ydoc.getXmlFragment("document-store"),
      user: {
        name: "TabNote User",
        color: "#ff0000",
      },
      showCursorLabels: "activity",
    },
  });

  // BroadcastChannel for real-time sync across tabs
  try {
    if (typeof BroadcastChannel !== "undefined") {
      const channel = new BroadcastChannel(dbName);
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

  return (
    <Prose {...props} className="menu">
      <BlockNoteView
        editor={editor}
        style={{ width: "100%", height: "100%" }}
      ></BlockNoteView>
    </Prose>
  );
}
