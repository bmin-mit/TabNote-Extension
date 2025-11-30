import {
  Button,
  createListCollection,
  Field,
  Flex,
  For,
  IconButton,
  Input,
  Popover,
  Portal,
  Select,
} from "@chakra-ui/react";
import { useEditorState } from "@tiptap/react";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToggleGroup from "../toggle-group";
import useRichTextEditorContext from "./useRichTextEditorContext";
import { useSelectionChange } from "./useSelectionChange";

export default function RichTextEditorBubbleMenu() {
  const editor = useRichTextEditorContext();

  const selection = useEditorState({
    editor,
    selector(state) {
      return state.editor.state.selection;
    },
  });

  return (
    <BubbleMenu editor={editor}>
      {!selection.empty && (
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
      )}
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
    },
    {
      label: "Heading 1",
      item: {
        value: "heading",
        props: { level: 1 },
      },
      value: "heading-1",
      icon: Heading1,
    },
    {
      label: "Heading 2",
      item: {
        value: "heading",
        props: { level: 2 },
      },
      value: "heading-2",
      icon: Heading2,
    },
    {
      label: "Heading 3",
      item: {
        value: "heading",
        props: { level: 3 },
      },
      value: "heading-3",
      icon: Heading3,
    },
    {
      label: "Heading 4",
      item: {
        value: "heading",
        props: { level: 4 },
      },
      value: "heading-4",
      icon: Heading4,
    },
  ],
});

function BlockStyleSelect() {
  const editor = useRichTextEditorContext();

  const selection = useEditorState({
    editor,
    selector(state) {
      return state.editor.state.selection;
    },
  });

  const [selectValue, setSelectValue] = useState<string[]>([]);

  useSelectionChange(editor, () => {
    const $from = selection.$from;

    const selectingNode =
      $from.depth === 0 ? editor.state.doc.child(0) : $from.node();

    const activeNode = blockStyleSelectItems.items.find(({ item }) => {
      if (!selectingNode) return false;
      if (selectingNode.type.name !== item.value) return false;

      if (!item.props) return true;

      for (const key in item.props) {
        // Use k to convince TypeScript it's a key of item.props
        const k = key as keyof typeof item.props;
        if (selectingNode.attrs[key] !== item.props[k]) return false;
      }
      return true;
    });

    setSelectValue(activeNode ? [activeNode.value] : []);
  });

  const setBlockType = (
    value: string,
    name: string,
    attrs?: Record<string, any>,
  ) => {
    setSelectValue([value]);
    editor.chain().focus().setNode(name, attrs).run();
  };

  return (
    <Select.Root
      value={selectValue}
      collection={blockStyleSelectItems}
      size="xs"
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
              {({ label, value, icon: Icon, item }) => (
                <Select.Item
                  key={value}
                  item={value}
                  justifyContent="normal"
                  onClick={() => setBlockType(value, item.value, item.props)}
                >
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
  const editor = useRichTextEditorContext();
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const updateActiveStyles = () => {
      const isBold = editor.isActive("bold");
      const isItalic = editor.isActive("italic");
      const isUnderline = editor.isActive("underline");

      const newValues: string[] = [];
      if (isBold) newValues.push("bold");
      if (isItalic) newValues.push("italic");
      if (isUnderline) newValues.push("underline");

      setValues(newValues);
    };

    editor.on("selectionUpdate", updateActiveStyles);
    editor.on("update", updateActiveStyles);

    return () => {
      editor.off("selectionUpdate", updateActiveStyles);
      editor.off("update", updateActiveStyles);
    };
  }, [editor]);

  return (
    <ToggleGroup.Root multiple value={values}>
      <ToggleGroup.Group size="xs">
        <ToggleGroup.ItemIcon
          value="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold />
        </ToggleGroup.ItemIcon>

        <ToggleGroup.ItemIcon
          value="italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic />
        </ToggleGroup.ItemIcon>

        <ToggleGroup.ItemIcon
          value="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline />
        </ToggleGroup.ItemIcon>
      </ToggleGroup.Group>
    </ToggleGroup.Root>
  );
}

function AlignmentButtonGroup() {
  const [value, setValue] = useState<string[]>([]);
  const editor = useRichTextEditorContext();

  useSelectionChange(editor, () => {
    if (editor.isActive({ textAlign: "left" })) {
      setValue(["left"]);
    } else if (editor.isActive({ textAlign: "center" })) {
      setValue(["center"]);
    } else if (editor.isActive({ textAlign: "right" })) {
      setValue(["right"]);
    } else if (editor.isActive({ textAlign: "justify" })) {
      setValue(["justify"]);
    } else {
      setValue([]);
    }
  });

  const setAlignment = (alignment: string) => {
    setValue([alignment]);
    editor.chain().focus().setTextAlign(alignment).run();
  };

  return (
    <ToggleGroup.Root deselectable={false} value={value}>
      <ToggleGroup.Group size="xs">
        <ToggleGroup.ItemIcon value="left" onClick={() => setAlignment("left")}>
          <AlignLeft />
        </ToggleGroup.ItemIcon>

        <ToggleGroup.ItemIcon
          value="center"
          onClick={() => setAlignment("center")}
        >
          <AlignCenter />
        </ToggleGroup.ItemIcon>

        <ToggleGroup.ItemIcon
          value="right"
          onClick={() => setAlignment("right")}
        >
          <AlignRight />
        </ToggleGroup.ItemIcon>

        <ToggleGroup.ItemIcon
          value="justify"
          onClick={() => setAlignment("justify")}
        >
          <AlignJustify />
        </ToggleGroup.ItemIcon>
      </ToggleGroup.Group>
    </ToggleGroup.Root>
  );
}

type URLForm = {
  url: string;
};

function CreateLinkButton() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<URLForm>();

  const editor = useRichTextEditorContext();

  const onSubmit = (data: URLForm) => {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: data.url })
      .run();
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Popover.Root size="xs">
      <Popover.Trigger asChild>
        <IconButton size="xs" variant="outline">
          <Link />
        </IconButton>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body
              spaceY="2"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Field.Root invalid={!!errors.url}>
                <Input
                  size="xs"
                  placeholder="Enter the URL"
                  autoFocus
                  {...register("url", {
                    required: true,
                    pattern:
                      /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/i,
                  })}
                  onKeyUp={submitOnEnter}
                />
                <Field.ErrorText>
                  Link must not be empty and must start with "http", "https",
                  etc.
                </Field.ErrorText>
              </Field.Root>

              <Button size="xs" w="full" variant="outline" type="submit">
                Create Link
              </Button>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
