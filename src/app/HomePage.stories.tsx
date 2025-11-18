import type { Meta, StoryObj } from "@storybook/nextjs";
import HomePage from "./page";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
