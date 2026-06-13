/*
- Retorne as pessoas que tem o nome com 5 letras ou mais
- Retorne as pessoas com mais de 50 anos
- Retorne as pessoas cujo nome termina com a letra A
*/
const pessoas = [
    { nome: 'Breno', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Joana', idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter(function (valor) {
    if (valor.nome.length >= 5) {
        return true
    }
})

const pessoasMaisDeMaisDeCinquentaAnos = pessoas.filter(function (valor) {
    if (valor.idade > 50) {
        return true
    }
})
 
const nomeTerminaComA = pessoas.filter(function (valor, indice, array) {
    if (valor.nome.toLowerCase().slice(-1) === 'a') {
        return true
    }
})

console.log(pessoasComNomeGrande)
console.log(pessoasMaisDeMaisDeCinquentaAnos)
console.log(nomeTerminaComA)