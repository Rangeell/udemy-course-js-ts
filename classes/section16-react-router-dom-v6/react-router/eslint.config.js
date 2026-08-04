import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // 2. Regras estritas de estilo inspiradas no Airbnb:
      semi: ["warn", "always"], // Obriga usar ponto e vírgula
      quotes: ["warn", "single"], // Obriga usar aspas simples
      "comma-dangle": ["error", "always-multiline"], // Obriga a vírgula no final de objetos/arrays multilinhas
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }], // Remove linhas em branco extras

      // 3. Suas exceções para as aulas do professor Otávio:
      "no-unused-vars": "warn", // Avisa sobre variáveis não usadas (linha amarela)
    }
  },
])
