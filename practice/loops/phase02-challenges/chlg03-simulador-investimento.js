/*
O Enunciado
    Você está criando uma ferramenta para um banco digital. Crie uma função chamada calcularTempoMeta(valorInicial, aporteMensal, taxaJurosMensal, valorMeta) que calcule quantos meses serão necessários para o cliente atingir sua meta financeira.

    Regras da função:
        - Valide se todos os quatro argumentos são números e se são maiores que zero. Caso contrário, lance um erro.
        - A cada mês (iteração do loop), o saldo do cliente deve:
            - Render os juros mensais (multiplicar o saldo atual por 1 + taxaJurosMensal).
            - Receber o aporteMensal (somar o valor que ele deposita todo mês).
            - O loop deve continuar rodando enquanto o saldo acumulado for menor que o valorMeta.
        - Retorno: A função deve retornar um objeto contendo o saldo final (arredondado para duas casas decimais) e o total de meses decorridos:
            {
                mesesNecessarios: 24,
                saldoFinal: 10500.42
            }
*/

formatMoney = (money) => money.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

function calcularTempoMeta(valorInicial, aporteMensal, taxaJurosMensal, valorMeta) {
    if (typeof valorInicial !== 'number' ||
        typeof aporteMensal !== 'number' ||
        typeof taxaJurosMensal !== 'number' ||
        typeof valorMeta !== 'number') throw new TypeError('Todos os valores informados precisam ser números!')

    if (valorInicial <= 0 ||
        aporteMensal <= 0 ||
        taxaJurosMensal <= 0 ||
        valorMeta <= 0
    ) throw new RangeError('Todos os valores informados precisam ser maiores que zero!')

    let saldoAcumulado = valorInicial
    let meses = 0
    while (saldoAcumulado < valorMeta) {
        saldoAcumulado *= (1 + taxaJurosMensal)
        saldoAcumulado += aporteMensal
        meses++
    }

    saldoAcumulado = formatMoney(saldoAcumulado)
    return {
        mesesNecessarios: meses,
        saldoFinal: saldoAcumulado
    }
}
console.log(calcularTempoMeta(1000, 200, 0.01, 5000))