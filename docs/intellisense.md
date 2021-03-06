# IntelliSense

ddx offers IntelliSense all over your .vue file.

## `<template>`

ddx offers IntelliSense for html tags & attributes.

ddx also completes Vue specific attributes such as `v-if` and `@click`.

Inside template interpolation, such as `v-if="|"`, `@click="|"` or `:attr="|"`, ddx offers completions for `props`, `data`, `computed` and `methods`.

UI Libraries such as Element UI and Onsen UI often include a list of ready-to-use components, and ddx offers completion for them. Read more at [Framework Support](framework.md).

## `<style>`

ddx offers IntelliSense for CSS properties & values in `css/scss/less/postcss/stylus`.  

## `<script>`

ddx supports IntelliSense for `js/ts`.  
The IntelliSense should be almost the same to the IntelliSense in `js/ts` files.

#### Module Resolution

ddx should be able to resolve external modules and provide IntelliSense for them if they have type definitions.

For example, `vue` packages type definition in its module, so

- `npm i -S vue`
- `import Vue from 'vue'`
- `Vue.` should prompt IntelliSense for Vue.

`lodash` doesn't package type definition with it, but there is `@types/lodash` that has type definition for `lodash`, so

- `npm i -S lodash`
- `npm i -D @types/lodash`
- `import * as _ from 'lodash'`
- `_.` should prompt IntelliSense for lodash.

See also the [Frequently Asked Questions](https://github.com/vuejs/ddx/blob/master/docs/FAQ.md#faq) for more information on module resolution with regards to path aliases and Single File Components.
