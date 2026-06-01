/*
Escreva uma função que recebe um número e retorne o seguinte:
    - Número é divisível por 3 = Fizz
    - Número é divisível por 5 = Buzz
    - Número é divisível por 3 e 5 = Fizzbuzz
    - Número NÃO é divisível por 3 e 5 = Retorna o próprio número
    - Checar se o número é realmente um número
    - Use a função com número de 0 a 100
*/

function fizzBuzz(n) {
    if (typeof n !== 'number') return 'Número inválido'
    if (n < 0 || n > 100) return 'O número deve estar entre 0 e 100'

    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'

    return n
}

console.log(fizzBuzz(11))
