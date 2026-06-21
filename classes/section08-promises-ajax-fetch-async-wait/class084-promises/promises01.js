//* Simulando situação que leve um tempo para ser executada

// Função que cria um tempo random -> para simular tempo indeterminado
function rand(min, max) {
    min *= 1000 // Para receber os segundos de cara
    max *= 1000 // Para receber os segundos de cara
    return Math.floor(Math.random() * (max - min) + min)
}

// Simulando algo que leva determinado tempo para ser realizado
function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

esperaAi('Frase 1', rand(1, 3))
esperaAi('Frase 2', rand(1, 3))
esperaAi('Frase 3', rand(1, 3))
