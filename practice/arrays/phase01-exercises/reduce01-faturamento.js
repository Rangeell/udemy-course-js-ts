/*
FASE 1 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    Matéria: Método reduce()
    Fase: 1 (Introdução / Primeiros Exercícios)
    Tipo: Fechamento de Caixa de Vendas
    Arquivo: reduce01-faturamento.js

O Enunciado
    Você recebeu a lista de notas fiscais das vendas realizadas no período da tarde em uma loja (vendasTarde).
    Sua missão é criar uma função chamada calcularFaturamentoTotal(vendasTarde) que use o método reduce() para somar o valor de todas as vendas e retornar o valor total faturado.

Exemplo de Entrada para Teste:
    const vendasTarde = [
        { nfe: 2001, valor: 120.50 },
        { nfe: 2002, valor: 45.00 },
        { nfe: 2003, valor: 300.00 },
        { nfe: 2004, valor: 89.90 }
    ];

Retorno Esperado da Função:
O número com a soma total (neste caso, 555.4):
    555.4
*/

const vendasTarde = [
    { nfe: 2001, valor: 120.50 },
    { nfe: 2002, valor: 45.00 },
    { nfe: 2003, valor: 300.00 },
    { nfe: 2004, valor: 89.90 }
];

function calcularFaturamentoTotal(vendas) {
    return vendas.reduce((acc, v) => acc += v.valor, 0)
}
console.log(calcularFaturamentoTotal(vendasTarde))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 1: INTRODUÇÃO AO REDUCE()
=======================================================================
✔ PONTOS FORTES:
- Implementação precisa da mecânica do acumulador e do valor de semente (0).
- Excelente nomenclatura das variáveis de controle (acc, v).

💡 APRENDIZADO CHAVE:
- Domínio do conceito de Redução: Compreendido que o 'reduce()' é capaz 
  de condensar uma coleção de objetos complexos em um único valor primitivo 
  (Number), controlando o estado do acumulador a cada iteração sem a 
  necessidade de variáveis globais externas ao escopo do loop.
=======================================================================
*/