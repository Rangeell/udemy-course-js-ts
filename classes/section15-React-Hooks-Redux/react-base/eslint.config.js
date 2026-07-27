// Regras recomendadas para JavaScript
import js from '@eslint/js';

// Variáveis globais do navegador (window, document, etc.)
import globals from 'globals';

// Plugin oficial para React Hooks
import reactHooks from 'eslint-plugin-react-hooks';

// Plugin do Vite para compatibilidade com Fast Refresh
import reactRefresh from 'eslint-plugin-react-refresh';

// Funções do novo sistema de configuração do ESLint (Flat Config)
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']), // Ignora a pasta gerada pelo build

  {
    // Aplica esta configuração apenas para arquivos .js e .jsx
    files: ['**/*.{js,jsx}'],

    // Configurações base utilizadas pelo projeto
    extends: [
      js.configs.recommended, // Regras recomendadas do JavaScript
      reactHooks.configs.flat.recommended, // Regras oficiais dos Hooks
      reactRefresh.configs.vite, // Compatibilidade com Fast Refresh
    ],

    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React instalada
      },
    },

    rules: {
      'no-unused-vars': 'warn', // Avisa sobre variáveis não usadas (linha amarela)
      'react-hooks/rules-of-hooks': 'error', // Gera erro quando Hooks são usados incorretamente
      'react-hooks/exhaustive-deps': 'warn', // Avisa quando faltam dependências no useEffect
      semi: ['warn', 'always'], // Obriga usar ponto e vírgula
      quotes: ['warn', 'single'], // Obriga usar aspas simples
      // indent: ['error', 2], // Obriga indentação com 2 espaços
      'comma-dangle': ['error', 'always-multiline'], // Obriga a vírgula no final de objetos/arrays multilinhas
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Remove linhas em branco extras
    },
  },
]);
