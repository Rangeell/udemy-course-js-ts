/*
FASE 3 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    - Matéria: Tomada de Decisão Funcional
    - Fase: 3 (Mini-projetos)
    - Tipo: Sistema de Relatório de Finanças (Dashboard)
    - Arquivo: proj01-dashboard-financeiro.js

O Enunciado
    Você recebeu a tarefa de criar o motor de um Dashboard Financeiro para um aplicativo de controle de gastos. O backend te entrega um array de objetos contendo as movimentações bancárias de um cliente (transacoes). Cada transação tem um id, uma descrição, o valor e o tipo ("entrada" para dinheiro que entra, "saida" para dinheiro que sai).

    Sua missão é criar uma única função chamada gerarRelatorioFinanceiro(transacoes) que processe esses dados e retorne um único objeto de resumo com a seguinte estrutura:
        {
            totalEntradas: 0,  // Soma de todas as transações do tipo "entrada"
            totalSaidas: 0,     // Soma de todas as transações do tipo "saida"
            saldoFinal: 0,      // totalEntradas - totalSaidas
            historicoSaidas: [] // Um array contendo APENAS AS STRINGS das descrições das saídas
        }

Exemplo de Entrada para Teste:
    const transacoesMensais = [
        { id: 1, descricao: "Salário", valor: 5000, tipo: "entrada" },
        { id: 2, descricao: "Aluguel", valor: 1200, tipo: "saida" },
        { id: 3, descricao: "Freelance Design", valor: 800, tipo: "entrada" },
        { id: 4, descricao: "Supermercado", valor: 450, tipo: "saida" },
        { id: 5, descricao: "Academia", valor: 110, tipo: "saida" }
    ];

Retorno Esperado da Função:
    {
        totalEntradas: 5800,
        totalSaidas: 1760,
        saldoFinal: 4040,
        historicoSaidas: [ "Aluguel", "Supermercado", "Academia" ]
    }

🧠 Regras do Jogo:
    1. Você deve resolver o problema utilizando os métodos funcionais de array que aprendeu (map, filter, reduce).
    2.Tente evitar criar variáveis let soltas fora dos métodos para acumular valores. Use o poder dos próprios métodos para estruturar o objeto ou os arrays necessários.
*/

const transacoesMensais = [
    { id: 1, descricao: "Salário", valor: 5000, tipo: "entrada" },
    { id: 2, descricao: "Aluguel", valor: 1200, tipo: "saida" },
    { id: 3, descricao: "Freelance Design", valor: 800, tipo: "entrada" },
    { id: 4, descricao: "Supermercado", valor: 450, tipo: "saida" },
    { id: 5, descricao: "Academia", valor: 110, tipo: "saida" }
];

function gerarRelatorioFinanceiro(transacoes) {
    const relatorio = transacoes.reduce((acc, v) => {
        if (v.tipo === 'entrada') acc.totalEntradas += v.valor
        if (v.tipo === 'saida') {
            acc.totalSaidas += v.valor
            acc.historicoSaidas.push(v.descricao)
        }
        return acc
    }, {
        totalEntradas: 0,
        totalSaidas: 0,
        historicoSaidas: []
    })
    return {
        ...relatorio,
        saldoFinal: relatorio.totalEntradas - relatorio.totalSaidas
    }
}
console.log(gerarRelatorioFinanceiro(transacoesMensais))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 3: MINI-PROJETO (ARQUITETURA)
=======================================================================
✔ PONTOS FORTES:
- Escolha corretíssima do 'reduce' com objeto acumulador para resolver 
  múltiplas frentes de dados em uma única iteração (O(n) de performance).
- Uso cirúrgico do valor inicial estruturado como o esqueleto do relatório.
- Excelente uso dos condicionais para segregar regras de entrada e saída.

💡 APRENDIZADO CHAVE:
- Entendido que o 'reduce()' não serve apenas para somar números soltos. 
  Ele é uma ferramenta poderosa de redução de complexidade estrutural, capaz 
  de transformar uma coleção de objetos lineares em um objeto complexo de 
  resumo estatístico com o estado centralizado.
=======================================================================
*/
