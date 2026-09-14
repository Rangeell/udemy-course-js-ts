/*
Como realizar tipagem explícita do this em funções comuns
*/

//! this: Date não é o argumento da função! Ele é apenas uma anotação de tipo para o TypeScript.
//* O primeiro argumento dessa função é "nome"
//* O segundo argumento dessa função é "age"
function myFunction(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome);
  console.log(age);
}

/*
.call()
  - Primeiro argumento: passamos quem é o "this" na função que estamos usando
  - Do segundo argumento pra frente: passamos os próprios argumento da função
*/
myFunction.call(new Date(), 'Breno', 23);
/*
Output:
  2026-08-17T17:12:04.292Z
  Breno
  23
*/

/*
.call()
  - Primeiro argumento: passamos quem é o "this" na função que estamos usando
  - Do segundo argumento pra frente: passamos os próprios argumento da função dentro de um array
*/
myFunction.apply(new Date, ['Breno', 23]);
/*
Output:
  2026-08-17T17:12:04.292Z
  Breno
  23
*/
