/*
Crie uma função chamada contarAte que receba um número n e exiba no console todos os números de 1 até n.
*/

function contarAte(n = 0) {
    if (typeof n !== 'number') throw new TypeError('O argumento precisa ser um número')
    if (n < 0) throw new RangeError('O número precisa ser maior que 0')

    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}
contarAte(10)