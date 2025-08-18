module.exports = {
  extends: [ // 规则，引入相关内容，核心rules
    './rules/base/best-practices',
    './rules/base/possible-errors',
    './rules/base/style',
    './rules/base/variables',
    './rules/base/es6',
    './rules/base/strict',
    './rules/imports',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
  root: true,
};
