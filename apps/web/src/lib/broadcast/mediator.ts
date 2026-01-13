export class BroadcastMediator<T> {
  private readonly channel: BroadcastChannel;

  constructor(name: string) {
    this.channel = new BroadcastChannel(name);
  }

  updateValue(value: T) {
    this.channel.postMessage(value);
  }

  onUpdate(callback: (event: MessageEvent<T>) => void) {
    this.channel.onmessage = callback;
  }

  close() {
    this.channel.close();
  }
}
