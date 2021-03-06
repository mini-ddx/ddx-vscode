# Formatting

ddx has support for formatting embedded `html/css/scss/less/postcss/stylus/js/ts`.

**ddx only has a "whole document formatter" and cannot format arbitrary ranges.**  
**As a result, only the `Format Document` command is available.**  
**The `Format Selection` command does not work.**

## Formatters

These formatters are available:

- [`prettier`](https://github.com/prettier/prettier): For css/scss/less/js/ts.
- [`prettier-eslint`](https://github.com/prettier/prettier-eslint): For js. Run `prettier` and `eslint --fix`.
- [`prettyhtml`](https://github.com/Prettyhtml/prettyhtml): For html.
- [`stylus-supremacy`](https://github.com/ThisIsManta/stylus-supremacy): For stylus.
- [`vscode-typescript`](https://github.com/Microsoft/TypeScript): For js/ts. The same js/ts formatter for VS Code.

ddx bundles all the above formatters. When ddx observes a local install of the formatter, it'll prefer to use the local version.

You can choose each language's default formatter in VS Code config, `ddx.format.defaultFormatter`.
**Setting a language's formatter to `none` disables formatter for that language.**

Current default:

```json
{
  "ddx.format.defaultFormatter.html": "prettyhtml",
  "ddx.format.defaultFormatter.css": "prettier",
  "ddx.format.defaultFormatter.postcss": "prettier",
  "ddx.format.defaultFormatter.scss": "prettier",
  "ddx.format.defaultFormatter.less": "prettier",
  "ddx.format.defaultFormatter.stylus": "stylus-supremacy",
  "ddx.format.defaultFormatter.js": "prettier",
  "ddx.format.defaultFormatter.ts": "prettier"
}
```

## Settings

A global switch `ddx.format.enable` toggles ddx formatter on and off. This is useful if you want to let Prettier handle `*.vue` file formatting completely.

- The benefits of using Prettier: CLI support, one single formatter.
- The downsides: No Stylus support, can't use `js-beautify`, `prettyhtml` or TypeScript formatter, no options for indenting script/style blocks [yet](https://github.com/prettier/prettier/issues/3888).

### ddx Formatter Config

These two settings are inherited by all formatters:

```json
{
  "ddx.format.options.tabSize": 2,
  "ddx.format.options.useTabs": false
}
```

However, when a local config (such as `.prettierrc`) is found, ddx will prefer it. For example:

- `.prettierrc` is present but does not set `tabWidth` explicitly: ddx uses `ddx.format.options.tabSize` as the `tabWidth` for prettier.
- `.prettierrc` is present and sets `tabWidth` explicitly: ddx ignores `ddx.format.options.tabSize`, always using the value in `.prettierrc`.

`useTabs` works the same way.

#### [prettier](https://prettier.io/)

Opinionated formatter. Settings are read from `.prettierrc` at project root. See format at https://prettier.io/docs/en/configuration.html.

If you want to set global prettier setting, either:

- Make a `.prettierrc` config at your home directory 
- Use the below config and do NOT include a `.prettierrc` in your home directory

  ```json
  "ddx.format.defaultFormatterOptions": {
    "prettier": {
      // Prettier option here
      "semi": false
    }
  }
  ```

#### [prettier-eslint](https://github.com/prettier/prettier-eslint)

Prettier + `eslint --fix`. Settings are read from `.prettierrc` and `.eslintrc` at project root.

Global config: Same as `prettier` global config.

#### [prettyhtml](https://github.com/Prettyhtml/prettyhtml)

The default formatter for Vue templates.

Other settings include:

```json
"ddx.format.defaultFormatterOptions": {
  "prettyhtml": {
    "printWidth": 100, // No line exceeds 100 characters
    "singleQuote": false // Prefer double quotes over single quotes
  }
}
```

`prettier` options are read from local `.prettierrc` config.

#### [vscode-typescript](https://github.com/microsoft/typescript)

VS Code's js/ts formatter built on [TypeScript](https://github.com/microsoft/typescript) language service.

Settings are read from `javascript.format.*` and `typescript.format.*`.

#### [js-beautify-html](https://github.com/beautify-web/js-beautify)

Alternative html formatter.

Default settings are [here](https://github.com/vuejs/ddx/blob/master/server/src/modes/template/services/htmlFormat.ts). You can override them by setting `ddx.format.defaultFormatterOptions.js-beautify-html`.

```json
"ddx.format.defaultFormatterOptions": {
  "js-beautify-html": {
    // js-beautify-html settings here
  }
}
```

#### [stylus-supremacy](https://thisismanta.github.io/stylus-supremacy/)

Other settings are read from `stylusSupremacy.*`. You can install [Stylus Supremacy extension](https://marketplace.visualstudio.com/items?itemName=thisismanta.stylus-supremacy) to get IntelliSense for settings, but ddx will work without it. A useful default:

```json
{
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false
}
```
