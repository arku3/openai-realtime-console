import reactPlugin from 'eslint-plugin-react';
import eslintJs from '@eslint/js';
import globals from 'globals';

const config = [
  eslintJs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  {
    plugins: { react: reactPlugin },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['warn', {}],
    },
    ignores: [
      'node_modules/',
      'src/lib/realtime-api-beta/dist/',
      'src/lib/wavtools/dist/',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
export default config;
