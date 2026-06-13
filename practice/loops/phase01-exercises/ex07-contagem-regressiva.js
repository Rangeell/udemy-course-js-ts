/*
O Enunciado
    Escreva um código em JavaScript que imprima no console os números de 10 a 1 (em ordem decrescente).
    Após imprimir o número 1, o código deve exibir a mensagem: "Decolagem autorizada! 🚀".
*/

function contagemRegressiva(n) {
    if (arguments.length < 1) return 'Valor não informado'
    if (typeof n !== 'number') throw new TypeError('O valor informado precisa ser um número!')
    if (n <= 0) throw new RangeError('O valor informado precisa ser maior que zero!')

    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
    console.log('Decolagem autorizada! 🚀')
}
contagemRegressiva(10)