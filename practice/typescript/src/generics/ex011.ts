/*
Exercise 011 (Final): The State Generic Manager (Mini-Store) | Difficulty: 🔴 High / Challenger Conclusion 🏆

Assuntos abordados: Classes Genéricas, Restrições (extends object), Partial<T>, Readonly<T>, Callbacks/Listeners, e Desinscrição (Unsubscribe).

Contexto e Objetivo

    Em aplicações modernas, gerenciar o estado global de forma segura e previsível é vital. Queremos um contêiner (uma Store) que armazene um objeto de estado genérico. Esse contêiner deve permitir:
        - Ler o estado atual (de forma estritamente somente leitura).
        - Atualizar apenas partes específicas do estado por vez (atualização parcial).
        - Inscrever funções ouvintes (listeners) que são executadas automaticamente sempre que o estado sofrer uma alteração.
        - Fornecer um mecanismo limpo para que esses ouvintes cancelem suas inscrições (evitando vazamentos de memória).

    O que você precisa implementar:
        Crie uma classe genérica chamada Store<T extends Record<PropertyKey, any>> que implemente:
            - constructor(estadoInicial: T): Define o estado privado inicial.

            - getState(): Readonly<T>: Retorna o estado atual. Para garantir a segurança em runtime, você deve clonar o objeto internamente e congelá-lo com Object.freeze antes de retornar.

            - updateState(update: Partial<T>): void: Recebe um objeto parcial com as chaves que devem ser atualizadas. Ela deve mesclar essas chaves de forma imutável com o estado atual e, em seguida, notificar imediatamente todos os listeners inscritos, passando o novo estado como argumento.

            - subscribe(listener: (state: Readonly<T>) => void): () => void: Adiciona um callback à lista de listeners ativos. O retorno deste método deve ser uma função de limpeza (unsubscribe) que, quando executada, remove o listener específico da lista.
*/

type ListenerProtocol<T> = (state: Readonly<T>) => void;

interface StoreProtocol<T> {
    getState(): Readonly<T>;
    updateState(update: Partial<T>): void;
    subscribe(listener: ListenerProtocol<T>): () => void;
}

class Store<T extends object> implements StoreProtocol<T> {
    private listeners: ListenerProtocol<T>[] = [];

    constructor(private initialState: T) { }

    getState(): Readonly<T> { return Object.freeze({ ...this.initialState }); } // Retorna o estado atual de forma imutável

    updateState(update: Partial<T>): void {
        this.initialState = { ...this.initialState, ...update }; // Atualiza o estado

        const freezeState = this.getState(); // Obtém o estado atual congelado (imutável)
        this.listeners.forEach(listener => listener(freezeState)); // Passa o novo estado (congelado) para cada um dos listeners salvos
    }

    subscribe(listener: ListenerProtocol<T>): () => void { // Inscreve um listener e retorna a função de limpeza (unsubscribe)
        this.listeners.push(listener);

        // Quando executado novamente, remove esse listener -> Cleanup Function
        return () => { this.listeners = this.listeners.filter(currentListener => currentListener !== listener); };
    }
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Exercise 011 - The State Generic Manager (Store)
 * =========================================================================
 * Cole este bloco abaixo da sua implementação.
 * 🔍 Passe o mouse sobre as constantes para checar os tipos inferidos.
 * ⚙️ Rode o arquivo para validar o comportamento em runtime.
 */
/* eslint-disable */

interface EstadoApp {
    tema: 'claro' | 'escuro';
    usuarioLogado: boolean;
    notificacoes: number;
}

const estadoInicial: EstadoApp = {
    tema: 'claro',
    usuarioLogado: false,
    notificacoes: 0,
};

// Instanciamos nossa Store tipada com o nosso estado
const appStore = new Store<EstadoApp>(estadoInicial);

// ==========================================
// CASO 1: Atualização Parcial e Notificação de Ouvintes
// ==========================================
try {
    let ouvintesNotificados = 0;
    let ultimoEstadoRecebido: Readonly<EstadoApp> | undefined;

    // Se inscrevendo na store para ouvir as mudanças
    const cancelarInscricao = appStore.subscribe((novoEstado: Readonly<EstadoApp>) => {
        ouvintesNotificados++;
        ultimoEstadoRecebido = novoEstado;
    });

    // Atualização parcial: altera apenas o tema e as notificações
    appStore.updateState({ tema: 'escuro', notificacoes: 5 });

    const estadoFinal = appStore.getState();

    const ok1 =
        ouvintesNotificados === 1 &&
        ultimoEstadoRecebido?.tema === 'escuro' &&
        ultimoEstadoRecebido?.usuarioLogado === false &&
        ultimoEstadoRecebido?.notificacoes === 5 &&
        estadoFinal.tema === 'escuro';

    console.log(ok1 ? '✅ Caso 1: ok (atualização parcial e notificação funcionando)' : '❌ Caso 1: Falha ao atualizar ou notificar!');
} catch (error: unknown) {
    console.log('❌ Caso 1 (erro inesperado):', error);
}

// ==========================================
// CASO 2: Mecanismo de Cancelamento de Inscrição (Unsubscribe)
// ==========================================
try {
    let alteracoesDetectadas = 0;

    // Se inscreve e guarda a função de unsubscribe retornada
    const unsubscribe = appStore.subscribe(() => {
        alteracoesDetectadas++;
    });

    appStore.updateState({ notificacoes: 10 }); // Deve notificar (+1)
    unsubscribe(); // Cancela a inscrição!
    appStore.updateState({ notificacoes: 15 }); // NÃO deve notificar este ouvinte

    const ok2 = alteracoesDetectadas === 1;
    console.log(ok2 ? '✅ Caso 2: ok (desinscrição de listener bem-sucedida)' : '❌ Caso 2: O listener continuou sendo notificado após cancelar!');
} catch (error: unknown) {
    console.log('❌ Caso 2 (erro inesperado):', error);
}

// ==========================================
// CASO 3: Proteção Estática contra Atualizações Inválidas
// ==========================================
try {
    // Se a tipagem estiver estrita, tentar passar propriedades inexistentes ou tipos incompatíveis na atualização DEVE gerar erro de compilação.

    // @ts-expect-error: 'idioma' não existe na interface EstadoApp
    appStore.updateState({ idioma: 'pt-BR' });

    // @ts-expect-error: 'notificacoes' deve ser um number, não string
    appStore.updateState({ notificacoes: 'muitas' });

    console.log('✅ Caso 3: verificação estática ok (bloqueio de dados inválidos funcionando)');
} catch (error: unknown) {
    console.log('❌ Caso 3 (erro inesperado):', error);
}

// ==========================================
// CASO 4: Imutabilidade Estática e Runtime do Estado
// ==========================================
try {
    const estado = appStore.getState();

    let erroEmRuntimeCapturado = false;

    try {
        // @ts-expect-error: O estado retornado é Readonly, não deve compilar alteração direta
        estado.tema = 'claro';
    } catch {
        // Em 'strict mode', modificar um Object.freeze lança TypeError em runtime
        erroEmRuntimeCapturado = true;
    }

    console.log(
        erroEmRuntimeCapturado
            ? '✅ Caso 4: verificação estática e runtime ok (Readonly e Object.freeze garantidos)'
            : '❌ Caso 4: O estado permitiu alteração em runtime!',
    );
} catch (error: unknown) {
    console.log('❌ Caso 4 (erro inesperado):', error);
}