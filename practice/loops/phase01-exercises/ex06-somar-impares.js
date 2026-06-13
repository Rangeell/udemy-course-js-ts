/*
Enunciado
    Crie uma função chamada somarAteParada que receba dois parâmetros: limite, numeroParada
    A função deve:
        - Validar se ambos os argumentos são números;
        - Lançar um erro caso algum deles seja menor ou igual a zero;
        - Percorrer todos os números de 1 até limite;
        - Ignorar os números pares usando continue;
        - Somar apenas os números ímpares;
        - Caso encontre o numeroParada, deve interromper imediatamente o loop usando break;
        - Retornar a soma obtida até aquele momento.
*/

function somarAteParada(limite, numeroParada) {
    if (arguments.length < 2) return 'Argumentos insufientes!'
    if (typeof limite !== 'number' || typeof numeroParada !== 'number') throw new TypeError('Os valores informados precisam ser números!')
    if (limite <= 0 || numeroParada <= 0) throw new RangeError('Os valores informados precisam ser maiores que zero!')

    let soma = 0
    for (let i = 1; i <= limite; i++) {
        if (i === numeroParada) break
        if (i % 2 === 0) continue
        soma += i
    }
    return soma
}
console.log(somarAteParada(10, 20))