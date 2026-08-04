/*
Exercise 009 — Count Even Numbers

Difficulty: 🟢 Easy

📝 Enunciado
    Dado um array de números inteiros, conte quantos deles são pares e retorne essa quantidade.

    Um número é considerado par quando é divisível por 2, ou seja, o resto da divisão por 2 é igual a 0.

    O objetivo deste exercício é praticar percorrer arrays, aplicar condições e utilizar contadores.

🎯 Objetivo
    Implementar uma função que receba um array de números inteiros e retorne a quantidade de números pares existentes nele.

📋 Rules
    1. A função sempre receberá um array de números inteiros.
    
    2. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Zero;
        - Valores repetidos.
        - Caso não exista nenhum número par, a função deve retornar 0.


    3. Não utilize:
        - filter()
        - Expressões Regulares (RegExp)
        - Bibliotecas externas

    4. Você pode utilizar:
        - for
        - while
        - for...of
        - if
        - Operador de módulo (%)
        - Variáveis
        - Qualquer recurso básico do JavaScript
*/

function countEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) throw new TypeError('A função aceita apenas arrays!');

    let count = 0;

    for (let num of numbers) {
        if (typeof num !== 'number') continue;
        if (num % 2 === 0) count++
    };

    return count
};

//* Examples

const maquinas = [101, 102, 103, 104, 105, 106];
console.log(countEvenNumbers(maquinas));
/*
Deve retornar:
    3
*/

const pedidos = [2001, 2002, 2004, 2007, 2010];
console.log(countEvenNumbers(pedidos));
/*
Deve retornar:
    3
*/