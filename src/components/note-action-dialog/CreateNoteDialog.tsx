import { db } from "@/lib/repositories/db";
import { Button, Dialog, Input, Portal, useDialog } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CreateNoteDialog() {
  const dialog = useDialog();
  const [noteName, setNoteName] = useState("");

  const createNote = () => {
    dialog.setOpen(false);
    setNoteName("");

    db.notes.add({
      displayName: noteName,
      tableName: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const createOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && noteName) {
      createNote();
    }
  };

  return (
    <Dialog.RootProvider value={dialog} placement="center">
      <Dialog.Trigger asChild>
        <Button variant="surface" size="xs" mr="4">
          <Plus />
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create New Note</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Input
                placeholder="Note Name"
                autoFocus
                value={noteName}
                onChange={(e) => setNoteName(e.target.value)}
                onKeyUp={createOnEnter}
              />
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="outline" onClick={() => dialog.setOpen(false)}>
                Cancel
              </Button>

              <Button variant="solid" disabled={!noteName} onClick={createNote}>
                Create
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  );
}
