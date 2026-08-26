/*
Exercise 001 — Find a Valid Email

Difficulty: 🟢 Easy

📝 Enunciado
- Crie uma função que receba uma string contendo um e-mail e determine se ela possui um formato básico de e-mail válido utilizando Regex.

- A função deve retornar true quando o e-mail estiver de acordo com as regras definidas abaixo e false caso contrário.

🎯 Objetivo
    Praticar os fundamentos de Regex:
        - caracteres literais;
        - classes de caracteres;
        - quantificadores;
        - início e fim da string;
        - combinação de diferentes partes de um padrão.

    A ideia é começar construindo uma Regex simples para identificar uma estrutura básica de e-mail.

📌 Contrato da Função/Problema
    - A entrada será sempre uma string.
    - Considere que a entrada é sempre válida como tipo de dado.
    - A validação do formato do e-mail faz parte do exercício.
    - Você deve utilizar Regex para realizar a validação.
    - Não é necessário verificar se o domínio realmente existe ou se o e-mail pode receber mensagens.
📋 Regras
    1. Para este exercício, considere válido um e-mail que siga esta estrutura: usuario@dominio.extensao

    2. Parte usuario
        - Deve possuir pelo menos 1 caractere.
        - Pode conter letras e números.
        - Pode conter ., _ e -.

    3. Símbolo @
        - Deve existir exatamente como separador entre usuário e domínio.

    4. Parte dominio
        - Deve possuir pelo menos 1 caractere.
        - Pode conter letras e números.
        - Não precisa aceitar caracteres especiais nessa parte.

    5. Extensão
        - Deve existir.
        - Deve possuir pelo menos 2 letras.
        - Deve aparecer no final da string.

    6. Exemplos que devem ser considerados inválidos
        - Ausência do @.
        - Ausência do usuário.
        - Ausência do domínio.
        - Ausência da extensão.
        - Extensão com apenas uma letra.
        - Caracteres inválidos na estrutura definida.
*/

function isValidEmail(email) {
    const regexEmail = /^[\w.-]+@[\w]+(\.[a-z]{2,})+$/i;

    return regexEmail.test(email);
}

//* EXAMPLES

console.log(isValidEmail("rangel@gmail.com")); // true
console.log(isValidEmail("john.doe123@hotmail.com")); // true
console.log(isValidEmail("user_name@company.com.br")); // true
console.log(isValidEmail("dev-user@site.dev")); // true

console.log(isValidEmail("rangelgmail.com")); // false
console.log(isValidEmail("@gmail.com")); // false
console.log(isValidEmail("rangel@")); // false
console.log(isValidEmail("rangel@gmail")); // false
console.log(isValidEmail("rangel@gmail.c")); // false
console.log(isValidEmail("rangel@site.com!")); // false 