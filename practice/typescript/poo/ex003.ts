/*
Exercise 003 — User Profile

Difficulty: 🟢 Easy

📝 Enunciado

    Você deverá criar uma classe UserProfile que represente o perfil básico de um usuário.

    O usuário possui:
        - nome;
        - idade;
        - e-mail.

    Esses dados devem ser protegidos por encapsulamento.
    
    O sistema deverá permitir consultar e alterar essas informações, mas algumas alterações precisam passar por regras de validação.
    
    Além disso, o método responsável por atualizar a idade deverá aceitar valores de tipos diferentes, fazendo com que você utilize Type Narrowing para determinar qual valor está sendo recebido.

🎯 Objetivo

    Implemente a classe UserProfile utilizando:
        - atributos privados;
        - getters;
        - setters;
        - validação de dados;
        - TypeScript;
        - Type Narrowing.

    A ideia é começar a perceber que getters e setters não servem apenas para "esconder" atributos: eles também podem funcionar como uma barreira de controle do estado interno da classe.

📌 Contrato do Problema
    - Considere que o nome inicial é sempre uma string.
    - Considere que a idade inicial é sempre um number.
    - Considere que o e-mail inicial é sempre uma string.
    - A validação das alterações faz parte do exercício.
    - O nome deve possuir pelo menos 3 caracteres.
    - A idade deve ser maior ou igual a 18.
    - O e-mail deve conter @.
    - Quando uma alteração for inválida, o valor anterior deve permanecer inalterado.
    - O método responsável pela atualização da idade deverá aceitar number | string.
    - Quando receber uma string, você deverá utilizar Type Narrowing para tratar o valor adequadamente.
    - Não é necessário utilizar regex neste exercício.
    - Não utilize any.

📋 Regras
    1. Crie uma classe chamada UserProfile.
    2. Nome, idade e e-mail devem ser atributos privados.
    3. Deve ser possível consultar os três valores externamente.
    4. Deve ser possível alterar os três valores externamente.
    5. A alteração do nome deve rejeitar valores com menos de 3 caracteres.
    6. A alteração da idade deve rejeitar valores menores que 18.
    6. A alteração do e-mail deve rejeitar valores que não contenham @.
    7. Uma alteração inválida não pode modificar o estado atual do objeto.
    8. O método de alteração da idade deve aceitar:
        - number
        - string
    9. Para diferenciar esses tipos, utilize Type Narrowing.
    10. Não é permitido acessar diretamente os atributos privados fora da classe.
    11. Não utilize any.
    12. Não é necessário utilizar herança, interfaces ou classes abstratas.
*/

class UserProfile {
    constructor(
        private _name: string,
        private _age: number,
        private _email: string) { }

    // GETTERS
    get name(): string { return this._name; }
    get age(): number { return this._age; }
    get email(): string { return this._email; }

    // SETTERS
    set name(value: string) {
        if (value.length < 3) return;

        this._name = value;
    }

    set age(value: number | string) {
        if (typeof value === 'string') {
            value = Number(value);
            
            if (Number.isNaN(value) || value < 18) return;
            
            this._age = value;
            return;
        };
        
        if (value < 18) return;

        this._age = value;
    }

    set email(value: string) {
        if (!this.isValidEmail(value)) return;

        this._email = value;
    }

    // UTILS
    private isValidEmail = (email: string): boolean => {
        const emailRegex = /^((\w+\.)?\w+)@(\w+(\.\D{2,})(\.br)?)$/i;
        return emailRegex.test(email);
    };
}

//* EXAMPLES

const user = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);
console.log(user.name);
console.log(user.age);
console.log(user.email);
/*
Rangel
24
rangel@email.com
*/

const user2 = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);

user2.name = 'Breno';
user2.age = 25;
user2.email = 'breno@email.com';

console.log(user2.name);
console.log(user2.age);
console.log(user2.email);
/*
Breno
25
breno@email.com
*/

const user3 = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);
user3.age = '26';

console.log(user3.age);
/*
26
*/

const user4 = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);

user4.age = 15;

console.log(user4.age);
/*
24
*/

const user5 = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);

user5.name = 'Jo';

console.log(user5.name);
/*
Rangel
*/

const user6 = new UserProfile(
    'Rangel',
    24,
    'rangel@email.com',
);

user6.email = 'rangel.com';
console.log(user6.email);
/*
Deve continuar:
rangel@email.com
*/