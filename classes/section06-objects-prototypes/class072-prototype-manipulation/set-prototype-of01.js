// Object.setPrototypeOf()
// Object.getPrototypeOf()

/*
Alterando o ponteiro de herença, definindo um novo pai para o objeto 
*/

// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype
}

// new Object -> Object.prototype
const objB = {
    chaveB: 'B',
    // __proto__: objA
}

// new Object -> Object.prototype
const objC = new Object
objC.chaveC = 'C'
// __proto__: objB

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(Object.getPrototypeOf(objB))
console.log(objB.chaveA)
console.log(objC.chaveB)
console.log(objC.chaveA)