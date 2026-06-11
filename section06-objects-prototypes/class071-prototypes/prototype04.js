// Modificando nossa constructor function

/*
Modificando nossa constructor function
    Tornando ela mais permática com o uso so .prototype
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => `Original ${this.nome} ${this.sobrenome}`
}

// Prototype
Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

// Instância
// Objetos que vêm de determinada função construtora
const pessoa1 = new Pessoa('Breno', 'Rangel')
const pessoa2 = new Pessoa('Maria', 'Joaquina')
const data = new Date // Date -> Constructor Function
console.dir(pessoa1)
console.dir(data)
console.dir(Pessoa.prototype === pessoa1.__proto__)