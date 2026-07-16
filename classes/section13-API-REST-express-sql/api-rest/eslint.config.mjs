import js from '@eslint/js';
import globals from 'globals';

export default [
  // Aplica as regras apenas para os seus arquivos de código JavaScript normais
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // 1. Ativa as regras recomendadas padrão do ESLint
      ...js.configs.recommended.rules,

      // 2. Regras estritas de estilo inspiradas no Airbnb:
      'semi': ['error', 'always'],          // Obriga usar ponto e vírgula
      'quotes': ['error', 'single'],        // Obriga usar aspas simples
      'indent': ['error', 2],               // Obriga indentação com 2 espaços
      'comma-dangle': ['error', 'always-multiline'], // Obriga a vírgula no final de objetos/arrays multilinhas
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }], // Remove linhas em branco extras

      // 3. Suas exceções para as aulas do professor Otávio:
      'no-console': 'off',                  // Permite usar o console.log para testes
      'no-unused-vars': 'warn',             // Avisa sobre variáveis não usadas (linha amarela)
      'class-methods-use-this': 'off',      // Desativa a regra de métodos de classe
      'import/first': 'off',
      'no-param-reassign': 'off',
    },
  },
  // Ignora o próprio arquivo de configuração para evitar que o linter tente se validar e gere erros falsos
  {
    ignores: ['eslint.config.js'],
  },
];
