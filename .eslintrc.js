module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};