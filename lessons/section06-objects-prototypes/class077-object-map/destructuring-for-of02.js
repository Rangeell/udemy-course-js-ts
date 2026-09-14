// Destructing Assingment - for of - Diretamente

const pessoas = [
    { id: 3, nome: 'Breno' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]

const novasPessoas = {

}

// Segunda forma forma
for (const { id, nome } of pessoas) {
    novasPessoas[id] = { id, nome }
}

console.log(novasPessoas)
