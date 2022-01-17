// prettier-ignore
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    // "prettier/prettier": "error",
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'prefer-const': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    'no-useless-return': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-pascal-case': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
  },
};
