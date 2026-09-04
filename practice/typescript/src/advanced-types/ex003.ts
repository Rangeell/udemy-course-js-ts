/**
  Exercise 003 — Message Processor
 
  Difficulty: 🟡 easy
 
📝 Enunciado
  Você está trabalhando em um sistema que recebe diferentes tipos de mensagens.
  Uma mensagem pode representar:
  - Um e-mail, contendo `email` e `subject`
  - Uma mensagem SMS, contendo `phone` e `text`
 
  Crie uma função chamada `processMessage` que receba uma mensagem e retorne
  uma string descrevendo qual tipo de mensagem foi processado.
 
  Como os dois tipos são objetos e não possuem uma propriedade discriminadora
  explícita, você deve utilizar o Type Guard `in` para identificar qual tipo
  de mensagem foi recebido.
 
🎯 Objetivo
 
  Implementar corretamente um Type Guard usando o operador `in` para realizar
  Type Narrowing entre dois tipos de objetos.
 
  Este exercício testa se você entende que `in` verifica a existência de uma
  propriedade e pode ajudar o TypeScript a identificar qual membro de uma
  união está sendo manipulado.
 
📌 Contexto/Contrato
  Considere os seguintes formatos:

  EmailMessage:
  - `email`: string
  - `subject`: string
 
  SmsMessage:
  - `phone`: string
  - `text`: string
 
  A função sempre receberá um objeto válido que pertence a um desses dois tipos.
 
  Não existem outros tipos possíveis de mensagem.
 
  Para este exercício:
 
  - Se receber `EmailMessage`, retorne:
    `E-mail enviado para: [email] | Assunto: [subject]`
 
  - Se receber `SmsMessage`, retorne:
    `SMS enviado para: [phone] | Mensagem: [text]`
 
📋 Regras
  - Crie os tipos necessários para representar os dois formatos de mensagem.
  - Crie uma união contendo os tipos possíveis.
  - `processMessage` deve receber essa união.
  - Use o operador `in` para identificar qual tipo foi recebido.
  - Após o narrowing, acesse as propriedades específicas diretamente.
  - Não use `any`.
  - Não use Type Assertions (`as`).
  - Não use uma propriedade discriminadora artificial como `type` ou `kind`.
  - Não crie funções separadas para cada tipo de mensagem.
 */

/**
 * =========================================================================
 * TEST SUITE: Exercise 003 (Message Processor)
 * =========================================================================
 * Copy and paste this block below your implementation.
 *
 * 🔍 STATIC TEST:
 * Passe o mouse sobre 'emailResult' e 'smsResult'.
 *
 * Ambos devem ser do tipo: 'string'.
 *
 * Além disso, dentro da sua implementação, após o Type Guard com `in`,
 * o TypeScript deve permitir acessar apenas as propriedades correspondentes
 * ao tipo identificado, sem usar `as`.
 *
 * ⚙️ RUNTIME TEST:
 * Execute o código para verificar se cada formato de mensagem é identificado
 * corretamente e gera a descrição esperada.
 */

type EmailMessage = { email: string; subject: string };
type SmsMessage = { phone: string; text: string; }

function processMessage(obj: EmailMessage | SmsMessage): string {
    if ('email' in obj) {
        return `E-mail enviado para: ${obj.email} | Assunto: ${obj.subject}`;
    }
    return `SMS enviado para: ${obj.phone} | Mensagem: ${obj.text}`;
}

console.log('\n--- STARTING EXERCISE 003 TESTS ---\n');

// -------------------------------------------------------------------------
// CASE 1: Processamento de EmailMessage
// Tipo esperado no Hover de 'emailResult': 'string'
// -------------------------------------------------------------------------

try {
    const emailResult = processMessage({
        email: 'ana@email.com',
        subject: 'Reunião amanhã',
    });

    const expected =
        'E-mail enviado para: ana@email.com | Assunto: Reunião amanhã';

    if (emailResult === expected) {
        console.log('✅ Caso 1 (EmailMessage): Resultado correto.');
        console.log(`   - ${emailResult}`);
    } else {
        console.log('❌ Caso 1 (EmailMessage): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${emailResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 1 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 2: Processamento de SmsMessage
// Tipo esperado no Hover de 'smsResult': 'string'
// -------------------------------------------------------------------------

try {
    const smsResult = processMessage({
        phone: '+5514999999999',
        text: 'Seu código é 123456',
    });

    const expected =
        'SMS enviado para: +5514999999999 | Mensagem: Seu código é 123456';

    if (smsResult === expected) {
        console.log('✅ Caso 2 (SmsMessage): Resultado correto.');
        console.log(`   - ${smsResult}`);
    } else {
        console.log('❌ Caso 2 (SmsMessage): Resultado incorreto.');
        console.log(`   - Esperado: ${expected}`);
        console.log(`   - Recebido: ${smsResult}`);
    }
} catch (error: unknown) {
    console.log('❌ Caso 2 (Erro inesperado):', error);
}

// -------------------------------------------------------------------------
// CASE 3: Verificação das duas ramificações
// Ambas as chamadas devem funcionar sem Type Assertion.
// -------------------------------------------------------------------------

try {
    const results = [
        processMessage({
            email: 'joao@email.com',
            subject: 'Bem-vindo',
        }),
        processMessage({
            phone: '+5514988888888',
            text: 'Pedido confirmado',
        }),
    ];

    console.log('✅ Caso 3 (Ambas as ramificações):');
    results.forEach((result, index) => {
        console.log(`   - Mensagem ${index + 1}: ${result}`);
    });
} catch (error: unknown) {
    console.log('❌ Caso 3 (Erro inesperado):', error);
}