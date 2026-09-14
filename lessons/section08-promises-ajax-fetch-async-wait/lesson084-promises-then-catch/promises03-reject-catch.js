//* Resolvendo o problema usando Promise -> resolve()/.then() e reject()/.catch()

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
        if (typeof msg !== 'string') reject(new Error('ERRO')) // Simulando possível erro -> cai no .cath()

        setTimeout(() => {
            resolve(msg) // Essa promessa vai ficar pendente até que chegue no resolve -> vai cair no .then()
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    // O then só será executado quando a promessa for resolvida
    // "resposta" é o argumento que vêm do parâmetro "msg" da função "esperaAi" acima
    .then(resposta => {
        console.log(resposta)
        // "Conexão com o BD" é a "resposta"
        return esperaAi('Buscando dados na BASE', rand(1, 3)) // Retorna outra promise de dentro desse .then()
    })
    .then(resposta => { // Captura o resolve da promise retornada no .then() anterior
        console.log(resposta)
        return esperaAi(123, rand(1, 3)) // Simulando erro
    })
    .then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibe dados na tela.')
    })
    .catch(error => { // Recebe o parâmetro do reject
        console.log(error)
    })

console.log('Isso aqui será exibido antes de qualquer promise.')
