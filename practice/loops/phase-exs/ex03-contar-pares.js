/*
Enunciado

- Crie uma função chamada contarPares que receba um número n e:
    - Valide se o argumento recebido é realmente um número;
    - Lance um erro caso o número seja negativo;
    - Exiba no console apenas os números pares de 1 até n;
    - Ao final, retorne a quantidade total de números pares encontrados.
*/

function contarPares(n) {
    if (typeof n !== 'number') throw new TypeError('O valor informado precisa ser um número!')
    if (n <= 0) throw new RangeError('O valor informado precisa maior que zero!')

    let totalNumbers = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) continue
        totalNumbers++
        console.log(i)
    }
    return totalNumbers
}
console.log(contarPares(10))