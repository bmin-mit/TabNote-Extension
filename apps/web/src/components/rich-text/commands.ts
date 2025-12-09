import type { Editor, Range } from "@tiptap/react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  ListOrdered,
  type LucideIcon,
  Pilcrow,
} from "lucide-react";

type RichTextCommand = {
  value: string;
  label: string;
  icon: LucideIcon;
  searchTerms?: string[];
  execute?: ({ editor, range }: { editor: Editor; range: Range }) => void;
};

export const richTextCommands: RichTextCommand[] = [
  {
    value: "paragraph",
    label: "Text",
    icon: Pilcrow,
    searchTerms: ["p", "paragraph", "text"],
    execute: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleNode("paragraph", "paragraph")
        .run();
    },
  },
  {
    value: "heading-1",
    label: "Heading 1",
    icon: Heading1,
    searchTerms: ["h1", "heading", "title", "big", "large"],
    execute: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 1 })
        .run();
    },
  },
  {
    value: "heading-2",
    label: "Heading 2",
    icon: Heading2,
    searchTerms: ["h2", "heading", "title", "subtle", "medium"],
    execute: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 2 })
        .run();
    },
  },
  {
    value: "heading-3",
    label: "Heading 3",
    icon: Heading3,
    searchTerms: ["h3", "heading", "title", "subtle", "small"],
    execute: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 3 })
        .run();
    },
  },
  {
    value: "heading-4",
    label: "Heading 4",
    icon: Heading4,
    searchTerms: ["h4", "heading", "title", "subtle", "small"],
    execute: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 4 })
        .run();
    },
  },
  {
    value: "bullet-list",
    label: "Bullet List",
    searchTerms: ["unordered", "point", "ul"],
    icon: List,
    execute: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    },
  },
  {
    value: "ordered-list",
    label: "Numbered List",
    icon: ListOrdered,
    searchTerms: ["ol", "numbered"],
    execute: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    },
  },
];
