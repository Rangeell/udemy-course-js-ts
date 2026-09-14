//* Usando XMLHttpRequest -> o que vai fazer o AJAX
// Modo antigo

const request = obj => {
    // Cria a instância do motor de requisições do navegador
    const xhr = new XMLHttpRequest() // Chamamos o construtor da função

    // Abre requisão
    xhr.open(obj.method, obj.url, true)

    // Envia requisão. Como é um métogo GET, enviamos valor null ou vazio
    xhr.send()

    // Escuta a mudança de estado da requisição
    /* 
        Qunado chegarmos aqui dentro, já vamos ter recebido a resposta do servidor. Vamos receber um código:
            1. Código HTTP de sucesso;
            2. Código HTTP de
    */
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) { // Vamos aceitar como uma requisão de sucesso
            obj.sucess(xhr.responseText) // Guarda conteúdo retornado pelo servidor
        } else {
            obj.error(xhr.statusText) // Mostra conteúdo retornado pelo servidor
            //* xhr.status -> Mostraria o número do erro
        }
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase() // Selecionamos a tag e convertemos para minúscula

    if (tag === 'a') {
        e.preventDefault() // Impede comportameto padrão do link -> levar para outra página
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href') // Retorna o href do link clicado

    const ObjectConfig = {
        method: 'GET', // obj.method da função request  acima
        url: href, // obj.url da função request acima
        
        sucess(response) { // objc.sucess da função request acima (addEventListenner)
            carregaResultado(response)
        },
        error(errorText) { // obj.error da função acima (addEventListenner)
            console.log(errorText)
        }
    }

    request(ObjectConfig)
}

function carregaResultado(response) {
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}
