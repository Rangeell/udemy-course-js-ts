/*
Tipos de funções que são moldes para criar novos objetos
    Factory functions
    Constructor functions
    Classes
*/
// Constructor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`
    }
    // return this
}
const p1 = new Pessoa('Breno', 'Rangel')
const p2 = new Pessoa('Maria', 'Joaquina')
console.log(p1.nome)
console.log(p2.nome)
console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())
