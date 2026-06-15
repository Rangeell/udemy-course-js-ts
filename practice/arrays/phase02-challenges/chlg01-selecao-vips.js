/*
O Enunciado
    Uma grande loja de departamentos quer fazer uma ação de marketing e decidiu presentear seus clientes VIPs. A diretoria enviou uma lista de clientes (clientes) contendo o nome e o status de cada um no programa de fidelidade.

    Sua missão é criar uma função chamada gerarListaVip(clientes) que analise essa lista e retorne um novo array contendo apenas os nomes (as strings) dos clientes que são "VIP".

    Atenção Máxima: O array final não deve conter objetos. Deve conter apenas as strings com os nomes das pessoas que passaram no critério.

Exemplo de Entrada para Teste:
    const clientes = [
        { nome: "Ana Silva", status: "Bronze" },
        { nome: "Carlos Oliveira", status: "VIP" },
        { nome: "Beatriz Souza", status: "Prata" },
        { nome: "Diego Santos", status: "VIP" },
        { nome: "Elena Pereira", status: "Ouro" }
    ];

Retorno Esperado da Função:
    [ "Carlos Oliveira", "Diego Santos" ]
*/

const clientes = [
    { nome: "Ana Silva", status: "Bronze" },
    { nome: "Carlos Oliveira", status: "VIP" },
    { nome: "Beatriz Souza", status: "Prata" },
    { nome: "Diego Santos", status: "VIP" },
    { nome: "Elena Pereira", status: "Ouro" }
];

function gerarListaVip(clientes) {
    return clientes
        .filter(v => v.status === 'VIP')
        .map(v => v.nome)
}
console.log(gerarListaVip(clientes))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 2: DESAFIO DE TOMADA DE DECISÃO
=======================================================================
✔ PONTOS FORTES:
- Discernimento cirúrgico na escolha dos métodos funcionais adequados.
- Aplicação impecável de Method Chaining (encadeamento), demonstrando 
  maturidade no fluxo de processamento de dados do JavaScript.
- Sintaxe limpa com arrow functions e retornos implícitos bem aplicados.

💡 APRENDIZADO CHAVE:
- Entendido que problemas complexos de negócios podem ser fragmentados e 
  resolvidos conectando métodos funcionais em série. A saída do filter() 
  alimentou a entrada do map() de forma fluida, respeitando a imutabilidade.
=======================================================================
*/