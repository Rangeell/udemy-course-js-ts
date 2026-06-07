// Escreva uma função que recebe 2 números e retornar o maior deles

function bigger(n1 = 0, n2 = 0) {
    const numbers = [n1, n2]
    let biggerNumber = 0
    for (let v of numbers) {
        if (biggerNumber < v) {
            biggerNumber = v
        }
    }
    return console.log(biggerNumber)
}
bigger(50, 90)