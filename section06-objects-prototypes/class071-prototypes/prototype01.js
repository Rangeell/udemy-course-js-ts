// Revisão

/*
Constructor Function -> Molde (Classe)
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

// Instância
// Objetos que vêm de determinada função construtora
const pessoa1 = new Pessoa('Breno', 'Rangel')
const pessoa2 = new Pessoa('Maria', 'Joaquina')
console.dir(pessoa1)
console.dir(pessoa2)