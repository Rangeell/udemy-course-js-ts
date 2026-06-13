// Object.freeze()

/*
Métodos de inspeção e segurança de memória
    Object.freeze()    
        Impede qualquer tipo de alteração do objeto
    Object.defineProperty() e // Object.defineProperties() também entram nessa categoria
*/

const produto = { nome: 'Caneca', preco: 1.8 }
Object.freeze(produto)
produto.nome = 'Outro nome'
const produto2 = {
    ...produto,
    material: 'Algodão'
}

console.log(produto)
