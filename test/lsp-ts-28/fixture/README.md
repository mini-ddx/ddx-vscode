# Veturpack

Project based on [vuepack](https://github.com/egoist/vuepack) to try [ddx](https://github.com/octref/ddx).

## Usage

```bash
$ yarn
$ yarn dev
```

## Things to Try

- Do a emmet expansion on the html template.
- Try `_.` in `Counter.ddx` to see lodash auto completion.
- Edit `.eslintrc` to config linting rules.
- Remove `// @ts-check` and add it back to see their difference.
- Format the document.
- Change some options in `ddx.format.*` then format again.
- Install another library with types, such as jquery.
  - `npm i -S jquery && npm i -D @types/jquery`.
  - Put `import * as $ from 'jquery'`.
  - Try some jquery auto completion by typing `$.`.
- Try some auto completion in scss.

## License

MIT © [Pine Wu](https://github.com/octref)
