import { createCodeBlockSpec } from "@blocknote/core";
import { createHighlighter } from "shiki";
import { grammars } from "./grammars";

const supportedLanguages = Object.fromEntries(
  grammars.map((grammar) => [
    grammar.name,
    { name: grammar.displayName, aliases: grammar.aliases },
  ]),
);

export const codeBlockSpec = createCodeBlockSpec({
  indentLineWithTab: true,
  defaultLanguage: "text",
  supportedLanguages,
  createHighlighter: () =>
    createHighlighter({
      themes: ["nord", "github-light"],
      langs: [],
    }),
});
