// Exemplo mais simples
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) {
        if (typeof valor !== 'string') return
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}
const p1 = new Pessoa('Breno', 'Rangel')
console.log(p1)
console.log(p1.nomeCompleto)
console.log(p1.nomeCompleto = 'Maria de Albuquerque')
console.log(p1.nomeCompleto)