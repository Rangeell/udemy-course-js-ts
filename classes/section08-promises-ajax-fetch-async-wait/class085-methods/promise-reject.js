//* Promise.reject()

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

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

// Simulando carregamento de uma página
function baixaPagina() {
    const emCach = true // Checa se está ou não em cache

    if (emCach) { // Se estiver em cache, não precisamos baixar
        return Promise.reject('Página em cache')
    } else { // Vai ter que baixar a página
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO', e))
