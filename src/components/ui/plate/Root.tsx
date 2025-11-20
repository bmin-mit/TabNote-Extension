import { chakra } from "@chakra-ui/react";
import { Plate, usePlateEditor } from "platejs/react";
import { defaultPlugins } from "./plugins";
import { type Theme, ThemeProvider } from "./themes";

const StyledPlate = chakra(Plate);

export default function PlateRoot({
  children,
  theme,
  ...props
}: {
  children?: React.ReactNode;
  theme?: Theme;
} & Omit<React.ComponentProps<typeof Plate>, "editor">) {
  const editor = usePlateEditor({
    plugins: defaultPlugins,
  });

  return (
    <StyledPlate editor={editor} {...props}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledPlate>
  );
}
