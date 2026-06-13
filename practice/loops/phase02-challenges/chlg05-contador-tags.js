/*
O Enunciado
    Você recebeu uma lista de produtos, onde cada produto é um objeto que possui várias "tags" (etiquetas) marcadas como true ou false.
    Sua missão é criar uma função chamada calcularTotalTags(produtos) que descubra quantas tags no total estão marcadas como true somando todos os produtos da lista.

Regras da função:
    - Use o forEach para passar por cada produto da lista.
    - Dentro do forEach, use o for...in para varrer as propriedades de dentro do produto atual.
    - Se o valor da propriedade for exatamente true, aumente o seu contador.
    - Retorno: Retorne o número total de tags true encontradas.

Exemplo de Entrada:
    const listaDeProdutos = [
        { nome: "Teclado", eletronico: true, importado: true, freteGratis: false },
        { nome: "Livro", eletronico: false, importado: false, freteGratis: true }
    ];

Saída Esperada:
    Se rodar calcularTotalTags(listaDeProdutos), o resultado deve ser 3 (porque o Teclado tem duas tags true e o Livro tem uma).
*/

const listaDeProdutos = [
    { nome: "Teclado", eletronico: true, importado: true, freteGratis: false },
    { nome: "Livro", eletronico: false, importado: false, freteGratis: true }
];

function calcularTotalTags(produtos) {
    if (!Array.isArray(produtos)) throw new TypeError('O valor passado deve ser um array')

    let acc = 0
    produtos.forEach(function (v) {
        for (let i in v) {
            if (v[i] === true) acc++
        }
    })
    return acc
}
console.log(calcularTotalTags(listaDeProdutos))