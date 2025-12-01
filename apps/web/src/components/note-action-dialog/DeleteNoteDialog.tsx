import { db } from "@/lib/repositories/db";
import type { UseDialogReturn } from "@chakra-ui/react";
import { Button, Dialog, Portal } from "@chakra-ui/react";

export default function DeleteNoteDialog({
  note,
  dialog,
}: {
  note: { id: number; displayName: string };
  dialog: UseDialogReturn;
}) {
  const deleteNote = () => {
    dialog.setOpen(false);

    db.notes.delete(note.id);
  };

  return (
    <Dialog.RootProvider value={dialog} placement="center">
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete {note.displayName}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              Are you sure you want to delete this note? This action is
              irreversible.
            </Dialog.Body>

            <Dialog.Footer>
              <Button variant="outline" onClick={() => dialog.setOpen(false)}>
                Cancel
              </Button>

              <Button
                variant="solid"
                autoFocus
                onClick={deleteNote}
                colorPalette="red"
              >
                Delete
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.RootProvider>
  );
}
