# Linting / Error Checking

ddx provides error-checking and linting.

## Error Checking

ddx has error checking for the following languages:

- `<template>`: `html`
- `<style>`: `css`, `scss`, `less`
- `<script>`: `js`, `ts`

You can selectively turn error checking off by `ddx.validation.[template/style/script]`.

## Linting

Install [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for the best linting experience. ddx's template linting is only for quick start and does not support rule configuration.

After you installed [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), add `vue` to `eslint.validate` in VS Code config:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    },
  ]
}
```

When configured correctly, ESLint should work for both `<template>` and `<script>`.

#### Linting for `<template>`

ddx bundles a version of [`eslint-plugin-vue`](https://eslint.vuejs.org/) for linting `<template>` section. Linting configuration is based on eslint-plugin-vue's [essential rule set](https://vuejs.github.io/eslint-plugin-vue/rules/#priority-a-essential-error-prevention).

This linting is not configurable and based on a fixed version of `eslint-plugin-vue`. If you would like to configure the template linting rules:

To configure linting rules:

- Turn off ddx's template validation with `ddx.validation.template: false`
- Make sure you have the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). The errors will come from ESLint plugin, not ddx.
- `yarn add -D eslint eslint-plugin-vue` in your workspace root
- Set ESLint rules in `.eslintrc`. An example:

  ```json
  {
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
    ],
    "rules": {
      "vue/html-self-closing": "off"
    }
  }
  ```

You can also checkout [Veturpack](https://github.com/octref/veturpack) to see how to setup `eslint-plugin-vue`.

#### Linting TypeScript

TSLint is not available yet. We do look forward to including it. See [#170](https://github.com/vuejs/ddx/issues/170).

Meanwhile, TS compiler errors will be shown.
