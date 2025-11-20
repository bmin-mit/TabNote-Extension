import type { HTMLChakraProps } from "@chakra-ui/react";

export type DynamicStyle<T> = T | (() => T);

export type H1StyleProps = DynamicStyle<HTMLChakraProps<"h1">>;
export type H2StyleProps = DynamicStyle<HTMLChakraProps<"h2">>;
export type H3StyleProps = DynamicStyle<HTMLChakraProps<"h3">>;
export type H4StyleProps = DynamicStyle<HTMLChakraProps<"h4">>;
export type H5StyleProps = DynamicStyle<HTMLChakraProps<"h5">>;
export type H6StyleProps = DynamicStyle<HTMLChakraProps<"h6">>;

export type BlockquoteStyleProps = DynamicStyle<HTMLChakraProps<"blockquote">>;
export type ParagraphStyleProps = DynamicStyle<HTMLChakraProps<"p">>;
export type HorizonStyleProps = DynamicStyle<HTMLChakraProps<"hr">>;
