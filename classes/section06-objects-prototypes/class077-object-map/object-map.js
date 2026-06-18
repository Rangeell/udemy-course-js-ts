// Usando o Objeto Map

const pessoas = [
    { id: 3, nome: 'Breno' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]

const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}
console.log(novasPessoas)

// console.log(novasPessoas)
// console.log(novasPessoas.get(2)) // Usando get para obter uma pessao em específico

for (const pessoas of novasPessoas) { 
    console.log(pessoas)
}

for (const chaves of novasPessoas.keys()) { // Itera sobre as chaves
    console.log(chaves)
}

for (const valores of novasPessoas.values()) { // Itera sobre os valores
    console.log(valores)
}

novasPessoas.delete(2) // Remove a Maria da coleção