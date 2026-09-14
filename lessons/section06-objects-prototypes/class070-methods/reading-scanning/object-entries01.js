// Object.entries()
// Retorna um array tanto as chaves quanto os valores dos objeto (um array para cada chave/valor)

/*
Métodos de leitura e varredura estrutural de objetos
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}
console.log(Object.entries(produto))
console.log(Object.entries(produto2))
