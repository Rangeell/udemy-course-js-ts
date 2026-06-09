/*
- Some todos os números (reduce)
- Retorne um array com os pares (filter)
- Retorne um array com o dobro dos valores (map)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

/*
let soma = 0
for (let v of numeros) {
    console.log(soma)
}
console.log(soma)
*/

const totalPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)
console.log(totalPares)

const total = numeros.reduce((acumulador, valor) => acumulador += valor)
console.log(total)

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(pares)

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobro)