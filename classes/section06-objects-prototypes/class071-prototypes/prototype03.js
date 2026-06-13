// Entendendo como funciona o .prototype e o __proto__

/*
Shadowing - métodos e atributos dos filhos "sobrescrevem" os dos pais
    O JS primeiro procura a ocorrência no filhos e depois vão subindo na cadeia
    Neste caso, a cadeia seria:
        pessoa1 -> Pessoa.prototype -> Object.prototype (pai de todos)
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

// Prototype
Pessoa.prototype.estouAqui = 'HAHAHAHAH'

// Instância
// Objetos que vêm de determinada função construtora
const pessoa1 = new Pessoa('Breno', 'Rangel')
const pessoa2 = new Pessoa('Maria', 'Joaquina')
const data = new Date // Date -> Constructor Function
console.dir(pessoa1)
console.dir(data)