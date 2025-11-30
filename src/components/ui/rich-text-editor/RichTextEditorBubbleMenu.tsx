import {
  createListCollection,
  Flex,
  For,
  IconButton,
  Portal,
  Select,
} from "@chakra-ui/react";
import { BubbleMenu } from "@tiptap/react/menus";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  Link,
  Pilcrow,
  Underline,
} from "lucide-react";
import ToggleGroup from "../toggle-group";
import useRichTextEditorContext from "./useRichTextEditorContext";

export default function RichTextEditorBubbleMenu() {
  const editor = useRichTextEditorContext();

  return (
    <BubbleMenu editor={editor}>
      <Flex
        colorPalette="gray"
        gap="1"
        p="1"
        alignItems="center"
        bg="bg.panel"
        borderColor="border"
        borderWidth="thin"
        borderRadius="sm"
        shadow="md"
      >
        <BlockStyleSelect />
        <TextStyleToggleButtonGroup />
        <AlignmentButtonGroup />
        <CreateLinkButton />
      </Flex>
    </BubbleMenu>
  );
}

const blockStyleSelectItems = createListCollection({
  items: [
    {
      label: "Paragraph",
      item: { value: "paragraph" },
      value: "paragraph",
      icon: Pilcrow,
      selectValue: "Paragraph",
    },
    {
      label: "Heading 1",
      item: {
        value: "heading",
        props: { level: 1, isTogglable: false },
      },
      value: "heading-1",
      icon: Heading1,
      selectValue: "Heading 1",
    },
    {
      label: "Heading 2",
      item: {
        value: "heading",
        props: { level: 2, isTogglable: false },
      },
      value: "heading-2",
      icon: Heading2,
      selectValue: "Heading 2",
    },
    {
      label: "Heading 3",
      item: {
        value: "heading",
        props: { level: 3, isTogglable: false },
      },
      value: "heading-3",
      icon: Heading3,
    },
    {
      label: "Heading 4",
      item: {
        value: "heading",
        props: { level: 4, isTogglable: false },
      },
      value: "heading-4",
      icon: Heading4,
    },
  ],
});

function BlockStyleSelect() {
  return (
    <Select.Root
      collection={blockStyleSelectItems}
      size="xs"
      defaultValue={[blockStyleSelectItems.items[0].value]}
      w="13ch"
    >
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            <For each={blockStyleSelectItems.items}>
              {({ label, value, icon: Icon }) => (
                <Select.Item key={label} item={value} justifyContent="normal">
                  <Icon />
                  {label}
                </Select.Item>
              )}
            </For>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

function TextStyleToggleButtonGroup() {
  return (
    <ToggleGroup.Root multiple>
      <ToggleGroup.Group size="xs">
        <ToggleGroup.ItemIcon value="bold">
          <Bold />
        </ToggleGroup.ItemIcon>
        <ToggleGroup.ItemIcon value="italic">
          <Italic />
        </ToggleGroup.ItemIcon>
        <ToggleGroup.ItemIcon value="underline">
          <Underline />
        </ToggleGroup.ItemIcon>
      </ToggleGroup.Group>
    </ToggleGroup.Root>
  );
}

function AlignmentButtonGroup() {
  return (
    <ToggleGroup.Root>
      <ToggleGroup.Group size="xs">
        <ToggleGroup.ItemIcon value="left">
          <AlignLeft />
        </ToggleGroup.ItemIcon>
        <ToggleGroup.ItemIcon value="center">
          <AlignCenter />
        </ToggleGroup.ItemIcon>
        <ToggleGroup.ItemIcon value="right">
          <AlignRight />
        </ToggleGroup.ItemIcon>
        <ToggleGroup.ItemIcon value="justify">
          <AlignJustify />
        </ToggleGroup.ItemIcon>
      </ToggleGroup.Group>
    </ToggleGroup.Root>
  );
}

function CreateLinkButton() {
  return (
    <IconButton size="xs" variant="outline">
      <Link />
    </IconButton>
  );
}
