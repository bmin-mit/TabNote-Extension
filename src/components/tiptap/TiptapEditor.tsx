"use client";

import { Prose } from "@/components/ui/prose";
import type { HTMLChakraProps } from "@chakra-ui/react";
import type { Extension } from "@tiptap/core";
import { Placeholder } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({
  extensions = [],
  ...props
}: {
  extensions?: Extension[];
} & HTMLChakraProps<"div">) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Your note goes here...",
      }),
      ...extensions,
    ],
    immediatelyRender: false,
  });

  return (
    <Prose {...props}>
      <EditorContent
        editor={editor}
        style={{ width: "100%", height: "100%" }}
      />
    </Prose>
  );
}
