// Entendendo o Object.defineProperty()

function Produto (nome, preco, estoque) {
    this.nome = nome // Propriedade pública
    this.preco = preco // Propriedade pública
    // this.estoque = estoque // Propriedade privada
    Object.defineProperty(this, 'estoque', {
      enumerable: true, // A chave pode aparecer quando o obj for iterado?
      value: estoque, // Define o valor da chave (o "nome" que vai aparecer)
      writable: false, // Pode ou não ser alterado?
      configurable: false // Pode deletar/reconfigurar a chave?
    })
}
const produto = new Produto('Camiseta', 20, 3)
produto.estoque = 500 // Ignorou alteração por conta da configuração writable
console.log(produto) // O nome da chave aparece no console por conta da config enumerable (true)