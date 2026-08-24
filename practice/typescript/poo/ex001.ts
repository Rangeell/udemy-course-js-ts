/*
Exercise 001 — Email Validation

Difficulty: 🟢 Easy

📝 Enunciado

    Crie uma classe Email responsável por representar e validar um endereço de e-mail.

    A classe deve receber um endereço de e-mail no construtor e disponibilizar uma forma de verificar se ele possui um formato válido utilizando Regex.

    Exemplos de e-mails válidos:
        - rangel@gmail.com
        - joao.silva@example.com
        - user123@empresa.com.br

    Exemplos de e-mails inválidos:
        - rangel@gmail
        - @gmail.com
        - rangel@
        - rangel gmail.com
        - rangel@@gmail.com
🎯 Objetivo

    Implemente a classe Email de forma que ela:
        - Armazene o e-mail recebido.
        - Utilize encapsulamento para controlar o acesso ao valor.
        - Possua um método que determine se o e-mail possui um formato válido.
        - Utilize Regex para realizar a validação.
        - Utilize TypeScript adequadamente.

    O foco principal é começar a combinar POO + encapsulamento + Regex, sem introduzir ainda conceitos mais avançados de POO.

📌 Contrato da Função/Problema

    Considere que a entrada é sempre uma string.

    A validação do formato do e-mail faz parte do exercício.

    Não é necessário validar se o domínio realmente existe ou se o e-mail pode receber mensagens. Você deve verificar apenas o formato textual.

📋 Regras
    1. A classe deve se chamar Email.
    2. O e-mail deve ser armazenado como um atributo privado.
    3. O acesso ao e-mail deve ser controlado pela classe.
    4. A validação deve utilizar Regex.
    5. Um e-mail válido deve possuir:
        - uma parte antes do @;
        - exatamente um @;
        - um domínio;
        - uma extensão de domínio.
    6. Considere que a extensão deve possuir pelo menos 2 caracteres.
    7. Não é necessário validar todos os casos possíveis da especificação real de e-mails.
    8. Não utilize bibliotecas externas.
    9. Não utilize métodos prontos de validação de e-mail.
*/

export class Email {
    constructor(private email: string) { }

    isValid(): boolean {
        const regexEmail = /^((\w+\.)?\w+)@(\w+(\.\D{2,})(\.br)?)$/i;
        return regexEmail.test(this.email);
    }
}

//* EXEMPLES
const email1 = new Email('rangel@gmail.com');
console.log(email1.isValid());
// true 

const email2 = new Email('rangel@gmail');
console.log(email2.isValid());
// false

const email3 = new Email('joao.silva@empresa.com.br');
console.log(email3.isValid());
// true

const email4 = new Email('joao@@empresa.com');
console.log(email4.isValid());
// false