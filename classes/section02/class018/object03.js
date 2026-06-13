const pessoa1 = {
    nome: 'Breno',
    sobrenome: 'Rangel',
    idade: 23,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo oi!`)
    },

    falaIdade() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        ++this.idade
    }
}

pessoa1.fala()
pessoa1.falaIdade()
pessoa1.incrementaIdade()
pessoa1.falaIdade()
pessoa1.incrementaIdade()
pessoa1.falaIdade()
pessoa1.incrementaIdade()
pessoa1.falaIdade()