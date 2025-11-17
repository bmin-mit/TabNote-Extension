import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { RichTextEditor } from ".";

//👇 This default export determines where your story goes in the story list
const meta = {
  title: "Components/UI/RichTextEditor",
  component: RichTextEditor,
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
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
