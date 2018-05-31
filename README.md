![Icon](/assets/icon.png)

# Sketch hyphenation plugin

Sketch plugin for addindg / removing hyphenation in selected text layers.
Currently plugin supports only Russian and English texts.

![Screencast](/assets/hyphenator-sample.gif)

It uses [Hypher](https://github.com/bramstein/hypher) javascript hyphenation engine.

## Install instructions

[Download the ZIP file](https://github.com/golmakov/sketch-hyphenator/releases/download/v0.1.2/sketch-hyphenator.sketchplugin.zip) and extract contents, then double-click on the `sketch-hyphenator.sketchplugin` file.

![Runner](/assets/hyphenator-install.gif)

Or if you using [Runner](http://sketchrunner.com), just go to the `install` tab and search for `Sketch hyphenator`


## Building from source

If you need to hyphenate texts in languages other than Russian and English you can find additional language patterns in the [patterns repository](https://github.com/bramstein/hyphenation-patterns).

Include language patterns you need as a dependencies in the `package.json` file, spanish for example:
```JSON
"dependencies": {
    "hyphenation.es": "^0.2.1",
    ...
}
```

Edit the `src/hyphenate.js` file and add new language patterns:
```JavaScript
...
import es from 'hyphenation.es';// Import spanish hyphenation patterns

var engines = new Array();
engines.push(new hypher(ru));
engines.push(new hypher(en));
engines.push(new hypher(es)); // Use spanish patterns as hyphenation engine
...
```

Now you can build plugin from source:
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