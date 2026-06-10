/*
Tipos de funções que são moldes para criar novos objetos
    Factory functions
    Constructor functions
    Classes
*/
// Factory Functions

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
    }
}
const p1 = criaPessoa('Breno', 'Rangel')
console.log(p1.nomeCompleto)
