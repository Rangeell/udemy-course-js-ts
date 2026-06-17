function Pessoa(nickname, surname) {
    Object.defineProperties(this, {
        nome: {
            get: function () {
                return nickname
            },
            enumerable: true,
            configurable: false,
            set: function (v) {
                if (typeof v !== 'string') return
                return nickname = v
            }
        },
        surname: {
            get: function () {
                return surname
            },
            set: function (v) {
                if (typeof v !== 'string') return
                return nickname = v
            },
            enumerable: true,
            configurable: false
        }
    })
}
Pessoa.prototype.falar = function () {
    return console.log(`${this.nome} ${this.surname}, está falando`)
}

function Animal(nickname, surname) {
    Pessoa.call(this, nickname, surname)
}
Animal.prototype = Object.create(Pessoa.prototype)
Animal.prototype.constructor = Animal

Animal.prototype.falar = function () {
    return console.log(`${this.nome} ${this.surname} está latindo`)
}

const pessoa = new Pessoa('Breno', 'Rangel')
const animal = new Animal('Cachorro', 'Selvagem')
console.log(animal)
console.log(animal.falar())