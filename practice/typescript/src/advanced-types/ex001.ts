/**
 * =========================================================================
 * EXERCISE 001: Sistema de Autenticação Multicanal (Overload)
 * DIFICULDADE: Média
 * FOCO: Sobrecarga de Funções com Diferentes Retornos e Parâmetros
 * =========================================================================
 * 
 * ENUNCIADO:
 * Você está desenvolvendo o módulo de segurança de uma aplicação real. 
 * O sistema precisa permitir dois métodos de autenticação através de uma única 
 * função pública chamada 'autenticar':
 * 1. Por Credenciais (E-mail e Senha) -> Deve retornar um objeto de Sessão (com token e expiração).
 * 2. Por Token de API (Integração externa) -> Deve retornar apenas um booleano (sucesso ou falha).
 *
 * REGRAS & CONTRATO:
 * 1. Assinatura de Sobrecarga A: Recebe 'email' (string) e 'senha' (string). Retorna um objeto { token: string; expiraEm: number }.
 * 2. Assinatura de Sobrecarga B: Recebe 'apiToken' (string). Retorna 'boolean'.
 * 3. Assinatura de Implementação: Deve unificar os parâmetros com segurança e tipagem compatível (evite any se puder!).
 * 4. Lógica de Validação Interna:
 *    - Se for por e-mail/senha, simule sucesso gerando um token fictício caso a senha tenha mais de 6 caracteres.
 *    - Se for por apiToken, simule sucesso apenas se o token começar com a palavra "Bearer ".
 *
 * DICAS DE DESIGN & CLEAN CODE:
 * - Use Type Guards (como 'typeof') para identificar qual assinatura foi invocada dentro da implementação.
 * - Garanta que quem chama a função no VSCode não consiga ver ou passar tipos misturados (como e-mail e apiToken ao mesmo tempo).
 */

type Session = {
    token: string;
    expiresIn: number;
}

/*eslint-disable*/

// 1. Assinatura A: Credenciais
function authenticate(email: string, password: string): Session;

// 2. Assinatura B: API Token
function authenticate(apiToken: string): boolean;

// 3. Assinatura de Implementação (unificada e oculta para o consumidor)
function authenticate(emailOrToken: string, password?: string): Session | boolean {
    if (typeof password === 'string') {
        if (password.length <= 6) {
            throw new Error('A senha precisa ter mais de 6 caracteres!');
        }

        return {
            token: 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6',
            expiresIn: 10,
        };
    }

    return emailOrToken.startsWith('Bearer ');
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Desafio 01 (Autenticação Multicanal)
 * =========================================================================
 * Copie e cole este bloco abaixo da sua implementação de 'authenticate'.
 * 
 * 🔍 TESTE ESTÁTICO: Passe o mouse sobre as constantes 'teste1', 'teste2' etc.
 * no seu VSCode para validar se o tipo inferido é o tipo correto (e não 'Session | boolean').
 * 
 * ⚙️ TESTE DE RUNTIME: Execute o arquivo usando o ts-node ou compile-o para
 * ver os resultados do console.
 */

// -------------------------------------------------------------------------
// CASO 1: Autenticação por credenciais com sucesso
// Tipo esperado no Hover: 'Session'
// -------------------------------------------------------------------------

try {
    const teste1 = authenticate("usuario@email.com", "senha_segura_123");

    // Se o TypeScript inferiu 'Session' corretamente, você conseguirá acessar '.token'
    // sem precisar fazer nenhum type casting ou verificação adicional!
    console.log("✅ Caso 1 (Sucesso Credenciais):");
    console.log(`   - Token gerado: ${teste1.token.substring(0, 20)}...`);
    console.log(`   - Expira em: ${teste1.expiresIn}s`);
} catch (error: any) {
    console.log("❌ Caso 1 (Falhou inesperadamente):", error.message);
}

// -------------------------------------------------------------------------
// CASO 2: Autenticação por credenciais com erro de tamanho de senha
// Comportamento esperado: Deve lançar erro e cair no catch
// -------------------------------------------------------------------------
try {
    const teste2 = authenticate("usuario@email.com", "12345");
    console.log("❌ Caso 2 (Falhou): Deveria ter lançado erro por senha curta, mas retornou:", teste2);
} catch (error: any) {
    console.log("✅ Caso 2 (Erro esperado de senha curta capturado):", error.message);
}

// -------------------------------------------------------------------------
// CASO 3: Autenticação por Token de API válido (Começa com Bearer)
// Tipo esperado no Hover: 'boolean'
// -------------------------------------------------------------------------
try {
    const teste3 = authenticate("Bearer token_secreto_da_api_123");

    if (teste3 === true) {
        console.log("✅ Caso 3 (Sucesso Token): Retornou true corretamente.");
    } else {
        console.log("❌ Caso 3 (Falhou): Deveria retornar true, mas retornou:", teste3);
    }
} catch (error: any) {
    console.log("❌ Caso 3 (Erro inesperado):", error.message);
}

// -------------------------------------------------------------------------
// CASO 4: Autenticação por Token de API inválido (Sem o prefixo Bearer)
// Tipo esperado no Hover: 'boolean'
// -------------------------------------------------------------------------
try {
    const teste4 = authenticate("token_sem_prefixo_correto");

    if (teste4 === false) {
        console.log("✅ Caso 4 (Falha de Prefixo): Retornou false corretamente.");
    } else {
        console.log("❌ Caso 4 (Falhou): Deveria retornar false, mas retornou:", teste4);
    }
} catch (error: any) {
    console.log("❌ Caso 4 (Erro inesperado):", error.message);
}