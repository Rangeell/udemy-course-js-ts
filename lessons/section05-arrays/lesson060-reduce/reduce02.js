// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Breno', idade: 62 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Joana', idade: 47 }
]

const olderPerson = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(olderPerson)