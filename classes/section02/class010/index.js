// tipos de dados primitivos: string, number, undefined, null, boolean, symbol

const nome1 = 'Breno' // String
const nome2 = "Breno" // String
const nome3 = `Breno` // String

const num1 = 10 // Number
const num2 = 10.52 // Number

let nomeAluno // undefined = não aponta para local nenhum na memória

const sobrenomeAluno = null // Nule -> não aponta para local nenhum na memória

const boolean = true // Boolean -> true ou false (valores lógicos)

console.log(typeof sobrenomeAluno, sobrenomeAluno) // bug -> null aponta para Object

const a = [1, 2]
const b = a

console.log(a, b)
b.push(3)
console.log(a, b) // O valor de b aponta para o mesmo valor de a aponta para memória

let c = 2
let d = c
console.log(c, d) // 2, 2

d = 3
console.log(c, d) // 3, 2