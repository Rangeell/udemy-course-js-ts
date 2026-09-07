/*
Exercise 009: The Generic API Simulator (Promises e Assincronismo) | Difficulty: 🟡 Medium

Assuntos abordados: Promise<T>, Instanciação de Promises manuais, inferência de tipos assíncronos, e callbacks de transformação genéricos.

Contexto e Objetivo

    Na Class 295, vimos que funções assíncronas retornam por padrão uma Promise. No entanto, quando instanciamos manualmente uma Promise (new Promise(...)) contendo operações como setTimeout, o TypeScript perde a capacidade de rastrear o fluxo assíncrono e infere o retorno como Promise<unknown>.

    Seu objetivo é criar duas funções genéricas:
        simularRequisicao<T>: Deve receber um dado do tipo T e um tempo de atraso em milissegundos (atrasoMs). Ela deve retornar uma Promise<T> que resolve com os dados fornecidos após o tempo estipulado. Você deve tipar a Promise manualmente na sua instanciação para evitar a inferência padrão de unknown.
        
        transformarResposta<T, U>: Deve receber uma Promise<T> e uma função de callback transformadora (dados: T) => U. Ela deve esperar a resolução da Promise original, aplicar a transformação e retornar uma nova Promise<U> contendo o valor transformado.
*/

type CbProtocol<T, U> = (data: T) => U;

function simulateRequest<T>(data: T, delay: number): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}

async function transformResponse<T, U>(promise: Promise<T>, cb: CbProtocol<T, U>): Promise<U> {
    const response = await promise;

    return cb(response);
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Exercise 009 - The Generic API Simulator
 * =========================================================================
 * Cole este bloco abaixo da sua implementação.
 * 🔍 Passe o mouse sobre as constantes para checar os tipos inferidos.
 * ⚙️ Rode o arquivo para validar o comportamento em runtime.
 */
/* eslint-disable */
interface PerfilUsuario {
    username: string;
    ativo: boolean;
}

const usuarioMock: PerfilUsuario = {
    username: 'dev_typescript',
    ativo: true,
};

async function executarTestes() {
    console.log('⏳ Iniciando os testes assíncronos...');

    // ==========================================
    // CASO 1: Simulação de Requisição Segura
    // ==========================================
    // 🔍 Tipo esperado no hover de 'usuarioPromise': Promise<PerfilUsuario>
    try {
        const tempoInicio = Date.now();
        const usuarioPromise = simulateRequest(usuarioMock, 150);
        const resultado = await usuarioPromise;
        const tempoFim = Date.now();

        const tempoDecorrido = tempoFim - tempoInicio;
        const ok1 = resultado.username === 'dev_typescript' && tempoDecorrido >= 140;

        console.log(ok1 ? '✅ Caso 1: ok (Promise resolvida com tipo correto e delay respeitado)' : '❌ Caso 1: Falha na resolução ou tempo de atraso incorreto!');
    } catch (error: unknown) {
        console.log('❌ Caso 1 (erro inesperado):', error);
    }

    // ==========================================
    // CASO 2: Transformação de Dados de API (Generic Mapping)
    // ==========================================
    // 🔍 Tipo esperado no hover de 'statusPromise': Promise<string>
    try {
        const usuarioPromise = simulateRequest(usuarioMock, 50);

        // Transforma o objeto PerfilUsuario em uma string simples informando o status
        const statusPromise = transformResponse(usuarioPromise, (user) => {
            return `O usuário ${user.username} está ${user.ativo ? 'ONLINE' : 'OFFLINE'}`;
        });

        const statusTexto = await statusPromise;
        const ok2 = statusTexto === 'O usuário dev_typescript está ONLINE';

        console.log(ok2 ? '✅ Caso 2: ok (transformação assíncrona com tipos inferidos perfeitamente)' : '❌ Caso 2: Erro na transformação!');
    } catch (error: unknown) {
        console.log('❌ Caso 2 (erro inesperado):', error);
    }

    // ==========================================
    // CASO 3: Proteção Estática contra Transformações Inválidas
    // ==========================================
    try {
        const numeroPromise = simulateRequest(100, 10);

        // Se sua tipagem estiver estrita, tentar acessar uma propriedade que não existe no tipo 'number' dentro do callback de transformação DEVE acusar erro estático.
        // @ts-expect-error: O tipo 'number' não possui a propriedade 'length'
        const erroPromise = transformResponse(numeroPromise, (num) => num.length);

        console.log('✅ Caso 3: verificação estática ok (bloqueio de chamadas inválidas funcionando)');
    } catch (error: unknown) {
        console.log('❌ Caso 3 (erro inesperado):', error);
    }
}

// Executa a suíte assíncrona
executarTestes();