function retornaFuncao() {
    const nome = 'Breno'
    return function () {
        return nome
    }
}

const funcao = retornaFuncao()
console.dir(funcao())