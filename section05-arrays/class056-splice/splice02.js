// Usando o Number.MAX_VALUE
// nomes.splice(índice_início, qtos_deletar, elemento1, elemento2, ...)
const nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Júlia']
console.log(nomes)

// .pop()
const removidos = nomes.splice(-3, Number.MAX_VALUE) 
// Remove o máximo de elementos possíveis do array a partir da posição indicada e retorna esse(s) elemento(s) dentro de um array
console.log(nomes)
console.log(removidos)
console.log(Number.MAX_VALUE) // Esse é o maior número que pode existir em JavaScript