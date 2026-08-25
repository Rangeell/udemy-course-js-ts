/*
Exercise 010 — User Authentication System

Difficulty: 🟡 Medium

📝 Enunciado
    - Você deverá criar um pequeno sistema de autenticação utilizando encapsulamento, validações, Type Narrowing, type assertions e métodos estáticos.

    - O sistema terá duas classes principais:
        - User
        - AuthService

    - A classe User representa um usuário do sistema.
    - A classe AuthService será responsável por autenticar usuários.
    - O objetivo é começar a separar responsabilidades entre objetos:
        User
          ↑
          |
    AuthService

    - O User será responsável por manter seus próprios dados protegidos.
    - O AuthService será responsável por procurar um usuário e realizar a autenticação.
    - Além disso, algumas operações deverão trabalhar com valores que podem possuir mais de um tipo, exigindo Type Narrowing.

🎯 Objetivo
    Crie uma classe User que possua:
        - id;
        - username;
        - email;
        - password.

    Os dados sensíveis do usuário não devem poder ser alterados
    diretamente de fora da classe.

    A senha não deve ser exposta através de um getter público.

    A classe User deverá possuir um método responsável por verificar
    se uma senha fornecida corresponde à senha armazenada.

    Depois crie uma classe AuthService responsável por:
        - armazenar usuários;
        - cadastrar usuários;
        - autenticar usuários.

    O sistema deverá permitir autenticação utilizando:
        - username;
        - email.

    O método de autenticação deverá aceitar:
        - string

    e deverá determinar se o valor recebido corresponde a um username
    ou a um email utilizando Type Narrowing e validações.

    Além disso, crie um identificador de usuário utilizando um atributo
    estático responsável por gerar IDs sequenciais.

📌 Contrato do Problema
    User:
        - id deve ser um número inteiro positivo.
        - username deve possuir pelo menos 3 caracteres.
        - email deve possuir formato válido.
        - password deve possuir pelo menos 8 caracteres.
        - Todos os dados devem ser validados.
        - Valores inválidos devem lançar Error.
        - O username não pode ser alterado externamente.
        - O email não pode ser alterado externamente.
        - O password não pode ser alterado externamente.
        - A senha não deve possuir getter público.
        - Deve existir um método para verificar uma senha.
        - A verificação deve retornar boolean.

    AuthService:
        - Deve possuir uma coleção de usuários.
        - Deve começar sem usuários.
        - Deve permitir cadastrar um usuário.
        - Não deve permitir dois usuários com o mesmo username.
        - Não deve permitir dois usuários com o mesmo email.
        - Deve permitir autenticar através de username ou email.
        - A senha fornecida deve ser verificada através do próprio User.
        - O AuthService não deve acessar diretamente a senha privada
          do User.
        - Uma autenticação bem-sucedida deve retornar o User.
        - Uma autenticação inválida deve retornar null.
        - Não utilize any.

    ID:
        - Os IDs devem ser sequenciais.
        - O mecanismo responsável pela geração dos IDs deve ser
          implementado utilizando um atributo/método estático.

    Type Narrowing:
        - O método de autenticação deve receber um valor do tipo string.
        - Você deverá utilizar Type Narrowing ou alguma forma de
          validação apropriada para determinar como procurar o usuário.
        - Não utilize instanceof para essa finalidade.

    Type Assertion:
        - Em algum ponto do exercício, utilize uma type assertion
          de maneira coerente e segura.
        - Não utilize uma type assertion apenas para satisfazer
          o compilador sem necessidade.

📋 Regras
    1. Crie uma classe chamada User.
    2. User deve possuir:
        - id;
        - username;
        - email;
        - password.

    3. O id deve ser somente leitura externamente.
    4. Username e email devem ser protegidos contra alteração externa.
    5. Password deve ser completamente encapsulada.
    6. Não crie um getter público para password.
    7. Crie um método:
        - verifyPassword(password: string): boolean
    8. Crie uma classe chamada AuthService.
    9. AuthService deve manter uma coleção de User.
    10. Crie um método para cadastrar usuários.
    11. O cadastro deve rejeitar username duplicado.
    12. O cadastro deve rejeitar email duplicado.
    13. Crie um método para autenticação.
    14. A autenticação deve permitir login através de:
        - username;
        - email.
    15. A senha deve ser verificada através de User.verifyPassword().
    16. AuthService não pode acessar diretamente o atributo privado
        de senha do User.
    17. Uma autenticação válida deve retornar o User correspondente.
    18. Uma autenticação inválida deve retornar null.
    19. Crie um mecanismo estático para geração automática dos IDs.
    20. Os IDs devem ser sequenciais.
    21. Utilize pelo menos um atributo ou método static.
    22. Utilize Type Narrowing em uma parte apropriada do exercício.
    23. Utilize pelo menos uma type assertion de maneira justificável.
    24. Utilize Regex para validar o email.
    25. Não utilize any.
    26. Não utilize herança.
    27. Não utilize abstract.
    28. Não utilize interfaces.
    29. Não utilize instanceof para identificar se o login é username
        ou email.
    30. Não permita que código externo altere diretamente o estado
        interno dos usuários.
    31. Operações inválidas devem lançar Error quando especificado
        pelo contrato.
    32. Uma operação inválida não deve deixar o objeto em estado
        inconsistente.
    33. Crie exemplos demonstrando:
        - criação de usuários;
        - geração automática dos IDs;
        - cadastro;
        - login através de username;
        - login através de email;
        - senha incorreta;
        - usuário inexistente;
        - tentativa de cadastro duplicado.

⭐ Desafio Extra
    Pense em como você poderia impedir que dois usuários recebessem
    o mesmo ID mesmo que diferentes instâncias de AuthService fossem
    criadas.

    Não é necessário implementar o desafio extra caso você queira
    manter o foco no exercício principal.
*/

