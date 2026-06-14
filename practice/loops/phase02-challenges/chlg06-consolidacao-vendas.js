/*
O Enunciado
    Você trabalha no backend de um e-commerce e recebeu uma lista de pedidos do dia. Cada pedido é um objeto que contém o nome do cliente e os valores dos produtos que ele comprou. Porém, as chaves dos produtos variam (um cliente comprou tv, outro comprou livro e celular). Além disso, alguns pedidos têm chaves de controle que não são produtos (como cupom ou cancelado).

Sua missão é criar uma função chamada calcularFaturamentoProdutos(pedidos) que percorra a lista e calcule o valor total somado de todos os produtos de todos os clientes.

Regras da função:
    - Valide se pedidos é um Array. Se estiver vazio ou não for array, lance um erro.
    - Use o forEach para passar por cada pedido da lista.
    - Dentro do forEach, use o for...in para varrer as propriedades daquele pedido.
    - A Regra de Ouro (Filtro): Você só deve somar o valor se a chave NÃO for "cliente" e se o valor daquela propriedade for estritamente do tipo number.
    - Retorno: Retorne o valor total faturado (número).

Exemplo de Entrada:
    const pedidosDoDia = [
        { cliente: "Lucas", teclado: 250, mouse: 120, cupom: "PROMO10" },
        { cliente: "Ana", monitor: 900, cancelado: false },
        { cliente: "Carlos", livro: 50, celular: 1500, brinde: null }
    ];
*/

const pedidosDoDia = [
    { cliente: "Lucas", teclado: 250, mouse: 120, cupom: "PROMO10" },
    { cliente: "Ana", monitor: 900, cancelado: false },
    { cliente: "Carlos", livro: 50, celular: 1500, brinde: null }
];

function calcularFaturamentoProdutos(pedidos) {
    if (!Array.isArray(pedidos) || pedidos.length === 0) throw new TypeError('O valor informado precisa ser um array e não pode estar vazio!')

    let totalFaturado = 0
    pedidos.forEach(v => {
        for (let i in v) {
            if (i !== 'cliente' && typeof v[i] === 'number') {
                totalFaturado += v[i]
            }
        }
    })
    return totalFaturado
}

console.log(calcularFaturamentoProdutos(pedidosDoDia))
