import { chakra } from "@chakra-ui/react";
import { PlateElement } from "platejs/react";
import type { ComponentProps } from "react";
import { useDynamicStyle, useTheme } from "../../themes";

export const BlockquoteStyled = chakra(PlateElement);

export function Blockquote(props: ComponentProps<typeof BlockquoteStyled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.blockquotes);
  const forwardProps = { ...defaultStyle, ...props };
  return <BlockquoteStyled as="blockquote" {...forwardProps} />;
}
