import { Button, Flex } from "@chakra-ui/react";
import { Bolt } from "lucide-react";
import NoteVisibilityToggle from "@/components/utilities-group/NoteVisibilityToggle.tsx";

export default function UtilitiesGroup() {
  return (
    <Flex colorPalette="gray" gap="2">
      <NoteVisibilityToggle />
      <Button variant="outline" flex="1">
        <Bolt />
      </Button>
    </Flex>
  );
}
