// Object.getOwnPropertyDescriptor(o, 'prop')

/*
Métodos de inspeção e segurança de memória
    Object.freeze()    
        Impede qualquer tipo de alteração do objeto
    Object.defineProperty() e // Object.defineProperties() também entram nessa categoria
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const produto2 = {
    ...produto,
    material: 'Algodão'
}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

produto.nome = 'Outra coisa'
delete produto.nome

console.log(produto)
