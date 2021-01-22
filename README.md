# Serbea syntax highlighting for VS Code

Highlight your [Serbea template](https://www.serbea.dev) code!

## Features

Besides syntax highlighting of `*.serb` files, it comes with two palette commands:

* **Convert Selection from ERB to Serbea**
* **Convert Selection from Serbea expression to pipeline**

There's also a **Serbea Markdown (Ruby)** language so you can write Markdown with embedded Serbea code (as is typical in [Bridgetown](https://www.bridgetownrb.com) projects).

Also, if you're using the VSCode Icons package, add this to your `settings.json`:

```json
  "vsicons.associations.files": [
    {
      "icon": "erb",
      "extensions": ["serb"],
      "format": "svg"
    }
  ]
```

## Having Issues?

[File a bug report or feature request](https://github.com/bridgetownrb/vscode-serbea) and we'll take a look.
