/*
Exercise 010 — Double the Numbers

Difficulty: 🟢 Easy

📝 Enunciado
    Dado um array de números, retorne um novo array onde cada número seja o dobro do valor original.

    A função não deve modificar o array recebido. Em vez disso, ela deve criar e retornar um novo array contendo os valores transformados.

    O objetivo deste exercício é praticar a criação de novos arrays durante uma iteração.

    !Considere que a entrada é sempre válida.

🎯 Objetivo
    Implementar uma função que receba um array de números e retorne um novo array contendo o dobro de cada elemento.

📋 Rules
    1. A função sempre receberá um array de números.
    
    2. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Zero;
        - Números decimais.
        - O array original não pode ser alterado.
    
    3. Não utilize:
        - map()
        - Bibliotecas externas
    
    4. Você pode utilizar:
        - for
        - while
        - for...of
        - push()
        - Variáveis
        - Qualquer recurso básico do JavaScript
*/

function doubleNumbers(numbers, multiplier = 2) {
    const newArr = []

    for (let num of numbers) {
        newArr.push(num * multiplier);
    }

    return newArr
}

//* Examples

const bonus = [500, 750, 1000];
console.log(doubleNumbers(bonus));
/*
Deve retornar:
    [1000, 1500, 2000]
*/

const pontuacoes = [10, 20, 30, 40];
console.log(doubleNumbers(pontuacoes));
/*
Deve retornar:
    [20, 40, 60, 80]
*/

const numeros = [1, 2, 3];
const resultado = doubleNumbers(numeros);
console.log(resultado);
// [2, 4, 6]
console.log(numeros);
// [1, 2, 3]