/*
FASE 3 — MATURAÇÃO (EXERCÍCIO DE FIXAÇÃO)
    Matéria: Loops Avançados + Agregação Dinâmica
    Fase: 3 (Maturação / Exercício de Fixação)
    Tipo: Consolidador de Extrato Bancário (Gastos por Categoria)
    Arquivo: proj05-controle-financeiro.js
*/


/*
O Enunciado

    Você recebeu uma lista contendo o extrato de compras do mês de um usuário (extratoCompras). Cada item dessa lista é um objeto que representa uma transação, contendo o valor gasto e a categoria da despesa.
    
    Sua missão é criar uma função chamada consolidarGastosPorCategoria(extratoCompras) que agrupe e some o total de dinheiro gasto em cada categoria.

Regras da função:
    1. Crie um objeto vazio chamado relatorioGasto = {} fora do seu loop.
    2. Use o forEach para varrer o array extratoCompras.
    3. Use a Técnica da Gaveta Dinâmica com o operador || 0 para criar a categoria no objeto caso ela não exista, ou somar o valor se ela já existir.
    4. Retorno: Retorne o objeto relatorioGasto diretamente, de forma automatizada (sem mapear as chaves manualmente no return).

Exemplo de Entrada para Teste:
    const extratoCompras = [
        { estabelecimento: "Supermercado BH", categoria: "Alimentacao", valor: 350 },
        { estabelecimento: "Posto Shell", categoria: "Transporte", valor: 120 },
        { estabelecimento: "Burger King", categoria: "Alimentacao", valor: 45 },
        { estabelecimento: "Netflix", categoria: "Assinaturas", valor: 55 },
        { estabelecimento: "Uber", categoria: "Transporte", valor: 30 }
    ];

Retorno Esperado da Função:
    Seu console.log deve cuspir o objeto exatamente assim:
        {
            Alimentacao: 395,
            Transporte: 150,
            Assinaturas: 55
        }
*/

const extratoCompras = [
    { estabelecimento: "Supermercado BH", categoria: "Alimentacao", valor: 350 },
    { estabelecimento: "Posto Shell", categoria: "Transporte", valor: 120 },
    { estabelecimento: "Burger King", categoria: "Alimentacao", valor: 45 },
    { estabelecimento: "Netflix", categoria: "Assinaturas", valor: 55 },
    { estabelecimento: "Uber", categoria: "Transporte", valor: 30 }
];

function consolidarGastosPorCategoria(extratoCompras) {
    if (arguments.length < 1) throw new Error('Argumento insuficientes para a função!')
    if (!Array.isArray(extratoCompras) || extratoCompras.length === 0) throw new TypeError('O argumento informado precisa ser um array válido!')

    let relatorioGasto = {}

    extratoCompras.forEach(v => {
        relatorioGasto[v.categoria] = (relatorioGasto[v.categoria] || 0) + v.valor
    })
    return relatorioGasto
}
console.log(consolidarGastosPorCategoria(extratoCompras))

/*
=======================================================================
FEEDBACK DO MENTOR - EXERCÍCIO: CONTROLE FINANCEIRO
=======================================================================
✔ PONTOS FORTES:
- Retorno direto e limpo do objeto 'relatorioGasto', alcançando a 
  automação total desejada em aplicações do mundo real (back-end).
- Perfeita consistência de sintaxe na aplicação do operador lógico OR.

💡 APRENDIZADO CHAVE:
- Consolidação Definitiva: Entendido como mapear e sumarizar dados em 
  tempo de execução. A função se tornou escalável, pronta para receber 
  extratos bancários com milhares de transações e infinitas categorias.
=======================================================================
*/