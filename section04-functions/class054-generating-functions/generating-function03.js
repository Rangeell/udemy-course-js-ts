// Iterando sobre a Função Geradora com While para criar um contador infinito

function* contador() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}
const g = contador()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)