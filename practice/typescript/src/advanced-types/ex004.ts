/**
 * Exercise 004 — Notification Resolver
 *
 * Difficulty: 🟠 Medium-Hard
 *
 * 📝 Enunciado
 *
 * Você está implementando um sistema de notificações que pode receber
 * diferentes tipos de valores para determinar como uma notificação deve
 * ser enviada.
 *
 * Crie uma função `resolveNotification` que receba um valor desconhecido
 * (`unknown`) e determine qual mensagem deve ser retornada.
 *
 * Existem três possibilidades válidas:
 *
 * 1. Uma string representando um endereço de e-mail.
 * 2. Um objeto representando uma notificação por SMS.
 * 3. Um objeto representando uma notificação Push.
 *
 * A função deve identificar corretamente cada possibilidade utilizando
 * Type Guards.
 *
 * 🎯 Objetivo
 *
 * Praticar Type Guards partindo de `unknown`, combinando:
 *
 * - `typeof` para identificar valores primitivos;
 * - `in` para diferenciar estruturas de objetos;
 * - Type Narrowing para acessar propriedades somente depois que o TypeScript
 *   tiver informações suficientes sobre o tipo.
 *
 * O objetivo principal é entender que diferentes estruturas exigem diferentes
 * estratégias de narrowing.
 *
 * 📌 Contexto/Contrato
 *
 * Considere estes tipos:
 *
 * `SmsNotification`:
 * - `phone`: string
 * - `message`: string
 *
 * `PushNotification`:
 * - `deviceId`: string
 * - `message`: string
 *
 * A função receberá `unknown`, pois os dados podem vir de uma fonte externa.
 *
 * Considere como válidos:
 *
 * - Qualquer `string` deve ser tratada como um endereço de e-mail.
 * - Um objeto contendo a propriedade `phone` deve ser tratado como
 *   `SmsNotification`.
 * - Um objeto contendo a propriedade `deviceId` deve ser tratado como
 *   `PushNotification`.
 *
 * Para este exercício, você pode assumir que, caso seja um objeto válido,
 * ele possuirá as propriedades necessárias como `string`.
 *
 * Qualquer outro valor deve resultar em:
     * `Notificação inválida`
 *
 * Retornos esperados:
     * String:
        * `E-mail: [valor]`
     * SMS:
        * `SMS para [phone]: [message]`
     * Push:
        * `Push para [deviceId]: [message]`
 *
 * 🎯 Atenção especial
 *
 * O parâmetro é `unknown`, não uma união previamente conhecida. Portanto, você precisa primeiro descobrir o que recebeu antes de acessar
 * qualquer propriedade.
 *
 * 📚 O que este exercício pretende ensinar
 *
 * No exercício anterior, você utilizou `in` diretamente sobre uma união de
 * objetos conhecida.
 *
 * Agora a situação é diferente: o TypeScript inicialmente não sabe
 * absolutamente nada sobre o valor, pois ele é `unknown`.
 *
 * Você precisará realizar o narrowing em etapas.
 *
 * Primeiro, `typeof` permite separar o caso primitivo dos demais.
 *
 * Depois, será necessário descobrir se o valor restante é um objeto antes
 * de utilizar `in`.
 *
 * Só então a presença de `phone` ou `deviceId` poderá ser utilizada para
 * identificar a estrutura.
 *
 * O exercício pretende consolidar a ideia de que Type Guards podem ser
 * combinados em sequência para transformar progressivamente um `unknown`
 * em um valor seguro para manipulação.
 * 
 * 📋 Regras
 *
 * - O parâmetro de `resolveNotification` deve ser `unknown`.
 * - Utilize `typeof` para identificar a string.
 * - Utilize `in` para diferenciar os objetos.
 * - Faça o Type Narrowing antes de acessar propriedades específicas.
 * - Não utilize `any`.
 * - Não utilize Type Assertions (`as`).
 * - Não utilize `instanceof`.
 * - Não transforme o parâmetro em uma união dos tipos possíveis.
 * - Não utilize propriedades discriminadoras artificiais como `type` ou `kind`.
 * - A função deve retornar sempre uma `string`.
 */

type SmsNotification = { phone: string, message: string };
type PushNotification = { deviceId: string, message: string };

// Função utilitária para checar se o valor é um objeto
// Precisei usar Type Predicate, pois retornar um boolean genérico não garante que a tipagem do dado fora do escopo da função
const isObject = (data: unknown): data is Record<PropertyKey, unknown> => { // Type Predicate
    return typeof data === 'object' && data !== null && !Array.isArray(data);
};

