import { BroadcastMediator } from "@/lib/broadcast/mediator.ts";

export class NoteSelectionMediator extends BroadcastMediator<string | null> {
  constructor() {
    super("tab-selection-mediator");
  }
}
