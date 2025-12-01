import { db } from "@/lib/repositories/db";
import type { UseDialogReturn } from "@chakra-ui/react";
import { Button, Dialog, Input, Portal } from "@chakra-ui/react";
import { useState } from "react";

export default function RenameNoteDialog({
  note,
  dialog,
}: {
  note: { id: number; displayName: string };
  dialog: UseDialogReturn;
}) {
  const [noteName, setNoteName] = useState("");

  const renameNote = () => {
    dialog.setOpen(false);
    setNoteName("");

    db.notes.update(note.id, {
      displayName: noteName,
    });
  };

  const renameOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && noteName) {
      renameNote();
    }
  };

  return (
    <Dialog.RootProvider value={dialog} placement="center">
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Rename {note.displayName}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Input
                placeholder="Note Name"
                autoFocus
                value={noteName}
                onChange={(e) => setNoteName(e.target.value)}
                onKeyUp={renameOnEnter}
              />
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="outline" onClick={() => dialog.setOpen(false)}>
                Cancel
              </Button>

              <Button variant="solid" disabled={!noteName} onClick={renameNote}>
                Rename
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  );
}
