/*
FASE 1 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    Matéria: Método map()
    Fase: 1 (Introdução / Primeiros Exercícios)
    Tipo: Transformação de Catálogo de Produtos
    Arquivo: map01-conversor-moedas.js
*/

/*
O Enunciado
    Você está trabalhando no motor de um e-commerce internacional. Você recebeu uma lista de produtos (produtos) onde os preços estão em Dólar (USD).
    Sua missão é criar uma função chamada converterPrecosParaReal(produtos, taxaCambio) que use o método map() para transformar essa lista, retornando um novo array de objetos onde os preços estejam convertidos para Real (BRL).

As Malandragens do Cenário (Atenção!):
    - Você deve manter as propriedades id e nome intactas.
    - A propriedade preco deve ser multiplicada pela taxaCambio.
    - Cuidado Extremo (Referência na Memória): Se você fizer apenas v.preco = novoPreco dentro do map, você vai alterar o array original (o que quebra a regra do map). Para evitar isso, faça a sua função retornar um novo objeto para cada produto. (Dica: return { id: v.id, nome: v.nome, preco: ... }).

Exemplo de Entrada para Teste:
    const produtosUSD = [
        { id: 101, nome: "Teclado Mecânico", preco: 50 },
        { id: 102, nome: "Mouse Gamer", preco: 30 },
        { id: 103, nome: "Monitor 144hz", preco: 200 }
    ];

    const taxaCatarina = 5.5; // 1 Dólar = 5.5 Reais

Retorno Esperado da Função:
    Um novo array com este formato:
        [
            { id: 101, nome: "Teclado Mecânico", preco: 275 },
            { id: 102, nome: "Mouse Gamer", preco: 165 },
            { id: 103, nome: "Monitor 144hz", preco: 1100 }
        ]
*/

const produtosUSD = [
    { id: 101, nome: "Teclado Mecânico", preco: 50 },
    { id: 102, nome: "Mouse Gamer", preco: 30 },
    { id: 103, nome: "Monitor 144hz", preco: 200 }
];

const taxaCatarina = 5.5; // 1 Dólar = 5.5 Reais

function converterPrecosParaReal(produtos, taxaCambio) {
    return produtos.map(v => {
        const newObject = { ...v }
        newObject.preco *= taxaCambio
        return newObject
    })
}
console.log(converterPrecosParaReal(produtosUSD, taxaCatarina))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 1: INTRODUÇÃO AO MAP()
=======================================================================
✔ PONTOS FORTES:
- Substituição perfeita do padrão imperativo (forEach/push) pelo funcional.
- Uso brilhante do Spread Operator (...v) para clonar o objeto. Isso 
  mostra domínio sobre o conceito de imutabilidade e referência de memória.

💡 APRENDIZADO CHAVE:
- Entendido o papel do 'map()': ele funciona como uma esteira que exige 
  um retorno para cada item, gerando um novo array de mesmo tamanho sem 
  mutar a fonte de dados original.
=======================================================================
*/