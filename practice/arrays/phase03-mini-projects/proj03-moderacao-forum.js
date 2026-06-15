/*
FASE 4 — OPERAÇÕES FUNCIONAIS (MÉTODOS DE ARRAY)
    - Matéria: Tomada de Decisão Funcional
    - Fase: 3 (Mini-projetos)
    - Tipo: Sistema de Moderação de Fórum (Analytics)
    - Arquivo: proj03-moderacao-forum.js
O Enunciado
    Você recebeu a lista de comentários postados em um fórum de tecnologia nas últimas 24 horas (comentarios). Sua missão é criar a função processarComentarios(comentarios) para gerar um relatório estatístico para a equipe de moderação.

Para o relatório ser válido, você precisa seguir três regras de negócio:
    1. Filtro de Segurança: Comentários marcados com status: "reprovado" devem ser completamente ignorados (eles não entram em nenhuma contagem e não aparecem no histórico).
    2. Sanitização: No histórico final, o texto do comentário não pode ter espaços em branco nas pontas e deve ter uma propriedade indicando quantos caracteres ele possui.
    3. Métrica de Engajamento: Você precisa calcular a média de curtidas (likes) apenas dos comentários que foram aprovados.

A função deve retornar um único objeto com o seguinte formato:
    {
        totalAprovados: 0,      // Quantidade de comentários que não foram reprovados
        mediaLikes: 0,          // Média de likes dos posts aprovados (soma de likes / totalAprovados)
        historicoLimpo: []      // Array de objetos contendo APENAS { texto: "texto limpo", tamanho: 12 }
    }

Exemplo de Entrada para Teste:
    const comentariosRecebidos = [
        { id: 1, texto: "   Excelente artigo sobre JS!   ", likes: 10, status: "aprovado" },
        { id: 2, texto: "Este comentário foi banido", likes: 0, status: "reprovado" }, // IGNORAR COMPLETAMENTE
        { id: 3, texto: "Não gostei da abordagem...   ", likes: 2, status: "aprovado" },
        { id: 4, texto: "  Gostei muito, parabéns! ", likes: 6, status: "aprovado" }
    ];

Retorno Esperado da Função:O cálculo da média de likes deve ser $(10 + 2 + 6) / 3 = 6$.
    {
        totalAprovados: 3,
        mediaLikes: 6,
        historicoLimpo: [
            { texto: "Excelente artigo sobre JS!", tamanho: 25 },
            { texto: "Não gostei da abordagem...", tamanho: 26 },
            { texto: "Gostei muito, parabéns!", tamanho: 23 }
        ]
    }

Regras do Jogo:
    1. Use seu discernimento para escolher se vai encadear múltiplos métodos (.filter().map()...) ou se vai centralizar tudo em um grande .reduce(). Ambas as abordagens funcionam e são válidas, escolha a que deixar seu código mais legível e confortável para você!
    2. Não esqueça das validações básicas que você já domina
*/

(function myScope() {
    const comentariosRecebidos = [
        { id: 1, texto: "   Excelente artigo sobre JS!   ", likes: 10, status: "aprovado" },
        { id: 2, texto: "Este comentário foi banido", likes: 0, status: "reprovado" }, // IGNORAR COMPLETAMENTE
        { id: 3, texto: "Não gostei da abordagem...   ", likes: 2, status: "aprovado" },
        { id: 4, texto: "  Gostei muito, parabéns! ", likes: 6, status: "aprovado" }
    ];

    function processarComentarios(comentarios) {
        if (!Array.isArray(comentarios) || comentarios.length === 0) throw new TypeError('O argumento para função precisa ser um array válido!')

        const resumo = comentarios.reduce((acc, v) => {
            if (typeof v.likes !== 'number') throw new TypeError('Algum like possui um valor inválido para a função!')
            if (v.status === 'aprovado') {
                acc.likes += v.likes
                acc.totalAprovados++
                acc.cleanTxt.push({ texto: v.texto.trim(), tamanho: v.texto.trim().length })
            }
            return acc
        }, { totalAprovados: 0, likes: 0, cleanTxt: [] })

        const { cleanTxt, totalAprovados, likes } = resumo
        const mediaLikes = likes / totalAprovados

        return {
            totalAprovados,
            mediaLikes,
            historicoLimpo: cleanTxt
        }
    }
    console.log(processarComentarios(comentariosRecebidos))
})()

/*
=======================================================================
FEEDBACK DO MENTOR - FASE 3: CONCLUSÃO DOS MINI-PROJETOS
=======================================================================
✔ PONTOS FORTES:
- Performance impecável (O(n)) concentrando filtragem, contagem e 
  sanitização de strings dentro de um único estágio de redução.
- Uso moderno de Destructuring para desestruturar o objeto acumulador.
- Validação cirúrgica de tipos (Array e Number) e correção precisa do 
  cálculo do tamanho da string pós-trim.

💡 APRENDIZADO CHAVE:
- Consolidação Total da Caixa de Ferramentas Funcional: Você adquiriu o 
  discernimento necessário para moldar o 'reduce()' de acordo com a 
  necessidade do negócio, provando que domina a estrutura de dados e 
  o controle de fluxo funcional em JavaScript.
=======================================================================
*/