/*
Exercise 016 — Remove Duplicates

Difficulty: 🟢 Easy

📝 Enunciado
    Dado um array de elementos, retorne um novo array contendo apenas elementos únicos, removendo todas as ocorrências duplicadas.

    A ordem dos elementos deve ser preservada de acordo com sua primeira aparição no array.

    O array original não deve ser modificado.

    O objetivo deste exercício é praticar a identificação de elementos duplicados e utilizar uma estrutura de dados para controlar quais valores já foram encontrados.

🎯 Objetivo
    - Implementar uma função que receba um array e retorne um novo array sem elementos duplicados.

📌 Contrato da Função
    Neste exercício:
        ✅ A entrada sempre será válida.
        ✅ A função sempre receberá um array.
        ❌ Não é necessário validar os argumentos.
        ❌ O array original não pode ser alterado.
        🎯 O foco é exclusivamente no algoritmo e na estrutura de dados utilizada para detectar duplicatas.

📋 Rules
    1. O array pode conter:
        - Números;
        - Strings;
        - Números negativos;
        - Valores repetidos;
        - Strings vazias.
    
    2. A ordem original deve ser preservada.
    
    3. Quando um elemento aparecer mais de uma vez, apenas sua primeira ocorrência deve permanecer.

    4. Um array vazio deve retornar um novo array vazio.
    
    5. Não utilize:
        - Set como solução pronta;
        - filter();
        - includes();
        - Bibliotecas externas.

    6. Você pode utilizar:
        - for;
        - while;
        - for...of;
        - if;
        - Map;
        - objetos;
        - push();
        - return;
        - variáveis;
        - qualquer recurso básico do JavaScript.
*/

//* 1ST SOLUTION 
const removeDuplicates = (arr) => {
    const cleanArr = []

    for (const item of arr) {
        if (cleanArr.some(i => i === item)) continue
        cleanArr.push(item)
    }

    return cleanArr;
}

//* 2ND SOLUTION (MAP) 
const removeDuplicates2 = (arr) => {
    const newDatas = new Map()
    const cleanArr = []

    for (const item of arr) {
        if (!newDatas.has(item)) {
            newDatas.set(item, true);
            cleanArr.push(item);
        }
    }

    return cleanArr;
}

//* EXAMPLES

const numbers = [1, 2, 2, 3, 1, 4, 3];
console.log(removeDuplicates2(numbers));
/*
Deve retornar:
    [1, 2, 3, 4]
*/

const names = ["Ana", "Beto", "Ana", "Caio", "Beto"];
console.log(removeDuplicates2(names));
/*
Deve retornar:
    ["Ana", "Beto", "Caio"]
*/

const values = [5, 5, 5, 5];
console.log(removeDuplicates2(values));
/*
Deve retornar:
    [5]
*/

const empty = [];
console.log(removeDuplicates2(empty));
/*
Deve retornar:
    []
*/

/*
*INSIGHTS

*Diferenças entre estruturas de dados:
    - Set → coleção de valores únicos.
    - Map → coleção de pares chave → valor.
    - Array → coleção ordenada de elementos acessados por índice.
    - Object → estrutura de propriedades/chaves e valores.

*Nem toda estrutura de dados é igualmente adequada para todo problema.    
*/