export class User {
    // Atributo estático para compartilhar a contagem de id entre as instâncias da classe
    private static idCount = 1;
    readonly id: number;

    constructor(
        private readonly _username: string,
        private readonly _email: string,
        private readonly password: string,
        // Quando for instanciada, vai atualizar o id e será somado +1 no idCount atual 
    ) {
        if (!this.isValidEmail(_email) || !this.isValidPasssword(password) || !this.isValidUsername(_username)) {
            throw new Error('Dados de usuário inválidos.');
        }

        this.id = User.idCount++;
    }

    get username(): string { return this._username; }
    get email(): string { return this._email; }

    verifyPassword(password: string): boolean { return password === this.password; }
    matchesIdentifier(identifier: string): boolean {
        return identifier === this.email || identifier === this.username;
    }

    private isValidUsername(username: string): boolean { return username.length >= 3; }
    private isValidPasssword(password: string): boolean { return password.length >= 8; }
    private isValidEmail(email: string): boolean {
        const regexEmail = /^((\w+\.)?\w+)@(\w+(\.\D{2,})(\.br)?)$/i;
        return regexEmail.test(email);
    }
}

export class AuthService {
    private readonly users: User[] = [];

    register(user: User): void {
        if (this.users.some(currentUser =>
            currentUser.email === user.email || currentUser.username === user.username)) {
            throw new Error('Usuário já existe.');
        }

        this.users.push(user);
    }

    login(identifier: string, password: string): User | null {
        const findUser = this.users.find(findUser => findUser.matchesIdentifier(identifier));

        if (!findUser || !findUser.verifyPassword(password)) return null;

        return findUser;
    }
}

//* EXAMPLES 

const user1 = new User(
    'Rangel',
    'rangel@email.com',
    '12345678',
);

const user2 = new User(
    'Breno',
    'breno@email.com',
    'abcdefgh',
);
console.log(user1.id); // Deve retornar: 1
console.log(user2.id); // Deve retornar: 2

// Cadastro:
const auth = new AuthService();
auth.register(user1);
auth.register(user2);

// Login usando username:
const authenticatedUser = auth.login('Rangel', '12345678');
console.log(authenticatedUser); // Deve retornar o User correspondente

// Login usando email:
const authenticatedUser2 = auth.login('breno@email.com', 'abcdefgh');
console.log(authenticatedUser2); // Deve retornar o User correspondente

// Senha incorreta:
const result = auth.login('Rangel', 'senhaErrada');
console.log(result); // Deve retornar: null

// Usuário inexistente:
const result2 = auth.login('UsuarioInexistente', '12345678');
console.log(result2); // Deve retornar: null

// Usuário duplicado:
const duplicate = new User(
    'Rangel',
    'outro@email.com',
    '87654321',
);
auth.register(duplicate); // Deve lançar Error

// E-mail duplicado:
const duplicateEmail = new User(
    'OutroUsuario',
    'rangel@email.com',
    '87654321',
);
auth.register(duplicateEmail); // Deve lançar Error

// Validação de e-mail:
const invalidUser = new User(
    'Usuario',
    'email-invalido',
    '12345678',
);
// Deve lançar Error