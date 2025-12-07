# A Headless Slash Commands Menu for Tiptap in React 

A Tiptap headless UI extension for Reach that adds a slash command menu for your project. Inspired by
[@harshtalks/slash-tiptap](https://www.npmjs.com/package/@harshtalks/slash-tiptap) and [Novel](https://novel.sh/)

It uses `cmdk` for the command menu implementation.

You can find an example implementation at 
[TabNote Extension](https://github.com/bmin-mit/TabNote-Extension/tree/main/apps/web)

## Why do we need another implementation for the slash menu when Novel and harshtalks already did it?

When I was building TabNote, a Chrome extension that lets you take notes directly on your new tab page, I tried using
both **Novel** and **@harshtalks/slash-tiptap** for the slash menu feature.
 - **Novel’s implementation** is tightly coupled to its own editor configuration, making it difficult to reuse in standalone projects.
 - **@harshtalks/slash-tiptap** bundles Tiptap directly in its dependencies, which can lead to version conflicts if your project uses a different or newer version of Tiptap.

To address these issues in my own side project, I created this library. It treats Tiptap as a peer dependency, avoids
shipping any unnecessary editor code, and provides a lightweight, focused extension that you can integrate into any
rich text editor setup.

## Installation

```bash
npm install @bmin-mit/tiptap-slash-commands @tiptap/pm @tiptap/react @tiptap/suggestion
# or
yarn a @bmin-mit/tiptap-slash-commands @tiptap/pm @tiptap/react @tiptap/suggestion
# or
pnpm i @bmin-mit/tiptap-slash-commands @tiptap/pm @tiptap/react @tiptap/suggestion
# or
bun i @bmin-mit/tiptap-slash-commands @tiptap/pm @tiptap/react @tiptap/suggestion
```

## Usage

### 1. Configure the Extension

Add the extension and keyboard helper to your Tiptap editor configuration.

```tsx
import { useEditor, EditorContent } from '@tiptap/react'
import { enableKeyboardNavigation, SlashCommandsExtension } from '@bmin-mit/tiptap-slash-commands'

const editor = useEditor({
  extensions: [
    SlashCommandsExtension,
    // ... other extensions
  ],
  editorProps: {
    handleDOMEvents: {
        keydown: (_, v) => enableKeyboardNavigation(v),
    },
  },
  // ...
})
```

### 2. Setup the Component Tree

Wrap your editor and command menu with `SlashCommands.Root`. Use `SlashCommands.Commands` and `SlashCommands.List` to define the menu and `SlashCommands.Item` for each command.
The `SlashCommands` instance is already included in `cmdk`'s components like `Empty` (`SlashCommands.Empty`).

```tsx
import { SlashCommands } from '@bmin-mit/tiptap-slash-commands'

function MyEditor() {
  // ... editor setup

  return (
    <SlashCommands.Root editor={editor}>
      <EditorContent editor={editor} />
      
      <SlashCommands.Commands>
        <SlashCommands.List>
          <SlashCommands.Item 
            onCommand={({ editor, range }) => {
              editor.chain().focus().deleteRange(range).setHeading({ level: 1 }).run()
            }}
          >
            Heading 1
          </SlashCommands.Item>
          
          <SlashCommands.Item 
            onCommand={({ editor, range }) => {
              editor.chain().focus().deleteRange(range).setHeading({ level: 2 }).run()
            }}
          >
            Heading 2
          </SlashCommands.Item>
          
          <SlashCommands.Item 
            onCommand={({ editor, range }) => {
              editor.chain().focus().deleteRange(range).setBulletList().run()
            }}
          >
            Bullet List
          </SlashCommands.Item>
        </SlashCommands.List>
      </SlashCommands.Commands>
    </SlashCommands.Root>
  )
}
```

## License

MIT
