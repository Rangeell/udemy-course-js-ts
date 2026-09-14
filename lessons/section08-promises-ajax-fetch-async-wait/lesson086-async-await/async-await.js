//* Async / Await

function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

// Simula requisões para BD ou para quando buscamos algum dado de um API
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('ERRO'))
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// A palavra ASYNC avisa ao JavaScript que haverá operações assíncronas aqui dentro
async function executa(params) {
    // A palavra AWAIT pausa a execução da função até que a Promise seja resolvida
    // Só podemos utilizar "await" dentro de uma função "async"
    // "await" possibilita que o código COMO SE FOSSE de forma síncrona
    // Código é pausado até que o valor seja retornado/resolvido ou rejeitado

    const fase1 = await esperaAi('Fase 1', rand()) // Guarda valor em uma variável, sem .then()
    console.log(fase1)

    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)

    console.log('Terminamos na fase:', fase3)
}
executa()