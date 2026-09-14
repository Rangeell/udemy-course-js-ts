/*
- Arquivo a ser exportado e migrado para TypeScript
*/

// O compilador atribui o tipo `any` tanto aos parâmetros quanto ao retorno da função. Isso cria uma "buraco" na segurança
export function sum(x, y) {
  return x + y;
}
