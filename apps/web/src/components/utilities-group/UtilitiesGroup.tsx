import { Flex } from "@chakra-ui/react";
import KeepFocusToggle from "./KeepFocusToggle.tsx";
import NoteVisibilityToggle from "./NoteVisibilityToggle.tsx";

export default function UtilitiesGroup() {
  return (
    <Flex colorPalette="gray" gap="2">
      <NoteVisibilityToggle />
      <KeepFocusToggle />
    </Flex>
  );
}
