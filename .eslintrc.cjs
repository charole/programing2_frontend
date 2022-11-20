module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'consistent-return': 0,
    'react/prop-types': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'no-nested-ternary': 0,
    'no-alert': 2,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-restricted-exports': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/react-in-jsx-scope': 'off',
    'no-console': [2, { allow: ['error', 'info'] }],
    'react/require-default-props': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // react-dom and react
              ['^react$', '^react-dom', '^react-router'],
              // external libraries
              ['^[a-z]'],
              // path alias
              ['^@'],
              // Parent imports.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
