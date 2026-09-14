// Valor por referência

// Exemplo que cria uma cópia real do array original
const nomes = ['Breno', 'Maria', 'Joana']
const novoNomes = [...nomes]

novoNomes.pop()
console.log(nomes) // Continuou com os mesmos valores
console.log(novoNomes) 

/*
NESTE EXEMPLO, AMBOS APONTAM PARA O MESMO LUGAR NA MEMÓRIA
    OU SEJA, ALTERAR UM, AUTOMATICAMENTE VAI ALTERAR O OUTRO

const novoNomes = nomes
console.log(nomes)
console.log(novoNomes)
novoNomes.pop()
console.log(nomes)
console.log(novoNomes)
*/