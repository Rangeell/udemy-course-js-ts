/*
O Enunciado
    Um sensor meteorológico registra as temperaturas de uma região de hora em hora e armazena em um array. Porém, às vezes o sensor falha e registra o valor null ou undefined no meio dos dados.
    
    Crie uma função chamada analisarTemperaturas(registros) que receba esse array e calcule a menor e a maior temperatura válida encontrada.
    Regras da função:
        - Valide se o argumento recebido é um Array. Se estiver vazio ou não for array, lance um erro.
        - Ignore completamente qualquer valor que seja null, undefined ou que não seja do tipo number (use continue para pular).
        - Retorno: Um objeto contendo a menor e a maior temperatura:
        {
            menorTemperatura: -5,
            maiorTemperatura: 35
        }
*/

function analisarTemperaturas(registros) {
    if (!Array.isArray(registros) || registros.length === 0) throw new TypeError('O argumento precisa ser um array e não pode estar vazio.')

    let maior = -Infinity
    let menor = Number.MAX_VALUE
    let possuiDadoValido = false // Flag de segurança

    for (let v of registros) {
        if (typeof v !== 'number' || Number.isNaN(v)) continue

        possuiDadoValido = true

        if (menor > v) menor = v
        if (maior < v) maior = v
    }
    if (!possuiDadoValido) throw new Error('O array não contém nenhuma temperatura válida.')

    return {
        menorTemperatura: menor,
        maiorTemperatura: maior
    }
}
console.log(analisarTemperaturas([23, null, 35, 0, -2, undefined, 19, "erro", 42, 21]))
