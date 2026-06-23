//* Usando setTimeOut() para checar uma promise pendente (sem await) novamente

/*
* 3 ESTADOS DAS PROMISES
    1. Pending (Pendente) -> estado inicial, quando mandamos executar
    2. Fulfilled (Resolvida) -> Representa o sucesso da operação, quando o valor de retorno está disponível.
    3. Rejected (Rejeitada) -> Representa que ocorreu algum erro ou falha na operação.
*/

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
                reject('CAI NO ERRO') // Cai no catch()
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// A palavra ASYNC avisa ao JavaScript que haverá operações assíncronas aqui dentro
async function executa() {
    // A palavra AWAIT pausa a execução da função até que a Promise seja resolvida
    // Só podemos utilizar "await" dentro de uma função "async"
    // "await" possibilita que o código COMO SE FOSSE de forma síncrona
    // Código é pausado até que o valor seja retornado/resolvido ou rejeitado

    try {
        const fase1 = esperaAi('Fase 1', 1000) // Guarda valor em uma variável, sem .then()w
        console.log(fase1)

        setTimeout(function(){
            console.log('Essa promise estava pendente',fase1)
        },1100)

        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)
        
        console.log('Terminamos na fase:', fase3)

    } catch (e) { // Recebe o parâmetro do reject()
        console.error(e)
    }
}
executa()
