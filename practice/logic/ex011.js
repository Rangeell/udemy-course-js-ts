/*
Exercise 006 — Find the First Negative Number

Difficulty: 🟢 Easy

📝 Enunciado
    Dado um array de números, encontre e retorne o primeiro número negativo presente nele.

    Caso o array não possua nenhum número negativo, a função deve retornar null.

    O objetivo deste exercício é praticar a busca por um elemento específico durante uma iteração e interromper o algoritmo assim que ele for encontrado.

🎯 Objetivo

    Implementar uma função que receba um array de números e retorne o primeiro número negativo encontrado.

📌 Contrato da Função

    Neste exercício, considere que:
        ✅ A entrada sempre será válida.
        ✅ A função sempre receberá um array de números.
        ❌ Não é necessário validar argumentos.
        🎯 O foco é exclusivamente no algoritmo.

📋 Rules
    1. A função sempre receberá um array de números.

    2. O array pode conter:
        - Números positivos;
        - Números negativos;
        - Zero;
        - Números decimais.

    3. Se existir pelo menos um número negativo, retorne o primeiro encontrado.

    4. Caso não exista nenhum número negativo, retorne null.

    5. Assim que encontrar o primeiro número negativo, a função deve encerrar sua execução.

    6. Não utilize:
        - find()
        - filter()
        - Bibliotecas externas

    7. Você pode utilizar:
         -for
         -while
         -for...of
         -if
         -return
         -Variáveis
         -Qualquer recurso básico do JavaScript
*/

function findFirstNegativeNumber(numbers) {
    let negative = null

    for (let i in numbers) {
        if (numbers[i] < 0) {
            return negative = numbers[i];
        }
    };

    return negative
};

// * Examples
const temperaturas = [12, 15, 8, -2, -5];
console.log(findFirstNegativeNumber(temperaturas));
/*
Deve retornar:
    -2
*/

const leituras = [18, 21, 17, 19];
console.log(findFirstNegativeNumber(leituras));
/*
Deve retornar:
    null
*/