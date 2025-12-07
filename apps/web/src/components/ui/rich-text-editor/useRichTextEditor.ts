import {
  enableKeyboardNavigation,
  SlashCommandsExtension,
} from "@bmin-mit/tiptap-slash-commands";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import TextAlign from "@tiptap/extension-text-align";
import { type UseEditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import merge from "deepmerge";

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
    SlashCommandsExtension,
  ],
  editorProps: {
    handleDOMEvents: {
      keydown: (_, v) => enableKeyboardNavigation(v),
    },
  },
};

export default function useRichTextEditor(options?: UseEditorOptions) {
  const mergedEditorProps = merge(
    defaultOptions.editorProps ?? {},
    options?.editorProps ?? {},
  );

  const mergedExtensions = [
    ...(defaultOptions.extensions ?? []),
    ...(options?.extensions ?? []),
  ];

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    extensions: mergedExtensions,
    editorProps: mergedEditorProps,
  };

  return useEditor({ ...mergedOptions });
}
