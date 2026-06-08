// Exercício de teste para verificar as iterações do laço
// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const filterNumbers = numbers.filter(function (valor, indice, array) {
    console.log(valor, indice, array)
    return valor > 10
})
console.log(filterNumbers)