// CHANGE VARIABLE NAME
const person = {
    name: 'Breno',
    surname: 'Rangel',
    age: '23',
    adress: {
        street: 'Av Brasil',
        number: 320
    }
}

console.log(person.name) // Abordagem tradicional

const {name: n = 'Não informado', surname, age} = person // Change variable name
console.log(n, surname, age)
console.log(person)
