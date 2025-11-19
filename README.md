# TabNote

TabNote is a simple and intuitive note-taking application designed to help users organize their thoughts and ideas efficiently. With a clean interface and powerful features, TabNote makes it easy to create, edit, and manage notes on the go without any hassle.

## Work In Progress
This project is currently under development. Features and functionalities may change as we continue to improve the application. Stay tuned for updates!

- [x] Note Editing
- [ ] Note Toolbar
- [ ] Themes
- [ ] Note Organization
- [ ] Export/Import

## Installation

You can visit the [Releases](https://github.com/bmin-mit/TabNote-Extension/releases) page to download the latest version of TabNote.
I am working on publishing the extension to the Chrome Web Store and Firefox Add-ons soon.
Alternatively, you can build the extension from source by following the instructions below.

Load the extension in your browser:
   - Open your browser's extensions page (e.g., `chrome://extensions/` for Chrome).
   - Enable "Developer mode".
   - Click "Load unpacked" and select the `dist` folder from the cloned repository.

## Build your own
To build TabNote from source, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/bmin-mit/TabNote-Extension
cd TabNote-Extension
```

2. Install dependencies:
```bash
bun i
```
3. Build the project:
```bash
bun run build
```

4. Follow the instructions above to load the extension in your browser.