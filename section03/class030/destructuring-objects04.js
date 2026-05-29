// EXTRAINDO OBJETOS ANINHADOS
const person = {
    name: 'Breno',
    surname: 'Rangel',
    age: '23',
    adress: {
        street: 'Av Brasil',
        number: 320
    }
}

console.log(person.adress.street) // Abordagem tradicional

const {adress: {street, number}, adress} = person // Abordagem moderna
console.log(street, number, adress)
