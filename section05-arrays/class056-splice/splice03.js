// Adicionando elementos
// nomes.splice(índice_início, qtos_deletar, elemento1, elemento2, ...)
const nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
console.log(nomes)

const adicionados = nomes.splice(3, 0, 'Rayssa') 
// Adiciona um ou mais elementos na e a partir da posição/índice indicado e retornar um array vazio
console.log(nomes)
console.log(adicionados)