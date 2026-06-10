/*
Entendendo o Object.defineProperty() em iterações
    Principalmente a questão do enumerable
*/

function Produto (nome, preco, estoque) {
    this.nome = nome // Propriedade pública
    this.preco = preco // Propriedade pública
    Object.defineProperty(this, 'estoque', {
      enumerable: false, // A chave pode aparecer quando o obj for iterado?
      value: estoque, // Define o valor da chave (o "nome" que vai aparecer)
      writable: false, // Pode ou não ser alterado?
      configurable: false // Pode deletar/reconfigurar a chave?
    })
}
const produto = new Produto('Camiseta', 20, 3)

// O nome da chave não aparece no console por conta da config enumerable (false)
console.log(Object.keys(produto)) 

for (let k in produto) {
    console.log(k)
}