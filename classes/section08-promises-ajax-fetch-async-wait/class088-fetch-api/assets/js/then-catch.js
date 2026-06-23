//* Fetch API -> syntaxe sugar para XMLHttpRequest
// Modo com then / catch

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href')

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error(`Deu ruim -> ${response.statusText}: ${response.status}`)
            // Não esqueça do return
            return response.text() // Precisa converter o retorno do fetch para o formato desejado, mas retorna outra promise -> precisa de outro .then()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.error(e))  // Pega erro do throw new Error acima
}

function carregaResultado(response) {
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}
