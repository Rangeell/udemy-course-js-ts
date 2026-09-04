/**
 * Exercise 007 — Dynamic Payload Filter & Field Extractor
 * Difficulty: Hard
 * 
 * 📝 ENUNCIADO + CONTRATO
 * 
 * Você está construindo um filtro e extrator para mensagens de API.
 * 
 * 1. Considere a constante de referência em tempo de execução:
 *    const DEFAULT_ATTRIBUTES = {
 *      status: "pending",
 *      score: 0,
 *    };
 * 
 * 2. Crie os tipos usando `typeof`, `keyof` e Indexed Access:
 *    - `AttributesMap`: Tipo do objeto derivado de `typeof DEFAULT_ATTRIBUTES`.
 *    - `AttributeKeys`: União das chaves derivada usando `keyof typeof DEFAULT_ATTRIBUTES`.
 *    - `ScoreType`: O tipo do campo 'score' extraído via Indexed Access a partir do `AttributesMap`.
 * 
 * 3. Defina a interface `ApiResponse`:
 *    - `meta`: { `timestamp`: number, `traceId`: string }
 *    - `data`: { `id`: string, `attributes`?: AttributesMap }
 *    - `errors`?: string[]
 * 
 * 4. Crie a função `extractScore(payload: unknown, fallbackScore: ScoreType): ScoreType`:
 *    - Valida o `payload` partindo de `unknown` com Type Guards defensivos.
 *    - Retorna o `score` se existir e for `number`; do contrário, retorna `fallbackScore`.
 *    - Sem usar `as` ou `any`.
 * 
 * 5. Crie a função `extractAttributeValue`:
 *    - Recebe `attributes` (`AttributesMap | undefined`) e uma `key` (`AttributeKeys`).
 *    - Usa Indexed Access e Optional Chaining para retornar o valor com segurança.
 */

const DEFAULT_ATTRIBUTES = {
    status: 'pending',
    score: 0,
};

interface ApiResponse {
    meta: {
        timestamp: number,
        traceId: string,
    }
    data: {
        id: string,
        attributes?: {
            status?: string,
            score?: number,
        }
    }

    errors?: string[]
}

type ScoreType = NonNullable<NonNullable<ApiResponse['data']['attributes']>['score']>;
type AttributesMap = typeof DEFAULT_ATTRIBUTES;
type AttributeKeys = keyof AttributesMap;

const isObject = (data: unknown): data is Record<PropertyKey, unknown> => {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
};

function extractScore(payload: unknown, fallbackScore: ScoreType): ScoreType {
    if (!isObject(payload)) return fallbackScore;
    if (!('data' in payload) || !isObject(payload.data)) return fallbackScore;
    if (!('attributes' in payload.data) || !isObject(payload.data.attributes)) return fallbackScore;

    const score = payload.data.attributes.score;

    if (typeof score === 'number') return score;
    return fallbackScore;
}

// 4. Implemente a função genérica para extração segura de atributos por chave
function extractAttributeValue(attributes: AttributesMap | undefined, key: AttributeKeys) {
    return attributes?.[key];
}

/**
=========================================================================
SUÍTE DE TESTES: Exercise 007
=========================================================================
Cole este bloco abaixo da sua implementação.
🔍 Passe o mouse sobre as constantes para checar os tipos inferidos.
⚙️ Rode o arquivo para validar o comportamento em runtime.
*/

// CASO 1: Payload desconhecido válido — Tipo esperado no hover: number
try {
    const validPayload: unknown = {
        meta: { timestamp: 1700000000, traceId: 'req-123' },
        data: { id: 'user-1', attributes: { status: 'active', score: 98.5 } },
    };
    const caso1 = extractScore(validPayload, 0);
    console.log(caso1 === 98.5 ? '✅ Caso 1: ok' : '❌ Caso 1: esperado 98.5, recebeu ' + caso1);
} catch (error: unknown) {
    console.log('❌ Caso 1 (erro inesperado):', error);
}

// CASO 2: Payload sem score / corrompido — Tipo esperado no hover: number
try {
    const invalidPayload: unknown = {
        meta: { timestamp: 1700000000, traceId: 'req-456' },
        data: { id: 'user-2', attributes: {} },
    };
    const caso2 = extractScore(invalidPayload, 10);
    console.log(caso2 === 10 ? '✅ Caso 2: ok' : '❌ Caso 2: esperado 10, recebeu ' + caso2);
} catch (error: unknown) {
    console.log('❌ Caso 2 (erro inesperado):', error);
}

// CASO 3: Payload totalmente inválido (string/null) — Tipo esperado no hover: number
try {
    const caso3 = extractScore('payload corrompido', 5);
    console.log(caso3 === 5 ? '✅ Caso 3: ok' : '❌ Caso 3: esperado 5, recebeu ' + caso3);
} catch (error: unknown) {
    console.log('❌ Caso 3 (erro inesperado):', error);
}

// CASO 4: Extração genérica por chave — Checagem estática e runtime
try {
    const attrs = { status: 'pending', score: 42 };
    const statusValue = extractAttributeValue(attrs, 'status');
    const scoreValue = extractAttributeValue(undefined, 'score');

    console.log(
        statusValue === 'pending' && scoreValue === undefined
            ? '✅ Caso 4: ok'
            : `❌ Caso 4: falhou (status: ${statusValue}, score: ${scoreValue})`,
    );
} catch (error: unknown) {
    console.log('❌ Caso 4 (erro inesperado):', error);
}