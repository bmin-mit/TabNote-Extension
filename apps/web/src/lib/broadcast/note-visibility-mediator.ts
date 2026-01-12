export class NoteVisibilityMediator {
  private readonly channel: BroadcastChannel;

  constructor() {
    this.channel = new BroadcastChannel("note-visibility-mediator");
  }

  updateValue(visibility: boolean) {
    this.channel.postMessage(visibility);
  }

  onUpdate(callback: (event: MessageEvent) => void) {
    this.channel.onmessage = callback;
  }

  close() {
    this.channel.close();
  }
}
