// Usando uma função para executar outra função, recebendo ela como parâmetro
const souUmDado = function() {
    console.log('Sou um dado.')
}

function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo')
    funcao()
}
executaFuncao(souUmDado)

// Outro exemplo
setInterval(souUmDado, 1000)