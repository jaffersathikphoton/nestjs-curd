module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,  },
  ignorePatterns: ['.eslintrc.js'],

  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "indent": ["error", 2],
    "no-unused-vars": "warn",
    "no-undef": "error",
    "no-empty": "error",
    "no-constant-condition": "warn",
    "max-len": ["warn", { "code": 80 }],
    "complexity": ["warn", 10],
    "no-var": "error",
    "no-eval": "error",
    "prettier/prettier": "off",
  },
};
