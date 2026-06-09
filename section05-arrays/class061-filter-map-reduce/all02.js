/*
- Retorne a soma do dobro de todos os pares
    - Filtrar os pares
    - Dobrar valores
    - Reduzir (somar tudo)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const sumD = numeros.reduce((ac, val) => {
    const dobro = val * 2
    ac += dobro
    return ac
})

const resultPipeLine = numeros
    .filter(val => val % 2 === 0)
    .map(val => val * 2)
    .reduce((ac, val) => ac += val, 0);
console.log(resultPipeLine)
// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 soma 