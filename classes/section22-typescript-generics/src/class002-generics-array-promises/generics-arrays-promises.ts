/*
Existem 2 Genéricos fundamentais nativos do JavaScript: Arrays e Promises

* Array: Uma coleção de elementos de determinado tipo
* Promise: Um objeto que reprsenta uma eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
*/

type MyType = number; //? Apenas para teste -> isso é redundante

//* As duas maneiras de tipar array
const arrayNumber: number[] = [1, 2, 3, 4, 5, 6]; // "Shorthand"
const arrayNumber2: Array<number> = [1, 2, 3, 4, 5, 6]; // Generic Syntax
//! const arrayNumber2: Array = [1, 2, 3, 4, 5, 6]; -> ERRO: Generic Type exige um argumento obrigatório. Sempre devemos informar o tipo!

console.log(arrayNumber);
console.log(arrayNumber2);

//* Promises
async function promiseAsync() { // Toda função async retorna por padrão uma Promise
  return 1;
}

function myPromise(): Promise<MyType> { // Promise<number> -> retorna uma Promise do nosso Type Alias
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1); // Só resolve depois de 1s -> simulando operação assíncrona
    }, 1000);
  });
}
promiseAsync().then(result => console.log(result + 1));
myPromise().then(result => console.log(result + 1));
