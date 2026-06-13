// for in - iterações em objetos

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

// k = key
for (let k in pessoa) {
    console.log(`Chave: ${k} | Valor: ${pessoa[k]}`)
}
