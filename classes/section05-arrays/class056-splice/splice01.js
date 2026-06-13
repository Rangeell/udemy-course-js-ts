// Removendo elementos
// nomes.splice(índice_início, qtos_deletar, elemento1, elemento2, ...)
const nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
console.log(nomes)

const removidos = nomes.splice(-2, 2) 
// Remove um ou mais elementos do array a partir da posição indicada e retorna esse(s) elemento(s) dentro de um array
console.log(nomes)
console.log(removidos)