/**
 * =========================================================================
 * DESAFIO 04: Tradutor de Status de Encomendas (Type-Safe Dictionary Getter)
 * DIFICULDADE: Média
 * FOCO: 'keyof', 'typeof' e Mapeamento Dinâmico de Objetos
 * =========================================================================
 * 
 * ENUNCIADO:
 * Você está trabalhando no sistema de rastreamento de uma empresa de logística.
 * Existe um objeto constante que traduz as siglas de status internas do sistema 
 * para termos legíveis ao usuário final. Você deve criar uma função chamada 
 * 'obterStatusTraduzido' que retorne essa tradução de forma 100% tipada.
 *
 * REGRAS & CONTRATO:
 * 1. Utilize o objeto constante 'STATUS_MAP' fornecido abaixo.
 * 2. Crie um tipo chamado 'StatusSigla' extraído DINAMICAMENTE das chaves do objeto
 *    'STATUS_MAP' usando 'keyof' e 'typeof' combinados (não vale digitar as siglas manualmente!).
 * 3. A função 'obterStatusTraduzido' deve receber dois parâmetros:
 *    - 'sigla': que deve ser estritamente do tipo 'StatusSigla'.
 *    - 'usuario': um objeto simples contendo nome e role ('admin' | 'cliente').
 * 4. Lógica de Validação:
 *    - Se o usuário for 'cliente' e tentar acessar o status 'RET_FIS' (Retido na Fiscalização),
 *      a função deve retornar uma mensagem amigável genérica: "Em processamento".
 *    - Para qualquer outro caso (ou se o usuário for 'admin'), retorne a tradução exata do mapa.
 * 
 * REQUISITO DE TIPAGEM IMPRESCINDÍVEL:
 * - Se adicionarmos uma nova sigla no objeto 'STATUS_MAP', o TypeScript deve aceitar
 *   essa nova sigla como argumento da função automaticamente, sem que você precise
 *   alterar nenhuma linha de definição de tipo!
 */

// 1. OBJETO CONSTANTE DE BASE (NÃO ALTERAR)
const STATUS_MAP = {
    AG_ENV: 'Aguardando envio',
    EM_TRA: 'Em trânsito',
    ENT_SUC: 'Entregue com sucesso',
    RET_FIS: 'Retido para verificação fiscal',
    EXT_PER: 'Extraviado ou perdido',
} as const; // O 'as const' garante que o TS leia as propriedades como valores literais e não apenas strings genéricas

// Escreva sua solução do Desafio 04 abaixo:

interface UserProtocol { name: string; role: 'admin' | 'client' }

type StatusAbbr = keyof typeof STATUS_MAP;

function getTranslateStatus(abbr: StatusAbbr, user: UserProtocol) {
    if (user.role === 'client' && abbr === 'RET_FIS') return 'Em processamento';

    return STATUS_MAP[abbr];
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Desafio 04 (Type-Safe Dictionary Getter)
 * =========================================================================
 * Copie e cole este bloco abaixo da sua implementação.
 */

console.log('\n--- INICIANDO TESTES DO DESAFIO 04 ---\n');

const admin = { name: 'Carlos', role: 'admin' as const };
const cliente = { name: 'Mariana', role: 'client' as const };

try {
    // 🔍 TESTE ESTÁTICO: No VSCode, tente passar "STATUS_INVALIDO" na função abaixo.
    // O editor deve sublinhar na hora acusando erro!
    const t1 = getTranslateStatus('EM_TRA', cliente);
    console.log('Caso 1 (Tradução Comum - Cliente):');
    console.log(`   - Resultado: "${t1}"`);
    if (t1 === 'Em trânsito') {
        console.log('   - ✅ Status: SUCESSO!');
    } else {
        console.log('   - ❌ Status: FALHA.');
    }
} catch (error: unknown) {
    console.log('❌ Caso 1 (Erro inesperado):', error);
}

try {
    const t2 = getTranslateStatus('RET_FIS', cliente);
    console.log('Caso 2 (Filtro de Segurança para Cliente):');
    console.log(`   - Resultado: "${t2}"`);
    if (t2 === 'Em processamento') {
        console.log('   - ✅ Status: SUCESSO! Protegeu a informação confidencial.');
    } else {
        console.log('   - ❌ Status: FALHA. Exibiu informação confidencial para o cliente.');
    }
} catch (error: unknown) {
    console.log('❌ Caso 2 (Erro inesperado):', error);
}

try {
    const t3 = getTranslateStatus('RET_FIS', admin);
    console.log('Caso 3 (Acesso liberado para Admin):');
    console.log(`   - Resultado: "${t3}"`);
    if (t3 === 'Retido para verificação fiscal') {
        console.log('   - ✅ Status: SUCESSO! Admin pôde ver o status real.');
    } else {
        console.log('   - ❌ Status: FALHA.');
    }
} catch (error: unknown) {
    console.log('❌ Caso 3 (Erro inesperado):', error);
}