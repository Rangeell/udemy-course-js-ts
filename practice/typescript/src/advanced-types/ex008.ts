/**
 * =========================================================================
 * EXERCISE 008: Construtor de Consultas de Banco de Dados (Fluent Query Builder)
 * DIFFICULTY: 🟠 Medium/High
 * FOCO: 'this' como Tipo de Retorno, Method Chaining e Polimorfismo
 * =========================================================================
 * 
 * ENUNCIADO:
 * Em grandes aplicações, é muito comum criar "Query Builders" para evitar a
 * escrita de strings SQL puras. Você deve criar uma classe 'QueryBuilder' que 
 * permita estruturar uma consulta utilizando chamadas encadeadas.
 *
 * REGRAS & CONTRATO:
 * 1. A classe 'QueryBuilder' deve possuir propriedades privadas para armazenar:
 *    - Os campos selecionados (array de strings)
 *    - As condições do filtro (objeto ou array)
 *    - O limite de registros (número)
 * 2. Crie os métodos de configuração:
 *    - select(...campos: string[]): retorna 'this'.
 *    - where(campo: string, valor: string): retorna 'this'.
 *    - limit(limite: number): retorna 'this'.
 * 3. Crie um método finalizador chamado 'build()':
 *    - Ele deve retornar a string SQL gerada.
 *    - Exemplo de formato esperado da string: 
 *      "SELECT campo1, campo2 FROM tabela WHERE campo = 'valor' LIMIT 10;"
 *    - Se nenhum select for chamado, use "*" como padrão.
 *    - Se nenhum where ou limit for definido, eles não devem aparecer na string final.
 * 
 * REQUISITO DE TIPAGEM IMPRESCINDÍVEL:
 * - O tipo de retorno dos métodos 'select', 'where' e 'limit' DEVE ser explicitado 
 *   como 'this' (a palavra-chave do TypeScript) e NÃO como 'QueryBuilder'. 
 * - Isso é vital para que, se estendermos essa classe no futuro, os métodos herdados 
 *   retornem o tipo da subclasse automaticamente.
 */

// Escreva sua classe QueryBuilder abaixo:
export class QueryBuilder {
    private fields: string[] = [];
    private whereField: string | null = null;
    private whereValue: string | null = null;
    private registerLimit: number = 0;

    select(...fields: string[]): this {
        this.fields = fields;
        return this;
    }

    where(field: string, value: string): this {
        this.whereField = field;
        this.whereValue = value;

        return this;
    }

    limit(limitArg: number): this {
        this.registerLimit = limitArg;

        return this;
    }

    build(): string {
        const fields = this.hasFields(this.fields) ? this.fields.join(', ') : '*';
        let query = `SELECT ${fields} FROM tabela`;

        if (this.whereField && this.whereValue) query += ` WHERE ${this.whereField} = '${this.whereValue}'`;
        if (this.registerLimit > 0) query += ` LIMIT ${this.registerLimit}`;

        return query + ';';
    }

    private hasFields(fields: string[] | Record<PropertyKey, unknown>): boolean {
        if (Array.isArray(fields)) return fields.length > 0;

        return Object.keys(fields).length > 0;
    }
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Exercise 008 (Fluent Query Builder)
 * =========================================================================
 * Copie e cole este bloco abaixo da sua implementação de 'QueryBuilder'.
 */

console.log('\n--- INICIANDO TESTES DO EXERCISE 008 ---\n');

try {
    const queryCompleta = new QueryBuilder()
        .select('id', 'nome', 'email')
        .where('status', 'ativo')
        .limit(5)
        .build();

    console.log('Caso 1 (Query Completa):');
    console.log(`   - Resultado gerado: "${queryCompleta}"`);
    const esperado = 'SELECT id, nome, email FROM tabela WHERE status = \'ativo\' LIMIT 5;';
    if (queryCompleta.trim().toLowerCase() === esperado.toLowerCase()) {
        console.log('   - Status: ✅ SUCESSO! A query corresponde ao padrão.');
    } else {
        console.log('   - Status: ❌ FALHA. A query gerada foi diferente da esperada.');
    }
} catch (error: unknown) {
    console.log('❌ Caso 1 (Erro inesperado):', error);
}

try {
    const querySimples = new QueryBuilder()
        .limit(10)
        .build();

    console.log('Caso 2 (Query Sem Select/Where):');
    console.log(`   - Resultado gerado: "${querySimples}"`);
    const esperadoSimples = 'SELECT * FROM tabela LIMIT 10;';
    if (querySimples.trim().toLowerCase() === esperadoSimples.toLowerCase()) {
        console.log('   - Status: ✅ SUCESSO! Tratou o select padrão \'*\' corretamente.');
    } else {
        console.log('   - Status: ❌ FALHA. A query gerada foi diferente da esperada.');
    }
} catch (error: unknown) {
    console.log('❌ Caso 2 (Erro inesperado):', error);
}