// Forma mais moderna de escrever o código
// Retorne os números maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor) {
    return valor > 10
}

const filterNumbers = numbers.filter(callbackFilter)
console.log(filterNumbers)