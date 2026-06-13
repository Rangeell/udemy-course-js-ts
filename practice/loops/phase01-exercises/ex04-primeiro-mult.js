/*
Enunciado

- Crie uma função chamada encontrarPrimeiroMultiplo que receba dois parâmetros: limite e divisor
    A função deve:
        - Validar se ambos os argumentos são números;
        - Lançar um erro caso algum deles seja menor ou igual a zero;
        - Percorrer os números de 1 até limite;
        - Encontrar o primeiro número que seja múltiplo de divisor;
        - Exibir esse número no console;
        - Interromper imediatamente o loop usando break;
        - Retornar o número encontrado.
*/

function encontrarPrimeiroMultiplo(limite, divisor) {
    if (typeof limite !== 'number' || typeof divisor !== 'number') throw new TypeError('O valores informados precisam ser números!')
    if (limite <= 0 || divisor <= 0) throw new RangeError('Os números precisam ser maiores que zero!')

    let result = null
    if (limite < divisor) return null
    for (let i = 1; i <= limite; i++) {
        if (i % divisor === 0) {
            result = i
            break
        }
    }
    console.log(result)
    return result
}
console.log(encontrarPrimeiroMultiplo(20, 9))