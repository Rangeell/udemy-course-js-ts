/*
Exercise 015 — Find the Most Frequent Element

Difficulty: 🟢 Easy

📝 Enunciado
    Dado um array de elementos, encontre e retorne o elemento que aparece com maior frequência.

    Caso dois ou mais elementos possuam a mesma maior frequência, retorne o primeiro elemento que atingir essa frequência durante a análise do array.

    O objetivo deste exercício é praticar o conceito de contagem de frequência, utilizando uma estrutura de dados para acompanhar quantas vezes cada elemento aparece.

🎯 Objetivo
    Implementar uma função que receba um array e retorne o elemento que possui a maior quantidade de ocorrências.

📌 Contrato da Função
    Neste exercício:
        ✅ A entrada sempre será válida.
        ✅ A função sempre receberá um array com pelo menos um elemento.
        ✅ Os elementos poderão ser números ou strings.
        ❌ Não é necessário validar os argumentos.
        🎯 O foco é exclusivamente no algoritmo e na estrutura de dados utilizada para controlar as frequências.

📋 Rules
    1. O array pode conter:
        - Números;
        - Strings;
        - Valores repetidos;
        - Valores negativos;
        - Strings vazias.

    2. O elemento retornado deve ser o que possui maior frequência.

    3. Em caso de empate, deve ser retornado o primeiro elemento que atingir a maior frequência durante a iteração.

    4. Não utilize:
        - Map.prototype como solução pronta para contar automaticamente;
        - Bibliotecas externas.

    5. Você pode utilizar:
        - for;
        - while;
        - for...of;
        - if;
        - objetos;
        - Map, desde que você implemente manualmente a lógica de contagem;
        - return;
        - variáveis;
        - qualquer recurso básico do JavaScript.

    6. O objetivo é realizar a contagem de frequência manualmente.
*/

function findMostFrequent(items) {
    const mapa = new Map()

    for (const item of items) {
        if (mapa.has(item)) {
            let currentCount = mapa.get(item)
            mapa.set(item, currentCount + 1)
        } else {
            mapa.set(item, 1)
        }
    }

    let mostFrequence = 0;
    let mostFrequenceItem = null;

    for (const [item, count] of mapa) {
        if (count > mostFrequence) {
            mostFrequenceItem = item
            mostFrequence = count
        }
    }

    return mostFrequenceItem
}

//* EXAMPLES
const numbers = [1, 2, 2, 3, 2, 4];
console.log(findMostFrequent(numbers));
/*
Deve retornar:
    2
*/

const names = ["Ana", "Beto", "Ana", "Caio", "Ana", "Beto"];
console.log(findMostFrequent(names));
/*
Deve retornar:
    "Ana"
*/

const numbers2 = [5, 5, 2, 2, 8];
console.log(findMostFrequent(numbers2));
/*
Deve retornar:
    5
*/

const values = ["JS", "TS", "JS", "Python", "TS"];
console.log(findMostFrequent(values));
/*
Deve retornar:
    "JS"
*/

console.log(findMostFrequent([1, 2, 3, 4]))
/*
Deve retornar:
    1
*/

console.log(findMostFrequent([1, 1, 2, 2, 3]))
/*
Deve retornar:
    1
*/