/*
Simulando um sistema para um dono de um e-commerce:
    Iremos vender camiseta e caneca:
        - Esses elementos representam Produto (nossa abstração);
        - Logo, vamos criar uma função que cria um produto;
        -  Também vamos querer que esses produtos tenham funções em comum:
            - Aumento de preço;
            - Desconto de preço;
    Contudo, iremos estabelecer alguns características individuais para cada produto:
        - Camisa: cor;
        - Caneca: material
*/

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function (valor) {
    this.preco += valor
}
Produto.prototype.desconto = function (valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

// Criando um objeto vazio e setando o prototype desse objeto vazio como Produto
Camiseta.prototype = Object.create(Produto.prototype) // Nessa linha, camiseta perde seu construtor (Camiseta) e passa ser Produto

Camiseta.prototype.constructor = Camiseta // Redefinindo o construtor Camiseta manualmente

// Sobrescrevendo o método aumento especificamente para Camiseta (Aumento em %)
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('O valor de estoque precisa ser um número!')
                estoque = valor
            }
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype) // Para herdar os métodos, mas passa a ter Produto como construtor
Caneca.prototype.constructor = Caneca // Para voltar a ser Caneca como construtor

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)

console.log(caneca)
console.log(caneca.estoque) // Usando Getter
console.log(caneca.estoque = 10) // Usando Setter
console.log(camiseta)
