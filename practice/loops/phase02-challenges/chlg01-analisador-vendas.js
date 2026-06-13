/*
Enuncidado
    Você está desenvolvendo o sistema de fechamento de caixa de uma loja. Crie uma função chamada analisarVendas(relatorio, meta) que receba:
        - relatorio: Um array de números (representando os valores de cada venda realizada no dia).
        - meta: Um número representando o valor total que a loja precisa atingir no dia.

    Regras da função:
        - Valide se relatorio é um Array e se meta é um número positivo maior que zero.
        - Percorra o array de vendas e vá somando o total faturado.
        - Se, em algum momento da leitura das vendas, a soma atingir ou ultrapassar a meta, pare de processar o restante das vendas imediatamente (a meta foi batida!).
        - Retorno: A função deve retornar um Objeto com o seguinte formato:
            {
                metaAtingida: true // ou false,
                totalFaturado: 1550, // valor somado até a parada ou até o fim do array
                vendasProcessadas: 4 // quantidade de vendas que foram lidas antes de parar/terminar
            }
*/

function analisarVendas(relatorio, meta) {
    if (!Array.isArray(relatorio)) throw new Error('O primeiro dado precisa ser uma lista de valores!')
    if (arguments.length < 2) throw new Error('Valores insuficientes para processar!')
    if (meta <= 0) throw new RangeError('O valor da meta deve ser maior que zero!')

    let acc = 0
    let metaAtingida = false
    let vendas = 0
    for (let v of relatorio) {
        acc += v
        vendas++

        if (acc >= meta) {
            metaAtingida = true
            break
        }
    }

    return {
        metaAtingida,
        totalFaturado: acc,
        vendasProcessadas: vendas
    }
}

console.log(analisarVendas([100, 200, 500, 400, 100], 700))
