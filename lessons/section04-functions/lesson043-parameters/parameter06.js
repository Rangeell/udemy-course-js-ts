/*
Usando o rest operator
*/

function conta(operador, acumulador, ...numeros) {
    for (let v of numeros) {
        switch (operador) {
            case '+': acumulador += v
                break
            case '-': acumulador -= v
                break
            case '/': acumulador /= v
                break
            case '*': acumulador *= v
                break
        }
    }
    console.log(acumulador)
}
// Com o rest operator, não precisamos mandar um array como argumento da função!
conta('+', 1, 20, 30, 40, 50) 