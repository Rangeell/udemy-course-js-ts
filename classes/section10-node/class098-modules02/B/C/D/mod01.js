module.exports = class Dog {
    constructor(nome) {
        this.nome = nome
    }

    latir() {
        console.log(`${this.nome} está latindo`)
    }
}

