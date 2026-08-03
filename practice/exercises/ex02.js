/*
Exercise 02: Count Elements / Element Counter

Objetivo:
    Escreva uma função chamada contarElementos que recebe um array de strings ou números e retorna um objeto onde cada chave é um elemento do array e o valor é a quantidade de vezes que ele aparece.

Regras / Requisitos:
    1. A função deve validar se o primeiro argumento é realmente um Array (use Array.isArray). Se não for, lance um TypeError.
    2. Se o array estiver vazio, retorne um objeto vazio {}.
    3. Deve funcionar com strings e números.
*/

const countElements = function (arr) {
    if (!Array.isArray(arr)) throw new TypeError('O argumento deve ser um array não vazio!');
    if (arr.length === 0) return {};

    const elements = arr.reduce((acc, v) => {

        acc[v] = (acc[v] || 0) + 1;

        return acc
    }, {})

    return elements
};

console.log(countElements(["maçã", "banana", "maçã", "laranja", "banana", "maçã"]));
console.log(countElements([1, 2, 2, 3, 1, 1]));
console.log(countElements([]));