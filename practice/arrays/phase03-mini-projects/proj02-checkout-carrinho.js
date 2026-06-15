/*
FASE 4 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    - Matéria: Tomada de Decisão Funcional
    - Fase: 3 (Mini-projetos)
    - Tipo: Motor de Checkout de Carrinho de Compras
    - Arquivo: chlg05-checkout-carrinho.js

O Enunciado
    Você está desenvolvendo o sistema de fechamento de pedido de um e-commerce. A função recebe um array de produtos do carrinho (carrinho) e uma string com um cupom de desconto (cupom).
    
    Sua missão é criar a função processarCheckout(carrinho, cupom) que devolva um objeto com o resumo do pedido:
        {
            subtotal: 0,       // Soma do valor de todos os itens considerando suas quantidades
            descontoAplicado: 0,// Valor em reais que foi abatido pelo cupom (calculado sobre o subtotal)
            frete: 0,          // Valor do frete baseado na regra de negócio
            totalPagar: 0      // subtotal - descontoAplicado + frete
        }

Regras de Negócio do Sistema:
    1. O Subtotal: É o preço de cada item multiplicado pela sua respectiva quantidade, somados.
    2. O Cupom: Se o cupom for "QUERO10", o cliente ganha 10% de desconto sobre o subtotal. Se o cupom for qualquer outra coisa ou não for enviado, o 1. desconto é 0.
    3. O Frete: Se o subtotal (antes do desconto) for maior ou igual a R$ 200, o frete é Grátis (0). Caso contrário, o frete fixo é R$ 25.

Exemplo de Entrada para Teste:
    const meuCarrinho = [
        { id: 1, nome: "Camiseta Tech", preco: 80, qtd: 2 },  // 80 * 2 = 160
        { id: 2, nome: "Caneca JS", preco: 40, qtd: 1 },      // 40 * 1 = 40
        { id: 3, nome: "Mousepad Gamer", preco: 50, qtd: 1 }  // 50 * 1 = 50
    ];

    const cupomFidelidade = "QUERO10";

Retorno Esperado da Função:
Com os dados acima, o subtotal dá R$ 250 (ganha frete grátis) e o desconto de 10% dá R$ 25.
    {
        subtotal: 250,
        descontoAplicado: 25,
        frete: 0,
        totalPagar: 225
    }
*/

(function myScope() {
    const meuCarrinho = [
        { id: 1, nome: "Camiseta Tech", preco: 80, qtd: 2 },  // 80 * 2 = 160
        { id: 2, nome: "Caneca JS", preco: 40, qtd: 1 },      // 40 * 1 = 40
        { id: 3, nome: "Mousepad Gamer", preco: 50, qtd: 1 }  // 50 * 1 = 50
    ];

    const cupons = [
        'QUERO10',
        'LUIZ10',
    ]

    const cupomFidelidade = "QUERO10";

    function processarCheckout(carrinho, cupom) {
        if (!Array.isArray(carrinho) || carrinho.length === 0) throw new TypeError('O argumento informado precisa ser um array válido!')

        const subtotalBruto = carrinho.reduce((acc, v) => {
            if (typeof v.preco !== 'number' || typeof v.qtd !== 'number') {
                throw new TypeError('Algum dos valores passados dentro do objeto é inválido para a função!')
            }
            return acc + v.preco * v.qtd
        }, 0)

        const temDesconto = cupons.includes(cupom)
        const desconto = temDesconto ? subtotalBruto * 0.10 : 0
        const frete = subtotalBruto >= 200 ? 0 : 25
        const totalPagar = subtotalBruto - desconto + frete

        return {
            subtotal: subtotalBruto,
            descontoAplicado: desconto,
            frete: frete,
            totalPagar: totalPagar
        }
    }
    console.log(processarCheckout(meuCarrinho, cupomFidelidade))
})()

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 3: MINI-PROJETO (ESTRUTURAÇÃO DE REGRAS)
=======================================================================
✔ PONTOS FORTES:
- Abstração excelente com o array 'cupons' e o uso do método '.includes()',
  evitando ifs encadeados e tornando o sistema extensível.
- Validações robustas com cláusulas de guarda (Guard Clauses) lançando 
  TypeError para blindar a integridade matemática do sistema.
- Uso correto do escopo isolado (IIFE) para testes locais.

⚠️ AJUSTE DE REGRA DE NEGÓCIO:
- Atenção ao fechamento da equação: o valor da variável 'frete' precisava 
  ser somado na composição da variável 'totalPagar'.

💡 APRENDIZADO CHAVE:
- Entendido como criar um pipeline de checkout combinando agregação de dados 
  via reduce() com regras de negócio condicionais baseadas em tabelas externas 
  (array de cupons), aplicando boas práticas de tolerância a falhas.
=======================================================================
*/