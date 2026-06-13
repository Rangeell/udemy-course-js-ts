// Definindo um novo pai para um objeto literal criado sepado do construtor

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
    /* Não vamos criar métodos diretamente aqui dentro
        Ao invés disso, vamos usar o prototype
    */
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100)
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}

const p1 = new Produto('Camiseta', 50)

// Objeto literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

console.log(Object.getPrototypeOf(p2))
console.log(p2)
p2.aumento(10)
console.log(p2)
