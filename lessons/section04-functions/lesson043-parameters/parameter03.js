/*
Funções que possuem menos argumentos que parâmetros retornam undefined nos argumentos faltantes;
*/
function funcao(a, b, c, d, e = 0, f = 0) {
    console.log(a, b, c, d, e, f)
}
funcao(1, 2, 3, 4)