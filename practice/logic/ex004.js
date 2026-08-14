/*
Desafio 3: O Filtro e Mapeador de Pedidos
    Vamos subir um pouco o nível para juntar arrays de objetos, métodos de array em cadeia (chaining) e um pouco de lógica de negócios simples.

Objetivo:
    Escreva uma função chamada filtrarEFormatarPedidos que recebe um array de objetos (representando pedidos) e um status (string). A função deve retornar um novo array apenas com os nomes dos clientes cujos pedidos correspondem ao status informado e cujo valor total seja maior que 100.

Regras / Requisitos:

    1. Valide os argumentos:
        - O primeiro argumento deve ser um Array.
        - O segundo argumento deve ser uma string não vazia.
        - Se algum falhar, lance um TypeError.

    2. O resultado retornado deve ser um array contendo apenas as strings dos nomes dos clientes formatadas em letras maiúsculas (ex: "CARLOS").

    3. Se nenhum pedido atender aos critérios, retorne um array vazio [].
*/

const pedidos = [
    { id: 1, cliente: "Ana", total: 200, status: "pago" },
    { id: 2, cliente: "Beto", total: 80, status: "pago" },
    { id: 3, cliente: "Caio", total: 150, status: "pendente" },
    { id: 4, cliente: "Daniela", total: 300, status: "pago" }
];

const filterAndFormat = (orders, status) => {
    if (!Array.isArray(orders)) throw new TypeError('O primeiro argumento deve ser um array!')
    if (!status) throw new TypeError('O segundo argumento deve ser uma string válida!')

    const names = orders.reduce((acc, v) => {
        if (v.status === status && v.total > 100) acc.push(v.cliente.toUpperCase())

        return acc
    }, [])

    return names
}

console.log(filterAndFormat(pedidos, "pago"));
// Deve retornar: ["ANA", "DANIELA"]