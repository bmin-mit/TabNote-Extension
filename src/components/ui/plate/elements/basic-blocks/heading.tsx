import { chakra } from "@chakra-ui/react";
import type { ComponentProps } from "react";
import { useDynamicStyle, useTheme } from "../../themes";

export const H1Styled = chakra("h1");
export function H1Element(props: ComponentProps<typeof H1Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h1);
  const forwardProps = { ...defaultStyle, ...props };
  return <H1Styled {...forwardProps} />;
}

export const H2Styled = chakra("h2");
export function H2Element(props: ComponentProps<typeof H2Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h2);
  const forwardProps = { ...defaultStyle, ...props };
  return <H2Styled {...forwardProps} />;
}

export const H3Styled = chakra("h3");
export function H3Element(props: ComponentProps<typeof H3Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h3);
  const forwardProps = { ...defaultStyle, ...props };
  return <H3Styled {...forwardProps} />;
}

export const H4Styled = chakra("h4");
export function H4Element(props: ComponentProps<typeof H4Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h4);
  const forwardProps = { ...defaultStyle, ...props };
  return <H4Styled {...forwardProps} />;
}

export const H5Styled = chakra("h5");
export function H5Element(props: ComponentProps<typeof H5Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h5);
  const forwardProps = { ...defaultStyle, ...props };
  return <H5Styled {...forwardProps} />;
}

export const H6Styled = chakra("h6");
export function H6Element(props: ComponentProps<typeof H6Styled>) {
  const theme = useTheme();
  const defaultStyle = useDynamicStyle(theme.basic.headings.h6);
  const forwardProps = { ...defaultStyle, ...props };
  return <H6Styled {...forwardProps} />;
}
