/*
Para cada elemento
    - Retorne apenas uma string com o nome da pessoa
    - Remova apenas a chave "nome" do objeto
    - Adicione uma chave id em cada objeto
*/
const pessoas = [
    { nome: 'Breno', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Joana', idade: 47 }
]

const onlyName = pessoas.map(function (valor) {
    return valor.nome
})

const onlyAge = pessoas.map(function (valor) {
    delete valor.nome
    return valor
})

const id = pessoas.map(function (valor, indice, array) {
    return `id: ${valor.nome}, ${valor.idade}`
})

console.log(onlyName)
console.log(onlyAge)
console.log(id)