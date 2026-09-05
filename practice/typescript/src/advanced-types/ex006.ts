/**
 * EXERCISE 006 — Safe Nested Property Access with Indexed Access Types
 * DIFFICULTY: 🟡 Medium
 * 
 * 📝 ENUNCIADO + CONTRATO
 * 
 * Você está construindo um módulo de auditoria que consome configurações
 * de usuários. O objeto de configuração tem uma estrutura aninhada e partes
 * dela podem ser opcionais (`undefined`).
 * 
 * Sua tarefa:
 * 1. Crie o tipo `UserConfig` com a propriedade opcional `preferences?`, 
 *    que por sua vez contém `theme?` (string opcional).
 * 2. Crie o tipo `ThemeType` obrigatoriamente utilizando Indexed Access Types
 *    derivados de `UserConfig` para extrair o tipo do campo `theme`
 *    (removendo o `undefined`).
 * 3. Implemente a função `getNestedTheme` que aceita um `UserConfig` ou `undefined`.
 * 4. A função deve retornar o tema configurado ou a string `"default"` caso
 *    o objeto, as preferências ou o tema sejam nulos ou indefinidos.
 * 5. Utilize obrigatoriamente Optional Chaining (`?.`) e Nullish Coalescing (`??`).
 * 6. Não utilize `any`, `as` (Type Assertions), nem declarações `if/else`.
 * 
 * 📚 O que treina:
 * Treina o uso de Indexed Access Types em níveis aninhados (`Type['prop1']['prop2']`)
 * combinado com utilitários de tipo (como `NonNullable`), Optional Chaining e
 * Nullish Coalescing.
 */
interface UserConfig {
    preferences?: {
        theme?: string;
    };
};

// type ThemeType = NonNullable<UserConfig['preferences']>['theme']

// 3. Adicione as tipagens necessárias e a lógica utilizando ?. e ??
function getNestedTheme(config: UserConfig | undefined): string {
    return config?.preferences?.theme ?? 'default';
}

/**
=========================================================================
SUÍTE DE TESTES: EXERCISE 006
=========================================================================
Cole este bloco abaixo da sua implementação.
🔍 Passe o mouse sobre as constantes para checar os tipos inferidos.
⚙️ Rode o arquivo para validar o comportamento em runtime.
*/

// CASO 1: Configuração Completa — Tipo esperado no hover: string
try {
    const fullConfig = { preferences: { theme: 'dark' } };
    const caso1 = getNestedTheme(fullConfig);
    console.log(caso1 === 'dark' ? '✅ Caso 1: ok' : '❌ Caso 1: esperado \'dark\', recebeu ' + caso1);
} catch (error: unknown) {
    console.log('❌ Caso 1 (erro inesperado):', error);
}

// CASO 2: Objeto parcialmente indefinido — Tipo esperado no hover: string
try {
    const emptyPreferences = { preferences: {} };
    const caso2 = getNestedTheme(emptyPreferences);
    console.log(caso2 === 'default' ? '✅ Caso 2: ok' : '❌ Caso 2: esperado \'default\', recebeu ' + caso2);
} catch (error: unknown) {
    console.log('❌ Caso 2 (erro inesperado):', error);
}

// CASO 3: Objeto undefined na raiz — Tipo esperado no hover: string
try {
    const caso3 = getNestedTheme(undefined);
    console.log(caso3 === 'default' ? '✅ Caso 3: ok' : '❌ Caso 3: esperado \'default\', recebeu ' + caso3);
} catch (error: unknown) {
    console.log('❌ Caso 3 (erro inesperado):', error);
}