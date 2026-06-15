/*
O Enunciado
    Sua equipe de marketing vai disparar uma newsletter, mas o banco de dados está bagunçado: alguns clientes cadastraram e-mails com letras maiúsculas misturadas e espaços em branco vazios no começo ou no final do texto (o que faz o sistema de envios falhar). Além disso, existem cadastros antigos que não possuem e-mail informado (campo como null ou undefined).
    
    Sua missão é criar uma função chamada limparListaEmails(clientes) que retorne um novo array contendo apenas os e-mails válidos, todos formatados em letras minúsculas e sem espaços em branco nas pontas.

Exemplo de Entrada para Teste:
    const clientesMarketing = [
        { nome: "Julia", email: "  JULIA@GMAIL.COM   " },
        { nome: "Marcos", email: null },                     // INVÁLIDO!
        { nome: "Roberto", email: "roberto.dev@Hotmail.com" },
        { nome: "Sandra", email: undefined },                // INVÁLIDO!
        { nome: "Lucas", email: "   lucas_codes@yahoo.com " }
    ];

Retorno Esperado da Função:
O novo array deve conter apenas as 3 strings de e-mail limpas:
    [
        "julia@gmail.com",
        "roberto.dev@hotmail.com",
        "lucas_codes@yahoo.com"
    ]
*/

const clientesMarketing = [
    { nome: "Julia", email: "  JULIA@GMAIL.COM   " },
    { nome: "Marcos", email: null },                     // INVÁLIDO!
    { nome: "Roberto", email: "roberto.dev@Hotmail.com" },
    { nome: "Sandra", email: undefined },                // INVÁLIDO!
    { nome: "Lucas", email: "   lucas_codes@yahoo.com " }
];

function clearEmailList(clients) {
    return clients
        .filter(v => v.email)
        .map(v => String(v.email.toLowerCase().trim()))
}
console.log(clearEmailList(clientesMarketing))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 2: DESAFIO DE TOMADA DE DECISÃO
=======================================================================
✔ PONTOS FORTES:
- Excelente estratégia de filtragem utilizando a coerção booleana implícita 
  (v.email) para expurgar valores null e undefined de forma limpa.
- Encadeamento perfeito com tratamento sanitizado de strings (.trim() e 
  .toLowerCase()) dentro do map().

💡 APRENDIZADO CHAVE:
- Sanitização de Dados com Proteção de Escopo: Compreendido como blindar 
  o pipeline de dados filtrando os registros nulos antes de aplicar métodos 
  de transformação na propriedade, evitando quebras de execução (Runtime Errors).
=======================================================================
*/