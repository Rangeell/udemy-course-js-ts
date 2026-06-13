function criaMultiplicador(multiplicador) {
    return function (n) {
        return multiplicador * n
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(3))
console.log(quadruplica(4))