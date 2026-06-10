// Getters e Setters em Factory Functions

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            if (typeof valor !== 'string') {
                throw new TypeError('O nome do produto precisa ser uma string')
            }
            nome = valor
        }
    }
}

const produto = criaProduto('PlayStation')
console.log(produto.nome)
produto.nome = 'Iphone'
console.log(produto.nome)