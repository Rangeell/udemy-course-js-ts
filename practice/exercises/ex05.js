/*
Desafio 4: O Agrupador de Dados (Group By)

Objetivo:
    Escreva uma função chamada agruparPor que recebe um array de objetos e uma string contendo o nome de uma propriedade. A função deve retornar um objeto agrupando os elementos do array pelo valor dessa propriedade.

Regras / Requisitos:

    1. Validações:
        - O primeiro argumento deve ser um Array.
        - O segundo argumento deve ser uma string não vazia.
        - Se algum falhar, lance um TypeError.

    2. As chaves do objeto final devem ser os valores encontrados na propriedade informada.
    3. Os valores do objeto final devem ser arrays com os objetos originais correspondentes a cada chave.
*/

const groupBy = (arr, key) => {
    if (!Array.isArray(arr)) throw new TypeError('O primeiro argumento deve ser um array!');
    if(!key) throw new TypeError('O segundo argumento deve ser uma string válida');

    const grouped = arr.reduce((acc, v) => {
        acc[v[key]] = acc[v[key]] ?? []
        acc[v[key]].push(v)

        return acc
    }, {});

    return grouped
}

const usuarios = [
    { nome: "Ana", funcao: "Dev" },
    { nome: "Beto", funcao: "Design" },
    { nome: "Caio", funcao: "Dev" },
    { nome: "Daniela", funcao: "Manager" }
];

console.log(groupBy(usuarios, "funcao"));
/*
Deve retornar:
{
  Dev: [
    { nome: "Ana", funcao: "Dev" },
    { nome: "Caio", funcao: "Dev" }
  ],
  Design: [
    { nome: "Beto", funcao: "Design" }
  ],
  Manager: [
    { nome: "Daniela", funcao: "Manager" }
  ]
}
*/