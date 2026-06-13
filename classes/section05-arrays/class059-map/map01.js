/*
Dobre os números
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobraNumeros = numeros.map(function (valor, indice, array) {
    return valor * 2
    // console.log(valor, indice, array)
})
console.log(dobraNumeros)