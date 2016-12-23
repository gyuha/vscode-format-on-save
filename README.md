# Format on Save for VS Code

Enables auto formatting of the code when you save a file.


Settings:

```js
{
    /* Format on save using */
    "formatOnSave.on": true,
    /* The extensions array which will apply */
    "formatOnSave.extensions": ["*"]
}
```

Other example

```js
{
    "formatOnSave.on": true,
    "formatOnSave.extensions": ["js", "java", "php"]
}
```

# Build

    git clone https://github.com/gyuha/vscode-format-on-save 
    npm install
    npm install -g vsce
    vsce publish

# Reference

* [Extending Visual Studio Code](https://code.visualstudio.com/docs/extensions/overview)
* [A walkthrough of creating an extension for VS Code](https://github.com/hoovercj/vscode-extension-tutorial)
* [Vscode publish extension](https://marketplace.visualstudio.com/manage)
* [vsce - Publishing Tool Reference](https://code.visualstudio.com/docs/tools/vscecli)
* [vscode namespace API](https://code.visualstudio.com/docs/extensionAPI/vscode-api)