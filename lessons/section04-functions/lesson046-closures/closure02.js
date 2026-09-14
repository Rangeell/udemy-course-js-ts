// Inserindo a variável anterior ao parâmetro

function retornaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Breno')
const funcao2 = retornaFuncao('Joao')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())