// Resvisando alguns método/atributos básicos 

// .pop() - Remove do final e retornar o elemento removido
let nomes = ['Breno', 'Maria', 'Joana']
console.log('.pop()')
let removido = nomes.pop()
console.log(nomes, removido)

// .shift() - Remove do início e retornar esse elemento (causa alteração/ nos índices)
nomes = ['Breno', 'Maria', 'Joana']
console.log('.shift()')
removido = nomes.shift()
console.log(nomes, removido)

// .push() - Adiciona um elemento no final do array
console.log('.push()')
nomes = ['Breno', 'Maria', 'Joana']
nomes.push('Brenda')
nomes.push('Maria Joaquina')
console.log(nomes)

// .unshift() - Adiciona um elemento no inicio do array (causa alteração/deslocamento de todos os índices do array)
console.log('.unshift()')
nomes = ['Breno', 'Maria', 'Joana']
nomes.unshift('Brenda')
nomes.unshift('Maria Joaquina')
console.log(nomes)

/*
.slice() - "Fatia" um pedaço do array sem modificar o array original
    Ele trabalha com os índices de início (inclusivo) e fim (exclusivo)
*/
console.log('.slice()')
nomes = ['Breno', 'Maria', 'Joana', 'Brenda', 'Flávia']
let novoNomes = nomes.slice(1, -1) // Indíce do fim não é incluído 
console.log(novoNomes)

// .split() - Converte string para array
console.log('.split()')
nome = 'Breno Rangel Ramos'
nomes = nome.split(' ')
console.log(`String: ${nome}`)
console.log(`Array:`)
console.log(nomes)

// .join() - Converte array para string
console.log('.join()')
nomes = ['Breno', 'Rangel', 'Ramos']
nome = nomes.join(' ')
console.log(`String: ${nome}`)
console.log(`Array:`)
console.log(nomes)