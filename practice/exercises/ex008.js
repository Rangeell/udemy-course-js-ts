/*
Exercises 008 — Count Vowels

Difficulty: 🟢 Easy

Enunciado
    Dada uma string, conte quantas vogais ela possui e retorne essa quantidade.

    Considere como vogais apenas: a, e, i, o, u
    
    A função deve considerar tanto letras maiúsculas quanto minúsculas.

    O objetivo deste exercício é praticar percorrer strings, realizar comparações condicionais e manter um contador.

Objetivo
    Implementar uma função que receba uma string e retorne a quantidade de vogais existentes nela.

Regras
    1. A função sempre receberá uma string.
    
    2. Considere como vogais:
        - a
        - e
        - i
        - o
        - u
    
    3. A função deve considerar:
        - Letras maiúsculas;
        - Letras minúsculas.
    
    4. Ignore:
        - Espaços;
        - Números;
        - Símbolos;
        - Pontuação.
    
    5. Não utilize:
        - Expressões Regulares (RegExp)
        - Bibliotecas externas
    
    6. Você pode utilizar:
        - for
        - while
        - for...of
        - if
        - switch
        - Métodos básicos de string (desde que não resolvam o problema automaticamente)
*/

function countVowels(text) {
    if (typeof text !== 'string') throw new TypeError('Essa função aceita apenas strings!');

    text = text.toLowerCase()

    const vowels = 'aáeéiíoóuú'
    let count = 0

    for (let char of text) {
        vowels.includes(char) ? count++ : count
    }

    return count
}

//* Examples

const comentario = "Gostei muito desse produto!";
console.log(countVowels(comentario));
/*
Deve retornar:
    11
*/

const usuario = "Rangel";
console.log(countVowels(usuario));
/*
Deve retornar:
    2
*/