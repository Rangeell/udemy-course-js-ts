/*Valores de referência são mutáveis - 
    array, object, function
Valores passados por referência (para o mesmo valor na memória)
*/
let a = [1, 2, 3]
let b = a 
let c = b
console.log(a, b) // b não é uma cópia independete. b Aponta para o mesmo lugar na memória de a

a.push(4)
console.log(a, b)
b.pop()
console.log(a, b)

console.log (c)