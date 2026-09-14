// Object.keys()
// Retorna as chaves do objeto

/*
Métodos de leitura e varredura estrutural de objetos
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}
console.log(Object.keys(produto))
console.log(Object.keys(produto2))
