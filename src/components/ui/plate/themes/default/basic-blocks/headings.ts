import type { Theme } from "../..";

const baseHeadingStyle = {
  position: "relative",
  mb: "1",
};

export const defaultHeadingsTheme: Theme["elements"]["basic"]["headings"] = {
  h1: {
    ...baseHeadingStyle,
    mt: "1.6em",
    pb: "1",
    fontFamily: "heading",
    fontSize: "4xl",
    fontWeight: "bold",
  },
  h2: {
    ...baseHeadingStyle,
    mt: "1.4em",
    pb: "0.5",
    fontFamily: "heading",
    fontSize: "2xl",
    fontWeight: "semibold",
    letterSpacing: "tight",
  },
  h3: {
    ...baseHeadingStyle,
    mt: "1em",
    pb: "0.5",
    fontFamily: "heading",
    fontSize: "xl",
    fontWeight: "semibold",
    letterSpacing: "tight",
  },
  h4: {
    ...baseHeadingStyle,
    mt: "0.75em",
    fontFamily: "heading",
    fontSize: "lg",
    fontWeight: "semibold",
    letterSpacing: "tight",
  },
  h5: {
    ...baseHeadingStyle,
    mt: "0.75em",
    fontSize: "lg",
    fontWeight: "semibold",
    letterSpacing: "tight",
  },
  h6: {
    ...baseHeadingStyle,
    mt: "0.75em",
    fontSize: "md",
    fontWeight: "semibold",
    letterSpacing: "tight",
  },
};
