/*
Atribuição via desestrututuração de arrays/objetos como parâmetros
*/

// OBJECTS
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Breno', sobrenome: 'Rangel', idade: 23 }
funcao(obj)

// ARRAYS
function funcao2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

funcao2(['Breno', 'Rangel', 23])