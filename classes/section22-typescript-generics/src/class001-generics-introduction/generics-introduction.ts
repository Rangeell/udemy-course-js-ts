// Simulando uma situação onde não saberíamos com quais tipos vamos trabalhar

//* Criando uma função que simula o método .filter() -> SEM GENERICS

type FilterCallback = ( // Tipo para a função de callback
  value: unknown,
  index?: number,
  array?: unknown[]
) => boolean;

// A função em si recebe um array de tipos desconhecidos e uma função de callback
function myFilter(array: unknown[], callbackfn: FilterCallback): unknown {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    // Se a função de callback retornar true, incluimos o elemento atual no novo array
    if (callbackfn(array[i])) newArray.push(array[i]);
  }

  return newArray;
}

// Testes
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Tipo concreto -> Array de numbers

const arrayFiltradoOriginal = array.filter((value) => value < 5);
const myFiltedArray = myFilter(array, (value) => {
  if (typeof value === 'number') return value < 5; // Verificando o tipo
  return false;
});

console.log(arrayFiltradoOriginal); // Resultado do filter original
console.log(myFiltedArray); // Resultado do nosso filter

/*
O resultado o é o mesmo, contudo:
  - O filter original, o array resultante é do tipo number, enquanto o nosso array filtrado é do tipo unknown

  - Isso deixa o nosso código muito mais rídigo, além de nos obrigar a realizar a usar type guards para cada tipo de entrada que função receber, ou seja, a nossa função não tem nada de "genérica"
*/

//* Criando uma função que simula o método .filter() -> COM GENERICS

// <U> captura o tipo no momento da chamada da função (tipo)
type FilterCallback2<U> = (
  value: U, // Valor do tipo capturado pela função (dinâmico)
  index?: number,
  array?: U[], // Array de tipo U -> capturado dinamicamente na chamada da função
) => boolean;

// <T> captura o tipo no momento da chamada da função
// O tipo da função de callback, consequentemente, passa a requirir um argumento de tipo genérico também
function myFilter2<T>(array: T[], callback: FilterCallback2<T>): T[] {
  const newArray: T[] = [];  // T[] distribui o tipo capturado para o novo array

  for (let i = 0; i < array.length; i++) {
    // O callback agora sabe exatamente que 'array[i]' é do tipo T
    if (callback(array[i]!)) newArray.push(array[i]!);
  }

  return newArray;
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myFiltedArray2 = myFilter2(array2, (value) => value < 5);

console.log(myFiltedArray2);
