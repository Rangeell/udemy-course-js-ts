// Getters e Setters em Constructor Functions

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number')
                throw new TypeError('O valor do estoque precisa ser um número')
            return
            estoque = valor
        }
    })
}
const produto = new Produto('Camiseta', 20, 3)
// console.log(produto)
produto.estoque = 'O valor que eu quero'
console.log(produto.estoque)