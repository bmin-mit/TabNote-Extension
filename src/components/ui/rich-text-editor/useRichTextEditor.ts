import BubbleMenu from "@tiptap/extension-bubble-menu";
import { type UseEditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

const defaultOptions: UseEditorOptions = {
  extensions: [
    StarterKit.configure({
      link: {
        protocols: ["ftp", "mailto"],
      },
      undoRedo: false,
    }),
    BubbleMenu,
    TextAlign.configure({
      types: ["heading", "paragraph"],
      defaultAlignment: "left",
    }),
  ],
};

export default function useRichTextEditor(options?: UseEditorOptions) {
  const extensions = options?.extensions
    ? [...defaultOptions.extensions!, ...options.extensions]
    : defaultOptions.extensions;

  return useEditor({ ...defaultOptions, ...options, extensions });
}
