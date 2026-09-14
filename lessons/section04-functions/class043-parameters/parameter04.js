/*
Passando valores de fallback para funções
*/
function funcao(a = 0, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2,undefined, 20)