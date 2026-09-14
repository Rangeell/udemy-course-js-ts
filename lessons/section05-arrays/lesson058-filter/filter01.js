// Forma mais tradicional
// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor, indice, array) {
    if (valor > 10) return true
    return false
}

const filterNumbers = numbers.filter(callbackFilter)
console.log(filterNumbers)