import { chakra, type HTMLChakraProps } from "@chakra-ui/react";
import { PlateElement } from "platejs/react";
import type { ComponentProps } from "react";
import { useTheme } from "../../themes";

export type ParagraphStyleProps = HTMLChakraProps<"p">;
export const ParagraphStyled = chakra(PlateElement);

export function Paragraph(props: ComponentProps<typeof ParagraphStyled>) {
  const theme = useTheme();
  const forwardProps = { ...theme.basic.paragraph, ...props };
  return <ParagraphStyled as="p" {...forwardProps} />;
}
