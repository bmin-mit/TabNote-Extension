import { BroadcastMediator } from "@/lib/broadcast/mediator.ts";

export class NoteVisibilityMediator extends BroadcastMediator<boolean> {
  constructor() {
    super("note-visibility-mediator");
  }
}
