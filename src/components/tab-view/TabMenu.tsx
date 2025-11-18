import type { Note } from "@/lib/models/note";
import { Button, Menu, Portal, useDialog } from "@chakra-ui/react";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import { DeleteNoteDialog, RenameNoteDialog } from "../note-action-dialog";

export default function TabMenu({
  note,
  hidden,
}: {
  note: Note;
  hidden: boolean;
}) {
  const renameNoteDialog = useDialog();
  const deleteNoteDialog = useDialog();

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <Button size="xs" variant="ghost" hidden={hidden} as="div">
          <Ellipsis />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="rename"
              onClick={() => renameNoteDialog.setOpen(true)}
            >
              <Pencil size={16} />
              Rename note
            </Menu.Item>
            <Menu.Item
              value="delete"
              color="red.fg"
              onClick={() => deleteNoteDialog.setOpen(true)}
            >
              <Trash size={16} />
              Delete note
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>

        <RenameNoteDialog note={note} dialog={renameNoteDialog} />
        <DeleteNoteDialog note={note} dialog={deleteNoteDialog} />
      </Portal>
    </Menu.Root>
  );
}
