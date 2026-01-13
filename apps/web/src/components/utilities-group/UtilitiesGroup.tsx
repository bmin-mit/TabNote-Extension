import { Flex } from "@chakra-ui/react";
import KeepTabFocusToggle from "@/components/utilities-group/KeepTabFocusToggle.tsx";
import NoteVisibilityToggle from "@/components/utilities-group/NoteVisibilityToggle.tsx";

export default function UtilitiesGroup() {
  return (
    <Flex colorPalette="gray" gap="2">
      <NoteVisibilityToggle />
      <KeepTabFocusToggle />
    </Flex>
  );
}
