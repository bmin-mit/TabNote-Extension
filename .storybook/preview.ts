import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs";
import { themes } from "storybook/theming";

import "fake-indexeddb/auto";
import "../src/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      toc: true,
      theme: themes.normal,
    },
  },

  decorators: [
    (Story) => ChakraProvider({ children: Story(), value: defaultSystem }),
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
