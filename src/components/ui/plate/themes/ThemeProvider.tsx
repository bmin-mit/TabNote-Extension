import { createContext, useContext } from "react";
import { defaultTheme, type Theme } from ".";

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
  theme = defaultTheme,
}: {
  children?: React.ReactNode;
  theme?: Theme;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
