//* Promise.race()

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

// Promise da aula anterior
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('ERRO'))
                return // Força que pare de executar após encontrar um erro
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// Array de promises
const promises = [
    // 'Primeiro valor', // Valor comum - convertide em promise já resolvida -> entrega imediatamente
    esperaAi('Promise 1', rand(1, 5)), // Promise 
    esperaAi('Promise 2', rand(1, 5)), // Promise
    esperaAi('Promise 3', rand(1, 5)), // Promise
    esperaAi(10, rand(1, 5)), // Promise -> só cai no erro se ele for executada mais rápido que as demais
    // 'Outro valor' // Valor comum - convertide em promise já resolvida -> entrega imediatamente
]

Promise.race(promises) // Entrega apenas a primeira promessa que for resolvida
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })
