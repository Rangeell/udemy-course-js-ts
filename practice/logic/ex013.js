/*
Exercise 013 — Find the Second Largest Number

Difficulty: 🟢 Easy

📝 Enunciado

Dado um array de números, encontre e retorne o segundo maior número distinto presente nele.
O segundo maior número deve ser diferente do maior.

Por exemplo:
    [10, 5, 8, 10, 3]
    - O maior número é 10.
    - O segundo maior número distinto é 8.
    - Portanto: 8

O objetivo deste exercício é praticar o acompanhamento de mais de uma informação durante uma única iteração, além de trabalhar com comparações e atualização de valores.

🎯 Objetivo
    Implementar uma função que receba um array de números e retorne o segundo maior número distinto existente nele.

📌 Contrato da Função

    Neste exercício:
        ✅ A entrada sempre será válida.
        ✅ A função sempre receberá um array de números.
        ✅ O array sempre possuirá pelo menos dois números distintos.
        ❌ Não é necessário validar os argumentos.
        🎯 O foco é exclusivamente no algoritmo.

📋 Rules
    1. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Zero;
        - Números decimais;
        - Valores repetidos.

    2. O maior e o segundo maior número devem ser distintos.

    3. Valores repetidos não devem ser considerados como posições diferentes no ranking.
        Por exemplo:
            [10, 10, 8, 5]
            O resultado deve ser: 8, e não 10.

    4. O array não precisa estar ordenado.

    5. Não utilize:
        - sort();
        - toSorted();
        - Math.max();
        - Bibliotecas externas.

    6. Você pode utilizar:
        - for;
        - while;
        - for...of;
        - if;
        - return;
        - variáveis;
        - comparadores;
        - qualquer recurso básico do JavaScript.

    7. Tente resolver percorrendo o array apenas uma vez.
*/

function findSecondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let n of numbers) {
        if (n > largest) {
            secondLargest = largest;
            largest = n
        }

        if (n < largest && n > secondLargest) {
            secondLargest = n;
        }

    }

    return secondLargest
}

//* Examples
let numbers = [10, 5, 8, 3, 7];
console.log(findSecondLargest(numbers));
// Deve retornar: 8

numbers = [10, 10, 8, 5, 3];
console.log(findSecondLargest(numbers));
// Deve retornar: 8

numbers = [-10, -5, -20, -3];
console.log(findSecondLargest(numbers));
// Deve retornar: -5

numbers = [5, 2, 9, 9, 7, 9, 4];
console.log(findSecondLargest(numbers));
// Deve retornar: 7

numbers = [1.5, 3.7, 2.2, 4.8];
console.log(findSecondLargest(numbers));
// Deve retornar: 3.7
