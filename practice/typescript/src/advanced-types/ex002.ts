/**
 * =========================================================================
 * DESAFIO 02: Repositório de Busca Inteligente (Database Query Overload)
 * DIFICULDADE: Difícil
 * FOCO: Sobrecarga com Variação de Tipo de Retorno (Objeto Único vs Array)
 * =========================================================================
 * 
 * ENUNCIADO:
 * Em sistemas reais de backend, muitas vezes criamos repositórios que expõem
 * uma única função flexível para busca de entidades. Você deve criar o método 
 * 'buscarUsuario' de um serviço que se comporte de duas maneiras distintas:
 * 1. Se receber um ID numérico, busca um usuário específico e retorna 'Usuario | null'.
 * 2. Se receber uma Role ('admin' | 'usuario'), retorna uma lista de usuários filtrados 'Usuario[]'.
 *
 * REGRAS & CONTRATO:
 * 1. Crie os tipos bases 'Usuario' contendo (id, nome, role).
 * 2. Assinatura de Sobrecarga A: Recebe 'id' (number). Retorna 'Usuario | null'.
 * 3. Assinatura de Sobrecarga B: Recebe 'role' ('admin' | 'usuario'). Retorna 'Usuario[]'.
 * 4. Assinatura de Implementação: Deve agrupar as possibilidades de entrada sem recorrer a 'any' na tipagem dos parâmetros.
 *
 * DICAS DE DESIGN & CLEAN CODE:
 * - Utilize um array estático de dados fictícios (Mock) dentro ou fora do escopo da função para realizar as buscas.
 * - Lembre-se que em TypeScript, a assinatura de implementação final fica oculta para quem consome o método, valendo apenas os overloads.
 */

type Role = 'admin' | 'user';

type User = {
    id: number;
    name: string;
    role: Role;
}

// MOCK
const dataBase: User[] = [
    { id: 1, name: 'Ana Silva', role: 'admin' },
    { id: 2, name: 'Lucas Souza', role: 'user' },
    { id: 3, name: 'Maria Oliveira', role: 'user' },
    { id: 4, name: 'Beatriz Costa', role: 'admin' },
    { id: 5, name: 'João Santos', role: 'user' },
];

/* eslint-disable no-redeclare */
function searchUser(id: number): User | null;
function searchUser(role: Role): User[];

function searchUser(idOrRole: number | Role): User | null | User[] {
    if (typeof idOrRole === 'number') {
        const user = dataBase.find(user => user.id === idOrRole);

        return user ?? null;
    }

    return dataBase.filter(v => v.role === idOrRole);
}

/**
 * =========================================================================
 * SUÍTE DE TESTES: Desafio 02 (Database Query Overload)
 * =========================================================================
 * Copie e cole este bloco abaixo da sua implementação de 'buscarUsuario'.
 * 
 * 🔍 TESTE ESTÁTICO: Passe o mouse sobre as constantes para validar as regras:
 * - 'buscaIdExistente' e 'buscaIdInexistente' devem ser do tipo: Usuario | null
 * - 'buscaAdmins' e 'buscaUsuariosComuns' devem ser do tipo: Usuario[]
 * 
 * ⚙️ TESTE DE RUNTIME: Execute o código para verificar se o mock de dados
 * está sendo filtrado e retornado corretamente.
*/

console.log('\n--- INICIANDO TESTES DO DESAFIO 02 ---\n');
/* eslint-disable */

// -------------------------------------------------------------------------
// CASO 1: Busca por ID existente
// Tipo esperado no Hover: 'Usuario | null'
// -------------------------------------------------------------------------
try {
    const buscaIdExistente = searchUser(1);

    console.log('✅ Caso 1 (Busca ID Existente):');
    if (buscaIdExistente) {
        // Se o TypeScript inferiu corretamente, ele permite acessar '.nome' 
        // após passarmos por essa checagem 'if' (Type Guard de nulidade)
        console.log(`   - Usuário encontrado: ${buscaIdExistente.name} (Role: ${buscaIdExistente.role})`);
    } else {
        console.log('   - Erro: Usuário com ID 1 deveria ter sido encontrado.');
    }
} catch (error: any) {
    console.log('❌ Caso 1 (Erro inesperado):', error.message);
}

// -------------------------------------------------------------------------
// CASO 2: Busca por ID inexistente
// Tipo esperado no Hover: 'Usuario | null'
// -------------------------------------------------------------------------
try {
    const buscaIdInexistente = searchUser(999); // ID que não existe no banco

    console.log('✅ Caso 2 (Busca ID Inexistente):');
    if (buscaIdInexistente === null) {
        console.log('   - Retornou \'null\' corretamente para ID inexistente.');
    } else {
        console.log('   - Erro: Deveria ter retornado \'null\', mas retornou:', buscaIdInexistente);
    }
} catch (error: any) {
    console.log('❌ Caso 2 (Erro inesperado):', error.message);
}

// -------------------------------------------------------------------------
// CASO 3: Busca por Role 'admin'
// Tipo esperado no Hover: 'Usuario[]' (Array de Usuários)
// -------------------------------------------------------------------------
try {
    const buscaAdmins = searchUser('admin');

    console.log('✅ Caso 3 (Busca por Role \'admin\'):');
    // Se o TypeScript inferiu 'Usuario[]', você pode usar o '.length' e métodos 
    // de array como '.forEach' diretamente, sem checagem de nulidade!
    console.log(`   - Quantidade de admins encontrados: ${buscaAdmins.length}`);
    buscaAdmins.forEach(u => console.log(`     * Admin: ${u.name}`));
} catch (error: any) {
    console.log('❌ Caso 3 (Erro inesperado):', error.message);
}

// -------------------------------------------------------------------------
// CASO 4: Busca por Role 'usuario'
// Tipo esperado no Hover: 'Usuario[]'
// -------------------------------------------------------------------------
try {
    const buscaUsuariosComuns = searchUser('user');

    console.log('✅ Caso 4 (Busca por Role \'usuario\'):');
    console.log(`   - Quantidade de usuários comuns encontrados: ${buscaUsuariosComuns.length}`);
    buscaUsuariosComuns.forEach(u => console.log(`     * Usuário: ${u.name}`));
} catch (error: any) {
    console.log('❌ Caso 4 (Erro inesperado):', error.message);
}
