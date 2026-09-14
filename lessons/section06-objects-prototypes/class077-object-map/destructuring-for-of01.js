// Destructing Assingment - for of

const pessoas = [
    { id: 3, nome: 'Breno' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]

const novasPessoas = {

}

// Primeira forma
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = { ...pessoa }
}

console.log(novasPessoas)
