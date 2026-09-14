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

const onlyName = pessoas.map(valor => valor.nome)

// Envelopar com () para evitar bug
const onlyAge = pessoas.map((valor) => ({ idade: valor.idade }))

const id = pessoas.map((valor, indice) => {
    const newObject = {...valor}
    newObject.id = indice
    return newObject
})

console.log(onlyName)
console.log(onlyAge)
console.log(id)