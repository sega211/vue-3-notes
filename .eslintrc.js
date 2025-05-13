module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'vue/html-indent': ['error', 2],
      'vue/script-setup-uses-vars': 'error'
    }
  };