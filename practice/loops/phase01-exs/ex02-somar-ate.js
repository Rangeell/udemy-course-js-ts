/*
Desafio 2 — Somar até N
    Crie uma função chamada somarAte que receba um número n e retorne a soma de todos os números de 1 até n.
*/

function somarAte(n) {
    if (typeof n !== 'number') throw new TypeError('O valor precisa ser um número!')
    if (n < 0) throw new RangeError('O número precisa ser maior que 0')
    if (!Number.isInteger(n)) throw new TypeError('O número precisa ser inteiro')

    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma
}
console.log(somarAte(10))