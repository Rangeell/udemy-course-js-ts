/*
Função que funciona como um Type Guard, onde pretendemos realizar Type Narrowing

Verifica se um valor é do tipo number e informa ao compilador.

Em vez de `: boolean` para tipar o retorno, usamos `: value is number`, ou seja, estamo criando um predicato.

Sempre que essa função for invocada em uma estrutura condicional (como um `if` ou dentro de um `filter`/`reduce`) e retornar `true`, o TypeScript garantirá estritamente que, naquele escopo específico, o valor checado é do tipo `number`.

Basicamente, estamos dizendo ao compilador: "Sempre que o retorno da função for `true`, o `value` é number"

* @param value Valor de tipo desconhecido
* @returns Predicado indicando se o valor é number
*/
export function isNumber(value: unknown): value is number { // Type Predicate
  return typeof value === 'number'; // Retorno booleano (se for false, o `value` não é um `number`)
}

/**
 * Soma valores de um array, filtrando apenas os números.
 * @param args Argumentos de tipo genérico T
 * @returns O total da soma
 */
export function sum<T>(...args: T[]): number { // Poderia ser usado unknown ao invés de generics
  const result = args.reduce((acc, value) => {
    if (isNumber(value)) { // Se `value` for `number`, somamos
      return acc + value; //* Só funciona por conta de `value is number` da função acima
    }

    return acc; // `acc` sempre será `number`, pois começamos com 0. Chegar `isNumber(acc)` é redundante
  }, 0);

  return result;
}

// Exemplos de Uso e Inferência
console.log(isNumber(123)); // true
console.log(isNumber('123')); // false

// Caso 1: Apenas números. T é inferido como 'number'
console.log(sum(1, 2, 3)); // 6

/*
Caso 2: Mistura de tipos. Como a função utiliza um único tipo genérico T para todos os argumentos, podemos definir explicitamente T como number | string, permitindo que valores dos dois tipos sejam recebidos.
*/
console.log(sum<number | string>(1, 2, 3, 'a', 'b', 'c', 1)); // 7
console.log(sum('a', 'b', 'c')); // 0
