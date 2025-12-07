const navigationKeys = ["ArrowUp", "ArrowDown", "Enter"];

export function enableKeyboardNavigation(event: KeyboardEvent) {
  if (navigationKeys.includes(event.key)) {
    const slashCommand = document.querySelector("#slash-commands");

    if (slashCommand) {
      return true;
    }
  }
}
