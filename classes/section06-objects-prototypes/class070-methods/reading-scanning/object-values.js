// Object.values()
// Retorna os valores dos objeto

/*
Métodos de leitura e varredura estrutural de objetos
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}
console.log(Object.values(produto))
console.log(Object.values(produto2))
