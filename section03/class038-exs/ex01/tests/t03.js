// Função que encontra o maior número dentro de um array

function bigger(numbers) {
    let bigger = 0
    for (let v of numbers) {
        if (bigger < v) {
            bigger = v
        }
    }
    return console.log(bigger)
}

const numbers = [900, 300, , 3000, 200, 1000]
bigger(numbers)
