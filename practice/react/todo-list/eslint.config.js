import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    rules: {
      semi: ['warn', 'always'], // Obriga usar ponto e vírgula
      quotes: ['warn', 'single'], // Obriga usar aspas simples
      'comma-dangle': ['warn', 'always-multiline'], // Obriga a vírgula no final de objetos/arrays multilinhas
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Remove linhas em branco extras
      'eol-last': ['warn', 'always'],
      'no-unused-vars': 'warn', // Avisa sobre variáveis não usadas (linha amarela)
    },
  },
]);
