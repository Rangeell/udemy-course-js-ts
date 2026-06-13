/*
Funções sem parâmetros
    Possuem variáveis específicas chamadas arguments, que sustenta todos os argumentos enviados
*/
function funcao() {
    let total = 0
    for (let v of arguments) {
        total += v
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7)