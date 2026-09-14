//* Usando XMLHttpRequest -> o que vai fazer o AJAX
// Modo com then / catch

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() // Chamamos o construtor da função

        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText) // Guarda conteúdo retornado pelo servidor
            } else {
                reject(xhr.statusText) // Mostra conteúdo retornado pelo servidor
                //* xhr.status -> Mostraria o número do erro
            }
        })
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

    // Excluímos as funções de callback. Com promises, se fazem desnecessárias.
    const ObjectConfig = {
        method: 'GET',
        url: href
    }

    request(ObjectConfig)
    .then(response => { // Usamos then
        carregaResultado(response)
    }).catch(error => console.log(error))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}
