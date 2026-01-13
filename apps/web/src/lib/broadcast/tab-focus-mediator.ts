import { BroadcastMediator } from "@/lib/broadcast/mediator.ts";

export class TabFocusMediator extends BroadcastMediator<boolean> {
  constructor() {
    super("tab-focus-mediator");
  }
}
