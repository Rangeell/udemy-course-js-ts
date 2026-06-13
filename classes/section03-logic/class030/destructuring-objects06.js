// USANDO O OPERADOR REST
const person = {
    name: 'Breno',
    surname: 'Rangel',
    age: '23',
    adress: {
        street: 'Av Brasil',
        number: 320
    }
}

const {name, surname, ...rest} = person 

console.log(name, surname, rest)
