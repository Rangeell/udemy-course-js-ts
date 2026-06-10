// Método dentro de objetos (funções que executam ações)

const pessoa = new Object
pessoa.nome = 'Breno'
pessoa.sobrenome = 'Rangel'
pessoa.idade = 23
pessoa.falaNome = function () { return `Meu nome completo é: ${this.nome} ${this.sobrenome}` }
pessoa.getDataNascimento = function () {
    const today = new Date()
    const year = today.getFullYear()
    return year - this.idade
}

console.log(pessoa.getDataNascimento())
console.log(pessoa.falaNome())
