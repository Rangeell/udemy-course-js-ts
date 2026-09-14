// Simulando métodos individuais
// nomes.splice(índice_início, qtos_deletar, elemento1, elemento2, ...)
let nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
console.log('Array original:', nomes)

// .pop()
// Remove um elemento do final do array e retorna esse elemento dentro de um array
console.log("pop")
let removidos = nomes.splice(-1, 1) 
console.log(nomes)
console.log(removidos)

// .shift()
// Remove um elemento do início do array e retorna esse elemento dentro de um array
console.log('shift')
nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
removidos = nomes.splice(0, 1)
console.log(nomes)
console.log(removidos)

// .unshift()
// Adiciona um elemento no início do array e retorna esse elemento dentro de um array
console.log('unshift')
nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
removidos = nomes.splice(0, 0, 'Joaquina')
console.log(nomes)
console.log(removidos)

// .push()
// Adiciona um elemento no final do array e retorna esse elemento dentro de um array
console.log('unshift')
nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
removidos = nomes.splice(Number.MAX_VALUE, 0, 'Joaquina')
/* 
Também pode ser feito dessa forma:
    removidos = nomes.splice(nomes.length, 0, 'Joaquina')
*/
console.log(nomes)
console.log(removidos)