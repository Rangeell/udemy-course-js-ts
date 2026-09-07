/*
Exercise 010: The Generic Voting System | Difficulty: 🔴 High

Assuntos abordados: Generics com Classes, Composição de Classes, Interfaces Genéricas, Imutabilidade (ReadonlyArray, Readonly), e restrições de tipos (extends).

Contexto e Objetivo
    Na solução apresentada pelo instrutor, qualquer string era aceita como voto, e a verificação era feita apenas em runtime (usando índices de array). Em sistemas corporativos, queremos que o compilador do TypeScript nos proteja em tempo de design, impedindo que um desenvolvedor tente computar votos para uma opção inexistente ou com erro de digitação.

    Seu objetivo é criar um sistema de votação genérico onde o tipo de dado das opções de voto seja parametrizável (ex: uma união de strings literais ou um tipo específico) e que siga regras rígidas de imutabilidade na exposição de seus resultados.

    O que você precisa implementar:
        A interface genérica OpcaoVoto<T>:
        Deve conter a propriedade opcao: T.
        Deve conter a propriedade votos: number.

        A classe genérica SessaoVotacao<T>:
        
            Deve gerenciar de forma privada uma pergunta (string) e uma lista de opcoes (OpcaoVoto<T>[]).

            adicionarOpcao(opcao: T): void: Adiciona uma opção de voto com 0 votos acumulados.

            votar(opcao: T): boolean: Localiza a opção correspondente e incrementa o seu contador de votos em 1. Deve retornar true se a opção for válida e o voto computado, ou false caso contrário.

            obterResultados(): ReadonlyArray<Readonly<OpcaoVoto<T>>>: Retorna a lista de resultados de forma totalmente imutável. Quem chama esse método do lado de fora não deve conseguir modificar o array (dar push, splice, etc.) e nem alterar diretamente o número de votos de uma opção individual.
*/

interface VoteOptin<T> {
    option: T;
    votes: number;
}

interface VotingProtocol<T> {
    addOption(option: T): void;
    vote(option: T): boolean;
    getResults(): ReadonlyArray<Readonly<VoteOptin<T>>> // Retorna a lista de array de forma totalmente imutável
}

class VotingSession<T> implements VotingProtocol<T> {
    private options: VoteOptin<T>[] = [];

    constructor(private votingQuestion: string) { }

    addOption(option: T): void {
        this.options.push({ option, votes: 0 });
    }

    vote(option: T): boolean {
        const requiredOption = this.options.find(current => current.option === option);

        if (!requiredOption) return false;

        requiredOption.votes++;
        return true;
    }

    getResults(): readonly Readonly<VoteOptin<T>>[] {
        return this.options.map(obj => Object.freeze({ ...obj }));
        /*Retorna uma cópia superficial do array de, onde cada objeto é imutável 
            - Alterações feitas fora da classe não afetarão os dados internos
            - Qualquer tentativa de modificar os dados retornados disparará um erro imediato no motor JavaScript devido ao Object.freeze
            - A classe continua livre para alterar o número de votos internamente no método vote porque as referências de this.options permanecem mutáveis para ela
        */
    }
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Exercise 010 - The Generic Voting System
 * =========================================================================
 * Cole este bloco abaixo da sua implementação.
 * 🔍 Passe o mouse sobre as constantes para checar os tipos inferidos.
 * ⚙️ Rode o arquivo para validar o comportamento em runtime.
 */

// Definimos um tipo estrito de opções de voto (string literals)
type LinguagemFavorita = 'TypeScript' | 'Python' | 'Rust';

// Instanciamos uma sessão de votação estritamente restrita a essas opções
const votacaoTech = new VotingSession<LinguagemFavorita>('Qual a melhor linguagem?');

// ==========================================
// CASO 1: Uso Correto (Fluxo completo de votação)
// ==========================================
try {
    votacaoTech.addOption('TypeScript');
    votacaoTech.addOption('Python');
    votacaoTech.addOption('Rust');

    const voto1 = votacaoTech.vote('TypeScript'); // true
    const voto2 = votacaoTech.vote('TypeScript'); // true
    const voto3 = votacaoTech.vote('Rust'); // true

    const resultados = votacaoTech.getResults();

    // Buscamos os votos de cada uma
    const votosTS = resultados.find(r => r.option === 'TypeScript')?.votes;
    const votosPython = resultados.find(r => r.option === 'Python')?.votes;
    const votosRust = resultados.find(r => r.option === 'Rust')?.votes;

    const ok1 = voto1 && voto2 && voto3 && votosTS === 2 && votosPython === 0 && votosRust === 1;
    console.log(ok1 ? '✅ Caso 1: ok (votos computados corretamente de forma estrita)' : '❌ Caso 1: Erro na contagem de votos!');
} catch (error: unknown) {
    console.log('❌ Caso 1 (erro inesperado):', error);
}

// ==========================================
// CASO 2: Bloqueio Estático de Opções Inválidas
// ==========================================
try {
    // Se a classe estiver corretamente tipada com T, tentar votar ou adicionar uma opção que não pertence à união LinguagemFavorita deve acusar erro estático de compilação.

    // @ts-expect-error: 'Java' não faz parte de LinguagemFavorita
    votacaoTech.addOption('Java');

    // @ts-expect-error: 'PHP' não faz parte de LinguagemFavorita
    votacaoTech.vote('PHP');

    console.log('✅ Caso 2: verificação estática ok (bloqueio de opções inválidas funcionando)');
} catch (error: unknown) {
    console.log('❌ Caso 2 (erro inesperado):', error);
}

// ==========================================
// CASO 3: Imutabilidade do Retorno dos Resultados (Estático)
// ==========================================
try {
    const resultados = votacaoTech.getResults();

    // O array retornado deve ser somente leitura para evitar manipulações externas diretas.
    // @ts-expect-error: Não deve ser possível alterar a propriedade 'votos' diretamente fora da classe
    resultados.votos = 999;

    // @ts-expect-error: Não deve ser possível dar um push ou alterar o array de resultados
    resultados.push({ opcao: 'Rust', votos: 100 });

    console.log('✅ Caso 3: verificação estática ok (imutabilidade dos resultados garantida)');
} catch (error: unknown) {
    console.log('❌ Caso 3 (erro inesperado):', error);
}