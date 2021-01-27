module.exports = {
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:testcafe/recommended',
  ],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    '@typescript-eslint/ban-types': ['off'], // FIXME
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['off'], // FIXME
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/member-ordering': ['warn'],
    '@typescript-eslint/no-explicit-any': ['off'], // FIXME
    '@typescript-eslint/no-require-imports': ['error'],
    'array-bracket-spacing': ['warn', 'never'],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        ignorePattern: 'd="([\\s\\S]*?)"|^import\\W.*',
        ignoreStrings: true,
      },
    ],
    'no-console': 'warn',
    'no-plusplus': 'error',
    'no-undef': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'react/no-unused-prop-types': [
      'warn',
      {
        skipShapeProps: true,
      },
    ],
  },
};
