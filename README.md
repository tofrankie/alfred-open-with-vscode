# alfred-open-with-vscode

[![npm version](https://img.shields.io/npm/v/alfred-open-with-vscode)](https://www.npmjs.com/package/alfred-open-with-vscode) [![node version](https://img.shields.io/node/v/alfred-open-with-vscode)](https://nodejs.org) [![npm package license](https://img.shields.io/npm/l/alfred-open-with-vscode)](https://github.com/tofrankie/example/blob/main/LICENSE) [![npm last update](https://img.shields.io/npm/last-update/alfred-open-with-vscode)](https://www.npmjs.com/package/alfred-open-with-vscode)

💻 An Alfred workflow for opening folders with Visual Studio Code.

## Features

- Show folders recently opened in Visual Studio Code
- Support custom search path and search depth

## Installation

> [!NOTE]
>
> - Requires Node.js 10 or later.
> - Requires zsh ([Apple migrated the default shell to zsh](https://support.apple.com/en-us/HT208050)).

```bash
# Install globally
$ npm i alfred-open-with-vscode -g

# Import to Alfred
$ alfred-open-with-vscode-import
```

After triggering the Alfred hotkey, type `open` to list folders recently opened in Visual Studio Code. Keep typing a folder name to filter results, then press `Enter` to open the selected folder with Visual Studio Code.

## TODOs

- [x] Support custom workflow keywords.
- [ ] Sort by open frequency.
