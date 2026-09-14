// import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
    files: ['**/*.{js,ts}'],
    extends: [
        // js.configs.recommended,
        tseslint.configs.recommended,
    ],

    rules: {
        semi: ['error', 'always'], // Obriga usar ponto e vírgula
        quotes: ['error', 'single'], // Obriga usar aspas simples
        'comma-dangle': ['error', 'always-multiline'], // Obriga a vírgula no final de objetos/arrays multilinhas
        '@typescript-eslint/no-unused-vars': 'warn', // Transforma o erro de variável não usada em um aviso (amarelo)
    },
});
