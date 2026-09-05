/**
 * =========================================================================
 * EXERCISE 010: Processador de Pedidos Multimodais (E-commerce Order Parser)
 * DIFICULTY: 🔴 Hard (Consolidation of advanced types)
 * FOCO: Indexed Access Types, Type Guards, Optional Chaining e Nullish Coalescing
 * =========================================================================
 * 
 * ENUNCIADO:
 * Você está construindo o painel de faturamento de um e-commerce que vende
 * tanto produtos físicos quanto produtos digitais (cursos/e-books).
 * Cada tipo de produto possui estruturas de rastreamento e entrega completamente
 * diferentes na API. Sua missão é criar uma função chamada 'obterResumoPedido'
 * que processe esses dados de forma ultra-segura.
 *
 * REGRAS & CONTRATO:
 * 1. Utilize o array constante 'PEDIDOS_MOCK' fornecido abaixo.
 * 2. Crie o tipo 'Pedido' extraindo-o DINAMICAMENTE do array 'PEDIDOS_MOCK'
 *    utilizando Indexed Access Types (com a sintaxe '[number]') combinada com 'typeof'.
 * 3. Crie uma função chamada 'obterResumoPedido' que receba um único parâmetro:
 *    - 'pedido': que deve ser estritamente do tipo 'Pedido'.
 *    - Retorno da função: deve ser uma 'string'.
 * 4. Regras de Negócio e Formatação da String de Retorno:
 *    - Se for um pedido FÍSICO ("physical"):
 *      * Você deve ler a transportadora ("carrier") e o código de rastreamento ("trackingCode")
 *        com segurança usando Encadeamento Opcional (?.), pois o campo "shipping" ou o próprio
 *        código de rastreio podem ser nulos/inexistentes.
 *      * Se o rastreamento não estiver disponível, faça um fallback usando Coalescência Nula (??)
 *        para a string: "Não postado".
 *      * Retorno esperado: "Pedido Físico ORD-XXX: [Nome do Produto] - Rastreio: [Código ou Não postado]"
 *    
 *    - Se for um pedido DIGITAL ("digital"):
 *      * Você deve ler o prazo de expiração do link de download ("expirationDays").
 *      * Se "expirationDays" for null ou undefined, use Coalescência Nula (??) para aplicar
 *        um padrão de 7 dias de expiração.
 *      * ATENÇÃO: Se "expirationDays" for exatamente 0 (zero), o seu código deve respeitar o 0
 *        e NÃO substituí-lo por 7 (teste crucial para validar o entendimento de ?? vs ||).
 *      * Retorno esperado: "Pedido Digital ORD-XXX: [Nome do Produto] - Expira em: [Dias] dias"
 * 
 * DICA DE DESIGN:
 * - Use Type Guards (como checagem de propriedade discriminante 'type') para que o TypeScript
 *   saiba exatamente se o pedido possui a propriedade "shipping" ou "download" em cada bloco de código.
 */

// 1. BANCO DE DADOS FICTÍCIO (NÃO ALTERAR)
const PEDIDOS_MOCK = [
    {
        id: 'ORD-101',
        type: 'physical',
        details: { product: 'Teclado Mecânico', price: 450 },
        shipping: {
            carrier: 'LogExpress',
            trackingCode: 'LX123456789BR',
        },
    },
    {
        id: 'ORD-102',
        type: 'digital',
        details: { product: 'Curso de TypeScript Avançado', price: 199 },
        download: {
            link: 'https://plataforma.com/download/ts-avancado',
            expirationDays: null, // Deve cair no fallback de 7 dias
        },
    },
    {
        id: 'ORD-103',
        type: 'physical',
        details: { product: 'Mouse Gamer', price: 250 },
        shipping: null, // Produto ainda não foi postado (shipping é nulo)
    },
    {
        id: 'ORD-104',
        type: 'digital',
        details: { product: 'E-book Guia de Bolso TS', price: 29 },
        download: {
            link: 'https://plataforma.com/download/ebook',
            expirationDays: 0, // Deve respeitar o 0 (expira hoje) e não cair no fallback de 7!
        },
    },
] as const;

// Escreva sua solução do EXERCISE 010 abaixo:

type OrderProtocol = (typeof PEDIDOS_MOCK)[number]

function getSumarryOrder(order: OrderProtocol): string {
    if (order.type === 'physical') {
        const productId = order.id;
        const productName = order.details.product;
        const trackingCode = order.shipping?.trackingCode ?? 'Não postado';

        return `Pedido Físico ${productId}: ${productName} - Rastreio: ${trackingCode}`;
    }
    const productId = order.id;
    const productName = order.details.product;
    const expiration = order.download.expirationDays ?? '7';

    return `Pedido Digital ${productId}: ${productName} - Expira em: ${expiration} dias`;
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: EXERCISE 010 (E-commerce Order Parser)
 * =========================================================================
 * Copie e cole este bloco abaixo da sua implementação.
 */

console.log('\n--- INICIANDO TESTES DO EXERCISE 05 ---\n');

try {
    const t1 = getSumarryOrder(PEDIDOS_MOCK[0]);
    console.log('Caso 1 (Físico com Rastreio Completo):');
    console.log(`   - Gerado: "${t1}"`);
    const esp1 = 'Pedido Físico ORD-101: Teclado Mecânico - Rastreio: LX123456789BR';
    console.log(t1 === esp1 ? '   - ✅ Status: SUCESSO!' : '   - ❌ Status: FALHA.');
} catch (e: unknown) {
    console.log('❌ Caso 1 (Erro):', e);
}

try {
    const t2 = getSumarryOrder(PEDIDOS_MOCK[1]);
    console.log('Caso 2 (Digital com Expiração Nula - Fallback para 7):');
    console.log(`   - Gerado: "${t2}"`);
    const esp2 = 'Pedido Digital ORD-102: Curso de TypeScript Avançado - Expira em: 7 dias';
    console.log(t2 === esp2 ? '   - ✅ Status: SUCESSO!' : '   - ❌ Status: FALHA.');
} catch (e: unknown) {
    console.log('❌ Caso 2 (Erro):', e);
}

try {
    const t3 = getSumarryOrder(PEDIDOS_MOCK[2]);
    console.log('Caso 3 (Físico Sem Envio - Fallback de Rastreio):');
    console.log(`   - Gerado: "${t3}"`);
    const esp3 = 'Pedido Físico ORD-103: Mouse Gamer - Rastreio: Não postado';
    console.log(t3 === esp3 ? '   - ✅ Status: SUCESSO!' : '   - ❌ Status: FALHA.');
} catch (e: unknown) {
    console.log('❌ Caso 3 (Erro):', e);
}

try {
    const t4 = getSumarryOrder(PEDIDOS_MOCK[3]);
    console.log('Caso 4 (Digital com Expiração igual a 0 - Respeitar o zero):');
    console.log(`   - Gerado: "${t4}"`);
    const esp4 = 'Pedido Digital ORD-104: E-book Guia de Bolso TS - Expira em: 0 dias';
    console.log(t4 === esp4 ? '   - ✅ Status: SUCESSO!' : '   - ❌ Status: FALHA.');
} catch (e: unknown) {
    console.log('❌ Caso 4 (Erro):', e);
}