// Iterando com Object.entries()
// Retorna um array tanto as chaves quanto os valores dos objeto (um array para cada chave/valor)
// Desestruturação de objetos com for of

/*
Métodos de leitura e varredura estrutural de objetos
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}

for (let value of Object.entries(produto)) {
    console.log(value)
}

// Destructing
for (let [key, value] of Object.entries(produto)) {
    console.log(key, value)
}
