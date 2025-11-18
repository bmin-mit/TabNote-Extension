import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { TiptapEditor } from ".";

const meta = {
  title: "Components/UI/TiptapEditor",
  component: TiptapEditor,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Box p="4" h="full">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof TiptapEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
