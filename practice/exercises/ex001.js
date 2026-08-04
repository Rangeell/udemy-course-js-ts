const removeFromArray = function ([], n) {
    if (arguments.length < 2) throw new TypeError('Argumentos insuficientes para a função!')
    if (typeof n !== 'number') throw new TypeError('Segundo argumento inválido para a função!')
    if (!arguments[0] instanceof Array) throw new TypeError('Argumento inválido para a função!')

    return arguments[0].filter(v => v !== n)
}

console.log(removeFromArray(1))

