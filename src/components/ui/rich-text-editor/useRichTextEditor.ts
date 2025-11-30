import BubbleMenu from "@tiptap/extension-bubble-menu";
import { type UseEditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const defaultOptions: UseEditorOptions = {
  extensions: [StarterKit, BubbleMenu],
};

export default function useRichTextEditor(options?: UseEditorOptions) {
  return useEditor({ ...defaultOptions, ...options });
}
