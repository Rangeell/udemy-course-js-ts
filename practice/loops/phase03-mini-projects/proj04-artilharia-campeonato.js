/*
FASE 3 — MATURAÇÃO (PROJETOS COMPLETOS)
    - Matéria: Loops Avançados + Agregação Dinâmica
    - Fase: 3 (Maturação / Exercício de Fixação)
    - Tipo: Consolidação de Dados de Campeonato (Gols por Jogador)
    - Arquivo: proj04-artilharia-campeonato.js

O Enunciado
    Você recebeu uma lista contendo o histórico de gols marcados em um campeonato de futebol (historicoGols). Cada item da lista registra o nome do jogador e quantos gols ele marcou naquela partida específica.
    Sua missão é criar a função computarArtilharia(historicoGols) que descubra quantos gols cada jogador marcou no total acumulado do campeonato.

Regras da função:
    1. Crie um objeto vazio chamado artilharia = {} fora do loop.
    2. Use o forEach para andar pelo historicoGols.
    3. Use a Técnica da Gaveta Dinâmica com || 0 para somar os gols no objeto artilharia usando o nome do jogador como chave.
    4. Retorno: Retorne o objeto artilharia diretamente (de forma automática e dinâmica).

Exemplo de Entrada para Teste:
    const historicoGols = [
        { jogador: "Neymar", gols: 2 },
        { jogador: "Messi", gols: 1 },
        { jogador: "Neymar", gols: 1 }, // Neymar marcou de novo!
        { jogador: "Cristiano", gols: 3 },
        { jogador: "Messi", gols: 2 }   // Messi marcou de novo!
    ];

Retorno Esperado da Função:
    {
        Neymar: 3,
        Messi: 3,
        Cristiano: 3
    }
*/

const historicoGols = [
    { jogador: "Neymar", gols: 2 },
    { jogador: "Messi", gols: 1 },
    { jogador: "Neymar", gols: 1 }, // Neymar marcou de novo!
    { jogador: "Cristiano", gols: 3 },
    { jogador: "Messi", gols: 2 }   // Messi marcou de novo!
];

function computarArtilharia(historicoGols) {
    if (arguments.length < 1) throw new Error('Argumentos insuficientes para a função!')
    if (!Array.isArray(historicoGols) || historicoGols.length === 0) throw new TypeError('O argumento fornecido precisa ser um array válido!')

    const artilharia = {}
    historicoGols.forEach(v => {
        artilharia[v.jogador] = (artilharia[v.jogador] || 0) + v.gols
    })
    return artilharia
}
console.log(computarArtilharia(historicoGols))

/*
=======================================================================
FEEDBACK DO MENTOR - EXERCÍCIO: ARTILHARIA DO CAMPEONATO
=======================================================================
✔ PONTOS FORTES:
- Código enxuto, direto ao ponto e focado na eficiência de processamento.
- Validação precisa de parâmetros de entrada, impedindo arrays vazios.

💡 APRENDIZADO CHAVE:
- Massificação da técnica de AGREGAÇÃO DINÂMICA. O uso do nome do jogador 
  (v.jogador) como chave provou que o sistema pode lidar com qualquer 
  quantidade de atletas sem a necessidade de interferência manual.
=======================================================================
*/