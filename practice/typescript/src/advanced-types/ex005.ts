/**
 * Exercise 005 — Type-Safe Property Access
 *
 * Difficulty: 🔴 Hard
 *
 * 📝 Enunciado
 *
 * Você recebeu uma função genérica que precisa acessar uma propriedade
 * de um objeto e retornar seu valor:
 *
 *     function getProperty(obj, key) {
 *         return obj[key];
 *     }
 *
 * O problema é que queremos que o TypeScript garanta que `key` seja
 * necessariamente uma propriedade existente em `obj` e que o retorno
 * tenha exatamente o tipo daquela propriedade.
 *
 * Implemente uma versão tipada de `getProperty`.
 *
 * 🎯 Objetivo
 *
 * Praticar:
 *
 * - keyof;
 * - tipos genéricos;
 * - Indexed Access Types (T[K]);
 * - relação entre objeto, chave e tipo de retorno;
 * - inferência de tipos.
 *
 * 📌 Contexto/Contrato
 *
 * Considere:
 *
 *     type User = {
 *         id: number;
 *         name: string;
 *         active: boolean;
 *     };
 *
 *     const user: User = {
 *         id: 1,
 *         name: 'Ana',
 *         active: true,
 *     };
 *
 * A função deverá permitir:
 *
 *     const id = getProperty(user, 'id');
 *     const name = getProperty(user, 'name');
 *     const active = getProperty(user, 'active');
 *
 * O TypeScript deverá inferir:
 *
 *     id      → number
 *     name    → string
 *     active  → boolean
 *
 * E deverá impedir:
 *
 *     getProperty(user, 'email');
 *
 * porque `email` não existe em `User`.
 *
 * 📋 Regras
 *
 * 1. A função deve funcionar com qualquer objeto, não somente `User`.
 * 2. Utilize Generics.
 * 3. A chave deve ser limitada às propriedades existentes no objeto.
 * 4. O retorno deve corresponder ao tipo da propriedade acessada.
 * 5. Não utilize `any`.
 * 6. Não utilize Type Assertions (`as`).
 * 7. Não utilize overloads.
 * 8. Não utilize `Record<string, unknown>` como solução principal.
 * 9. O TypeScript deve conseguir inferir os tipos sem que os parâmetros
 *    genéricos sejam informados manualmente.
 *
 * 📚 O que este exercício pretende ensinar
 *
 * Existe uma diferença entre dizer:
 *
 *     "key é uma string."
 *
 * e dizer:
 *
 *     "key só pode ser uma das chaves de obj."
 *
 * Além disso, existe uma segunda relação que precisa ser preservada:
 *
 *     "O tipo retornado depende da chave escolhida."
 *
 * Por exemplo:
 *
 *     "id"     → number
 *     "name"   → string
 *     "active" → boolean
 *
 * O desafio é fazer o TypeScript entender essa relação sem escrever
 * cada caso manualmente.
 */

function getProperty<T, U extends keyof T>(obj: T, key: U): T[U] {
    return obj[key];
}

/**
 * TEST SUITE — Type-Safe Property Access
 *
 * Execute este arquivo com TypeScript.
 * Os testes marcados com @ts-expect-error devem gerar erro de tipagem.
 */

// ============================================================
// Test Data
// ============================================================

type User = {
    id: number;
    name: string;
    active: boolean;
};

const user: User = {
    id: 1,
    name: 'Ana',
    active: true,
};

const product = {
    id: 10,
    title: 'Notebook',
    price: 3500,
};

const settings = {
    darkMode: true,
    language: 'pt-BR',
};

const config = {
    port: 3000,
    host: 'localhost',
    secure: true,
};

// ============================================================
// Static Type Tests
// ============================================================

const userId = getProperty(user, 'id');
// Esperado: number
const testUserId: number = userId;

const userName = getProperty(user, 'name');
// Esperado: string
const testUserName: string = userName;

const userActive = getProperty(user, 'active');
// Esperado: boolean
const testUserActive: boolean = userActive;

// ============================================================
// Key Restriction Tests
// ============================================================

getProperty(user, 'id');
getProperty(user, 'name');
getProperty(user, 'active');

// @ts-expect-error
getProperty(user, 'email');

// @ts-expect-error
getProperty(user, 'password');

// ============================================================
// Generic Object Tests
// ============================================================

const productTitle = getProperty(product, 'title');
// Esperado: string
const testProductTitle: string = productTitle;

const productPrice = getProperty(product, 'price');
// Esperado: number
const testProductPrice: number = productPrice;

const settingsDarkMode = getProperty(settings, 'darkMode');
// Esperado: boolean
const testSettingsDarkMode: boolean = settingsDarkMode;

const settingsLanguage = getProperty(settings, 'language');
// Esperado: string
const testSettingsLanguage: string = settingsLanguage;

// ============================================================
// Indexed Access / Key-Return Relationship
// ============================================================

const configPort = getProperty(config, 'port');
// Esperado: number
const testConfigPort: number = configPort;

const configHost = getProperty(config, 'host');
// Esperado: string
const testConfigHost: string = configHost;

const configSecure = getProperty(config, 'secure');
// Esperado: boolean
const testConfigSecure: boolean = configSecure;

// ============================================================
// Runtime Tests
// ============================================================

console.assert(
    getProperty(user, 'id') === 1,
    'Expected user.id to be 1',
);

console.assert(
    getProperty(user, 'name') === 'Ana',
    'Expected user.name to be "Ana"',
);

console.assert(
    getProperty(user, 'active') === true,
    'Expected user.active to be true',
);

console.assert(
    getProperty(product, 'title') === 'Notebook',
    'Expected product.title to be "Notebook"',
);

console.assert(
    getProperty(product, 'price') === 3500,
    'Expected product.price to be 3500',
);

console.assert(
    getProperty(settings, 'darkMode') === true,
    'Expected settings.darkMode to be true',
);

console.assert(
    getProperty(config, 'host') === 'localhost',
    'Expected config.host to be "localhost"',
);

console.log('All runtime tests passed!');