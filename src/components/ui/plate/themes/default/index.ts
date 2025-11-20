import type { schemas } from "..";
import { defaultBlockquoteTheme } from "./basic-blocks/blockquote";
import { defaultHeadingsTheme } from "./basic-blocks/headings";
import { defaultHorizontalRuleTheme } from "./basic-blocks/horizontal-rule";
import { defaultParagraphTheme } from "./basic-blocks/paragraph";

export type Theme = {
  elements: {
    basic: {
      blockquotes: schemas.BlockquoteStyleProps;
      headings: {
        h1: schemas.H1StyleProps;
        h2: schemas.H2StyleProps;
        h3: schemas.H3StyleProps;
        h4: schemas.H4StyleProps;
        h5: schemas.H5StyleProps;
        h6: schemas.H6StyleProps;
      };
      paragraph: schemas.ParagraphStyleProps;
      horizontalRule: schemas.HorizonStyleProps;
    };
  };
};

export const defaultTheme: Theme = {
  elements: {
    basic: {
      blockquotes: defaultBlockquoteTheme,
      headings: defaultHeadingsTheme,
      horizontalRule: defaultHorizontalRuleTheme,
      paragraph: defaultParagraphTheme,
    },
  },
};
