// Escreva uma função que recebe 2 números e retornar o maior deles

function bigger(n1, n2) {
    const numbers = [n1, n2]
    const max = Math.max(...numbers)
    return console.log(max)
}
bigger(40, 20)