// Usando o ...spread operator

/*
Métodos de Cópia de objetos
    Criando uma cópia definitiva (valor independente)
        Saindo do valor passado por refêrencia
        Criando uma nova chave para o elemento copiado
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}

produto2.nome = 'Camisa'
produto2.preco = 30
console.log(produto)
console.log(produto2)
