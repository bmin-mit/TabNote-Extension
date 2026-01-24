import { Button, Dialog, Portal, useDialog } from "@chakra-ui/react";
import { Bolt } from "lucide-react";

export default function SettingsDialog() {
  const dialog = useDialog();

  return (
    <Dialog.RootProvider value={dialog} placement="center">
      <Dialog.Trigger asChild>
        <Button colorPalette="gray" variant="surface" size="xs" mr="4">
          <Bolt />
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Settings</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body></Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  );
}
