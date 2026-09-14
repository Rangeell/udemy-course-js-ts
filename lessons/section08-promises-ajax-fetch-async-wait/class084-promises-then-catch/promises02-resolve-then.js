//* Resolvendo o problema usando Promise -> resolve()/.then()

// Função que cria um tempo random -> para simular tempo indeterminado
function rand(min, max) {
    min *= 1000 // Para receber os segundos de cara
    max *= 1000 // Para receber os segundos de cara
    return Math.floor(Math.random() * (max - min) + min)
}

// Simulando algo que leva determinado tempo para ser realizado
function esperaAi(msg, tempo) {
    // Chamando o construtor da Promise
    return new Promise((resolve, reject) => { // Usando arrow function e parâmetros que são comumente utilizados
        setTimeout(() => {
            resolve(msg) // 
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => { // O then só será executado quando a promessa for resolvida
        console.log(resposta)
        return esperaAi('Buscando dados na BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibe dados na tela')
    });

console.log('Isso aqui será exibido antes de qualquer promise.') // Código fora do promise é executado normalmente, pois a promise ocorre em paralelo ao nosso código.
