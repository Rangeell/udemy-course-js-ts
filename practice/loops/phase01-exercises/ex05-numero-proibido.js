/*
Enunciado
    Crie uma função chamada verificarNumeroProibido que receba dois parâmetros: limite, numeroProibido
    A função deve:
        - Validar se ambos os argumentos são números;
        - Lançar um erro caso algum deles seja menor ou igual a zero;
        - Percorrer todos os números de 1 até limite;
        - Exibir cada número encontrado no console;
        - Caso encontre o numeroProibido, deve:
        - Exibir a mensagem: Número proibido encontrado!
            Interromper imediatamente o loop usando break;
        - Ao final, retornar:
        - true, se o número proibido foi encontrado;
        - false, caso contrário.
*/

function verificarNumeroProibido(limite, numeroProibido) {
    if (arguments.length < 2) return 'Números não informados'
    if (typeof limite !== 'number' || typeof numeroProibido !== 'number') throw new TypeError('Os valores informados precisam ser números!')
    if (limite <= 0 || numeroProibido <= 0) throw new RangeError('Os números informados precisam ser maiores que zero.')

    let encontrado = false
    for (let i = 1; i <= limite; i++) {
        console.log(i)
        if (i === numeroProibido) {
            encontrado = true
            console.log('Número proíbido encontrado!')
            break
        }
    }
    return encontrado
}
console.log(verificarNumeroProibido(10, 5))