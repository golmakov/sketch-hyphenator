![Icon](/assets/icon.png)

# Sketch hyphenation plugin

A plugin for Bohemiancoding Sketch for addind / removing hyphenation to a selected text layers. Currently plugin support only Russian and English texts.

![Screencast](/assets/hyphenator-sample.gif)

It uses [Hypher](https://github.com/bramstein/hypher) js hyphenation engine.

## Install instructions

[Download the ZIP file](https://github.com/golmakov/sketch-hyphenator/releases/download/v0.1.2/sketch-hyphenator.sketchplugin.zip) and extract contents, then double-click on the `sketch-hyphenator.sketchplugin` file.

Or if you using [Runner](http://sketchrunner.com), just go to the `install` command and search for `Sketch hyphenator`


## Building from source

```bash
# Install the dependencies
npm install

# Build an watch for changes
npm run watch

# Watch for sketch plugins logs
skpm log -f

# Always reload scripts before running
defaults write ~/Library/Preferences/com.bohemiancoding.sketch3.plist AlwaysReloadScript -bool YES
```