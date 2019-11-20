module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'class-name': 2,
    curly: 2,
    'import-spacing': 2,
    indent: [2, 2],
    'interface-over-type-literal': 2,
    'label-position': 2,
    'no-arg': 2,
    quotes: [2, 'single'],
    'no-duplicate-variable': 2,
    'no-eval': 2,
    'no-inferrable-types': 2,
    'no-unused-expression': 2,
    'no-var-keyword': 2,
    'object-literal-key-quotes': [2, 'as-needed'],
    'object-literal-shorthand': 2,
    'prefer-const': 2,
    'prefer-method-signature': 2,
    quotemark: [2, 'single', 'avoid-escape'],
    whitespace: 2,
    semicolon: [2, 'always'],
    'triple-equals': 2,
    'variable-name': [2, 'ban-keywords', 'check-format', 'allow-leading-underscore'],
    'max-line-length': 2
  }
};
