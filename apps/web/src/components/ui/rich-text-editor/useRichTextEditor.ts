import BubbleMenu from "@tiptap/extension-bubble-menu";
import TextAlign from "@tiptap/extension-text-align";
import { type UseEditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const defaultOptions: UseEditorOptions = {
  extensions: [
    StarterKit.configure({
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
