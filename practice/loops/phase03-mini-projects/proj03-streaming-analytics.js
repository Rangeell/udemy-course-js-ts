/*
FASE 3 — MATURAÇÃO (PROJETOS COMPLETOS)
    Matéria: Loops Avançados + Agregação Multi-Nível
    Fase: 3 (Maturação / Desafio de Projeto)
    Tipo: Painel de Métricas de Engajamento (Streaming)
    Arquivo: proj03-streaming-analytics.js

*/

/*
O Enunciado
    Você recebeu o histórico de visualizações de um grupo de usuários (historicoUsuarios) e um objeto com o tempo de duração padrão de cada categoria de conteúdo (tempoPorCategoria).
    
    Sua missão é criar a função gerarPainelEngajamento(historicoUsuarios, tempoPorCategoria) que calcule o tempo total que os usuários passaram assistindo aos conteúdos e descubra qual categoria foi a mais consumida.

As Malandragens do Cenário (Atenção!):
    1. O número de episódios assistidos (episodiosAssistidos) por alguns usuários veio como String do banco. Garanta a conversão.
    2. Se a categoria de um conteúdo assistido não existir no objeto tempoPorCategoria, assuma que cada episódio dura 20 minutos por padrão (Dica: use o operador ||).

Regras da função:
    1. Validação: Garanta que os parâmetros de entrada existem, se o histórico é um Array não vazio e se o tempo por categoria é um Objeto válido.
    2. Varredura: Use o forEach para andar pelo histórico de usuários.
    3. Cálculo de Tempo por Usuário: Para cada item do histórico, o tempo consumido é a multiplicação: episodiosAssistidos * duracaoDaCadefinedCategoria.

Métricas Globais (Acumuladores):
    - Calcule o tempo total assistido (soma de todo mundo).
    - Crie um objeto vazio chamado minutosPorCategoria = {} fora do loop. À medida que o loop roda, você deve acumular os minutos assistidos dentro de cada categoria correspondente. (Exemplo: se a Ana assistiu 200 min de "Anime" e o Lucas assistiu 300 min de "Anime", seu objeto final precisa registrar { Anime: 500 }).

Exemplo de Entrada para Teste:
    const historicoUsuarios = [
        { usuario: "Guilherme", categoria: "Serie", episodiosAssistidos: 10 }, // 10 * 45 = 450 min
        { usuario: "Mariana", categoria: "Anime", episodiosAssistidos: "15" }, // String! 15 * 25 = 375 min
        { usuario: "Pedro", categoria: "Documentario", episodiosAssistidos: 3 }, // Não tem na tabela! 3 * 20 = 60 min
        { usuario: "Beatriz", categoria: "Serie", episodiosAssistidos: 4 } // Outra série! 4 * 45 = 180 min
    ];

    const tempoPorCategoria = {
        Serie: 45,       // cada episódio dura 45 min
        Anime: 25,       // cada episódio dura 25 min
        Filme: 120       // cada episódio dura 120 min
    };

Retorno Esperado da Função:
    O retorno deve ser um objeto com este formato:
        {
            tempoTotalAssistidoMinutos: 1065, // Soma total de todos os minutos de todo mundo
            resumoPorCategoria: { 
                Serie: 630, 
                Anime: 375, 
                Documentario: 60 
            }
        }
*/

const historicoUsuarios = [
    { usuario: "Guilherme", categoria: "Serie", episodiosAssistidos: 10 }, // 10 * 45 = 450 min
    { usuario: "Mariana", categoria: "Anime", episodiosAssistidos: "15" }, // String! 15 * 25 = 375 min
    { usuario: "Pedro", categoria: "Documentario", episodiosAssistidos: 3 }, // Não tem na tabela! 3 * 20 = 60 min
    { usuario: "Beatriz", categoria: "Serie", episodiosAssistidos: 4 } // Outra série! 4 * 45 = 180 min
];

const tempoPorCategoria = {
    Serie: 45,       // cada episódio dura 45 min
    Anime: 25,       // cada episódio dura 25 min
    Filme: 120       // cada episódio dura 120 min
};

function gerarPainelEngajamento(historicoUsuarios, tempoPorCategoria) {
    if (arguments.length < 2) throw new Error('Argumentos insuficientes para a função trabalhar!')
    if (!Array.isArray(historicoUsuarios) || historicoUsuarios.length === 0) throw new TypeError('O primeiro argumento precisa ser um array válido!')
    if (typeof tempoPorCategoria !== 'object' || Object.keys(tempoPorCategoria).length === 0) throw new TypeError('O segundo argumento precisa ser um objeto válido!')

    let totalTimeMinutes = 0
    let resumo = {}

    historicoUsuarios.forEach(user => {
        const eps = Number(user.episodiosAssistidos)
        if (!eps) return
        const timeC = tempoPorCategoria[user.categoria] || 20

        resumo[user.categoria] = (resumo[user.categoria] || 0) + timeC * eps
        totalTimeMinutes += eps * timeC
    })
    return {
        tempoTotalAssistidoMinutos: totalTimeMinutes,
        resumo
    }
}
console.log(gerarPainelEngajamento(historicoUsuarios, tempoPorCategoria))

/*
=======================================================================
FEEDBACK DO MENTOR - PROJETO 03: STREAMING ANALYTICS
=======================================================================
✔ PONTOS FORTES:
- Superação de barreira conceitual: Compreensão e aplicação da técnica 
  de Agregação Dinâmica (Dynamic Group By).
- Código extremamente limpo, aplicando conversão de tipos (Number) e 
  fallback de tempo mínimo (|| 20) de forma natural.

💡 APRENDIZADO CHAVE:
- 
- Automação Absoluta com Agregação Dinâmica: Entendido que, ao construir 
  um objeto preenchendo suas chaves dinamicamente durante o loop, deve-se 
  retornar o objeto mapeado diretamente, tornando a função escalável para 
  infinitas novas propriedades sem a necessidade de condicionais (if/else).
=======================================================================
*/