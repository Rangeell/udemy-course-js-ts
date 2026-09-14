// Criando um objeto a partir do seu construtor
// new Object
// Comparando os dois métodos
const pessoa = new Object
pessoa.nome = 'Breno'
pessoa.sobrenome = 'Rangel'

console.log(pessoa.nome)
console.log(pessoa.sobrenome)

const pessoa2 = {
    nome: 'Breno',
    sobrenome: 'Rangel'
}
console.log(pessoa, pessoa2)
// Exatamente o mesmo resultado