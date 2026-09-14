/*
- Retorne a soma do dobro de todos os pares
- Filtrar os pares
- Dobrar valores
- Reduzir (somar tudo)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const sumD = numeros.reduce((acc, val) => {
    const dobro = val * 2
    acc += dobro
    return acc
})
console.log(sumD)

const pares = numeros.filter(val => val % 2 === 0)
console.log(pares)

const dobra = pares.map(val => val * 2)
console.log(dobra)

const sum = dobra.reduce((acc, val) => {
    return acc += val
}, 0)
console.log(sum)