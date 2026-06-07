// MUDANDO NOMES DE VARIÁVEIS DE OBJETOS ANINHADOS
const person = {
    name: 'Breno',
    surname: 'Rangel',
    age: '23',
    adress: {
        street: 'Av Brasil',
        number: 320
    }
}

// Mudando o nome atribuindo fallback a variável
const {adress: {street: s = 'fallback', number}, adress} = person 


console.log(s, number, adress)
