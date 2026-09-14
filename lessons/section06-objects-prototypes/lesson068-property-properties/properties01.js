// Entendendo o Object.defineProperties()

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // A chave pode aparecer quando o obj for iterado?
        value: estoque, // Define o valor da chave (o "nome" que vai aparecer)
        writable: false, // Pode ou não ser alterado?
        configurable: false // Pode deletar/reconfigurar a chave?
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}
const produto = new Produto('Camiseta', 20, 3)

// O nome da chave não aparece no console por conta da config enumerable
console.log(Object.keys(produto))
console.log(produto)


for (let k in produto) {
    console.log(k)
}