const isSmsNotification = (data: unknown): data is SmsNotification => {
    if (!isObject(data)) return false;

    return (
        'phone' in data &&
        typeof data.phone === 'string' &&
        'message' in data &&
        typeof data.message === 'string'
    );
};

const isPushNotification = (data: unknown): data is PushNotification => {
    if (!isObject(data)) return false;

    return (
        'deviceId' in data &&
        typeof data.deviceId === 'string' &&
        'message' in data &&
        typeof data.message === 'string'
    );
};

function resolveNotification(data: unknown): string {
    if (typeof data === 'string') return `E-mail: ${data}`;
    if (isObject(data)) {
        if (isSmsNotification(data)) return `SMS para ${data.phone}: ${data.message}`;
        if (isPushNotification(data)) return `Push para ${data.deviceId}: ${data.message}`;
    }

    return 'Notificação inválida';
}

/**
 * =========================================================================
 * TEST SUITE: Exercise 004 (Notification Resolver)
 * =========================================================================
 * Copy and paste this block below your implementation.
 *
 * 🔍 STATIC TEST:
 * Passe o mouse sobre cada constante.
 *
 * Todas as chamadas devem resultar no tipo: 'string'
 *
 * Além disso, observe sua implementação:
 * - O parâmetro deve permanecer como 'unknown'.
 * - O acesso a propriedades de objetos só deve ocorrer depois dos Type Guards.
 *
 * ⚙️ RUNTIME TEST:
 * Execute o código para verificar se cada tipo de entrada é identificado
 * corretamente.
 */

console.log('\n--- STARTING EXERCISE 004 TESTS ---\n');

// -------------------------------------------------------------------------
// CASE 1: String
// Esperado: identificação através de typeof
// Tipo esperado no Hover: 'string'
// -------------------------------------------------------------------------

try {
    const emailResult = resolveNotification('ana@email.com');

    const expected = 'E-mail: ana@email.com';

    if (emailResult === expected) {
        console.log('✅ Caso 1 (E-mail): Resultado correto.');
        console.log(`   - ${emailResult}`);
    } else {
        console.log('❌ Caso 1 (E-mail): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${emailResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 1 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 2: SMS
// Esperado: identificação através de in
// Tipo esperado no Hover: 'string'
// -------------------------------------------------------------------------

try {
    const smsResult = resolveNotification({
        phone: '+5514999999999',
        message: 'Seu código é 123456',
    });

    const expected =
        'SMS para +5514999999999: Seu código é 123456';

    if (smsResult === expected) {
        console.log('✅ Caso 2 (SMS): Resultado correto.');
        console.log(`   - ${smsResult}`);
    } else {
        console.log('❌ Caso 2 (SMS): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${smsResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 2 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 3: Push Notification
// Esperado: identificação através de in
// Tipo esperado no Hover: 'string'
// -------------------------------------------------------------------------

try {
    const pushResult = resolveNotification({
        deviceId: 'iphone-123',
        message: 'Você recebeu uma nova mensagem',
    });

    const expected =
        'Push para iphone-123: Você recebeu uma nova mensagem';

    if (pushResult === expected) {
        console.log('✅ Caso 3 (Push): Resultado correto.');
        console.log(`   - ${pushResult}`);
    } else {
        console.log('❌ Caso 3 (Push): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${pushResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 3 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 4: Valor inválido
// Esperado: fallback
// Tipo esperado no Hover: 'string'
// -------------------------------------------------------------------------

try {
    const invalidResult = resolveNotification(42);

    const expected = 'Notificação inválida';

    if (invalidResult === expected) {
        console.log('✅ Caso 4 (Valor inválido): Resultado correto.');
        console.log(`   - ${invalidResult}`);
    } else {
        console.log('❌ Caso 4 (Valor inválido): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${invalidResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 4 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 5: null
// Esperado: não deve ser tratado como objeto válido
// Tipo esperado no Hover: 'string'
// -------------------------------------------------------------------------

try {
    const nullResult = resolveNotification(null);

    const expected = 'Notificação inválida';

    if (nullResult === expected) {
        console.log('✅ Caso 5 (null): Resultado correto.');
        console.log(`   - ${nullResult}`);
    } else {
        console.log('❌ Caso 5 (null): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${nullResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 5 (Erro inesperado):', error);
}