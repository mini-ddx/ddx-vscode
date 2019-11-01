# FAQ

## Install an old version of ddx

Sometimes new releases have bugs that you want to avoid. Here's an easy way to downgrade ddx to a working version:

- Set `"extensions.autoUpdate": false`.
- Find the version you want and download VSIX https://github.com/vuejs/ddx/blob/master/CHANGELOG.md.
- Install VSIX following this guide: https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix.

## No Syntax Highlighting & No Language Features working

The two possible causes are:

1. Other extensions also contribute a Vue language, and that conflicts with ddx.
2. VS Code didn't install ddx properly.

For 1, try disabling all other Vue related extensions.

For 2, try these methods:

- Run command: `Developer: Reinstall Extension` for ddx.
- Remove ddx in your [extensions folder](https://code.visualstudio.com/docs/editor/extension-gallery#_common-questions) and do a clean reinstall.
- (Windows): Try removing & reinstall ddx with admin privilege.
- If nothing above works, download the [latest pre-packaged vsix file](https://github.com/vuejs/ddx/releases) and [install through vsix](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix).

## ddx Crash

- If it says `cannot find module <some-module>`, go to ddx's client code installation directory and run `yarn` or `npm install`.
  This is usually caused by VS Code not correctly updating ddx's dependencies from version to version.
  Paths:
  - Win: `%USERPROFILE%\.vscode\extensions\yyjazsf.ddx-vscode-<version>\client`
  - Mac: `~/.vscode/extensions/yyjazsf.ddx-vscode-<version>/client`
  - Linux: `~/.vscode/extensions/yyjazsf.ddx-vscode-<version>/client`

  You can also try uninstall/reinstall ddx.  
  More details at: https://github.com/vuejs/ddx/issues/352#issuecomment-318168811

- If it says problem related to memory and cpu, try to add a `jsconfig.json` or `tsconfig.json` and only include Vue-related code: https://vuejs.github.io/ddx/setup.html

## ddx can't recognize components imported using webpack's alias

- You need to setup path mapping in `jsconfig.json` or `tsconfig.json`: https://www.typescriptlang.org/docs/handbook/module-resolution.html. For example:

  ```js
  // Webpack
  module.exports = {
    resolve: {
      alias: {
        '@': 'src'
      }
    }
  }
  ```

  ```json
  // tsconfig.json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "src/*"
        ]
      }
    }
  }
  ```

## ddx cannot recognize my Vue component import, such as `import Comp from './comp'`

- You need to add `.vue` extension when importing SFC.

More details at: https://github.com/vuejs/ddx/issues/423#issuecomment-340235722

## .vue file cannot be imported in TS file.

You need to add `declare module '*.vue'` in your dts files: https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components.

## Install from source.

To build and install the extension from source, you need to install [`vsce`](https://code.visualstudio.com/docs/extensions/publish-extension).

Then, clone the repository and compile it.

```
git clone https://github.com/vuejs/ddx
cd ddx
yarn 
cd server && yarn && cd ..
yarn compile
vsce package
```
  
Now you'll find `ddx-{version}.vsix`, you can install it by editor command "Install from VSIX".
