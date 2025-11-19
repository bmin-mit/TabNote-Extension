import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "teal", // Change this to any color palette you prefer
    },
  },
});

export const system = createSystem(defaultConfig, config);
