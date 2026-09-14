const person = {
    name: 'Breno',
    surname: 'Rangel',
    age: '23',
}

console.log(person['name'])
console.log(person.name)

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}