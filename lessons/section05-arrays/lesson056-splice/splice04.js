// Substituindo elementos
// nomes.splice(índice_início, qtos_deletar, elemento1, elemento2, ...)
const nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
console.log(nomes)

const substituidos = nomes.splice(3, 2, 'Rayssa', 'Flávia') 
// Remove e adiciona um ou mais elementos na e a partir da posição/índice indicado e retornar o(s) elemento(s) removido(s)
console.log(nomes)
console.log(substituidos)