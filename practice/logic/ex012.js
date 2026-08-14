/*
Exercise 012— Is Array Sorted

Difficulty: 🟢 Easy

📝 Enunciado
    - Dado um array de números, determine se ele está ordenado em ordem crescente.

    - Um array está ordenado quando cada elemento é menor ou igual ao elemento seguinte.

    - Se o array estiver ordenado, retorne true.

    - Caso encontre qualquer elemento maior que o elemento seguinte, retorne false.

    - O objetivo deste exercício é praticar a comparação entre elementos vizinhos e utilizar early return para encerrar a execução assim que uma violação for encontrada.

🎯 Objetivo
    - Implementar uma função que receba um array de números e retorne um boolean indicando se os elementos estão em ordem crescente.

📌 Contrato da Função

Neste exercício:
    -✅ A entrada sempre será válida.
    -✅ A função sempre receberá um array de números.
    -❌ Não é necessário validar os argumentos.
    -🎯 O foco é exclusivamente no algoritmo.

📋 Rules
    1. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Zero;
        - Números decimais;
        - Valores repetidos.
    
    2. Valores repetidos são permitidos.
        - [1, 2, 2, 3]
        - true

    4. Um array vazio é considerado ordenado.
        - []
        - true
    
    5. Um array com apenas um elemento também é considerado ordenado.
        - [5]
        - true
    
    6. A ordem deve ser crescente ou igual, e não estritamente crescente.
    
    7. Assim que encontrar uma violação da ordem, a função deve encerrar sua execução.
    
    8. Não utilize:
        - sort()
        - toSorted()
        - Bibliotecas externas.
    
    9. Você pode utilizar:
        - for;
        - while;
        - for...of;
        - if;
        - return;
        - índices;
        - variáveis;
        - qualquer recurso básico do JavaScript.
*/

function isArraySorted(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) return false;
    }

    return true;
}

//* Examples
console.log(isArraySorted([1, 2, 3, 4, 5]));
// true

console.log(isArraySorted([1, 2, 2, 3]));
// true

console.log(isArraySorted([1, 3, 2, 4]));
// false

console.log(isArraySorted([-5, -3, -1, 0, 4]));
// true

console.log(isArraySorted([10, 8, 9]));
// false