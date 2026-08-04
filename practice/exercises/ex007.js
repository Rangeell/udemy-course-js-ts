/*
Exercise 002 — Reverse a String

Difficulty: 🟢 Easy

Enunciado
    Dada uma string, retorne uma nova string contendo os mesmos caracteres em ordem inversa.
    
    O objetivo deste exercício é praticar percorrer strings, acessar caracteres por índice e construir uma nova string manualmente.

    *Importante: Este desafio deve ser resolvido sem utilizar métodos prontos que já fazem a inversão da string.

Objetivo
    Implementar uma função que receba uma string e retorne uma nova string com seus caracteres invertidos.

Rules
    1. A função sempre receberá uma string.
    2. A string pode conter:
        - Letras maiúsculas;
        - Letras minúsculas;
        - Números;
        - Espaços;
        - Caracteres especiais.
    3. Não utilize:
        - split()
        - reverse()
        - toReversed()
        - Bibliotecas externas
    4. Você pode utilizar:
        - for
        - while
        - for...of
        - Concatenação de strings
        - Variáveis
        - Qualquer recurso básico do JavaScript
*/

function reverseString(text) {
    text = String(text)

    if (typeof text !== 'string') {
        throw new TypeError('O argumento deve ser uma string válida!')
    }

    let newString = ''

    for (let c = text.length - 1; c >= 0; c--) {
        newString += text.charAt(c)
    }
    return newString
}

//* Examples

const mensagem = "OpenAI";
console.log(reverseString(mensagem));
/*
Deve retornar:
    "IAnepO"
*/

const codigo = "ABC-123";
console.log(reverseString(codigo));
/*
Deve retornar:
    "321-CBA"
*/
