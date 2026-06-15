/*
O Enunciado
    Você é o desenvolvedor responsável pela área de analytics de uma plataforma de cursos online. A equipe de produto precisa de um dado estatístico e te enviou uma lista com o histórico de acessos dos alunos na última semana (usuarios).
    
    Sua missão é criar uma função chamada calcularAcessosVip(usuarios) que calcule e retorne a soma total de acessos realizada apenas pelos usuários que possuem conta do tipo "Premium".

Exemplo de Entrada para Teste:
    const usuarios = [
        { login: "guilherme12", tipoConta: "Gratuita", acessos: 4 },
        { login: "mari_silva", tipoConta: "Premium", acessos: 12 },
        { login: "pedro_dev", tipoConta: "Premium", acessos: 8 },
        { login: "ana_tech", tipoConta: "Gratuita", acessos: 15 },
        { login: "luiz_codes", tipoConta: "Premium", acessos: 5 }
    ];

Retorno Esperado da Função:O número correspondente à soma dos acessos dos usuários Premium ($12 + 8 + 5$):
    25
*/

const usuarios = [
    { login: "guilherme12", tipoConta: "Gratuita", acessos: 4 },
    { login: "mari_silva", tipoConta: "Premium", acessos: 12 },
    { login: "pedro_dev", tipoConta: "Premium", acessos: 8 },
    { login: "ana_tech", tipoConta: "Gratuita", acessos: 15 },
    { login: "luiz_codes", tipoConta: "Premium", acessos: 5 }
];

function calcularAcessosVip(users) {
    return users
        .filter(v => v.tipoConta === 'Premium')
        .reduce((acc, v) => acc += v.acessos, 0)
}
console.log(calcularAcessosVip(usuarios))

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 2: DESAFIO DE TOMADA DE DECISÃO
=======================================================================
✔ PONTOS FORTES:
- Combinação perfeita dos métodos filter() e reduce() para resolver uma
  regra de negócio analítica em pouquíssimas linhas.
- Excelente uso do valor de semente (0) para garantir que o reduce 
  inicie a contagem matematicamente correta.

💡 APRENDIZADO CHAVE:
- Consolidação do Method Chaining: Entendido como extrair um subconjunto
  de um array baseado em critérios específicos e, imediatamente, reduzi-lo
  a um valor primitivo único (Number), eliminando a necessidade de laços
  imperativos tracionais e variáveis de escopo externo.
=======================================================================
*/