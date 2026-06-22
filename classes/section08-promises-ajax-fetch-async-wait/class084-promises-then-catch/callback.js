//* Como o problema seria resolvido com as callback functions 

// Função que cria um tempo random -> para simular tempo indeterminado
function rand(min, max) {
    min *= 1000 // Para receber os segundos de cara
    max *= 1000 // Para receber os segundos de cara
    return Math.floor(Math.random() * (max - min) + min)
}

// Simulando algo que leva determinado tempo para ser realizado
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb() // Só executa se a callback for executada
    }, tempo)
}

esperaAi('Frase 1', rand(1, 3), function () {
    esperaAi('Frase 2', rand(1, 3), function () {
        esperaAi('Frase 3', rand(1, 3))
    })
})

