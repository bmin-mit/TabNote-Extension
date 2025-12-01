import type { Editor } from "@tiptap/react";
import { createContext } from "react";

export const EditorContext = createContext<Editor>({} as Editor);
