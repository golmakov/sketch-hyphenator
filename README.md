# Sketch hyphenation plugin

A plugin for Bohemiancoding Sketch for addind / removing hyphenation to a selected text layers. Currently plugin support only Russian and English texts.

It uses [Hypher](https://github.com/bramstein/hypher) js hyphenation engine.

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