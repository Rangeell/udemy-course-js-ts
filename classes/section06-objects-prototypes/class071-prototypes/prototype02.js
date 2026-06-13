// Comparação da nossa constructor function com a constructor function Date()

/*

*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

// Instância
// Objetos que vêm de determinada função construtora
const pessoa1 = new Pessoa('Breno', 'Rangel')
const data = new Date // Date -> Constructor Function
console.dir(pessoa1)
console.dir(data)