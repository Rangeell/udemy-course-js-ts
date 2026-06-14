/*
FASE 3 — MATURAÇÃO (PROJETOS COMPLETOS)
    Matéria: Programação / Estruturas de Repetição Combinadas
    Fase: 3 (Maturação / Desafio de Projeto)
    Tipo: Sistema de Logística e Triagem de Carga
    Arquivo: proj01-triagem-entregas.js
    Objetivo: Criar um motor de triagem que varre um lote de entregas complexo, calcula fretes dinâmicos baseados nas rotas e separa pedidos válidos de pedidos retidos.
*/


/*
O Enunciado
    Você está desenvolvendo o sistema de roteamento de uma empresa de logística. Você recebeu um objeto chamado loteDeCargas. Cada chave desse objeto é uma região de destino (ex: "'SP'", "RJ"). Dentro de cada região, existe um array de objetos, onde cada objeto é um pacote que precisa ser entregue.

    Sua missão é criar uma função chamada processarTriagemLogistica(loteDeCargas) que processe todo o lote e retorne um relatório detalhado.

Regras da função:
    1. Validação: Garanta que loteDeCargas seja um Objeto válido e não esteja vazio.
    2. Varredura: Use as estruturas de repetição adequadas para navegar por todas as regiões e por todos os pacotes de cada região.

Regras de Negócio por Pacote (O Filtro de Triagem):
    1. Se o pacote tiver a propriedade retido: true, ele não deve ter seu frete somado. Ele deve ser contabilizado na contagem de pacotes retidos.
    2. Se o pacote estiver liberado (retido: false ou não ter a propriedade retido), você deve calcular o frete dele:
        - O frete é calculado multiplicando o peso do pacote pelo fatorMultiplicador daquela região.
    3. O Objeto de Regiões (Fatores de Frete): Use esse objeto fixo dentro ou fora da sua função para saber o multiplicador de cada região:
        const fatoresRegiao = { SP: 1.2, RJ: 1.5, MG: 1.4 };
    
    4. Retorno: A função deve retornar um objeto com o seguinte formato (com duas casas decimais no faturamento):
        {
            faturamentoTotalFrete: 1450.20,
            totalPacotesEnviados: 12,
            totalPacotesRetidos: 3
        }

Exemplo de Entrada para Teste:
    const loteDeCargas = {
        SP: [
            { id: 101, peso: 5, retido: false },
            { id: 102, peso: 12, retido: true }, // Retido! Não soma frete.
            { id: 103, peso: 3 } // Não tem a chave retido, então está liberado!
        ],
        RJ: [
            { id: 201, peso: 8, retido: false },
            { id: 202, peso: 20, retido: false }
        ]
    };
*/

// Exemplo de Entrada para Teste:
const loteDeCargas = {
    SP: [
        { id: 101, peso: 5, retido: false },
        { id: 102, peso: 12, retido: true }, // Retido! Não soma frete.
        { id: 103, peso: 3 }, // Não tem a chave retido, então está liberado!
    ],
    RJ: [
        { id: 201, peso: 8, retido: false },
        { id: 202, peso: 20, retido: false }
    ]
};

function processarTriagemLogistica(loteDeCargas) {
    if (typeof loteDeCargas !== 'object' || Array.isArray(loteDeCargas)) throw new Error('O valor passado deve ser um objeto válido!')
    if (Object.keys(loteDeCargas).length === 0) throw new Error('O objeto não deve estar vazio!')

    const fatoresRegiao = { SP: 1.2, RJ: 1.5, MG: 1.4 };
    let faturamento = 0
    let pacotesEnviados = 0
    let pacotesRetidos = 0

    for (let regiao in loteDeCargas) {
        loteDeCargas[regiao].forEach(v => {
            if (!v.retido) {
                pacotesEnviados++
                faturamento += v.peso * fatoresRegiao[regiao]
            }
            if (v.retido) {
                pacotesRetidos++
            }
        })
    }

    return {
        faturamentoTotalFrete: Number(faturamento.toFixed(2)),
        totalPacotesEnviados: pacotesEnviados,
        totalPacotesRetidos: pacotesRetidos
    }
}

console.log(processarTriagemLogistica(loteDeCargas))
console.log(Object.keys(loteDeCargas))

/*
=======================================================================
FEEDBACK DO MENTOR - PROJETO 01: TRIAGEM LOGÍSTICA
=======================================================================
✔ PONTOS FORTES:
- Excelente intuição arquitetural ao reduzir o problema de 3 para 2 loops 
  aninhados, evitando processamento redundante.
- Validação robusta de tipos e consistência de dados na entrada.

💡 APRENDIZADO CHAVE:
- Inicialização de acumuladores matemáticos: Entendido que 'null' quebra 
  operações aritméticas gerando NaN. O correto para somas é iniciar com 0.
- Acesso Dinâmico: Substituição de múltiplos blocos 'if' manuais de 
  checagem de chaves pelo acesso dinâmico por colchetes (objeto[variavel]).
=======================================================================
*/