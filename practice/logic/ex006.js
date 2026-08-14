/*
Exercise 001 — Find the Largest Number
Difficulty: 🟢 Easy

Enunciado
    Dado um array de números, retorne o maior número presente nele. 
    
    Sua solução não deve utilizar funções prontas do JavaScript que resolvam diretamente o problema, como Math.max() ou ordenação do array. 
    
    O objetivo deste exercício é praticar percorrer um array, realizar comparações e manter o controle do maior valor encontrado.

Objetivo
    Implementar uma função capaz de percorrer um array de números e identificar o maior valor existente, comparando cada elemento individualmente.

Rules
    1. O array sempre possuirá pelo menos um elemento.
    2. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Números decimais;
        - Valores repetidos.
    3. Não utilize:
        - Math.max()
        - Array.prototype.sort()
        - Bibliotecas externas
    4. Você pode utilizar:
        - for
        - while
        - for...of
        - if
        - Variáveis
        - Qualquer recurso básico da linguagem JavaScript
*/


function findLargestNumber(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new TypeError('O argumento deve ser um array válido não vazio!')
    }

    const largestNumber = numbers.reduce((acc, n) => {
        return acc > n ? acc : n
    })

    return largestNumber
}

//* Exemples

const produtos = [129.9, 89.5, 249.99, 59.9, 399.9];
console.log(findLargestNumber(produtos));
/*
Deve retornar:
    399.9
*/

const temperaturas = [-12, -5, -18, -2, -9];
console.log(findLargestNumber(temperaturas));
/*
Deve retornar:
    -2
*/