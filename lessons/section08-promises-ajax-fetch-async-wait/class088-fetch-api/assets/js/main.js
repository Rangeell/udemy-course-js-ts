//* Fetch API -> syntaxe sugar para XMLHttpRequest
// Modo com async / await - try / catch

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    try {
        const response = await fetch(href) // Guarda retorno da fetch em uma variável, mas retorna outra promise
        const html = await response.text() // Convertemos o retorno (promise) do fetch e guardamos em outra variável

        if (response.status !== 200) throw new Error(`Deu ruim -> ${response.statusText}: ${response.status}`)

        carregaResultado(html)

    } catch (e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}
