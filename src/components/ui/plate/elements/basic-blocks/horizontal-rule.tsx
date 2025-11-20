import { chakra } from "@chakra-ui/react";
import { useDynamicStyle, useTheme } from "../../themes";

export const HorizontalRuleStyled = chakra("hr");

export function HorizontalRule(
  props: React.ComponentProps<typeof HorizontalRuleStyled>,
) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.horizontalRule);
  const forwardProps = { ...defaultStyle, ...props };
  return <HorizontalRuleStyled {...forwardProps} />;
}
