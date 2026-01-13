import { BroadcastMediator } from "@/lib/broadcast/mediator.ts";

export class NoteContentMediator extends BroadcastMediator<
  Uint8Array<ArrayBufferLike>
> {
  constructor(noteDbName: string) {
    super(`note-content_${noteDbName}`);
  }
}
