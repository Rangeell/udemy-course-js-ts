/*
FASE 4 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    Matéria: Método filter()
    Fase: 4 (Introdução / Primeiro Exercício)
    Tipo: Controle de Estoque Limpo
    Arquivo: filter01-limpa-estoque.js

O Enunciado
    Você recebeu o inventário atual de produtos de um estoque (inventario). Algumas mercadorias esgotaram completamente (estão com a quantidade em 0).

    Sua missão é criar uma função chamada filtrarProdutosDisponiveis(inventario) que use o método filter() para retornar um novo array contendo apenas os produtos que ainda possuem pelo menos 1 unidade disponível no estoque.

Exemplo de Entrada para Teste:
    const inventario = [
        { id: 1, nome: "Mouse Sem Fio", estoque: 15 },
        { id: 2, nome: "Teclado Mecânico", estoque: 0 },  // ESGOTADO!
        { id: 3, nome: "Monitor UltraWide", estoque: 5 },
        { id: 4, nome: "Fone de Ouvido", estoque: 0 },    // ESGOTADO!
        { id: 5, nome: "Cabo HDMI 2m", estoque: 42 }
    ];

Retorno Esperado da Função:
Um novo array contendo apenas os 3 produtos disponíveis:
    [
        { id: 1, nome: "Mouse Sem Fio", estoque: 15 },
        { id: 3, nome: "Monitor UltraWide", estoque: 5 },
        { id: 5, nome: "Cabo HDMI 2m", estoque: 42 }
    ]
*/

const inventario = [
    { id: 1, nome: "Mouse Sem Fio", estoque: 15 },
    { id: 2, nome: "Teclado Mecânico", estoque: 0 },  // ESGOTADO!
    { id: 3, nome: "Monitor UltraWide", estoque: 5 },
    { id: 4, nome: "Fone de Ouvido", estoque: 0 },    // ESGOTADO!
    { id: 5, nome: "Cabo HDMI 2m", estoque: 42 }
];

function filtrarProdutosDisponiveis(inventario) {
    return inventario.filter(v => v.estoque >= 1)
}
console.log(filtrarProdutosDisponiveis(inventario))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 1: INTRODUÇÃO AO FILTER()
=======================================================================
✔ PONTOS FORTES:
- Sintaxe extremamente limpa e concisa utilizando arrow function de 
  retorno implícito.
- Entendimento perfeito de como aplicar uma condição booleana direta 
  (v.estoque >= 1) para controlar o fluxo do filtro.

💡 APRENDIZADO CHAVE:
- Domínio do conceito do 'filter()': compreendido que o método atua como 
  uma peneira baseada em respostas booleanas (true/false). Ele gera um 
  novo array (que pode ser menor ou igual ao original) contendo cópias 
  exatas das referências dos elementos que passaram no teste.
=======================================================================
*/