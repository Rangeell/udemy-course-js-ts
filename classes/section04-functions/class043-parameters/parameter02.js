/*
Funções com parâmetros
    Possuem variáveis específicas chamadas arguments, que sustenta todos os argumentos enviados
*/
function funcao(a, b, c) {
    let total = 0
    for (let v of arguments) {
        total += v
    }
    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7)

/*
O mesmo funciona para funcções que possuem mais parâmetros que do que argumentos que são passado
*/

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao(1, 2, 3, 4)
