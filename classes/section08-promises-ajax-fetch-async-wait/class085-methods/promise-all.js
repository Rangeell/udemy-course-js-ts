//* promise.all

// Promise da aula anterior
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('ERRO'))
            return // Força que pare de executar ao encontrar um erro
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// Array de promises
const promises = [ 
    'Primeiro valor', // Valor comum - convertide em promise já resolvida
    esperaAi('Promise 1', 3000), // Promise 
    esperaAi('Promise 2', 500), // Promise
    esperaAi('Promise 3', 1000), // Promise
    esperaAi(10, 1000), // Promise -> simulando erro
    'Outro valor' // Valor comum - convertide em promise já resolvida
]

Promise.all(promises) // Resolve e entrega todos os valores (resolvidos ou não) de uma única vez
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })
