// Iterando sobre a Função Geradora com for of

function* geradora1() {
    // Código qualquer
    yield 'Valor 1.'
    // Código qualquer
    yield 'Valor 2.'
    // Código qualquer
    yield 'Valor 3.'
}
const g1 = geradora1()
for (let v of g1) {
    console.log(v)
}