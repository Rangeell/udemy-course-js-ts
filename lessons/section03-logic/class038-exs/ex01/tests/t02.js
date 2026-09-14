// Somando valores dentro de um array

function sum(numbers) {
    let sum = 0
    for (let v of numbers) {
        sum = v + sum
    }

    return console.log(sum)
}

const numbers = [1, 2, 200]
sum(numbers)