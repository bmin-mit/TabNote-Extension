import type { Editor } from "@tiptap/react";
import { createContext, useContext } from "react";

export const RichTextEditorContext = createContext<Editor | null>(null);

export default function useRichTextEditorContext() {
  // biome-ignore lint/style/noNonNullAssertion: ignore for simplicity
  return useContext(RichTextEditorContext)!;
}
