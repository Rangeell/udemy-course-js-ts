const a = {
    nome: 'Breno',
    sobrenome: 'Rangel'
}

const b = {...a}
console.log(b)
a.nome = 'Maria'
console.log(a)
console.log(b)
