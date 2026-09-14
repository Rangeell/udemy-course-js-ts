// BASIC EXEMPLE
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
const {name, surname, age} = person // DESTRUCTURING ASSIGNMENT OBJECTS
console.log(name, surname, age)
console.log(person)
