/* 
Dados primitivos são imutáveis - 
    string, number, boolean, undefined, null (bigint, symbol)
Valores copiados
*/
function formatNome(nome) {
    return nome = nome[0].toUpperCase() + nome.slice(1)
}

let nome = 'breno'
console.log(formatNome(nome))

let a = 'A'
let b = a // Cópia independente
console.log(a, b)
a = 'Outra coisa'
console.log(a, b)

