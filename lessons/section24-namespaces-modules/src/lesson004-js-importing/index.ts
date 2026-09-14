/*
- Nesta aula, aprendemos como importar e reutilizar arquivos JavaScript nativos (`.js`) dentro de um projeto TypeScript, o que é fundamental para cenários de migração gradual do código (JavaScript para TypeScript).

- Em projetos de grande porte, converter um arquivo JS para TS ou ativar o suporte a JS pode gerar uma "explosão" de erros, especialmente relacionados ao `noImplicitAny`. Para evitar o bloqueio do desenvolvimento, adotamos uma estratégia de relaxamento temporário das regras.

- Ajuste a flag `"strict": false` no seu `tsconfig.json` para silenciar erros de tipagem implícita enquanto você estabiliza a migração. No entanto, lembre-se que este é um estado de débito técnico.

- Objetivo final é voltar esse `strict` para `true` para saber que estamos trabalhando da maneira mais restrita possível.
*/

// import { sum } from './module.js'; //! É preciso permitir "allowJS" no tsconfig.json

/*
O único problema é que `result` vai ter o tipo inferido como `any`. Para evitar isso, usamos type assertions como solução temporária.
*/

// const result = sum(10, 20) as number; // Type Assertion
// console.log(result);
