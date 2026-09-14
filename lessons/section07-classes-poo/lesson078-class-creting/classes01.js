// Usando Classes
class Pessoa {
    constructor(nome, sobrenome) { // Método especial quando precisamos passar parâmetros para a nossa classe
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando!`)
    }
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo!`)
    }
    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo!`)
    }
}
// Instanciação - Criar um objeto a partir de uma classe/constructor function (moldes)
const p1 = new Pessoa('Breno', 'Rangel')
console.log(p1)
p1.falar()
p1.comer()
p1.beber()

// Usando Constructor Function para fins comparativos
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} ${this.sobrenome} está falando!`)
}
Pessoa2.prototype.comer = function () {
    console.log(`${this.nome} ${this.sobrenome} está comendo!`)
}
Pessoa2.prototype.beber = function () {
    console.log(`${this.nome} ${this.sobrenome} está bebendo!`)
}

console.log('-'.repeat(47))

// Instanciação - Criar um objeto a partir de uma classe/constructor function (moldes)
const p2 = new Pessoa2('Breno', 'Rangel')
console.log(p2)
p2.falar()
p2.comer()
p2.beber()
